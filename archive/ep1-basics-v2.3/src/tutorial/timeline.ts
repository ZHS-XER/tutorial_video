// timeline.ts — EP1 基础操作：段位表（TL 帧 = 30fps 语义）。每节前有 45 帧章节卡。
export const CH = 75; // 章节卡时长（2.5s；45 帧被反馈太短）
const seq = (parts: Array<[string, number]>) => {
  let t = 0; const out: Record<string, { from: number; dur: number }> = {};
  for (const [k, d] of parts) { out[k] = { from: t, dur: d }; t += d; }
  return { S: out, TOTAL: t };
};
const built = seq([
  ['title', 190],  // 片头 v2：迷你 workflow → 标题 → 7 步内容轨道
  ['ch1', CH], ['s1', 700],   // 创建节点
  ['ch2', CH], ['s2', 560],   // 连线 / 断线
  ['ch3', CH], ['s3', 570],   // 展开 / 收起
  ['ch4', CH], ['s4', 440],   // Focus view（v2 重采，缩短）
  ['ch5', CH], ['s5', 578],   // Auto layout
  ['ch6', CH], ['s6', 420],   // 素材复用
  ['ch7', CH], ['s7', 420],   // 画布背景
  ['outro', 150],
]);
export const S = built.S;
export const TOTAL_TL = built.TOTAL;
export const CHAPTERS: Array<{ key: string; n: number; title: string; sub: string }> = [
  { key: 'ch1', n: 1, title: 'Create a node', sub: 'menu · search · double-click · right-click' },
  { key: 'ch2', n: 2, title: 'Connect nodes', sub: 'ports are color-coded' },
  { key: 'ch3', n: 3, title: 'Expand & collapse', sub: '⌘[  ⌘]  ·  Expand All' },
  { key: 'ch4', n: 4, title: 'Focus view', sub: 'double-click · F' },
  { key: 'ch5', n: 5, title: 'Auto layout', sub: 'L · align horizontally / vertically' },
  { key: 'ch6', n: 6, title: 'Reuse your assets', sub: 'Media Assets panel' },
  { key: 'ch7', n: 7, title: 'Customize the canvas', sub: 'Settings → Preferences' },
];
