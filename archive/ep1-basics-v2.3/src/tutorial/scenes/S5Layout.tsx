// §5 Auto layout：⌘A + L → 右键 Auto Layout ▸ Align Vertically → Align Horizontally → Fit View
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { viewportLerp, nodesLerp, type NodeMove } from '../../../film/drivesFlow';
import { flowNode, nodeFlowPos, viewportOf, nodeHeader } from '../../../film/flowMeta';
import { Stage, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const MS = 'ep1-s5-messy', AR = 'ep1-s5-arranged', SM = 'ep1-s5-submenu', VT = 'ep1-s5-vertical', HZ = 'ep1-s5-horizontal', FT = 'ep1-s5-fit';
export const S5_SLOTS = [MS, AR, SM, VT, HZ, FT];
const AUTO_LAYOUT = at(1066, 207), ALIGN_V = at(1219, 275);
const FIT_BTN = at(96, 1048);
// 2026-09-10：配音对齐——VO1 3.4s，⌘A 后移到 96，其后各拍 +58
const B = { selAll: 96, keyL: 118, rc: 226, alignV: 280, horizontal: 378, fit: 436, end: 578 } as const;
const D = 30;

const moves = (from: string, to: string): NodeMove[] =>
  ['LoadImage', 'Text', 'Seedance'].map((p) => ({ id: flowNode(to, p).id!, from: nodeFlowPos(from, p), to: nodeFlowPos(to, p) }));

const build = () => {
  const seedHead = nodeHeader(AR, 'Seedance');
  const shot = new Shot(MS, { cx: 960, cy: 540, z: 1.0 })
    .cur(10, at(700, 780)).curHold(B.keyL)
    .cut(B.keyL + 6, AR) // 键帽落到底（3f 压下 + 淡入）后再切状态
    .curHold(208)
    .cur(220, seedHead).click(B.rc, { cut: SM, cutDelay: 2 })
    .cur(250, AUTO_LAYOUT).curHold(264)
    .cur(274, ALIGN_V).click(B.alignV, { cut: VT, cutDelay: 2 })
    .curHold(358)
    .cut(B.horizontal, HZ)
    .cur(426, FIT_BTN).click(B.fit, { cut: FT, cutDelay: 2 })
    .cur(458, at(700, 800)).curHold(B.end)
    .cam(20, { cx: 960, cy: 540, z: 1.3 }).camHold(B.end - 40).zoomOut(B.end - 36);
  const set = (slot: string, drive: (typeof shot.cuts)[number]['drive']) => { shot.cuts.find((c) => c.slot === slot)!.drive = drive; };
  const both = (a: string, b: string) => { const v = viewportLerp(viewportOf(a), viewportOf(b), 0, D); const n = nodesLerp(moves(a, b), 0, D); return (doc: Document, f: number) => { v(doc, f); n(doc, f); }; };
  set(AR, both(MS, AR)); set(VT, both(AR, VT)); set(HZ, both(VT, HZ)); set(FT, viewportLerp(viewportOf(HZ), viewportOf(FT), 0, 26));
  return shot;
};
let cached: Shot | null = null; const getShot = () => (cached ??= build());

export const S5_CAPTIONS: Cap[] = [
  { from: 8, until: 112, text: 'Messy canvas? Press *⌘A* to select all.' },
  { from: 118, until: 200, text: 'Then press *L*. Nodes line up.' },
  { from: 216, until: 372, text: 'Right-click: *Auto Layout*, then Align Vertically.' },
  { from: 374, until: 418, text: 'Or Align *Horizontally*.' },
  { from: 432, until: 500, text: 'Fit View to see the result.' },
];
export const S5_KEYS: KeyCue[] = [{ at: B.selAll, keys: ['cmd', 'a'], hold: 10, linger: 26 }, { at: B.keyL, keys: ['l'], hold: 10, linger: 44 }, { at: B.rc, keys: ['right click'], hold: 10, linger: 30 }];
export const S5_SFX: Cue[] = clicksOf(getShot().clicks);
export const S5Layout: React.FC<{ u: number }> = ({ u }) => <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S5_SLOTS} enterAt={0} />;
