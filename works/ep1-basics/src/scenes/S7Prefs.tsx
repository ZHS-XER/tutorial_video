// §7 偏好设置（素材项目）：⌘, → Preferences → 背景色 Lighter → 图案 Grid → 下载文件名 → Edit（积木编辑态）→ Done → Esc 回画布
// 2026-09-12 修改轮：全程 z=1 不推近（设置面板字已够大）；⌘, 与 Preferences 分别落在台词对应位置；新增 Edit 编辑态演示（快照 m-prefs-edit）。
import React from 'react';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { elAim } from '@youart/flowMeta';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, clicksOf, voOf, type Cap } from './_shared';

const P0 = 'ep1-basics-';
const TD = P0 + 'm-tidy', ST = P0 + 'm-settings', PRF = P0 + 'm-prefs', PC = P0 + 'm-prefs-color', PG = P0 + 'm-prefs-grid', PE = P0 + 'm-prefs-edit', RS = P0 + 'm-result';
export const S7_SLOTS = [TD, ST, PRF, PC, PG, PE, RS];
const IDS = ['s7-1', 's7-2', 's7-3', 's7-4', 's7-5', 's7-6'];
// 采 S7 时画布上多出一枚拖入的 Image Loader（LoadImage-e1d5c794），成片隐藏
const HIDE_EXTRA = '.react-flow__node[data-id="LoadImage-e1d5c794"]{display:none !important}';
const PREFS = at(369, 204), LIGHTER = at(1143, 489), GRID = at(1158, 546);
const DL_CARD = { cx: 880, cy: 350, w: 740, h: 60 }; // Download Filename 预览卡
const EDIT = at(1226, 335); // 预览卡右上 "Edit"
const KEY_LAG = 6;

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's7-1': 40, 's7-2': 24, 's7-3': 24, 's7-4': 10, 's7-5': 60, 's7-6': 20 } });
export const S7_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const done = elAim(PE, 'Done', 'button');
  const B = { open: P('s7-1', 0.4), prefs: V('s7-1', 6), lighter: V('s7-2', -4), grid: V('s7-3', -8), dl: P('s7-4', 0.5), edit: P('s7-5', 0.3), done: V('s7-5', 20), esc: P('s7-6', 0.3) };
  const shot = new Shot(TD, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 780)).curHold(B.open)
    .cut(B.open + KEY_LAG, ST, { patchCss: HIDE_EXTRA })
    .go(B.prefs, PREFS).click(B.prefs, { cut: PRF, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.lighter, LIGHTER).click(B.lighter, { cut: PC, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.grid, GRID).click(B.grid, { cut: PG, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.dl, at(DL_CARD.cx - 120, DL_CARD.cy + 44))
    .go(B.edit, EDIT).click(B.edit, { cut: PE, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.done, done).click(B.done, { cut: PG, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.done + 24, at(900, 640), 12).curHold(B.esc)
    .cut(B.esc + KEY_LAG, RS, { patchCss: HIDE_EXTRA })
    .go(B.esc + 20, at(700, 780), 14).curHold(S7_DUR);
  const rings: RingCue[] = [
    { at: B.prefs - 10, aim: { cx: PREFS.cx, cy: PREFS.cy, w: 208, h: 32 }, dur: 14, radius: 8 },
    { at: B.lighter - 10, aim: { cx: LIGHTER.cx, cy: LIGHTER.cy, w: 26, h: 26 }, dur: 14, minSize: 34, radius: 17 },
    { at: B.grid - 10, aim: { cx: GRID.cx, cy: GRID.cy, w: 56, h: 58 }, dur: 14, radius: 10 },
    { at: B.dl - 4, aim: DL_CARD, dur: 40, radius: 10 },
    { at: B.edit - 10, aim: { cx: EDIT.cx, cy: EDIT.cy, w: 48, h: 24 }, dur: 14, radius: 8 },
    { at: B.done - 10, aim: { cx: done.cx, cy: done.cy, w: done.w, h: done.h }, dur: 14, radius: 8 },
  ];
  const keys: KeyCue[] = [
    { at: B.open, keys: ['cmd', ','], hold: 10, linger: 36 },
    { at: B.esc, keys: ['esc'], hold: 10, linger: 30 },
  ];
  return { shot, rings, keys };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S7_CAPTIONS: Cap[] = capsOf(t, IDS);
export const S7_KEYS = () => get().keys;
export const S7_VO = voOf(t, IDS);
export const S7_SFX = () => clicksOf(get().shot.clicks);
export const S7Prefs: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings } = get();
  return <Stage u={u} shot={shot} slots={S7_SLOTS} enterAt={0} overlay={<TargetRing u={u} cues={rings} />} />;
};
