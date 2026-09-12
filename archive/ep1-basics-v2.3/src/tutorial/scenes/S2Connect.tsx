// §2 连线：接口颜色标签 → 拖出连线 ×2 → 悬停连线点 ✕ 断开 → 重连
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { edgeDraw, handleChips } from '../../../film/drivesFlow';
import { handleAim, flowNode } from '../../../film/flowMeta';
import { Stage, curAtFrom, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const ST = 'ep1-s2-start', E1 = 'ep1-s2-edge1', E2 = 'ep1-s2-edge2', EH = 'ep1-s2-edgehover', DEL = 'ep1-s2-deleted', E2B = 'ep1-s2-edge2b';
export const S2_SLOTS = [ST, E1, E2, EH, DEL, E2B];
const DELETE_BTN = at(833, 580);
const EDGE_MID = at(840, 573);

const B = { chips: 14, grab1: 120, drop1: 166, grab2: 204, drop2: 248, hover: 288, del: 302, grab3: 338, drop3: 380, end: 560 } as const;

const build = () => {
  const imgOut = handleAim(ST, 'LoadImage', 'edge-out');
  const imgIn = handleAim(ST, 'Seedance', 'edge-in-image_1');
  const txtOut = handleAim(E1, 'Text', 'edge-out');
  const txtIn = handleAim(E1, 'Seedance', 'edge-in-text_input-1');
  const txtOutDel = handleAim(DEL, 'Text', 'edge-out');
  const txtInDel = handleAim(DEL, 'Seedance', 'edge-in-text_input-1');
  const seed = flowNode(ST, 'Seedance').id!;
  const load = flowNode(ST, 'LoadImage').id!;
  const text = flowNode(ST, 'Text').id!;

  const shot = new Shot(ST, { cx: 960, cy: 540, z: 1.0 })
    .cur(10, at(620, 760)).cur(50, at(700, 470)).curHold(96)
    .cur(112, imgOut).click(B.grab1)
    .cur(B.drop1, imgIn).cut(B.drop1 + 1, E1)
    .curHold(190)
    .cur(198, txtOut).click(B.grab2)
    .cur(B.drop2, txtIn).cut(B.drop2 + 1, E2)
    .curHold(272)
    .cur(B.hover - 2, EDGE_MID).cut(B.hover, EH)
    .cur(298, DELETE_BTN).click(B.del, { cut: DEL, cutDelay: 2 })
    .curHold(326)
    .cur(B.grab3 - 4, txtOutDel).click(B.grab3)
    .cur(B.drop3, txtInDel).cut(B.drop3 + 1, E2B)
    .cur(420, at(1290, 700)).curHold(B.end)
    // 相机：先推近看接口颜色，再略收一点做连线，最后收回
    .zoomIn(B.chips + 20, at(880, 400), 1.8).camHold(100).cam(118, { cx: 850, cy: 440, z: 1.5 }).camHold(410).zoomOut(416);

  const cf = (slot: string) => shot.cuts.find((c) => c.slot === slot)!.from;
  const set = (slot: string, drive: (typeof shot.cuts)[number]['drive']) => { shot.cuts.find((c) => c.slot === slot)!.drive = drive; };
  const chips = handleChips([
    { nodeId: seed, handleId: 'edge-in-text_input-1', text: 'Text', color: 'oklch(0.78 0.16 163)' },
    { nodeId: seed, handleId: 'edge-in-image_1', text: 'Image', color: 'oklch(0.76 0.14 242)' },
    { nodeId: seed, handleId: 'edge-in-video_1', text: 'Video', color: 'oklch(0.74 0.18 293)' },
    { nodeId: seed, handleId: 'edge-in-audio_1', text: 'Audio', color: 'oklch(0.76 0.17 4)' },
  ], B.chips, 6, 104);
  const draw1 = edgeDraw(load, 'edge-out', B.grab1, B.drop1 + 1, curAtFrom(shot, 0));
  set(ST, (doc, f) => { chips(doc, f); draw1(doc, f); });
  set(E1, edgeDraw(text, 'edge-out', B.grab2 - cf(E1), B.drop2 + 1 - cf(E1), curAtFrom(shot, cf(E1))));
  set(DEL, edgeDraw(text, 'edge-out', B.grab3 - cf(DEL), B.drop3 + 1 - cf(DEL), curAtFrom(shot, cf(DEL))));
  return shot;
};
let cached: Shot | null = null; const getShot = () => (cached ??= build());

export const S2_CAPTIONS: Cap[] = [
  { from: 6, until: 146, text: 'Ports are *color-coded*: text, image, video, audio.' },
  { from: 150, until: 270, text: 'Drag an *output* to a matching *input*.' },
  { from: 280, until: 356, text: 'Hover a connection, click *✕* to remove it.' },
  { from: 362, until: 430, text: 'Connect it again anytime.' },
];
export const S2_KEYS: KeyCue[] = [];
export const S2_SFX: Cue[] = clicksOf(getShot().clicks);
export const S2Connect: React.FC<{ u: number }> = ({ u }) => <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S2_SLOTS} enterAt={0} />;
