// §7 偏好设置（素材项目）：⌘, → Preferences → 背景色 Lighter → 图案 Grid → 下载文件名 → Edit（积木编辑态）→ 删 Timestamp → 拖 YouArt 到最前 → Done → Esc 回画布
// 2026-09-13：Edit 之后真操作积木（快照 m-prefs-edit2 / edit3 / done），预览文件名从 Hero_shot_2026-…_03_YouArt.png 变成 YouArt_Hero_shot_03.png。
// 2026-09-12 修改轮：全程 z=1 不推近（设置面板字已够大）；⌘, 与 Preferences 分别落在台词对应位置；新增 Edit 编辑态演示（快照 m-prefs-edit）。
import React from 'react';
import { cursorPosAt } from '@engine/cursor/Cursor';
import { C, F } from '@engine/tokens';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { elAim } from '@youart/flowMeta';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, clicksOf, voOf, type Cap } from './_shared';

const P0 = 'ep1-basics-';
const TD = P0 + 'm-tidy', ST = P0 + 'm-settings', PRF = P0 + 'm-prefs', PC = P0 + 'm-prefs-color', PG = P0 + 'm-prefs-grid', PE = P0 + 'm-prefs-edit', PE2 = P0 + 'm-prefs-edit2', PE3 = P0 + 'm-prefs-edit3', PD = P0 + 'm-prefs-done', RS = P0 + 'm-result';
export const S7_SLOTS = [TD, ST, PRF, PC, PG, PE, PE2, PE3, PD, RS];
const IDS = ['s7-1', 's7-2', 's7-3', 's7-4', 's7-5', 's7-5b', 's7-5c', 's7-6'];
// 积木位置（页面坐标，来自 m9/m9b 采集日志）：编辑态里 Timestamp 的 ✕；删掉后 YouArt 块的拖柄；Name 块左缘（拖放目标）
const TS_X = at(849, 458), YA_HANDLE = at(733, 458), NAME_LEFT = at(515, 458);
// 采 S7 时画布上多出一枚拖入的 Image Loader（LoadImage-e1d5c794），成片隐藏
const HIDE_EXTRA = '.react-flow__node[data-id="LoadImage-e1d5c794"]{display:none !important}';
const PREFS = at(369, 204), LIGHTER = at(1143, 489), GRID = at(1158, 546);
const DL_CARD = { cx: 880, cy: 350, w: 740, h: 60 }; // Download Filename 预览卡
const EDIT = at(1226, 335); // 预览卡右上 "Edit"
const KEY_LAG = 6;

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's7-1': 40, 's7-2': 24, 's7-3': 24, 's7-4': 10, 's7-5': 30, 's7-5b': 40, 's7-5c': 30, 's7-6': 20 } });
export const S7_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const done = elAim(PE3, 'Done', 'button');
  const B = { open: P('s7-1', 0.4), prefs: V('s7-1', 6), lighter: V('s7-2', -4), grid: V('s7-3', -8), dl: P('s7-4', 0.5), edit: P('s7-5', 0.3), removeTs: P('s7-5b', 0.35), grab: P('s7-5b', 0.8), drop: 0, done: P('s7-5c', 0.7), esc: P('s7-6', 0.3) };
  B.drop = B.grab + 30;
  const shot = new Shot(TD, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 780)).curHold(B.open)
    .cut(B.open + KEY_LAG, ST, { patchCss: HIDE_EXTRA })
    .go(B.prefs, PREFS).click(B.prefs, { cut: PRF, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.lighter, LIGHTER).click(B.lighter, { cut: PC, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.grid, GRID).click(B.grid, { cut: PG, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.dl, at(DL_CARD.cx - 120, DL_CARD.cy + 44))
    .go(B.edit, EDIT).click(B.edit, { cut: PE, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.removeTs, TS_X).click(B.removeTs, { cut: PE2, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.grab, YA_HANDLE).click(B.grab).cur(B.drop, NAME_LEFT).cut(B.drop + 1, PE3, { patchCss: HIDE_EXTRA })
    .go(B.done, done).click(B.done, { cut: PD, cutDelay: 2, patchCss: HIDE_EXTRA })
    .go(B.done + 24, at(900, 640), 12).curHold(B.esc)
    .cut(B.esc + KEY_LAG, RS, { patchCss: HIDE_EXTRA })
    .go(B.esc + 20, at(700, 780), 14).curHold(S7_DUR);
  const rings: RingCue[] = [
    { at: B.prefs - 10, aim: { cx: PREFS.cx, cy: PREFS.cy, w: 208, h: 32 }, dur: 14, radius: 8 },
    { at: B.lighter - 10, aim: { cx: LIGHTER.cx, cy: LIGHTER.cy, w: 26, h: 26 }, dur: 14, minSize: 34, radius: 17 },
    { at: B.grid - 10, aim: { cx: GRID.cx, cy: GRID.cy, w: 56, h: 58 }, dur: 14, radius: 10 },
    { at: B.dl - 4, aim: DL_CARD, dur: 40, radius: 10 },
    { at: B.edit - 10, aim: { cx: EDIT.cx, cy: EDIT.cy, w: 48, h: 24 }, dur: 14, radius: 8 },
    { at: B.removeTs - 10, aim: { cx: TS_X.cx, cy: TS_X.cy, w: 0, h: 0 }, dur: 14, minSize: 30, radius: 15 },
    { at: B.grab - 10, aim: { cx: 780, cy: 458, w: 124, h: 32 }, dur: 14, radius: 8 },
    { at: B.done - 10, aim: { cx: done.cx, cy: done.cy, w: done.w, h: done.h }, dur: 14, radius: 8 },
  ];
  const keys: KeyCue[] = [
    { at: B.open, keys: ['cmd', ','], hold: 10, linger: 36 },
    { at: B.esc, keys: ['esc'], hold: 10, linger: 30 },
  ];
  return { shot, rings, keys, B };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S7_CAPTIONS: Cap[] = capsOf(t, IDS);
export const S7_KEYS = () => get().keys;
export const S7_VO = voOf(t, IDS);
export const S7_SFX = () => clicksOf(get().shot.clicks);
/** 拖动中的 YouArt 积木影子（产品拖动时原块跟手；快照里原块不动，用影子表现） */
const BlockGhost: React.FC<{ u: number; from: number; until: number; curAt: (f: number) => [number, number] }> = ({ u, from, until, curAt }) => {
  if (u <= from || u > until) return null;
  const [cx, cy] = curAt(u);
  return (
    <div style={{ position: 'absolute', left: cx - 14, top: cy - 15, height: 30, padding: '0 10px 0 8px', display: 'flex', alignItems: 'center', gap: 8, borderRadius: 6, border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(30,30,30,0.96)', boxShadow: '0 10px 30px rgba(0,0,0,0.6)', fontFamily: F.sans, fontSize: 14, color: C.paper, opacity: 0.95, pointerEvents: 'none' }}>
      <span style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: -2 }}>⋮⋮</span>
      <span>YouArt</span>
      <span style={{ color: 'rgba(255,255,255,0.5)' }}>✕</span>
    </div>
  );
};

export const S7Prefs: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings, B } = get();
  const overlay = (
    <>
      <TargetRing u={u} cues={rings} />
      <BlockGhost u={u} from={B.grab} until={B.drop} curAt={(f) => cursorPosAt(shot.curKeys, f)} />
    </>
  );
  return <Stage u={u} shot={shot} slots={S7_SLOTS} enterAt={0} overlay={overlay} />;
};
