// §6 复用素材：Media Assets 面板 → 拖缩略图到画布 → /assets 页面一瞥
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { dragGhost } from '../../../film/drivesFlow';
import { Stage, curAtFrom, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const ST = 'ep1-s5-fit', P = 'ep1-s6-panel', PH = 'ep1-s6-panelhover', DR = 'ep1-s6-dropped', AP = 'ep1-s6-assetspage';
export const S6_SLOTS = [ST, P, PH, DR, AP];
const ASSETS_BTN = at(35, 527), THUMB = at(155, 673), DROP = at(560, 830);
const B = { panel: 46, hover: 82, grab: 92, drop: 142, page: 236, back: 340, end: 420 } as const;

const buildA = () => {
  const shot = new Shot(ST, { cx: 960, cy: 540, z: 1.0 })
    .cur(10, at(700, 760)).cur(40, ASSETS_BTN).click(B.panel, { cut: P, cutDelay: 2 })
    .cur(B.hover - 2, THUMB).cut(B.hover, PH)
    .click(B.grab)
    .cur(B.drop, DROP).cut(B.drop + 2, DR)
    .cur(190, at(1100, 900)).curHold(B.end)
    .zoomIn(B.panel, at(520, 620), 1.4).camHold(B.drop + 30).zoomOut(B.drop + 36);
  const cf = shot.cuts.find((c) => c.slot === PH)!.from;
  shot.cuts.find((c) => c.slot === PH)!.drive = dragGhost('[class*="popover"] img', B.grab - cf, B.drop + 2 - cf, curAtFrom(shot, cf), [-70, -70], 0.92);
  return shot;
};
const buildB = () => new Shot(AP, { cx: 960, cy: 540, z: 1.0 }).cur(0, at(960, 600)).curHold(B.back - B.page).cam(0, { cx: 960, cy: 540, z: 1.25 }).camHold(B.back - B.page);
let a: Shot | null = null, b: Shot | null = null;

export const S6_CAPTIONS: Cap[] = [
  { from: 10, until: 78, text: 'Everything you make lands in *Media Assets*.' },
  { from: 84, until: 200, text: '*Drag* any asset straight onto the canvas.' },
  { from: 240, until: 336, text: 'Same library on the *Assets* page.' },
];
export const S6_KEYS: KeyCue[] = [];
export const S6_SFX: Cue[] = clicksOf((a ??= buildA()).clicks);
export const S6Assets: React.FC<{ u: number }> = ({ u }) => {
  if (u >= B.page && u < B.back) return <Stage u={u - B.page} shot={(b ??= buildB())} url="youart.ai/assets" slots={[AP]} appearAt={9999} />;
  return <Stage u={u} shot={(a ??= buildA())} url="youart.ai/workflow" slots={[ST, P, PH, DR]} enterAt={0} />;
};
