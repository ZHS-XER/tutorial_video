// timeline.ts — EP1 v3 段位表（TL 帧 = 30fps 语义）。各节时长由场景文件按 VO 真实时长推出；章节卡 75 帧。
import { TITLE_DUR } from './scenes/S0Title';
import { OUTRO_DUR } from './scenes/Outro';
import { S1_DUR } from './scenes/S1Create';
import { S2_DUR } from './scenes/S2Connect';
import { S3_DUR } from './scenes/S3Collapse';
import { S4_DUR } from './scenes/S4Focus';
import { S5_DUR } from './scenes/S5Layout';
import { S6_DUR } from './scenes/S6Assets';
import { S7_DUR } from './scenes/S7Prefs';

export const CH = 75;
const seq = (parts: Array<[string, number]>) => {
  let t = 0; const out: Record<string, { from: number; dur: number }> = {};
  for (const [k, d] of parts) { out[k] = { from: t, dur: d }; t += d; }
  return { S: out, TOTAL: t };
};
const built = seq([
  ['title', TITLE_DUR],
  ['ch1', CH], ['s1', S1_DUR],
  ['ch2', CH], ['s2', S2_DUR],
  ['ch3', CH], ['s3', S3_DUR],
  ['ch4', CH], ['s4', S4_DUR],
  ['ch5', CH], ['s5', S5_DUR],
  ['ch6', CH], ['s6', S6_DUR],
  ['ch7', CH], ['s7', S7_DUR],
  ['outro', OUTRO_DUR],
]);
export const S = built.S;
export const TOTAL_TL = built.TOTAL;
export const CHAPTERS: Array<{ key: string; n: number; title: string; sub: string }> = [
  { key: 'ch1', n: 1, title: 'Create a node', sub: 'the + menu · search · double-click the canvas' },
  { key: 'ch2', n: 2, title: 'Connect nodes', sub: 'ports are color-coded · drop anywhere on the node' },
  { key: 'ch3', n: 3, title: 'Expand & collapse', sub: 'arrow · ⌘[ ⌘] · Collapse All · Auto-collapse' },
  { key: 'ch4', n: 4, title: 'Focus view', sub: 'select + F · double-click a node · Fit view' },
  { key: 'ch5', n: 5, title: 'Auto layout', sub: '⌘A then L · horizontal / vertical · shortcuts panel' },
  { key: 'ch6', n: 6, title: 'Reuse your assets', sub: 'Media Assets panel · the Assets page' },
  { key: 'ch7', n: 7, title: 'Preferences', sub: '⌘, · canvas background · download filename' },
];
