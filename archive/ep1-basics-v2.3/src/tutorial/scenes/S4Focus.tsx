// §4 Focus view（v2，2026-09-09 重采）：缩小视图起步 → Shift 框选两节点 → F 只框选中 → 双击聚焦 → Fit View 全览。
// 三步都是"放大"，视觉单调递进（旧版在全览态框选、F 反而缩小：产品 fitSelection 上限 zoom=1）。
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { viewportLerp, marqueeBox, parseViewport, easeInOutCubic } from '../../../film/drivesFlow';
import { viewportOf } from '../../../film/flowMeta';
import { Stage, curAtFrom, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const ST = 'ep1-s4b-start', SEL = 'ep1-s4b-sel2', F2 = 'ep1-s4b-fit2', F1 = 'ep1-s4b-focus1', FA = 'ep1-s4b-fitall';
export const S4_SLOTS = [ST, SEL, F2, F1, FA];
const FIT_BTN = at(96, 1048);
const MARQUEE_A: [number, number] = [488, 270], MARQUEE_B: [number, number] = [800, 772]; // 紧贴 Image Loader + Text 的外扩框
const BLANK_F2 = at(700, 950); // fit2 态空白处（选区工具栏在 y 826–858）
const KEY_LAG = 6;
const B = { marqueeStart: 46, marqueeEnd: 96, keyF: 132, deselect: 208, dbl: 240, fit: 332, end: 440 } as const;
const VL = 26; // viewport 插值时长
// 框选落定后 Radix 会在选区工具栏下方弹出 hover 子工具栏（采集时光标恰在 Auto Layout 上），隐藏
const HIDE_HOVER = '[role="group"][aria-label="Default / Horizontal / Vertical"]{display:none !important}';

/** Image Loader 标题栏抓点（flow 坐标 480+120, 160+19）在某 viewport 下的页面坐标 */
const HEAD_FLOW: [number, number] = [600, 179];
const headAt = (vp: { tx: number; ty: number; s: number }) => at(vp.tx + HEAD_FLOW[0] * vp.s, vp.ty + HEAD_FLOW[1] * vp.s);
const lerpVp = (a: string, b: string, t: number) => {
  const A = parseViewport(a), Bv = parseViewport(b);
  return { tx: A.tx + (Bv.tx - A.tx) * t, ty: A.ty + (Bv.ty - A.ty) * t, s: Math.exp(Math.log(A.s) + (Math.log(Bv.s) - Math.log(A.s)) * t) };
};

const build = () => {
  const dblCut = B.dbl + 5 + 1;
  const shot = new Shot(ST, { cx: 960, cy: 540, z: 1.0 })
    .cur(10, at(700, 950)).cur(38, at(...MARQUEE_A)).click(B.marqueeStart)
    .cur(B.marqueeEnd, at(...MARQUEE_B)).cut(B.marqueeEnd + 2, SEL, { patchCss: HIDE_HOVER })
    .cur(118, BLANK_F2).curHold(B.keyF)
    .cut(B.keyF + KEY_LAG, F2)
    .click(B.deselect)
    .cur(232, headAt(parseViewport(viewportOf(F2)))).click(B.dbl).click(B.dbl + 5, { cut: F1, cutDelay: 1 });
  // 光标跟着节点标题栏一起进入聚焦位（鼠标"仍在那个节点上"）
  for (const k of [6, 12, 18, VL]) shot.cur(dblCut + k, headAt(lerpVp(viewportOf(F2), viewportOf(F1), easeInOutCubic(k / VL))));
  shot
    .curHold(300)
    .cur(326, FIT_BTN).click(B.fit, { cut: FA, cutDelay: 2 })
    .cur(380, at(700, 600)).curHold(B.end)
    .cam(30, { cx: 960, cy: 540, z: 1.3 }).camHold(B.end - 40).zoomOut(B.end - 36);
  const set = (slot: string, drive: (typeof shot.cuts)[number]['drive']) => { shot.cuts.find((c) => c.slot === slot)!.drive = drive; };
  set(ST, marqueeBox(MARQUEE_A, B.marqueeStart, B.marqueeEnd + 2, curAtFrom(shot, 0)));
  set(F2, viewportLerp(viewportOf(SEL), viewportOf(F2), 0, VL));
  set(F1, viewportLerp(viewportOf(F2), viewportOf(F1), 0, VL));
  set(FA, viewportLerp(viewportOf(F1), viewportOf(FA), 0, VL));
  return shot;
};
let cached: Shot | null = null; const getShot = () => (cached ??= build());

export const S4_CAPTIONS: Cap[] = [
  { from: 10, until: 112, text: 'Shift-drag to select a few nodes.' },
  { from: 118, until: 200, text: 'Press *F* to frame just those.' },
  { from: 206, until: 296, text: '*Double-click* a node to focus on it.' },
  { from: 302, until: 404, text: '*Fit View* (or F) frames everything.' },
];
export const S4_KEYS: KeyCue[] = [
  { at: B.marqueeStart - 2, keys: ['shift', 'drag'], stagger: 2, hold: B.marqueeEnd - B.marqueeStart + 2, linger: 24 },
  { at: B.keyF, keys: ['f'], hold: 10, linger: 34 },
];
export const S4_SFX: Cue[] = clicksOf(getShot().clicks);
export const S4Focus: React.FC<{ u: number }> = ({ u }) => <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S4_SLOTS} enterAt={0} />;
