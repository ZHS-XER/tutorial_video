// drivesFlow.ts — React Flow 画布快照的通用 DOM 驱动器（YouArt Workflow）。
// 全部幂等、帧号纯函数、seek 安全。坐标约定：flow 坐标 = 页面坐标经 viewport 逆变换。
import { type DriveFn } from '@engine/stage/HtmlSnap';

const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);
export const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - clamp01(t), 3);

export type Viewport = { tx: number; ty: number; s: number };
export const parseViewport = (tf: string): Viewport => {
  const m = /translate\(\s*(-?[\d.e-]+)px\s*,\s*(-?[\d.e-]+)px\s*\)\s*scale\(\s*(-?[\d.e-]+)\s*\)/.exec(tf);
  return m ? { tx: Number(m[1]), ty: Number(m[2]), s: Number(m[3]) } : { tx: 0, ty: 0, s: 1 };
};
export const viewportCss = (v: Viewport) => `translate(${v.tx.toFixed(2)}px, ${v.ty.toFixed(2)}px) scale(${v.s.toFixed(4)})`;
export const parseTranslate = (tf: string): [number, number] => {
  const m = /translate\(\s*(-?[\d.]+)px\s*,\s*(-?[\d.]+)px\s*\)/.exec(tf);
  return m ? [Number(m[1]), Number(m[2])] : [0, 0];
};

/** 页面坐标 → flow 坐标（用快照里 viewport 的当前值） */
const pageToFlow = (doc: Document, x: number, y: number): [number, number] => {
  const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
  const v = parseViewport(vp?.style.transform || '');
  return [(x - v.tx) / v.s, (y - v.ty) / v.s];
};

/**
 * viewport 插值：从 from 变换到 to 变换（Focus view / Fit view 的过程复刻）。
 * 通常挂在"变化后"的快照上：startF 之前保持 from，endF 后恢复快照自身的 to。
 * 缩放按对数插值，平移按线性——观感接近 React Flow 自带的 fitView 动画。
 */
export const viewportLerp =
  (from: string, to: string, startF: number, endF: number, ease = easeInOutCubic): DriveFn =>
  (doc, f) => {
    const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
    if (!vp) return;
    const a = parseViewport(from);
    const b = parseViewport(to);
    const t = ease(clamp01((f - startF) / Math.max(1, endF - startF)));
    const s = Math.exp(Math.log(a.s) + (Math.log(b.s) - Math.log(a.s)) * t);
    const css = viewportCss({ tx: a.tx + (b.tx - a.tx) * t, ty: a.ty + (b.ty - a.ty) * t, s });
    if (vp.style.transform !== css) vp.style.transform = css;
  };

export type NodeMove = { id: string; from: [number, number]; to: [number, number] };

/** React Flow 默认贝塞尔连线（source 在右、target 在左） */
const bezierPath = (sx: number, sy: number, tx: number, ty: number) => {
  const dist = Math.max(40, Math.abs(tx - sx) * 0.5);
  return `M${sx.toFixed(1)},${sy.toFixed(1)} C${(sx + dist).toFixed(1)},${sy.toFixed(1)} ${(tx - dist).toFixed(1)},${ty.toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)}`;
};

/** 连线端点：某节点某 handle 在 flow 坐标里的中心（按节点当前 transform + handle 在节点内偏移） */
const handleFlowCenter = (doc: Document, nodeEl: HTMLElement, handleId: string | null): [number, number] | null => {
  const h = handleId ? nodeEl.querySelector(`.react-flow__handle[data-handleid="${handleId}"]`) : null;
  if (!h) return null;
  const nr = nodeEl.getBoundingClientRect();
  const hr = h.getBoundingClientRect();
  const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
  const s = parseViewport(vp?.style.transform || '').s || 1;
  const [nx, ny] = parseTranslate(nodeEl.style.transform);
  return [nx + (hr.x + hr.width / 2 - nr.x) / s, ny + (hr.y + hr.height / 2 - nr.y) / s];
};

/**
 * 节点位移插值（Auto Layout 过程复刻）：每个节点从 from 滑到 to，连线按端点实时重算贝塞尔。
 * 挂在"排版后"的快照上（to = 快照里的真值）。边 id 形如 rf__edge-<src>-<srcHandle>_<tgt>-<tgtHandle>。
 */
export const nodesLerp =
  (moves: NodeMove[], startF: number, endF: number, ease = easeInOutCubic): DriveFn =>
  (doc, f) => {
    const t = ease(clamp01((f - startF) / Math.max(1, endF - startF)));
    for (const mv of moves) {
      const n = doc.querySelector(`.react-flow__node[data-id="${mv.id}"]`) as HTMLElement | null;
      if (!n) continue;
      const x = mv.from[0] + (mv.to[0] - mv.from[0]) * t;
      const y = mv.from[1] + (mv.to[1] - mv.from[1]) * t;
      const tf = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      if (n.style.transform !== tf) n.style.transform = tf;
    }
    // 连线跟随
    for (const e of Array.from(doc.querySelectorAll('.react-flow__edge'))) {
      const id = e.getAttribute('data-id') || e.getAttribute('data-testid') || '';
      const m = /^rf__edge-(.+?)-(edge-out)_(.+?)-(edge-in-.+)$/.exec(id);
      if (!m) continue;
      const src = doc.querySelector(`.react-flow__node[data-id="${m[1]}"]`) as HTMLElement | null;
      const tgt = doc.querySelector(`.react-flow__node[data-id="${m[3]}"]`) as HTMLElement | null;
      if (!src || !tgt) continue;
      const a = handleFlowCenter(doc, src, m[2]);
      const b = handleFlowCenter(doc, tgt, m[4]);
      if (!a || !b) continue;
      const d = bezierPath(a[0], a[1], b[0], b[1]);
      for (const p of Array.from(e.querySelectorAll('path'))) if (p.getAttribute('d') !== d) p.setAttribute('d', d);
    }
  };

/**
 * 连线生长（拖出连线的过程复刻）：从 source handle 到光标位置画一条临时贝塞尔线，
 * 光标位置由 cursorAt(f) 给（页面坐标，含弹簧平滑），与 <Cursor> 零滞后。
 * startF 前不画；endF 后移除（此时应已切到含真实连线的快照）。
 */
export const edgeDraw =
  (sourceNodeId: string, sourceHandle: string, startF: number, endF: number, cursorAt: (f: number) => [number, number], color = 'oklch(0.371 0 0)'): DriveFn =>
  (doc, f) => {
    let svg = doc.querySelector('svg[data-edge-draw]') as SVGSVGElement | null;
    const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
    if (!vp) return;
    if (!svg) {
      svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('data-edge-draw', '1');
      svg.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;overflow:visible;pointer-events:none;z-index:1000';
      const p = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', color);
      p.setAttribute('stroke-width', '2');
      svg.appendChild(p);
      vp.appendChild(svg);
    }
    const path = svg.querySelector('path')!;
    if (f < startF || f > endF) {
      if (svg.style.display !== 'none') svg.style.display = 'none';
      return;
    }
    if (svg.style.display !== '') svg.style.display = '';
    const src = doc.querySelector(`.react-flow__node[data-id="${sourceNodeId}"]`) as HTMLElement | null;
    if (!src) return;
    const a = handleFlowCenter(doc, src, sourceHandle);
    if (!a) return;
    const [cx, cy] = cursorAt(f);
    const [bx, by] = pageToFlow(doc, cx, cy);
    const d = bezierPath(a[0], a[1], bx, by);
    if (path.getAttribute('d') !== d) path.setAttribute('d', d);
  };

export type Chip = { nodeId: string; handleId: string; text: string; color: string; side?: 'left' | 'right' };

/** 接口颜色标签：在指定 handle 旁注入小胶囊（flow 坐标定位，随 viewport 缩放），错峰淡入 */
export const handleChips =
  (chips: Chip[], startF: number, stagger = 6, holdUntil = Infinity): DriveFn =>
  (doc, f) => {
    const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
    if (!vp) return;
    chips.forEach((c, i) => {
      const key = `${c.nodeId}__${c.handleId}`;
      let el = vp.querySelector(`[data-chip="${key}"]`) as HTMLElement | null;
      if (!el) {
        el = doc.createElement('div');
        el.setAttribute('data-chip', key);
        el.textContent = c.text;
        el.style.cssText = `position:absolute;z-index:1001;pointer-events:none;font:600 12px/1 Inter,system-ui,sans-serif;letter-spacing:.02em;color:#0a0a0a;background:${c.color};padding:5px 8px;border-radius:999px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.45);transform-origin:${c.side === 'right' ? 'left' : 'right'} center`;
        vp.appendChild(el);
      }
      const n = doc.querySelector(`.react-flow__node[data-id="${c.nodeId}"]`) as HTMLElement | null;
      const p = n ? handleFlowCenter(doc, n, c.handleId) : null;
      const t0 = startF + i * stagger;
      const tIn = easeOutCubic((f - t0) / 8);
      const tOut = f > holdUntil ? easeOutCubic((f - holdUntil) / 8) : 0;
      const op = f < t0 ? 0 : Math.max(0, Math.min(1, tIn)) * (1 - Math.max(0, Math.min(1, tOut)));
      if (!p || op <= 0) { if (el.style.display !== 'none') el.style.display = 'none'; return; }
      if (el.style.display !== '') el.style.display = '';
      const w = el.offsetWidth || 60;
      const x = c.side === 'right' ? p[0] + 14 : p[0] - 14 - w;
      const y = p[1] - 11;
      el.style.left = `${x.toFixed(1)}px`;
      el.style.top = `${y.toFixed(1)}px`;
      el.style.opacity = String(op);
      el.style.transform = `scale(${(0.85 + 0.15 * op).toFixed(3)})`;
    });
  };

/**
 * 面板缩略图拖拽克隆：把某元素（如素材缩略图/菜单结果行）克隆到 body 上跟随光标（页面坐标），
 * startF 起显示；用于"从面板拖到画布"的过程，落点帧切到含新节点的快照。
 */
export const dragGhost =
  (selector: string, startF: number, endF: number, cursorAt: (f: number) => [number, number], grabOffset: [number, number] = [-40, -30], opacity = 0.9, extraCss = ''): DriveFn =>
  (doc, f) => {
    const src = doc.querySelector(selector) as HTMLElement | null;
    let ghost = doc.querySelector('[data-drag-ghost]') as HTMLElement | null;
    if (!ghost) {
      if (!src) return;
      ghost = src.cloneNode(true) as HTMLElement;
      ghost.setAttribute('data-drag-ghost', '1');
      const r = src.getBoundingClientRect();
      ghost.style.cssText = `position:fixed;left:0;top:0;width:${r.width}px;height:${r.height}px;margin:0;z-index:99999;pointer-events:none;border-radius:10px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.55);opacity:${opacity};${extraCss}`;
      doc.body.appendChild(ghost);
    }
    if (f < startF || f > endF) { if (ghost.style.display !== 'none') ghost.style.display = 'none'; return; }
    if (ghost.style.display !== '') ghost.style.display = '';
    const [cx, cy] = cursorAt(f);
    const tf = `translate(${(cx + grabOffset[0]).toFixed(1)}px, ${(cy + grabOffset[1]).toFixed(1)}px)`;
    if (ghost.style.transform !== tf) ghost.style.transform = tf;
  };

/** 隐藏元素（如冻结的悬浮提示）：patchCss 之外的逐帧保险 */
export const hideAll =
  (selector: string): DriveFn =>
  (doc) => {
    for (const el of Array.from(doc.querySelectorAll(selector)) as HTMLElement[]) if (el.style.display !== 'none') el.style.display = 'none';
  };

/**
 * 框选矩形（Shift+拖动多选的过程复刻）：在 .react-flow__pane 上画一个选框，
 * 从 anchor（页面坐标）到光标当前位置；endF 后移除（此时切到含选中态的快照）。
 */
export const marqueeBox =
  (anchor: [number, number], startF: number, endF: number, cursorAt: (f: number) => [number, number], color = 'rgba(96,165,250,'): DriveFn =>
  (doc, f) => {
    const pane = (doc.querySelector('.react-flow__pane') as HTMLElement | null) || doc.body;
    let box = doc.querySelector('[data-marquee]') as HTMLElement | null;
    if (!box) {
      box = doc.createElement('div');
      box.setAttribute('data-marquee', '1');
      box.style.cssText = `position:absolute;z-index:1002;pointer-events:none;border:1px solid ${color}0.9);background:${color}0.12);border-radius:2px`;
      pane.appendChild(box);
    }
    if (f < startF || f > endF) { if (box.style.display !== 'none') box.style.display = 'none'; return; }
    if (box.style.display !== '') box.style.display = '';
    const [cx, cy] = cursorAt(f);
    const pr = pane.getBoundingClientRect();
    const x0 = Math.min(anchor[0], cx) - pr.x, y0 = Math.min(anchor[1], cy) - pr.y;
    const w = Math.abs(cx - anchor[0]), h = Math.abs(cy - anchor[1]);
    box.style.left = `${x0.toFixed(1)}px`; box.style.top = `${y0.toFixed(1)}px`;
    box.style.width = `${w.toFixed(1)}px`; box.style.height = `${h.toFixed(1)}px`;
  };

/**
 * 节点跟手移动（拖动节点的过程复刻）：节点本体从 startF 起按光标位移平移（flow 坐标 = 页面位移 / scale），
 * 连线端点实时重算。endF 后保持终点（应切到"移动后"快照）。
 */
export const nodeFollow =
  (nodeId: string, startF: number, endF: number, grab: [number, number], cursorAt: (f: number) => [number, number]): DriveFn =>
  (doc, f) => {
    const n = doc.querySelector(`.react-flow__node[data-id="${nodeId}"]`) as HTMLElement | null;
    if (!n) return;
    if (!n.dataset.origTf) n.dataset.origTf = n.style.transform;
    const [x0, y0] = parseTranslate(n.dataset.origTf);
    const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
    const s = parseViewport(vp?.style.transform || '').s || 1;
    const ff = Math.min(Math.max(f, startF), endF);
    const [cx, cy] = ff <= startF ? grab : cursorAt(ff);
    const tf = `translate(${(x0 + (cx - grab[0]) / s).toFixed(2)}px, ${(y0 + (cy - grab[1]) / s).toFixed(2)}px)`;
    if (n.style.transform !== tf) n.style.transform = tf;
    // 连线跟随（复用 nodesLerp 的端点重算）
    nodesLerp([], 0, 1)(doc, f);
  };

// ———— 2026-09-11 EP1 v3 新增 ————

/** 底部缩放标签按当前 viewport scale 回填（采集时用 d3 强制视口，产品内部缩放值与 DOM 可能不一致；viewportLerp 过程中也随动） */
export const fixZoomLabel =
  (): DriveFn =>
  (doc) => {
    const vp = doc.querySelector('.react-flow__viewport') as HTMLElement | null;
    const s = vp ? parseViewport(vp.style.transform).s : 1;
    const text = `${Math.round(s * 100)}%`;
    for (const b of Array.from(doc.querySelectorAll('button'))) {
      const t = (b.textContent || '').trim();
      if (/^\d+%$/.test(t) && t !== text) b.textContent = text;
    }
  };

/**
 * 节点结果预览叠加：在舞台快照（尚未真跑）的节点上方注入一张结果图，仿产品"预览在卡片上方"的布局
 * （产品：节点 position = 预览顶部，预览 280 宽、object-fit contain、无圆角）。fromF 起显示，可给 blur-up 显影。
 */
export const injectNodePreview =
  (nodeId: string, src: string, fromF: number, opts: { h?: number; revealDur?: number } = {}): DriveFn =>
  (doc, f) => {
    const n = doc.querySelector(`.react-flow__node[data-id="${nodeId}"]`) as HTMLElement | null;
    if (!n) return;
    let img = n.querySelector('[data-injected-preview]') as HTMLImageElement | null;
    const h = opts.h ?? 280;
    if (!img) {
      img = doc.createElement('img');
      img.setAttribute('data-injected-preview', '1');
      img.src = src;
      img.style.cssText = `position:absolute;left:0;top:${-h}px;width:100%;height:${h}px;object-fit:contain;pointer-events:none;background:transparent`;
      n.appendChild(img);
    }
    const raw = clamp01((f - fromF) / (opts.revealDur ?? 18));
    if (f < fromF) { if (img.style.display !== 'none') img.style.display = 'none'; return; }
    if (img.style.display !== '') img.style.display = '';
    const t = easeOutCubic(raw);
    img.style.opacity = String(Math.min(1, raw * 1.5));
    img.style.filter = raw < 1 ? `blur(${(1 - t) * 14}px)` : '';
    img.style.transform = raw < 1 ? `translateY(${(1 - t) * 12}px)` : '';
  };

/**
 * 节点"运行中"假象（教程不真跑）：Run 按钮文字变 Running，按钮右侧一枚旋转细环，卡片微微降亮度。
 * startF..endF 有效；endF 后恢复。幂等。
 */
export const nodeRunning =
  (nodeId: string, startF: number, endF: number): DriveFn =>
  (doc, f) => {
    const n = doc.querySelector(`.react-flow__node[data-id="${nodeId}"]`) as HTMLElement | null;
    if (!n) return;
    const btn = Array.from(n.querySelectorAll('button')).find((b) => /^(Run|Running)$/.test((b.textContent || '').trim())) as HTMLElement | undefined;
    let ring = n.querySelector('[data-run-ring]') as HTMLElement | null;
    const active = f >= startF && f < endF;
    if (!ring) {
      ring = doc.createElement('div');
      ring.setAttribute('data-run-ring', '1');
      ring.style.cssText = 'position:absolute;width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,0.25);border-top-color:#F4F55C;pointer-events:none;box-sizing:border-box';
      n.appendChild(ring);
    }
    if (!active) {
      if (ring.style.display !== 'none') ring.style.display = 'none';
      if (btn && btn.dataset.runOrig) { const w = doc.createTreeWalker(btn, 4); for (let tn = w.nextNode(); tn; tn = w.nextNode()) if ((tn.textContent || '').trim() === 'Running') tn.textContent = 'Run'; delete btn.dataset.runOrig; }
      return;
    }
    if (btn) {
      if (!btn.dataset.runOrig) btn.dataset.runOrig = btn.textContent || 'Run';
      // 保留图标，只改文字节点（文字可能包在 <span> 里，深度遍历）
      const walker = doc.createTreeWalker(btn, 4 /* NodeFilter.SHOW_TEXT */);
      for (let tn = walker.nextNode(); tn; tn = walker.nextNode()) if ((tn.textContent || '').trim() === 'Run') tn.textContent = 'Running';
      const br = btn.getBoundingClientRect();
      const nr = n.getBoundingClientRect();
      const s = parseViewport((doc.querySelector('.react-flow__viewport') as HTMLElement | null)?.style.transform || '').s || 1;
      ring.style.left = `${((br.right - nr.left) / s + 10).toFixed(1)}px`;
      ring.style.top = `${((br.top + br.height / 2 - nr.top) / s - 7).toFixed(1)}px`;
    }
    if (ring.style.display !== '') ring.style.display = '';
    ring.style.transform = `rotate(${((f - startF) * 24) % 360}deg)`;
  };

// ———— 2026-09-12 EP1 修改轮新增 ————

const fadeIO = (f: number, fromF: number, toF: number, fade: number) =>
  clamp01((f - fromF + 1) / fade) * (1 - clamp01((f - toF) / fade));

/**
 * 目标节点"接收连线"的淡蓝氛围光（产品：拖连线悬停到目标节点时，节点外沿 inset −6px 的 div 亮起 24px 蓝色投影）。
 * 直接驱动该 div 的 opacity（并显式写 box-shadow，避免快照缺 Tailwind 变量）。fromF..toF 有效，前后 fade 帧渐变；
 * fromF 也可传多个 [from,to] 窗口（同一 cut 里两次连线）。
 */
export const nodeGlow =
  (nodeId: string, fromF: number | Array<[number, number]>, toF = Infinity, fade = 6, color = 'rgba(96,165,250,'): DriveFn =>
  (doc, f) => {
    const n = doc.querySelector(`.react-flow__node[data-id="${nodeId}"]`) as HTMLElement | null;
    if (!n) return;
    let g = n.querySelector('[data-glow]') as HTMLElement | null;
    if (!g) {
      const found = n.querySelector('div[class*="shadow-[0_0_24px"]') as HTMLElement | null;
      g = found ?? doc.createElement('div');
      if (!found) { g.style.cssText = 'position:absolute;inset:-6px;border-radius:18px;pointer-events:none;z-index:-1'; (n.firstElementChild as HTMLElement | null)?.appendChild(g); }
      g.setAttribute('data-glow', '1');
      g.style.transition = 'none';
      g.style.boxShadow = `0 0 0 1.5px ${color}0.85), 0 0 26px 4px ${color}0.55)`;
    }
    const wins: Array<[number, number]> = Array.isArray(fromF) ? fromF : [[fromF, toF]];
    const op = Math.max(...wins.map(([a, b]) => fadeIO(f, a, b, fade)));
    const v = op.toFixed(3);
    if (g.style.opacity !== v) g.style.opacity = v;
  };

/**
 * 节点选中态（产品：node 加 .selected，外沿 inset −6px 的 div 变成 1.5px 蓝色描边并 opacity 1，上方出现节点名标签）。
 * fromF 起呈现；toF 后撤销（缺省一直保持）。用于"点一下节点"后立刻给出被选中的反馈。
 */
export const nodeSelected =
  (nodeId: string, fromF: number, toF = Infinity): DriveFn =>
  (doc, f) => {
    const n = doc.querySelector(`.react-flow__node[data-id="${nodeId}"]`) as HTMLElement | null;
    if (!n) return;
    const on = f >= fromF && f < toF;
    const ring = Array.from(n.querySelectorAll('div')).find((d) => /inset:\s*-6px/.test(d.getAttribute('style') || '') && !d.hasAttribute('data-glow')) as HTMLElement | undefined;
    if (on) {
      if (!n.classList.contains('selected')) n.classList.add('selected');
      if (ring) { ring.style.border = '1.5px solid #60a5fa'; ring.style.transition = 'none'; if (ring.style.opacity !== '1') ring.style.opacity = '1'; }
    } else if (n.dataset.selDriven) {
      n.classList.remove('selected');
      if (ring) { ring.style.border = ''; ring.style.opacity = '0'; }
    }
    if (on) n.dataset.selDriven = '1';
  };
