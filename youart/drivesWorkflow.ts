// drivesWorkflow.ts — YouArt Workflow 画布（React Flow）快照的 DOM 驱动器。
// 全部幂等：状态是帧号纯函数，seek 安全。
import { type DriveFn } from '@engine/stage/HtmlSnap';


const parseTranslate = (tf: string): [number, number] => {
  const m = /translate\(\s*(-?[\d.]+)px\s*,\s*(-?[\d.]+)px\s*\)/.exec(tf);
  return m ? [Number(m[1]), Number(m[2])] : [0, 0];
};

/**
 * 拖动复制（Option+Drag）过程复刻：克隆目标节点，从 startF 起跟着光标走——
 * 每帧位移 = 光标实际位置（含弹簧平滑）− 抓取点，与 <Cursor> 严格同步、零滞后。
 * 原节点留在原地；克隆带 selected 态。切到"拖动后"快照时光标须已落定在
 * grab + (dx,dy) 上（真实拖动产生的位移），克隆位置才与新节点重合。
 */
export const dragClone =
  (
    nodeSelector: string,
    startF: number,
    grab: { x: number; y: number },
    cursorAt: (f: number) => [number, number],
  ): DriveFn =>
  (doc, f) => {
    const src = doc.querySelector(nodeSelector) as HTMLElement | null;
    if (!src) return;
    let clone = doc.querySelector('[data-drag-clone]') as HTMLElement | null;
    if (!clone) {
      clone = src.cloneNode(true) as HTMLElement;
      clone.setAttribute('data-drag-clone', '1');
      clone.removeAttribute('data-id');
      clone.removeAttribute('data-testid');
      clone.classList.add('selected');
      clone.style.pointerEvents = 'none';
      clone.style.zIndex = '9999999';
      src.parentElement!.appendChild(clone);
    }
    if (f < startF) {
      if (clone.style.visibility !== 'hidden') clone.style.visibility = 'hidden';
      return;
    }
    const [cx, cy] = cursorAt(f);
    const [x0, y0] = parseTranslate(src.style.transform);
    const tf = `translate(${(x0 + cx - grab.x).toFixed(2)}px, ${(y0 + cy - grab.y).toFixed(2)}px)`;
    if (clone.style.visibility !== 'visible') clone.style.visibility = 'visible';
    if (clone.style.transform !== tf) clone.style.transform = tf;
  };
