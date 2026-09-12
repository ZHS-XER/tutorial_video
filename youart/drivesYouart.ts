// drivesYouart.ts — 本片专用 iframe DOM 驱动器（按 youart.ai 快照实际 DOM 编写）。
// 全部幂等：状态是帧号纯函数，seek 安全（screen-story §DOM 驱动四步配方）。
import { type DriveFn } from '@engine/stage/HtmlSnap';

const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);
const outCubic = (t: number) => 1 - Math.pow(1 - clamp01(t), 3);
const outBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  const v = clamp01(t) - 1;
  return 1 + c3 * v * v * v + c1 * v * v;
};

/** contenteditable 打字机：首帧缓存整段真值，逐帧写子串（首页提示框） */
export const typeCE =
  (selector: string, startF: number, framesPerChar = 0.7): DriveFn =>
  (doc, f) => {
    const el = doc.querySelector(selector) as HTMLElement | null;
    if (!el) return;
    if (!el.dataset.ceFull) el.dataset.ceFull = el.textContent || '';
    const full = el.dataset.ceFull;
    const n = Math.min(full.length, Math.max(0, Math.floor((f - startF) / framesPerChar)));
    const cur = full.slice(0, n);
    if (el.textContent !== cur) el.textContent = cur;
  };

/** 文本标签呼吸脉冲（"Generating..." 待机感） */
export const pulseByText =
  (needle: string, period = 36): DriveFn =>
  (doc, f) => {
    if (!doc.body.hasAttribute('data-pulse-marked')) {
      for (const el of doc.querySelectorAll('span,div,p')) {
        const t = (el.textContent || '').trim();
        if (t === needle && el.children.length === 0 && el.getBoundingClientRect().width > 2) {
          (el as HTMLElement).dataset.pulse = '1';
        }
      }
      doc.body.setAttribute('data-pulse-marked', '1');
    }
    const op = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((f / period) * Math.PI * 2));
    for (const el of doc.querySelectorAll('[data-pulse]')) {
      (el as HTMLElement).style.opacity = op.toFixed(3);
    }
  };

/** 工作流节点入场：node 内层 wrapper 依次 POP（scale 0.9→过冲→1 + 上移 + blur 显影），
 * 完成后连线 dashoffset draw-on。自愈式标记门（render-pitfalls：innerHTML 二次应用会抹标记）。 */
export const nodesEntrance =
  (startF: number, stagger = 8, durF = 14): DriveFn =>
  (doc, f) => {
    const nodes = [...doc.querySelectorAll('.react-flow__node')] as HTMLElement[];
    nodes.sort((a, b) => a.getBoundingClientRect().x - b.getBoundingClientRect().x);
    nodes.forEach((node, i) => {
      const inner = node.firstElementChild as HTMLElement | null;
      if (!inner) return;
      const t = outBack((f - startF - i * stagger) / durF);
      const raw = clamp01((f - startF - i * stagger) / durF);
      inner.style.transform = `translateY(${(1 - t) * 30}px) scale(${0.9 + 0.1 * t})`;
      inner.style.opacity = String(Math.min(1, raw * 2.5));
      inner.style.filter = raw < 1 ? `blur(${(1 - raw) * 7}px)` : '';
      inner.style.transformOrigin = '50% 60%';
    });
    // 连线 draw-on（两节点都进场后）；快照里 edge path 无统一类名，取 .react-flow__edge 下全部 path
    const edgeStart = startF + stagger + durF - 4;
    for (const p of doc.querySelectorAll('.react-flow__edge path, path.react-flow__edge-path')) {
      const path = p as SVGPathElement;
      let len = Number(path.dataset.edgeLen);
      if (!len) {
        try {
          len = path.getTotalLength();
        } catch {
          len = 60;
        }
        path.dataset.edgeLen = String(len);
      }
      const t = outCubic((f - edgeStart) / 10);
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len * (1 - t));
    }
  };

/** Agent 聊天流逐条显影：按已知条目文本标记（自愈门），错峰 opacity/位移/blur。
 * order 给出叙事顺序（文本前缀匹配，x>1400 的右栏元素）。 */
export const chatReveal =
  (order: string[], startF: number, stagger = 7, durF = 10): DriveFn =>
  (doc, f) => {
    const marked = doc.body.getAttribute('data-chat-marked') === '1' && doc.querySelector('[data-chat-i]');
    if (!marked) {
      const used = new Set<Element>();
      order.forEach((needle, idx) => {
        let best: Element | null = null;
        for (const el of doc.querySelectorAll('div,button,p')) {
          if (used.has(el)) continue;
          const r = el.getBoundingClientRect();
          if (r.x < 1400 || r.width < 60 || r.width > 470 || r.height < 14 || r.height > 620) continue;
          const t = (el.textContent || '').trim();
          if (!t.startsWith(needle)) continue;
          // 取最内层匹配（面积最小者）
          if (!best || r.width * r.height < best.getBoundingClientRect().width * best.getBoundingClientRect().height) best = el;
        }
        if (best) {
          (best as HTMLElement).dataset.chatI = String(idx);
          used.add(best);
        }
      });
      doc.body.setAttribute('data-chat-marked', '1');
    }
    for (const el of doc.querySelectorAll('[data-chat-i]')) {
      const h = el as HTMLElement;
      const i = Number(h.dataset.chatI);
      const raw = clamp01((f - startF - i * stagger) / durF);
      const t = outCubic(raw);
      h.style.opacity = String(raw < 1 ? Math.min(1, raw * 2) : 1);
      h.style.transform = raw < 1 ? `translateY(${(1 - t) * 16}px)` : '';
      h.style.filter = raw < 1 ? `blur(${(1 - raw) * 5}px)` : '';
    }
  };

/** 节点内成图 blur-up 显形（Seedream 结果图从模糊到锐利） */
export const imageBlurUp =
  (startF: number, durF = 20): DriveFn =>
  (doc, f) => {
    if (!doc.body.hasAttribute('data-img-marked')) {
      for (const node of doc.querySelectorAll('.react-flow__node')) {
        for (const img of node.querySelectorAll('img')) {
          if (img.getBoundingClientRect().width > 120) (img as HTMLElement).dataset.blurup = '1';
        }
      }
      doc.body.setAttribute('data-img-marked', '1');
    }
    for (const el of doc.querySelectorAll('[data-blurup]')) {
      const h = el as HTMLElement;
      const raw = clamp01((f - startF) / durF);
      const t = outCubic(raw);
      h.style.filter = raw < 1 ? `blur(${(1 - t) * 16}px) saturate(${0.6 + 0.4 * t})` : '';
      h.style.opacity = String(0.25 + 0.75 * Math.min(1, raw * 1.6));
      h.style.transform = raw < 1 ? `scale(${1.06 - 0.06 * t})` : '';
    }
  };

/** 指定 data-id 节点在 atF 做一次接收脉冲（wfDone 切入时 Hailuo 节点"到货"） */
export const nodePulse =
  (dataIdPrefix: string, atF: number, durF = 12): DriveFn =>
  (doc, f) => {
    for (const node of doc.querySelectorAll('.react-flow__node')) {
      const id = node.getAttribute('data-id') || '';
      if (!id.startsWith(dataIdPrefix)) continue;
      const inner = node.firstElementChild as HTMLElement | null;
      if (!inner) return;
      const raw = clamp01((f - atF) / durF);
      const s = 1 + Math.sin(raw * Math.PI) * 0.05;
      inner.style.transform = raw > 0 && raw < 1 ? `scale(${s})` : '';
      inner.style.transformOrigin = '50% 50%';
    }
  };

/** 进度清单条目高亮扫描（run 页 "Building your UGC video" 当前步骤微光） */
export const stepGlow =
  (needle: string): DriveFn =>
  (doc, f) => {
    if (!doc.body.hasAttribute('data-step-marked')) {
      for (const el of doc.querySelectorAll('div,span')) {
        const t = (el.textContent || '').trim();
        if (t.startsWith(needle) && t.length < needle.length + 8 && el.getBoundingClientRect().width > 2) {
          (el as HTMLElement).dataset.stepGlow = '1';
        }
      }
      doc.body.setAttribute('data-step-marked', '1');
    }
    const op = 0.75 + 0.25 * Math.sin((f / 30) * Math.PI * 2);
    for (const el of doc.querySelectorAll('[data-step-glow]')) {
      const h = el as HTMLElement;
      h.style.opacity = op.toFixed(3);
      h.style.textShadow = `0 0 ${8 + 5 * Math.sin((f / 30) * Math.PI * 2)}px rgba(244,245,92,0.35)`;
    }
  };
