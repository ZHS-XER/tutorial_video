// §3 展开/收起（素材项目，四节点带结果）：点箭头收起 → 点选节点（立刻出现蓝色选中框）+ ⌘[ / ⌘] → 右键 Collapse All → 右键 Expand All → Auto-collapse → 小结
// 2026-09-12 修改轮：光标 go() 直达、不漂移；点选后用 nodeSelected 立刻给出选中反馈；动作落在台词末尾。
import React from 'react';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { nodeSelected } from '@youart/drivesFlow';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, addDrive, cutFrom, clicksOf, voOf, focus, type Cap } from './_shared';

const P0 = 'ep1-basics-';
const MB = P0 + 'm-built', C1 = P0 + 'm-c1', C2 = P0 + 'm-c2', X2 = P0 + 'm-x2', CTX1 = P0 + 'm-ctx1', AC = P0 + 'm-allcollapsed', CTX2 = P0 + 'm-ctx2', AX = P0 + 'm-allexpanded', CTX3 = P0 + 'm-ctx3', AUTO = P0 + 'm-autoc';
export const S3_SLOTS = [MB, C1, C2, X2, CTX1, AC, CTX2, AX, CTX3, AUTO];
const IDS = ['s3-1', 's3-2', 's3-3', 's3-4', 's3-5', 's3-6', 's3-7'];
const GPT_M = 'GptImage2Generate-c22f3d01'; // 素材项目里的 GPT 节点
const CHEVRON = at(729, 282);
const GPT_HEAD = at(1065, 400);
const RC = at(300, 400);
const COLLAPSE_ALL = at(398, 671);
const EXPAND_ALL = at(398, 671);
const AUTO_ITEM = at(398, 703);
const KEY_LAG = 6;

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's3-1': 24, 's3-2': 30, 's3-3': 20, 's3-4': 34, 's3-5': 30, 's3-6': 24 } });
export const S3_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const B = {
    chevron: V('s3-1', -6),
    select: P('s3-2', 0.4), kCollapse: V('s3-2', -4),
    kExpand: P('s3-3', 0.35),
    rc1: P('s3-4', 0.6), collapseAll: V('s3-4', 4),
    rc2: P('s3-5', 0.2), expandAll: V('s3-5', -10),
    rc3: P('s3-6', 0.35), auto: P('s3-6', 0.62),
  };
  const shot = new Shot(MB, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 760)).go(B.chevron, CHEVRON).click(B.chevron, { cut: C1, cutDelay: 2 })
    .go(B.select, GPT_HEAD).click(B.select)
    .cut(B.kCollapse + KEY_LAG, C2)
    .cut(B.kExpand + KEY_LAG, X2)
    .go(B.rc1, RC).click(B.rc1, { cut: CTX1, cutDelay: 2 })
    .go(B.collapseAll, COLLAPSE_ALL).click(B.collapseAll, { cut: AC, cutDelay: 3 })
    .go(B.rc2, RC).click(B.rc2, { cut: CTX2, cutDelay: 2 })
    .go(B.expandAll, EXPAND_ALL).click(B.expandAll, { cut: AX, cutDelay: 3 })
    .go(B.rc3, RC).click(B.rc3, { cut: CTX3, cutDelay: 2 })
    .go(B.auto, AUTO_ITEM).click(B.auto, { cut: AUTO, cutDelay: 3 })
    .go(B.auto + 30, at(700, 780), 14).curHold(S3_DUR);
  // 相机：箭头 / 选中 / ⌘[ ⌘] 全屏就看得清（2026-09-12 用户：推近反而截断），只为右键菜单推近一次，结尾收回
  shot.zoomIn(B.rc1, focus(420, 560, 1.35), 1.35).camHold(B.auto + 10).zoomOut(B.auto + 16);
  // 点选 GPT 节点后立刻出现选中框（快照 C1 里它还未被选中）
  addDrive(shot, C1, nodeSelected(GPT_M, B.select - cutFrom(shot, C1)));
  const rings: RingCue[] = [
    { at: B.chevron - 10, aim: { cx: CHEVRON.cx, cy: CHEVRON.cy, w: 24, h: 24 }, dur: 14, minSize: 34, radius: 12 },
    { at: B.select - 10, aim: { cx: 1000, cy: 400, w: 260, h: 34 }, dur: 14, radius: 10 },
    { at: B.collapseAll - 10, aim: { cx: COLLAPSE_ALL.cx, cy: COLLAPSE_ALL.cy, w: 184, h: 32 }, dur: 14, radius: 8 },
    { at: B.expandAll - 10, aim: { cx: EXPAND_ALL.cx, cy: EXPAND_ALL.cy, w: 184, h: 32 }, dur: 14, radius: 8 },
    { at: B.auto - 10, aim: { cx: AUTO_ITEM.cx, cy: AUTO_ITEM.cy, w: 184, h: 32 }, dur: 14, radius: 8 },
  ];
  const keys: KeyCue[] = [
    { at: B.kCollapse, keys: ['cmd', '['], hold: 10, linger: 30 },
    { at: B.kExpand, keys: ['cmd', ']'], hold: 10, linger: 34 },
    { at: B.rc1, keys: ['right click'], hold: 10, linger: 28 },
    { at: B.rc2, keys: ['right click'], hold: 10, linger: 28 },
    { at: B.rc3, keys: ['right click'], hold: 10, linger: 28 },
  ];
  return { shot, rings, keys };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S3_CAPTIONS: Cap[] = capsOf(t, IDS);
export const S3_KEYS = () => get().keys;
export const S3_VO = voOf(t, IDS);
export const S3_SFX = () => clicksOf(get().shot.clicks);
export const S3Collapse: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings } = get();
  return <Stage u={u} shot={shot} slots={S3_SLOTS} enterAt={0} overlay={<TargetRing u={u} cues={rings} />} />;
};
