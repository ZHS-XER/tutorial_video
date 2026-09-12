// autoZoom.ts — Recordly「决策阶段」移植：交互列表 → 缩放区间 → 相机关键帧。
//
// 对应 Recordly 的 zoomSuggestionUtils（点击聚类）+ zoomRegionUtils（区间调度）
// + cursorFollowCamera（安全区跟随）。AGPL 合规：只移植参数与规则，代码为独立实现。
//
// 规则速查（30fps 帧换算）：
// - 聚类：相邻交互间隔 ≤75f（2500ms）并为一簇；打字等持续交互以区间参与，天然保簇。
// - 区间：首交互前 15f（pad 500ms）至末交互后 15f。
// - 簇焦点：取权重最高的交互（双击 1500 > 选字 1300 > 下拉 1200 > 输入框 1100 > 点击 900），
//   平权取最早；焦点按 1/(2z) 视野夹到页面合法范围。
// - 进场：区间开始前 10f（322ms）起步，46f（1522.6ms）；退场：区间结束前 9f（300ms）
//   起步，30f（1015.1ms），焦点冻结只收 z。
// - 短区间：进出场窗口冲突时取中点分割，时长自动压缩。
// - 连拍接力：相邻区间间隔 ≤40f（1350ms）不退场，36f（lead 200ms + 1000ms）平移衔接。
// - 安全区跟随：放大期间取景中央 50%（四边各留 25%）为安全区，光标在内相机静止；
//   越界轴的焦点直接更新为光标位置（阶跃目标，交给 ScreenStage 的弹簧层平滑）。
//
// 本文件保持纯函数、零依赖（可独立单测）；产出直接并入 Shot.camKeys。

export type CamKeyLike = { f: number; cx: number; cy: number; z: number };

export type InteractionKind = 'click' | 'dblclick' | 'text-select' | 'dropdown' | 'text-field' | 'type';

/** 单次交互：f 为发生帧；持续交互（打字/滚动）给 endF，聚类时以区间参与 */
export type Interaction = {
  f: number;
  endF?: number;
  cx: number;
  cy: number;
  kind?: InteractionKind;
};

export const INTERACTION_WEIGHT: Record<InteractionKind, number> = {
  dblclick: 1500,
  'text-select': 1300,
  dropdown: 1200,
  'text-field': 1100,
  type: 1100, // 打字视同输入框交互
  click: 900,
};

export const PLAN = {
  CLUSTER_GAP: 75, // 2500ms
  PAD: 15, // 500ms
  IN_LEAD: 10, // 322ms
  IN_DUR: 46, // 1522.6ms
  OUT_LEAD: 9, // 300ms
  OUT_DUR: 30, // 1015.1ms
  CONNECT_GAP: 40, // 1350ms
  PAN_LEAD: 6, // 200ms
  PAN_DUR: 30, // 1000ms
  Z_AUTO: 1.5,
  SAFE_ZONE_RATIO: 0.25,
} as const;

export type PlanOpts = {
  /** 页面 CSS px 尺寸（焦点 clamp 与安全区计算用） */
  page: { w: number; h: number };
  /**
   * z=1 时画布可见的页面跨度（页面 px）。卡片缩放模型下 = 画布尺寸/s0
   * （如 1920×1080 画布、窗口 1280 宽、页面 1920 宽 → {w:2880, h:1620}）。
   * 视野跨度 = view/z：跨度 ≥ 页面时不 clamp（整页可见，锚点任意合法）。
   * 缺省退化为 Recordly 原式（视口=页面，1/(2z)）。
   */
  view?: { w: number; h: number };
  /** 放大档位，默认 1.5（英雄特写可给 1.8） */
  z?: number;
  /** 退场回到的 z，默认取 base.z */
  zBase?: number;
  /** 光标位置查询（页面坐标）；提供且 follow!==false 时启用安全区跟随 */
  cursorAt?: (f: number) => { x: number; y: number };
  follow?: boolean;
  safeZoneRatio?: number;
};

export type Region = { start: number; end: number; cx: number; cy: number; z: number };

/** 视野半跨度（页面 px）：view 缺省时退化为 Recordly 原式（视口=页面） */
const halfSpan = (
  z: number,
  page: { w: number; h: number },
  view?: { w: number; h: number },
): { w: number; h: number } => ({
  w: (view?.w ?? page.w) / (2 * Math.max(1, z)),
  h: (view?.h ?? page.h) / (2 * Math.max(1, z)),
});

/** 焦点夹到合法范围：视野跨度 ≥ 页面时不 clamp（整页可见），否则视野不越出页面 */
export const clampFocus = (
  cx: number,
  cy: number,
  z: number,
  page: { w: number; h: number },
  view?: { w: number; h: number },
): { cx: number; cy: number } => {
  const hs = halfSpan(z, page, view);
  const clamp1 = (v: number, half: number, size: number) =>
    half * 2 >= size ? Math.min(Math.max(v, 0), size) : Math.min(Math.max(v, half), size - half);
  return { cx: clamp1(cx, hs.w, page.w), cy: clamp1(cy, hs.h, page.h) };
};

/** 安全区重定焦：光标越出中央安全区时，越界轴焦点更新为光标位置 */
export const recenterFocus = (
  focus: { cx: number; cy: number },
  cursor: { x: number; y: number },
  z: number,
  page: { w: number; h: number },
  ratio: number,
  view?: { w: number; h: number },
): { cx: number; cy: number } => {
  const hs = halfSpan(z, page, view);
  const halfW = hs.w;
  const halfH = hs.h;
  const insetX = 2 * halfW * ratio;
  const insetY = 2 * halfH * ratio;
  let cx = focus.cx;
  let cy = focus.cy;
  if (cursor.x < focus.cx - halfW + insetX || cursor.x > focus.cx + halfW - insetX) cx = cursor.x;
  if (cursor.y < focus.cy - halfH + insetY || cursor.y > focus.cy + halfH - insetY) cy = cursor.y;
  return clampFocus(cx, cy, z, page, view);
};

/** 交互聚类 → 缩放区间（决策阶段核心） */
export const clusterRegions = (
  interactions: Interaction[],
  z: number,
  page: { w: number; h: number },
  view?: { w: number; h: number },
): Region[] => {
  if (interactions.length === 0) return [];
  const evts = interactions
    .map((i) => ({ ...i, endF: i.endF ?? i.f, kind: i.kind ?? ('click' as InteractionKind) }))
    .sort((a, b) => a.f - b.f);
  const clusters: (typeof evts)[] = [];
  let cur: typeof evts = [evts[0]];
  let curEnd = evts[0].endF;
  for (let i = 1; i < evts.length; i++) {
    if (evts[i].f - curEnd <= PLAN.CLUSTER_GAP) {
      cur.push(evts[i]);
      curEnd = Math.max(curEnd, evts[i].endF);
    } else {
      clusters.push(cur);
      cur = [evts[i]];
      curEnd = evts[i].endF;
    }
  }
  clusters.push(cur);
  return clusters.map((c) => {
    let best = c[0];
    for (const e of c) if (INTERACTION_WEIGHT[e.kind] > INTERACTION_WEIGHT[best.kind]) best = e;
    const focus = clampFocus(best.cx, best.cy, z, page, view);
    const end = c.reduce((m, e) => Math.max(m, e.endF), c[0].endF);
    return { start: c[0].f - PLAN.PAD, end: end + PLAN.PAD, cx: focus.cx, cy: focus.cy, z };
  });
};

/**
 * 区间 → 相机关键帧（调度阶段）。regions 需按 start 升序且互不重叠——
 * 自动聚类的区间天然满足；手动调整的区间（如 Recordly 编辑器里拖出的）也可直接传入，
 * 相邻间隔 ≤CONNECT_GAP 时自动平移接力。
 */
export const regionsToKeys = (
  regions: Region[],
  base: { cx: number; cy: number; z: number },
  opts: PlanOpts,
): CamKeyLike[] => {
  const zBase = opts.zBase ?? base.z;
  const ratio = opts.safeZoneRatio ?? PLAN.SAFE_ZONE_RATIO;
  const follow = opts.follow !== false && !!opts.cursorAt;
  const keys: CamKeyLike[] = [];
  const push = (k: CamKeyLike) => {
    const last = keys[keys.length - 1];
    if (!last || k.f > last.f) keys.push(k);
  };

  let state = { ...base };
  for (let i = 0; i < regions.length; i++) {
    const r = regions[i];
    const prevR = regions[i - 1];
    const connectedFromPrev = i > 0 && r.start - prevR.end <= PLAN.CONNECT_GAP;
    let fullFrom: number;

    if (!connectedFromPrev) {
      // 进场：区间前 IN_LEAD 起步
      const inStart = r.start - PLAN.IN_LEAD;
      let inEnd = inStart + PLAN.IN_DUR;
      if (r.end - PLAN.OUT_LEAD < inEnd) {
        // 短区间：进出场窗口冲突取中点（后面的 outStart 会 clamp 到 fullFrom）
        inEnd = Math.round((inStart + r.end - PLAN.OUT_LEAD + PLAN.OUT_DUR) / 2);
      }
      push({ f: inStart, ...state }); // 段落桩：起步前保持
      push({ f: inEnd, cx: r.cx, cy: r.cy, z: r.z });
      fullFrom = inEnd;
    } else {
      // 连拍接力：保持放大，从上一区间末平移到本区间焦点
      push({ f: prevR.end, ...state });
      const panEnd = prevR.end + PLAN.PAN_LEAD + PLAN.PAN_DUR;
      push({ f: panEnd, cx: r.cx, cy: r.cy, z: r.z });
      fullFrom = panEnd;
    }
    let focus = { cx: r.cx, cy: r.cy };

    // 安全区跟随：全放大期间光标越界即更新目标焦点（阶跃，弹簧平滑）
    const outStart = Math.max(r.end - PLAN.OUT_LEAD, fullFrom);
    if (follow && opts.cursorAt) {
      for (let f = fullFrom + 1; f <= outStart; f++) {
        const next = recenterFocus(focus, opts.cursorAt(f), r.z, opts.page, ratio, opts.view);
        if (next.cx !== focus.cx || next.cy !== focus.cy) {
          push({ f, cx: next.cx, cy: next.cy, z: r.z });
          focus = next;
        }
      }
    }

    const nextConnected = i < regions.length - 1 && regions[i + 1].start - r.end <= PLAN.CONNECT_GAP;
    if (!nextConnected) {
      // 退场：焦点冻结，只收 z
      push({ f: outStart, cx: focus.cx, cy: focus.cy, z: r.z });
      push({ f: outStart + PLAN.OUT_DUR, cx: focus.cx, cy: focus.cy, z: zBase });
      state = { cx: focus.cx, cy: focus.cy, z: zBase };
    } else {
      state = { cx: focus.cx, cy: focus.cy, z: r.z };
    }
  }
  return keys;
};

/** 交互 → 相机关键帧（决策 + 调度一步到位）。base 为镜头初始相机状态。 */
export const planZooms = (
  interactions: Interaction[],
  base: { cx: number; cy: number; z: number },
  opts: PlanOpts,
): CamKeyLike[] =>
  regionsToKeys(clusterRegions(interactions, opts.z ?? PLAN.Z_AUTO, opts.page, opts.view), base, opts);
