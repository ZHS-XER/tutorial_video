// flowMeta.ts — 从 materials.gen 的 React Flow 真值读取坐标（页面坐标系），供编排瞄准。
import { MATERIALS, type FlowNode, type FlowMeta } from '@engine/materials';
import { type Aim, at } from '@engine/camera/camera';

export const flowOf = (slot: string): FlowMeta => {
  const f = MATERIALS[slot]?.flow;
  if (!f) throw new Error(`flowMeta: slot "${slot}" has no flow meta`);
  return f;
};

/** 按 id 前缀找节点（如 'LoadImage' / 'Text' / 'Seedance'）；可加序号选第 n 个 */
export const flowNode = (slot: string, idPrefix: string, nth = 0): FlowNode => {
  const list = flowOf(slot).nodes.filter((n) => (n.id || '').startsWith(idPrefix));
  const n = list[nth];
  if (!n) throw new Error(`flowMeta: node "${idPrefix}"#${nth} not in ${slot}`);
  return n;
};

/** 节点矩形 → Aim（页面坐标） */
export const nodeAim = (slot: string, idPrefix: string, nth = 0): Aim => {
  const n = flowNode(slot, idPrefix, nth);
  return { x: n.x, y: n.y, w: n.w, h: n.h, cx: n.x + n.w / 2, cy: n.y + n.h / 2 };
};

/** 节点头部（标题栏）中点：抓取/双击的自然位置 */
export const nodeHeader = (slot: string, idPrefix: string, dx = 0, nth = 0): Aim => {
  const n = flowNode(slot, idPrefix, nth);
  const s = scaleOf(slot);
  return at(n.x + Math.min(n.w * 0.45, 120 * s) + dx, n.y + 19 * s);
};

/** handle 中心（页面坐标） */
export const handleAim = (slot: string, idPrefix: string, handleId: string, nth = 0): Aim => {
  const n = flowNode(slot, idPrefix, nth);
  const h = n.handles.find((x) => x.id === handleId);
  if (!h) throw new Error(`flowMeta: handle "${handleId}" not on ${idPrefix} in ${slot}`);
  return at(h.cx, h.cy);
};

/** viewport 变换字符串 */
export const viewportOf = (slot: string): string => flowOf(slot).viewport;
export const scaleOf = (slot: string): number => {
  const m = /scale\(\s*(-?[\d.e-]+)\s*\)/.exec(viewportOf(slot));
  return m ? Number(m[1]) : 1;
};
/** 节点 transform 里的 flow 坐标 */
export const nodeFlowPos = (slot: string, idPrefix: string, nth = 0): [number, number] => {
  const m = /translate\(\s*(-?[\d.]+)px\s*,\s*(-?[\d.]+)px\s*\)/.exec(flowNode(slot, idPrefix, nth).transform);
  return m ? [Number(m[1]), Number(m[2])] : [0, 0];
};

/** 元素（按钮/输入框）矩形 → Aim，按文本包含匹配；tag 可选 */
export const elAim = (slot: string, text: string, tag?: string, nth = 0): Aim => {
  const els = MATERIALS[slot]?.els ?? [];
  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();
  const hits = els.filter((e) => (!tag || e.tag === tag) && norm(e.text).includes(norm(text)));
  const e = hits[nth];
  if (!e) throw new Error(`flowMeta: element "${text}" not in ${slot}`);
  return { x: e.x, y: e.y, w: e.w, h: e.h, cx: e.x + e.w / 2, cy: e.y + e.h / 2 };
};
