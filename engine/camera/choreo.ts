import { type Aim } from '@engine/camera/camera';
import { type CamKey, type CamState } from '@engine/camera/camera';
import { type CursorKey, type CursorType } from '@engine/cursor/Cursor';
import { type Cut } from '@engine/stage/ScreenStage';
import { type DriveFn } from '@engine/stage/HtmlSnap';
import { planZooms, type Interaction, type InteractionKind, type PlanOpts } from '@engine/camera/autoZoom';
import { keyframes } from '@engine/motion/motion';
import { E } from '@engine/tokens';

// choreo.ts — 镜头编排：把"光标移动→点击→切状态→相机推近"写成声明式脚本。
// 帧号均为场景本地帧。产出直接喂给 ScreenStage。

// Recordly 自动运镜语法（源自其运镜机制分析，30fps 帧换算）。
// 这些是第一层目标关键帧的时值；实际画面还会经 ScreenStage 的弹簧层追赶，
// 观感上比关键帧本身更柔、更有惯性。
export const REC = {
  /** 进场 1522.6ms：镜头先于事件的预备动作 */
  IN_DUR: 46,
  /** 进场起步相对交互帧的提前量：区间 pad 500ms + 提前起步 322ms ≈ 822ms */
  IN_LEAD: 25,
  /** 退场起步：末次交互后 ~200ms（区间 pad 500ms − 提前起步 300ms） */
  OUT_START: 6,
  /** 退场 1015.1ms */
  OUT_DUR: 30,
  /** 相邻缩放间隔 ≤1350ms（40f）时不退场，用平移接力（panTo）衔接 */
  CONNECT_GAP: 40,
  /** 接力平移 1000ms */
  PAN_DUR: 30,
  /** 自动放大默认档（六档 1.25/1.5/1.8/2.2/3.5/5.0 的第二档） */
  Z_AUTO: 1.5,
  /** 手动放大默认档 */
  Z_MANUAL: 1.8,
  Z_LEVELS: [1.25, 1.5, 1.8, 2.2, 3.5, 5.0],
} as const;

export class Shot {
  cuts: Cut[] = [];
  camKeys: CamKey[] = [];
  curKeys: CursorKey[] = [];
  clicks: number[] = [];
  curTypes: Array<{ f: number; type: CursorType }> = [];
  interactions: Interaction[] = [];
  private lastCur: { x: number; y: number } | null = null;

  constructor(slot: string, cam0: CamState, opts: { patchCss?: string; drive?: DriveFn } = {}) {
    this.cuts.push({ from: 0, slot, patchCss: opts.patchCss, drive: opts.drive });
    this.camKeys.push({ f: 0, ...cam0 });
  }

  /** 硬切到新素材状态 */
  cut(f: number, slot: string, opts: { patchCss?: string; drive?: DriveFn } = {}) {
    this.cuts.push({ from: f, slot, patchCss: opts.patchCss, drive: opts.drive });
    return this;
  }

  /** 相机关键帧（到 f 帧时到达该状态） */
  cam(f: number, state: CamState) {
    this.camKeys.push({ f, ...state });
    return this;
  }

  /** 相机：f 帧时保持当前值（打段落桩，避免被后续 key 提前拉动）。
   * f 不晚于最后一个 key 时跳过，保证 key 序列始终有序。 */
  camHold(f: number) {
    const last = this.camKeys[this.camKeys.length - 1];
    if (f <= last.f) return this;
    this.camKeys.push({ f, cx: last.cx, cy: last.cy, z: last.z });
    return this;
  }

  /** Recordly 推近：绕交互帧提前 IN_LEAD 起步、IN_DUR 帧到位的预备式 zoom in。
   * eventF 是交互（点击）帧；镜头在交互前就开始动、交互后缓收落定。 */
  zoomIn(eventF: number, aim: Aim | { cx: number; cy: number }, z: number = REC.Z_AUTO) {
    this.camHold(eventF - REC.IN_LEAD);
    this.camKeys.push({ f: eventF - REC.IN_LEAD + REC.IN_DUR, cx: aim.cx, cy: aim.cy, z });
    return this;
  }

  /** Recordly 退场：焦点冻结在原地，只收缩放（避免缩小与追踪叠加的漂移感）。
   * lastF 是本段最后一次交互的帧号。 */
  zoomOut(lastF: number, z = 1) {
    const last = this.camKeys[this.camKeys.length - 1];
    this.camHold(lastF + REC.OUT_START);
    this.camKeys.push({ f: lastF + REC.OUT_START + REC.OUT_DUR, cx: last.cx, cy: last.cy, z });
    return this;
  }

  /** 连拍平移接力：保持当前放大，dur 帧滑到下一焦点。
   * 相邻交互间隔 ≤REC.CONNECT_GAP 时用它代替 zoomOut+zoomIn。 */
  panTo(f: number, aim: Aim | { cx: number; cy: number }, dur: number = REC.PAN_DUR) {
    const last = this.camKeys[this.camKeys.length - 1];
    this.camHold(f - dur);
    this.camKeys.push({ f, cx: aim.cx, cy: aim.cy, z: last.z });
    return this;
  }

  /** 光标路径点：f 帧到达 aim（可加偏移） */
  cur(f: number, aim: Aim | { cx: number; cy: number }, dx = 0, dy = 0) {
    const x = aim.cx + dx;
    const y = aim.cy + dy;
    this.curKeys.push({ f, x, y });
    this.lastCur = { x, y };
    return this;
  }

  /**
   * 干净利落的移动（2026-09-12 教程调性）：光标在 f−dur 之前原地不动，dur 帧内直达 aim。
   * 用它代替"cur(很早) → cur(很晚)"的长区间插值——那种写法会让光标在整段台词里缓慢漂移。
   * dur 缺省按距离取 12–24 帧（约 60px/帧）；已有 key 晚于 f−dur 时不补停顿桩，保证 key 有序。
   */
  go(f: number, aim: Aim | { cx: number; cy: number }, dur?: number, dx = 0, dy = 0) {
    const x = aim.cx + dx, y = aim.cy + dy;
    const lastF = this.curKeys.length ? this.curKeys[this.curKeys.length - 1].f : -Infinity;
    const d = dur ?? (this.lastCur ? Math.max(12, Math.min(24, Math.round(Math.hypot(x - this.lastCur.x, y - this.lastCur.y) / 60) + 8)) : 16);
    if (this.lastCur && f - d > lastF) this.curKeys.push({ f: f - d, ...this.lastCur });
    return this.cur(Math.max(f, lastF + 1), aim, dx, dy);
  }

  /** 光标：f 帧保持原地（停顿桩） */
  curHold(f: number) {
    if (this.lastCur) this.curKeys.push({ f, ...this.lastCur });
    return this;
  }

  /** 在当前光标位置点击；可选延迟 cutDelay 帧后切素材（模拟响应）。
   * kind 供 planZooms 权重选焦（默认 click 900；输入框聚焦点击给 'text-field'，
   * 下拉给 'dropdown'）。 */
  click(
    f: number,
    opts: { cut?: string; cutDelay?: number; patchCss?: string; drive?: DriveFn; kind?: InteractionKind } = {},
  ) {
    this.clicks.push(f);
    this.curHold(f);
    if (this.lastCur) {
      this.interactions.push({ f, cx: this.lastCur.x, cy: this.lastCur.y, kind: opts.kind ?? 'click' });
    }
    if (opts.cut) this.cut(f + (opts.cutDelay ?? 5), opts.cut, { patchCss: opts.patchCss, drive: opts.drive });
    return this;
  }

  /** 声明一次非点击交互（打字/滚动/选字等），供 planZooms 决策。
   * 持续动作给 endF——聚类时以区间参与，天然把簇撑到动作结束不提前收镜。 */
  interact(f: number, aim: Aim | { cx: number; cy: number }, kind: InteractionKind = 'type', endF?: number) {
    this.interactions.push({ f, endF, cx: aim.cx, cy: aim.cy, kind });
    return this;
  }

  /** 光标形态：f 帧起切换 arrow/text（输入框打字段给 'text'） */
  curType(f: number, type: CursorType) {
    this.curTypes.push({ f, type });
    return this;
  }

  /**
   * Recordly 自动运镜决策：把已声明的 click/interact 聚类成缩放区间，自动生成
   * 全部相机关键帧（预备推近/安全区光标跟随/连拍接力/焦点冻结退场），
   * 替换现有 camKeys（保留 cam0 为基态）。在所有交互与光标路径声明之后调用；
   * 之后仍可用 .cam/.camHold 追加手动覆盖。
   */
  planZooms(opts: Omit<PlanOpts, 'cursorAt'> & { cursorAt?: PlanOpts['cursorAt'] }) {
    const base = this.camKeys[0];
    const cursorAt =
      opts.cursorAt ??
      (this.curKeys.length > 0
        ? (f: number) => keyframes(this.curKeys, f, E.glide)
        : undefined);
    const keys = planZooms(this.interactions, { cx: base.cx, cy: base.cy, z: base.z }, { ...opts, cursorAt });
    this.camKeys = [{ f: base.f, cx: base.cx, cy: base.cy, z: base.z }, ...keys.filter((k) => k.f > base.f)];
    return this;
  }
}

/** 常用相机位：整页首屏 overview（1920 宽页面在任意 stage 下都成立） */
export const OVERVIEW: CamState = { cx: 960, cy: 512, z: 1.0 };
export const overviewAt = (z: number): CamState => ({ cx: 960, cy: 512, z });

// —— 场景边界接力（杜绝跳变/回正漂移）——
// Recordly 语义：退场焦点冻结、收回后镜头就地停住；下一次推近从停住处出发。
// 因此下一镜头的 cam0 直接取上一镜头的末位相机状态，光标首个 waypoint 取上一
// 镜头的光标落点——相机零跳变、光标全片物理连续。禁止在退场后追加"回正" key。

/** 上一镜头的末位相机状态（在其 planZooms/手排全部完成后调用） */
export const endCam = (s: Shot): CamState => {
  const k = s.camKeys[s.camKeys.length - 1];
  return { cx: k.cx, cy: k.cy, z: k.z };
};

/** 上一镜头的光标落点（供下一镜头 .cur(0, endCur(prev)) 起步） */
export const endCur = (s: Shot): { cx: number; cy: number } => {
  const k = s.curKeys[s.curKeys.length - 1];
  return { cx: k.x, cy: k.y };
};
