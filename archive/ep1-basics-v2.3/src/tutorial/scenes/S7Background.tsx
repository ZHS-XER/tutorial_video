// §7 自定义画布：⌘, → Settings → Preferences → Background Color: Lighter → Pattern: Grid → 关闭
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { elAim } from '../../../film/flowMeta';
import { Stage, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const ST = 'ep1-s6-fit', SE = 'ep1-s7-settings', PR = 'ep1-s7-prefs', LI = 'ep1-s7-lighter', GR = 'ep1-s7-grid', RS = 'ep1-s7-result';
export const S7_SLOTS = [ST, SE, PR, LI, GR, RS];
const LIGHTER = at(1335, 500);
// 2026-09-10：配音对齐——三句 VO 各 2.4–3.5s，点击拍位顺延，Esc 移到 296
const B = { open: 40, prefs: 90, lighter: 130, grid: 200, esc: 296, end: 420 } as const;

const build = () => {
  const prefs = elAim(SE, 'Preferences', 'button');
  const grid = elAim(PR, 'Grid', 'button');
  return new Shot(ST, { cx: 960, cy: 540, z: 1.0 })
    .cur(10, at(700, 780)).curHold(B.open)
    .cut(B.open + 6, SE)
    .cur(84, prefs).click(B.prefs, { cut: PR, cutDelay: 2 })
    .cur(122, LIGHTER).click(B.lighter, { cut: LI, cutDelay: 2 })
    .cur(190, grid).click(B.grid, { cut: GR, cutDelay: 2 })
    .curHold(B.esc)
    .cut(B.esc + 6, RS)
    .cur(320, at(700, 760)).curHold(B.end)
    .zoomIn(B.open + 20, at(960, 540), 1.45).camHold(B.esc - 20).zoomOut(B.esc - 14);
};
let cached: Shot | null = null; const getShot = () => (cached ??= build());

export const S7_CAPTIONS: Cap[] = [
  { from: 8, until: 78, text: 'Press *⌘,* to open Settings.' },
  { from: 84, until: 172, text: '*Preferences*: pick a canvas background color.' },
  { from: 178, until: 290, text: 'Then a *pattern*: dots, grid, or none.' },
  { from: 300, until: 400, text: 'Your canvas, your way.' },
];
export const S7_KEYS: KeyCue[] = [{ at: B.open, keys: ['cmd', ','], hold: 10, linger: 36 }, { at: B.esc, keys: ['esc'], hold: 10, linger: 30 }];
export const S7_SFX: Cue[] = clicksOf(getShot().clicks);
export const S7Background: React.FC<{ u: number }> = ({ u }) => <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S7_SLOTS} enterAt={0} />;
