// §4 Focus view（素材项目）：缩小视图起步 → ⇧ 框选左列两节点 → F 只框选中 → 双击 GPT 主体聚焦 → 缩放菜单 Fit view 全览 → 小结
//    视口变化全部用 viewportLerp 复刻（对数缩放 + 线性平移）。2026-09-12：光标 go() 直达不漂移，动作落在台词末尾。
import React from 'react';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { viewportLerp, marqueeBox } from '@youart/drivesFlow';
import { viewportOf } from '@youart/flowMeta';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, curAtFrom, addDrive, clicksOf, voOf, focus, type Cap } from './_shared';

const P0 = 'ep1-basics-';
const ZO = P0 + 'm-zoomout', SEL = P0 + 'm-sel2', F2 = P0 + 'm-fit2', FO = P0 + 'm-focus1', ZM = P0 + 'm-zoommenu', FA = P0 + 'm-fitall';
export const S4_SLOTS = [ZO, SEL, F2, FO, ZM, FA];
const IDS = ['s4-1', 's4-2', 's4-3', 's4-4', 's4-5'];
const MQ_A: [number, number] = [436, 178], MQ_B: [number, number] = [644, 621];
const GPT_BODY_F2 = at(1198, 586); // fit2 视口下 GPT 卡片 Sources 行右侧空白
const ZOOM_BTN = at(40, 832);
const FIT_VIEW = at(116, 749);
const BLANK = at(250, 780);
const KEY_LAG = 6;
const VL = 28;

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's4-1': 24, 's4-2': 26, 's4-3': 40, 's4-4': 30 } });
export const S4_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const B = {
    mqStart: P('s4-1', 0.5), mqEnd: 0,
    keyF: P('s4-2', 0.3),
    deselect: t['s4-3'].from + 6, dbl: V('s4-3', -6),
    zoomBtn: P('s4-4', 0.5), fitView: V('s4-4', -6),
  };
  B.mqEnd = B.mqStart + 40;
  const shot = new Shot(ZO, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 760)).go(B.mqStart, at(...MQ_A)).click(B.mqStart).cur(B.mqEnd, at(...MQ_B)).cut(B.mqEnd + 2, SEL)
    .cut(B.keyF + KEY_LAG, F2)
    .go(B.deselect, BLANK).click(B.deselect)
    .go(B.dbl, GPT_BODY_F2).click(B.dbl).click(B.dbl + 5, { cut: FO, cutDelay: 2, kind: 'dblclick' })
    .go(B.zoomBtn, ZOOM_BTN).click(B.zoomBtn, { cut: ZM, cutDelay: 2 })
    .go(B.fitView, FIT_VIEW).click(B.fitView, { cut: FA, cutDelay: 2 })
    .go(B.fitView + 36, at(700, 780), 14).curHold(S4_DUR);
  // 相机：几乎全程 z=1（缩放由产品视口完成）；缩放菜单是小目标，推近一次
  shot.zoomIn(B.zoomBtn, focus(240, 700, 1.5), 1.5).camHold(B.fitView + 4).zoomOut(B.fitView + 8);
  addDrive(shot, ZO, marqueeBox(MQ_A, B.mqStart, B.mqEnd + 2, curAtFrom(shot, 0)));
  addDrive(shot, F2, viewportLerp(viewportOf(SEL), viewportOf(F2), 0, VL));
  addDrive(shot, FO, viewportLerp(viewportOf(F2), viewportOf(FO), 0, VL));
  addDrive(shot, FA, viewportLerp(viewportOf(FO), viewportOf(FA), 0, VL));
  const rings: RingCue[] = [
    { at: B.dbl - 10, aim: { cx: GPT_BODY_F2.cx, cy: GPT_BODY_F2.cy, w: 0, h: 0 }, dur: 14, minSize: 44, radius: 22 },
    { at: B.zoomBtn - 10, aim: { cx: ZOOM_BTN.cx, cy: ZOOM_BTN.cy, w: 48, h: 32 }, dur: 14, radius: 8 },
    { at: B.fitView - 10, aim: { cx: FIT_VIEW.cx, cy: FIT_VIEW.cy, w: 200, h: 32 }, dur: 14, radius: 8 },
  ];
  const keys: KeyCue[] = [
    { at: B.mqStart - 2, keys: ['shift', 'drag'], stagger: 2, hold: B.mqEnd - B.mqStart + 2, linger: 24 },
    { at: B.keyF, keys: ['f'], hold: 10, linger: 36 },
  ];
  return { shot, rings, keys };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S4_CAPTIONS: Cap[] = capsOf(t, IDS, 10, ['s4-4']);
export const S4_KEYS = () => get().keys;
export const S4_VO = voOf(t, IDS);
export const S4_SFX = () => clicksOf(get().shot.clicks);
export const S4Focus: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings } = get();
  return <Stage u={u} shot={shot} slots={S4_SLOTS} enterAt={0} overlay={<TargetRing u={u} cues={rings} />} />;
};
