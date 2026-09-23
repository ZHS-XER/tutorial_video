// §5 自动排版 + 快捷键面板（素材项目）：⌘A → L（节点滑到新位置 + 视口 fit）→ 取消选中再 ⌘A（让选区工具栏"出现"成为可见事件）
//    → 悬停 Auto Layout ▸ Horizontal → 再悬停 ▸ Vertical → 回到 Default → 取消选中 → (i) 菜单 → Keyboard shortcuts 面板 → Esc。
// 2026-09-12 修改轮：选中态期间隐藏底部中央 Run 胶囊（与选区工具栏贴在一起观感差）、字幕放顶部；
//    Horizontal 布局下"再次悬停 Auto Layout"的菜单由 injectAlMenu 注入产品同款 DOM（该快照采集时菜单未开）；光标 go() 直达不漂移。
import React from 'react';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { viewportLerp, nodesLerp, hideAll, type NodeMove } from '@youart/drivesFlow';
import { viewportOf, flowNode, nodeFlowPos, elAim } from '@youart/flowMeta';
import { compose } from '@engine/stage/drives';
import type { DriveFn } from '@engine/stage/HtmlSnap';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, addDrive, cutFrom, clicksOf, voOf, focus, type Cap } from './_shared';
import { AL_MENU_HTML } from './_almenu';

const P0 = 'ep1-basics-';
const FA = P0 + 'm-fitall', SA = P0 + 'm-selall', AR = P0 + 'm-arranged', TD = P0 + 'm-tidy', AL = P0 + 'm-almenu', HZ = P0 + 'm-horizontal', VT = P0 + 'm-vertical', IM = P0 + 'm-infomenu', KS = P0 + 'm-shortcuts';
export const S5_SLOTS = [FA, SA, AR, TD, AL, HZ, VT, IM, KS];
const IDS = ['s5-1', 's5-2', 's5-3', 's5-4', 's5-5', 's5-6'];
const NODES = ['LoadImage', 'GptImage2', 'Seedance', 'Text-'];
const INFO = at(192, 832);
const BLANK = at(250, 780);
const HIDE_TOAST = '[data-sonner-toaster],[data-sonner-toast],[role="status"]{display:none !important}';
/** 选中态期间隐藏底部中央的 Run 胶囊（选区工具栏正压在它上面） */
const HIDE_PILL = '[data-feedback-recorder-avoid="bottom"]{display:none !important}';
/** Auto Layout 悬停菜单改为向上弹出（产品向下弹时贴着画面底边，被裁掉看不清） */
const FLIP_MENU = '[role="group"][aria-label="Default / Horizontal / Vertical"]{top:auto !important;bottom:100% !important;margin-top:0 !important;margin-bottom:6px !important}';
const SEL_CSS = HIDE_PILL + FLIP_MENU;
/** ⌘A 刚选中、还未 L 时节点铺满画面，选区工具栏被产品排到画面底边外（只露一半）——这一态先不显示，L 之后再出现 */
const HIDE_TOOLBAR = 'div[style*="z-index: 40"][style*="translateX(-50%)"]{display:none !important}';
/** 菜单翻到按钮上方后，图标位置关于按钮中心线镜像（图标中心在按钮中心 ±43px） */
const flipY = (icon: { cx: number; cy: number }, btn: { cy: number }) => at(icon.cx, 2 * btn.cy - icon.cy);
const KEY_LAG = 6;
const D = 30;

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's5-1': 30, 's5-2': 40, 's5-3': 170, 's5-4': 70, 's5-5': 40, 's5-6': 20 } });
export const S5_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const moves = (from: string, to: string): NodeMove[] => NODES.map((p) => ({ id: flowNode(to, p).id!, from: nodeFlowPos(from, p), to: nodeFlowPos(to, p) }));
const both = (a: string, b: string, d = D) => compose(viewportLerp(viewportOf(a), viewportOf(b), 0, d), nodesLerp(moves(a, b), 0, d));

/** 在 Auto Layout 按钮下方注入产品同款悬停菜单（Default / Horizontal / Vertical），fromF 起 6 帧淡入 */
const injectAlMenu =
  (fromF: number): DriveFn =>
  (doc, f) => {
    const btn = Array.from(doc.querySelectorAll('button')).find((b) => /^(Auto Layout|整理节点)$/.test((b.textContent || '').trim())) as HTMLElement | undefined;
    const wrap = btn?.parentElement as HTMLElement | null;
    if (!wrap) return;
    let menu = wrap.querySelector('[data-al-menu]') as HTMLElement | null;
    if (!menu) {
      const tpl = doc.createElement('template');
      tpl.innerHTML = AL_MENU_HTML;
      menu = tpl.content.firstElementChild as HTMLElement;
      menu.setAttribute('data-al-menu', '1');
      wrap.appendChild(menu);
    }
    const op = Math.max(0, Math.min(1, (f - fromF + 1) / 6));
    const disp = f < fromF ? 'none' : '';
    if (menu.style.display !== disp) menu.style.display = disp;
    if (menu.style.opacity !== String(op)) menu.style.opacity = String(op);
  };

const build = () => {
  const alAR = elAim(AL, 'Auto Layout', 'button');
  const horizontal = flipY(elAim(AL, 'Horizontal', 'button'), alAR);
  const alHZ = elAim(HZ, 'Auto Layout', 'button');
  const verticalHZ = at(alHZ.cx + 36, alHZ.cy - 43); // 注入菜单里第三个图标（菜单向上弹：按钮上方 6px，图标间距 36）
  const alVT = elAim(VT, 'Auto Layout', 'button');
  const dfltVT = flipY(elAim(VT, 'Default', 'button'), alVT);
  const ksItem = elAim(IM, 'Keyboard shortcuts', 'button');
  const B = {
    selAll: V('s5-1', -8),
    keyL: P('s5-2', 0.3),
    deselect: t['s5-3'].from + 8, reselect: P('s5-3', 0.4), hoverAL: V('s5-3', -12), horizontal: V('s5-3', 30), hoverAL2: 0, vertical: 0,
    hoverAL3: P('s5-4', 0.35), dflt: V('s5-4', -6), deselect2: V('s5-4', 30),
    info: P('s5-5', 0.45), ks: V('s5-5', 4),
    esc: V('s5-6', -4),
  };
  B.hoverAL2 = B.horizontal + 60; B.vertical = B.hoverAL2 + 30;
  const shot = new Shot(FA, { cx: 768, cy: 432, z: 1 })
    .cur(0, at(700, 780))
    .cut(B.selAll + KEY_LAG, SA, { patchCss: SEL_CSS + HIDE_TOOLBAR })
    .cut(B.keyL + KEY_LAG, AR, { patchCss: SEL_CSS })
    // 取消选中 → 再 ⌘A：选区工具栏的出现成为一个可见事件
    .go(B.deselect, BLANK).click(B.deselect, { cut: TD, cutDelay: 1 })
    .cut(B.reselect + KEY_LAG, AR, { patchCss: SEL_CSS })
    .go(B.hoverAL, alAR).cut(B.hoverAL, AL, { patchCss: SEL_CSS })
    .go(B.horizontal, horizontal).click(B.horizontal, { cut: HZ, cutDelay: 2, patchCss: SEL_CSS })
    .go(B.hoverAL2, alHZ)
    .go(B.vertical, verticalHZ).click(B.vertical, { cut: VT, cutDelay: 2, patchCss: SEL_CSS })
    .go(B.hoverAL3, alVT)
    .go(B.dflt, dfltVT).click(B.dflt, { cut: AR, cutDelay: 2, patchCss: HIDE_TOAST + SEL_CSS })
    .go(B.deselect2, BLANK).click(B.deselect2, { cut: TD, cutDelay: 1 })
    .go(B.info, INFO).click(B.info, { cut: IM, cutDelay: 2 })
    .go(B.ks, ksItem).click(B.ks, { cut: KS, cutDelay: 2 })
    .go(B.ks + 30, at(1200, 760), 14).curHold(B.esc)
    .cut(B.esc + KEY_LAG, TD)
    .curHold(S5_DUR);
  // 相机：排版过程保持全览；(i) 菜单推近，快捷键面板略推近读得清
  shot.zoomIn(B.info, focus(280, 720, 1.6), 1.6).camHold(B.ks + 2).cam(B.ks + 30, { ...focus(768, 440, 1.15), z: 1.15 }).camHold(B.esc + 4).zoomOut(B.esc + 8);
  addDrive(shot, AR, both(SA, AR), 0);
  addDrive(shot, HZ, both(AR, HZ));
  addDrive(shot, HZ, injectAlMenu(B.hoverAL2 + 2 - cutFrom(shot, HZ)));
  addDrive(shot, VT, both(HZ, VT));
  addDrive(shot, AR, both(VT, AR), 2);
  addDrive(shot, KS, hideAll('[data-sonner-toast]'));
  const rings: RingCue[] = [
    { at: B.hoverAL - 10, aim: { cx: alAR.cx, cy: alAR.cy, w: alAR.w, h: alAR.h }, dur: 14, radius: 8 },
    { at: B.horizontal - 10, aim: { cx: horizontal.cx, cy: horizontal.cy, w: 32, h: 32 }, dur: 14, radius: 8 },
    { at: B.vertical - 10, aim: { cx: verticalHZ.cx, cy: verticalHZ.cy, w: 32, h: 32 }, dur: 14, radius: 8 },
    { at: B.dflt - 10, aim: { cx: dfltVT.cx, cy: dfltVT.cy, w: 32, h: 32 }, dur: 14, radius: 8 },
    { at: B.info - 10, aim: { cx: INFO.cx, cy: INFO.cy, w: 40, h: 40 }, dur: 14, radius: 10 },
    { at: B.ks - 10, aim: { cx: ksItem.cx, cy: ksItem.cy, w: ksItem.w, h: ksItem.h }, dur: 14, radius: 8 },
  ];
  const keys: KeyCue[] = [
    { at: B.selAll, keys: ['cmd', 'a'], hold: 10, linger: 28 },
    { at: B.keyL, keys: ['l'], hold: 10, linger: 44 },
    { at: B.reselect, keys: ['cmd', 'a'], hold: 10, linger: 28 },
    { at: B.esc, keys: ['esc'], hold: 10, linger: 26 },
  ];
  return { shot, rings, keys };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

export const S5_CAPTIONS: Cap[] = capsOf(t, IDS, 10, ['s5-1', 's5-2', 's5-3', 's5-4', 's5-5']);
export const S5_KEYS = () => get().keys;
export const S5_VO = voOf(t, IDS);
export const S5_SFX = () => clicksOf(get().shot.clicks);
export const S5Layout: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings } = get();
  return <Stage u={u} shot={shot} slots={S5_SLOTS} enterAt={0} overlay={<TargetRing u={u} cues={rings} />} />;
};
