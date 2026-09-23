// _shareddot.ts — 多选后选区右侧的"共用输出点"（产品 2026-09-17 新版 UI，快照 s2-multisel-new 实采）：
// 24px 深底圆点，外圈 2px 按选中节点输出类型分段的彩环（图像蓝 / 文本绿），中间数字 = 可连出的输出个数；
// 位置 = 选区包围盒右缘 +24px、垂直居中（实测 offset 24 / 0）。拖它到目标节点，所有选中节点一次连上。
// 旧快照（s2-multisel，采于旧 UI）里没有这个点，用本驱动把产品 DOM（含计算样式）注入到页面坐标。
import { type DriveFn } from '@engine/stage/HtmlSnap';

export const DOT_BLUE = 'oklch(0.588 0.158 241.966)'; // --handle-image-plus-border
export const DOT_GREEN = 'oklch(0.596 0.145 163.225)'; // --handle-text-plus-border
export const LINE_BLUE = '#3b82f6'; // 拖拽中的连线 / Connect 芯片（产品实测约 1.5px 细线）
const FONT = `Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif`;

/** 产品 DOM 的等价内联样式版本（class 已展开成计算样式，避免依赖旧快照里不存在的 Tailwind 类） */
export const sharedDotHtml = (count = 2, colors: string[] = [DOT_BLUE, DOT_GREEN]) => {
  // 彩环：n 段等分，段间留 3% 空隙（产品：transparent 0–1.5%，段 1.5–48.5%，空 48.5–51.5%，段 51.5–98.5%，空 98.5–100%）
  const n = colors.length, seg = 100 / n, gap = 1.5;
  const stops = colors.map((c, i) => `transparent ${(i * seg).toFixed(1)}% ${(i * seg + gap).toFixed(1)}%, ${c} ${(i * seg + gap).toFixed(1)}% ${((i + 1) * seg - gap).toFixed(1)}%, transparent ${((i + 1) * seg - gap).toFixed(1)}% ${((i + 1) * seg).toFixed(1)}%`).join(', ');
  return `<button type="button" data-injected-shared-dot="1" aria-label="Drag onto a node to connect ${count}" style="position:absolute;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:0;border-radius:9999px;background:oklch(0.269 0 0);color:rgb(163,163,163);font-family:${FONT};box-shadow:rgba(0,0,0,0.04) 0 1px 2px 0, rgba(0,0,0,0.12) 0 8px 24px 0;z-index:40;cursor:crosshair;pointer-events:none;translate:-50% -50%;padding:0;margin:0">` +
    `<span aria-hidden="true" data-dot-ring="1" data-gradient="conic-gradient(${stops})" style="position:absolute;inset:0;border-radius:9999px;background:conic-gradient(${stops})"><span style="position:absolute;inset:2px;border-radius:9999px;background:oklch(0.269 0 0)"></span></span>` +
    `<span data-dot-num="1" style="position:relative;z-index:10;font-size:12px;font-weight:500;line-height:1;font-variant-numeric:tabular-nums">${count}</span></button>`;
};

/**
 * 在快照页面坐标 (x, y) 注入共用输出点，fromF 起出现（前 10 帧弹入放大），toF 后移除。
 * 挂在 `.react-flow` 容器外层（fixed→absolute，坐标就是快照 CSS px）。
 */
export const injectSharedDot = (x: number, y: number, fromF: number, toF = 1e9, opts: { count?: number; colors?: string[]; activeFrom?: number; activeTo?: number; hideSel?: string } = {}): DriveFn =>
  (doc, f) => {
    let el = doc.querySelector('[data-injected-shared-dot]') as HTMLElement | null;
    // 与圆点重叠的产品元素（旧快照里 GPT 输出口正好落在选区中线上）在圆点可见期间隐藏
    if (opts.hideSel) for (const h of Array.from(doc.querySelectorAll(opts.hideSel))) (h as HTMLElement).style.visibility = f >= fromF && f <= toF ? 'hidden' : '';
    if (f < fromF || f > toF) { el?.remove(); return; }
    if (!el) {
      const host = (doc.querySelector('.react-flow') as HTMLElement | null)?.parentElement ?? doc.body;
      host.insertAdjacentHTML('beforeend', sharedDotHtml(opts.count ?? 2, opts.colors));
      el = doc.querySelector('[data-injected-shared-dot]') as HTMLElement;
    }
    const t = Math.min(1, (f - fromF) / 10);
    const ease = 1 - Math.pow(1 - t, 3);
    const sc = 0.6 + 0.4 * ease + (t < 1 ? Math.sin(t * Math.PI) * 0.15 : 0);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.opacity = String(ease);
    el.style.scale = String(sc);
    // 拖拽中（产品实测）：彩环变成整圈蓝、数字变白、略放大
    const active = opts.activeFrom != null && f >= opts.activeFrom && f <= (opts.activeTo ?? 1e9);
    const ring = el.querySelector('[data-dot-ring]') as HTMLElement | null, num = el.querySelector('[data-dot-num]') as HTMLElement | null;
    if (ring) ring.style.background = active ? DOT_BLUE : ring.dataset.gradient!;
    if (num) num.style.color = active ? '#fff' : 'rgb(163,163,163)';
    if (active) el.style.scale = '1.1';
  };

/**
 * 拖共用输出点时"各源输出口 → 圆点"的汇聚线：注入到 React Flow 的 edges svg 里（节点之下），像普通连线一样只在节点间隙可见，
 * 不会横穿节点内容；圆点 → 光标那一段仍由叠加层在节点之上画。坐标为 flow 坐标（本 work 舞台快照 viewport 为 translate(0,0) scale(1)，与页面坐标相同）。
 */
export const bundleLines = (srcs: Array<{ cx: number; cy: number }>, dot: { cx: number; cy: number }, fromF: number, toF: number, color = LINE_BLUE, width = 1.5): DriveFn =>
  (doc, f) => {
    const edges = doc.querySelector('.react-flow__edges') as SVGSVGElement | null;
    if (!edges) return;
    let g = edges.querySelector('g[data-injected-bundle]') as SVGGElement | null;
    if (f < fromF || f > toF + 6) { g?.remove(); return; }
    if (!g) {
      g = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('data-injected-bundle', '1');
      for (const a of srcs) {
        const dx = dot.cx - a.cx, o = dx >= 0 ? dx * 0.5 : 0.25 * 25 * Math.sqrt(-dx);
        const p = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', `M${a.cx},${a.cy} C${a.cx + o},${a.cy} ${dot.cx - o},${dot.cy} ${dot.cx},${dot.cy}`);
        p.setAttribute('fill', 'none'); p.setAttribute('stroke', color); p.setAttribute('stroke-width', String(width)); p.setAttribute('stroke-linecap', 'round');
        g.appendChild(p);
      }
      edges.appendChild(g);
    }
    const inn = Math.min(1, Math.max(0, (f - fromF) / 6));
    const out = f > toF ? 1 - (f - toF) / 6 : 1;
    g.style.opacity = String(inn * out);
  };
