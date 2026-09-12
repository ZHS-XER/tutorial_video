// §6 复用素材（素材项目）：Media Assets 面板 → 悬停店招图 → 拖到画布生成新 Image Loader（落在 Seedance 右侧空位，不重叠）→ /assets 页面一瞥
// 2026-09-12 修改轮：全程 z=1 不推近；拖入的节点用 patchCss 挪到右侧空位；光标 go() 直达不漂移。
import React from 'react';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { dragGhost } from '@youart/drivesFlow';
import { nodePulse } from '@youart/drivesYouart';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, curAtFrom, addDrive, cutFrom, clicksOf, voOf, type Cap } from './_shared';

const P0 = 'ep1-basics-';
const TD = P0 + 'm-tidy', AS = P0 + 'm-assets', AH = P0 + 'm-assetshover', AD = P0 + 'm-assetdropped', AP = P0 + 'm-assetspage';
export const S6_SLOTS = [TD, AS, AH, AD, AP];
const IDS = ['s6-1', 's6-2', 's6-3'];
const ASSETS_BTN = at(36, 419);
const THUMB = at(304, 581);
/** 成片里的落点：Seedance 右侧空位（采集时落在 (1000,700) 与 Seedance 重叠） */
const DROP = at(1170, 690);
// 拖入节点的页面左上角 = 落点 + (0, −192)；换算到 flow 坐标（视口 translate(108.049,105.024) scale(0.666618)）
const MOVE_DROPPED = `.react-flow__node[data-id="LoadImage-e1d5c794"]{transform:translate(${((DROP.cx - 108.049) / 0.666618).toFixed(1)}px, ${((DROP.cy - 192 - 105.024) / 0.666618).toFixed(1)}px) !important}`;
// 面板网格只留前三格（视频 / 店招图 / logo）；/assets 页只留 Today 分组前三张
const HIDE_GRID = '.grid.gap-2 > *:nth-child(n+4){display:none !important}';
const HIDE_PAGE = '.space-y-6 > section:not(:first-child){display:none !important} .space-y-6 > section:first-child .flex.-ml-4 > .pl-4:nth-child(n+4){display:none !important}';

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's6-1': 30, 's6-2': 30, 's6-3': 20 } });
export const S6_DUR = end + 30;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const B = { panel: P('s6-1', 0.5), hover: t['s6-2'].from + 6, grab: P('s6-2', 0.15), drop: 0, page: P('s6-3', 0.5) };
  B.drop = B.grab + 36;
  const shot = new Shot(TD, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 780)).go(B.panel, ASSETS_BTN).click(B.panel, { cut: AS, cutDelay: 2, patchCss: HIDE_GRID })
    .go(B.hover, THUMB).cut(B.hover, AH, { patchCss: HIDE_GRID })
    .click(B.grab).cur(B.drop, DROP).cut(B.drop + 2, AD, { patchCss: MOVE_DROPPED })
    .go(B.drop + 30, at(1000, 800), 14).curHold(B.page - 2)
    .cut(B.page, AP, { patchCss: HIDE_PAGE })
    .cur(B.page, at(900, 520)).curHold(S6_DUR);
  addDrive(shot, AH, dragGhost('.grid.gap-2 > *:nth-child(2) img', B.grab - cutFrom(shot, AH), B.drop + 2 - cutFrom(shot, AH), curAtFrom(shot, cutFrom(shot, AH)), [-70, -70], 0.92));
  addDrive(shot, AD, nodePulse('LoadImage-e1', 0, 14));
  const rings: RingCue[] = [
    { at: B.panel - 10, aim: { cx: ASSETS_BTN.cx, cy: ASSETS_BTN.cy, w: 36, h: 36 }, dur: 14, radius: 10 },
    { at: B.grab - 10, aim: { cx: THUMB.cx, cy: THUMB.cy, w: 139, h: 139 }, dur: 14, radius: 10 },
  ];
  return { shot, rings };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S6_CAPTIONS: Cap[] = capsOf(t, IDS);
export const S6_KEYS: KeyCue[] = [];
export const S6_VO = voOf(t, IDS);
export const S6_SFX = () => clicksOf(get().shot.clicks);
export const S6Assets: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings } = get();
  return <Stage u={u} shot={shot} slots={S6_SLOTS} enterAt={0} overlay={<TargetRing u={u} cues={rings} />} />;
};
