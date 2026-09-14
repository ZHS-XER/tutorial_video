// §2 连接节点：接口颜色 → 拖到节点主体自动匹配（目标节点亮淡蓝氛围光）→ 悬停 ✕ 断开 → 重连 → 写提示词 → Run（假运行）→ 结果出现（叠加真图）
//    → 双击建 Text / Seedance → 逐条连线 → ⌃拖切断两条线 → ⌘Z 撤销 → Run All → 切到跑完的素材项目，视频在节点里播放 → 小结。
// 2026-09-12 修改轮：相机只在 ✕ 删除这一处推近（小目标），其余 z=1；光标 go() 直达、不漂移；连线拖到目标节点时节点外沿亮起产品同款蓝色氛围光。
import React from 'react';
import { OffthreadVideo, Sequence, staticFile } from 'remotion';
import { Shot } from '@engine/camera/choreo';
import { at } from '@engine/camera/camera';
import { typeInto } from '@engine/stage/drives';
import { edgeDraw, injectNodePreview, nodeRunning, nodeGlow, nodeSelected } from '@youart/drivesFlow';
import { typeCE, imageBlurUp, nodePulse } from '@youart/drivesYouart';
import { elAim, handleAim } from '@youart/flowMeta';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import { C, E, F, tl } from '@engine/tokens';
import { seg } from '@engine/ui/ux';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, curAtFrom, addDrive, cutFrom, clicksOf, voOf, focus, type Cap } from './_shared';
import { cursorPosAt } from '@engine/cursor/Cursor';

const P0 = 'ep1-basics-';
const N2 = P0 + 's1-node2', E1 = P0 + 's2-edge1', EH = P0 + 's2-edgehover', DEL = P0 + 's2-deleted', PF = P0 + 's2-prompt-focus', PR = P0 + 's2-prompt';
const DT = P0 + 's2-dbltext', DTS = P0 + 's2-dbltextsearch', TN = P0 + 's2-textnode', TF = P0 + 's2-text-focus', TFI = P0 + 's2-textfilled';
const DV = P0 + 's2-dblvideo', DVS = P0 + 's2-dblvideosearch', VN = P0 + 's2-videonode', E2 = P0 + 's2-edge2', E3 = P0 + 's2-edge3', CUT = P0 + 's2-cut', MSEL = P0 + 's2-multisel', BU = P0 + 's2-built', MB = P0 + 'm-built';
export const S2_SLOTS = [N2, E1, EH, DEL, PF, PR, DT, DTS, TN, TF, TFI, DV, DVS, VN, E2, E3, CUT, MSEL, BU, MB];
const IDS = ['s2-1', 's2-2', 's2-3', 's2-4', 's2-5', 's2-6', 's2-7', 's2-8', 's2-9', 's2-10', 's2-11', 's2-12', 's2-12b', 's2-12c', 's2-13', 's2-14', 's2-15'];
// 2026-09-12 追加：⌃拖切断进 Seedance 的两条线（快照 s2-cut）。切线用 overlay 画一条随光标延伸的虚线。
// 2026-09-13：切断后多选 GPT + Text（快照 s2-multisel），选区右侧出现共用输出蓝点（overlay 复刻，本机产品版本未见该点），拖它到 Seedance → 两条线一起接回（E3）。
const CUT_A = at(1185, 430), CUT_B = at(1185, 780);
const GPT_HEAD = at(1065, 400), TEXT_HEAD = at(675, 580); // 标题栏右半（左半是模型切换器）
const SEL_RECT = { x: 470, y: 380, w: 670, h: 417 }; // s2-multisel 里的选区矩形
const SHARED_DOT = at(SEL_RECT.x + SEL_RECT.w + 10, SEL_RECT.y + SEL_RECT.h / 2);
const VID_BODY_CUT = at(1370, 560); // 切断后 Seedance 变矮，主体中部

const GPT = 'GptImage2Generate-d73a6f20', LOADER = 'LoadImage-170c7710', TEXT = 'Text-ecfad1d4', VID = 'SeedancePro25VideoGenerate-a934527d';
const HIDE_TV = `.react-flow__node[data-id^="Text-"],.react-flow__node[data-id^="Seedance"]{display:none !important}`;
const HIDE_V = `.react-flow__node[data-id^="Seedance"]{display:none !important}`;
const SEARCH = 'input[placeholder="Search nodes..."]';
const HIDE_POPPER = '[data-radix-popper-content-wrapper]{display:none !important}';
const SIGN = 'assets/sign.png'; // 相对快照 html 的路径（public/works/ep1-basics/captures/assets/）
const GPT_PROMPT_SEL = `.react-flow__node[data-id="${GPT}"] .ProseMirror`;
const TEXT_PROMPT_SEL = `.react-flow__node[data-id="${TEXT}"] .ProseMirror, .react-flow__node[data-id="${TEXT}"] textarea`;

// 页面坐标
const GPT_BODY = at(1000, 520);
const EDGE_MID = at(805, 484);
const PROMPT_BOX = at(1000, 470);
const RUN_GPT = at(903, 772);
const DBL_TEXT = at(386, 627);
const TEXT_ROW = at(536, 680);
const TEXT_BOX = at(610, 640);
const DBL_VID = at(1156, 457);
const VID_ROW = at(1284, 536);
const VID_BODY = at(1370, 543);
const VID_BODY2 = at(1370, 600);
const RUN_ALL = at(860, 826);
const VIDEO_RECT = { x: 1230, y: 100, w: 280, h: 280 }; // 素材快照里 Seedance 结果预览
const GLOW_LEAD = 12; // 光标到达目标前多少帧亮起氛围光

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's2-2': 24, 's2-4': 24, 's2-5': 36, 's2-6': 40, 's2-7': 10, 's2-8': 20, 's2-9': 120, 's2-10': 34, 's2-11': 30, 's2-12b': 26, 's2-12c': 70, 's2-13': 30, 's2-14': 30 } });
export const S2_DUR = end + 30;
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);
const TYPE_PROMPT = 'Photorealistic storefront sign for a boutique clothing store. Use this logo in white on a black metal sign, with the tagline WEAR YOUR STYLE.';
const TYPE_TEXT = 'Logo reveal: the sign starts blank, then the logo letters rise out of the signboard one by one, like real acrylic signage. Subtle slow push-in. Hold on the finished sign.';
const CPS_PROMPT = 0.7, CPS_TEXT = 0.35; // 帧/字符

const build = () => {
  const loaderOut = handleAim(N2, 'LoadImage', 'edge-out');
  const gptIn = handleAim(E1, 'GptImage2', 'edge-in-1');
  const delBtn = elAim(EH, 'Delete connection', 'button');
  const loaderOutDel = handleAim(DEL, 'LoadImage', 'edge-out');
  const searchDT = elAim(DT, 'Search nodes', 'input');
  const searchDV = elAim(DV, 'Search nodes', 'input');
  const gptOut = handleAim(VN, 'GptImage2', 'edge-out');
  const textOut = handleAim(E2, 'Text', 'edge-out');
  const vidFirst = handleAim(E2, 'Seedance', 'edge-in-first_frame');
  const vidText = handleAim(E3, 'Seedance', 'edge-in-text_input-1');
  const B = {
    grab1: P('s2-2', 0.3), drop1: 0,
    hover: P('s2-4', 0.3), del: V('s2-4', -4),
    grab2: t['s2-5'].from + 10, drop2: 0,
    focus: P('s2-6', 0.3), typeEnd: 0, blur: 0,
    run: P('s2-7', 0.18), running: 0, result: t['s2-8'].from + 4,
    dblT: P('s2-9', 0.4), searchT: 0, pickT: 0, focusT: 0, typeTEnd: 0, blurT: 0,
    dblV: P('s2-10', 0.35), searchV: 0, pickV: 0,
    grab3: P('s2-11', 0.15), drop3: 0, grab4: 0, drop4: 0,
    cutStart: P('s2-12b', 0.45), cutEnd: 0,
    selGpt: P('s2-12c', 0.12), selText: 0, grabDot: P('s2-12c', 0.62), dropDot: 0, deselect: 0,
    runAll: P('s2-13', 0.35), done: V('s2-13', 8),
  };
  B.cutEnd = B.cutStart + 30; B.selText = B.selGpt + 18; B.dropDot = B.grabDot + 36; B.deselect = B.dropDot + 30;
  B.drop1 = B.grab1 + 40; B.drop2 = B.grab2 + 40;
  B.typeEnd = B.focus + 2 + Math.round(TYPE_PROMPT.length * CPS_PROMPT); B.blur = B.typeEnd + 10;
  B.running = B.run + 4;
  B.searchT = B.dblT + 22; B.pickT = B.searchT + 26; B.focusT = B.pickT + 30; B.typeTEnd = B.focusT + 2 + Math.round(TYPE_TEXT.length * CPS_TEXT); B.blurT = B.typeTEnd + 10;
  B.searchV = B.dblV + 22; B.pickV = B.searchV + 30;
  B.drop3 = B.grab3 + 36; B.grab4 = B.drop3 + 16; B.drop4 = B.grab4 + 36;

  const shot = new Shot(N2, { cx: 768, cy: 432, z: 1 })
    // 1 颜色说明：光标原地不动（图例叠加在右上空白）
    .cur(0, at(1000, 720))
    // 2 连线：从 Image Loader 输出口拖到 GPT 主体
    .go(B.grab1, loaderOut).click(B.grab1).cur(B.drop1, GPT_BODY).cut(B.drop1 + 1, E1, { patchCss: HIDE_TV })
    // 4 悬停连线中点 → ✕ 删除
    .go(B.hover, EDGE_MID).cut(B.hover, EH, { patchCss: HIDE_POPPER }).go(B.del, delBtn).click(B.del, { cut: DEL, cutDelay: 2, patchCss: HIDE_POPPER })
    // 5 重连
    .go(B.grab2, loaderOutDel).click(B.grab2).cur(B.drop2, GPT_BODY).cut(B.drop2 + 1, E1, { patchCss: HIDE_TV })
    // 6 提示词
    .go(B.focus, PROMPT_BOX).click(B.focus, { cut: PF, cutDelay: 1, kind: 'text-field', patchCss: HIDE_TV })
    .curType(B.focus + 2, 'text').interact(B.focus + 2, PROMPT_BOX, 'type', B.typeEnd)
    .curType(B.typeEnd + 4, 'arrow').go(B.blur, at(1000, 720)).click(B.blur, { cut: PR, cutDelay: 1, patchCss: HIDE_TV })
    // 7 Run（假运行）→ 让开按钮 → 8 结果
    .go(B.run, RUN_GPT).click(B.run).go(B.run + 24, at(980, 805), 12)
    // 9 Text 节点
    .go(B.dblT, DBL_TEXT).click(B.dblT).click(B.dblT + 5, { cut: DT, cutDelay: 3, kind: 'dblclick', patchCss: HIDE_V })
    .go(B.searchT, searchDT).click(B.searchT, { kind: 'text-field' }).curType(B.searchT + 2, 'text').interact(B.searchT + 2, searchDT, 'type', B.searchT + 10)
    .cut(B.searchT + 12, DTS, { patchCss: HIDE_V }).curType(B.searchT + 14, 'arrow')
    .go(B.pickT, TEXT_ROW).click(B.pickT, { cut: TN, cutDelay: 4, patchCss: HIDE_V })
    .go(B.focusT, TEXT_BOX).click(B.focusT, { cut: TF, cutDelay: 1, kind: 'text-field', patchCss: HIDE_V })
    .curType(B.focusT + 2, 'text').interact(B.focusT + 2, TEXT_BOX, 'type', B.typeTEnd)
    .curType(B.typeTEnd + 4, 'arrow').go(B.blurT, at(1000, 800)).click(B.blurT, { cut: TFI, cutDelay: 1, patchCss: HIDE_V })
    // 10 Seedance 节点
    .go(B.dblV, DBL_VID).click(B.dblV).click(B.dblV + 5, { cut: DV, cutDelay: 3, kind: 'dblclick' })
    .go(B.searchV, searchDV).click(B.searchV, { kind: 'text-field' }).curType(B.searchV + 2, 'text').interact(B.searchV + 2, searchDV, 'type', B.searchV + 18)
    .cut(B.searchV + 20, DVS).curType(B.searchV + 22, 'arrow')
    .go(B.pickV, VID_ROW).click(B.pickV, { cut: VN, cutDelay: 4 })
    // 11 两条连线
    .go(B.grab3, gptOut).click(B.grab3).cur(B.drop3, VID_BODY).cut(B.drop3 + 1, E2)
    .go(B.grab4, textOut).click(B.grab4).cur(B.drop4, VID_BODY2).cut(B.drop4 + 1, E3)
    // 12b ⌃ + 拖：竖线划过进 Seedance 的两条线 → 12c 多选两个源节点，拖选区右侧的共用输出点到 Seedance
    .go(B.cutStart, CUT_A).click(B.cutStart).cur(B.cutEnd, CUT_B).cut(B.cutEnd + 1, CUT)
    .go(B.selGpt, GPT_HEAD).click(B.selGpt).go(B.selText, TEXT_HEAD).click(B.selText, { cut: MSEL, cutDelay: 2 })
    .go(B.grabDot, SHARED_DOT).click(B.grabDot).cur(B.dropDot, VID_BODY_CUT).cut(B.dropDot + 1, E3)
    .go(B.deselect, at(1000, 790)).click(B.deselect, { cut: E3, cutDelay: 1 })
    // 13 Run All → 素材项目
    .go(B.runAll, RUN_ALL).click(B.runAll, { cut: BU, cutDelay: 1 })
    .go(B.runAll + 24, at(1000, 790), 12).cut(B.done, MB)
    .curHold(S2_DUR);
  // 相机：只为 ✕ 删除按钮推近一次（小目标），重连落定后收回
  shot.zoomIn(B.hover, focus(830, 500, 1.5), 1.5).camHold(B.drop2 + 6).zoomOut(B.drop2 + 10);
  // 驱动：连线生长 + 目标节点氛围光、打字、假运行、结果预览、素材切入
  const preview = (slot: string, nth = 0) => addDrive(shot, slot, injectNodePreview(GPT, SIGN, -1e6), nth);
  addDrive(shot, N2, edgeDraw(LOADER, 'edge-out', B.grab1, B.drop1 + 1, curAtFrom(shot, 0)));
  addDrive(shot, N2, nodeGlow(GPT, B.drop1 - GLOW_LEAD, 1e9));
  addDrive(shot, E1, nodeGlow(GPT, -100, 8), 0);
  addDrive(shot, DEL, edgeDraw(LOADER, 'edge-out', B.grab2 - cutFrom(shot, DEL), B.drop2 + 1 - cutFrom(shot, DEL), curAtFrom(shot, cutFrom(shot, DEL))));
  addDrive(shot, DEL, nodeGlow(GPT, B.drop2 - GLOW_LEAD - cutFrom(shot, DEL), 1e9));
  addDrive(shot, E1, nodeGlow(GPT, -100, 8), 1);
  addDrive(shot, PF, typeCE(GPT_PROMPT_SEL, B.focus + 2 - cutFrom(shot, PF), CPS_PROMPT));
  addDrive(shot, PR, nodeRunning(GPT, B.running - cutFrom(shot, PR), B.result - cutFrom(shot, PR)));
  addDrive(shot, PR, injectNodePreview(GPT, SIGN, B.result - cutFrom(shot, PR), { revealDur: 22 }));
  for (const s of [DT, DTS, TN, TF, TFI, DV, DVS, VN, E2, E3, BU]) preview(s);
  preview(E3, 1); preview(E3, 2); preview(CUT); preview(MSEL);
  addDrive(shot, CUT, nodeSelected(GPT, B.selGpt - cutFrom(shot, CUT)));
  addDrive(shot, CUT, nodeSelected(TEXT, B.selText - cutFrom(shot, CUT)));
  addDrive(shot, E3, nodeSelected(GPT, -1), 1);
  addDrive(shot, E3, nodeSelected(TEXT, -1), 1);
  addDrive(shot, E3, nodeGlow(VID, B.dropDot - GLOW_LEAD - cutFrom(shot, E3, 1), 1e9), 1);
  addDrive(shot, MSEL, nodeGlow(VID, B.dropDot - GLOW_LEAD - cutFrom(shot, MSEL), 1e9));
  addDrive(shot, TN, nodePulse('Text-', 0, 14));
  addDrive(shot, TF, typeCE(TEXT_PROMPT_SEL, B.focusT + 2 - cutFrom(shot, TF), CPS_TEXT));
  addDrive(shot, VN, nodePulse('Seedance', 0, 14));
  addDrive(shot, VN, edgeDraw(GPT, 'edge-out', B.grab3 - cutFrom(shot, VN), B.drop3 + 1 - cutFrom(shot, VN), curAtFrom(shot, cutFrom(shot, VN))));
  addDrive(shot, VN, nodeGlow(VID, B.drop3 - GLOW_LEAD - cutFrom(shot, VN), 1e9));
  addDrive(shot, E2, edgeDraw(TEXT, 'edge-out', B.grab4 - cutFrom(shot, E2), B.drop4 + 1 - cutFrom(shot, E2), curAtFrom(shot, cutFrom(shot, E2))));
  addDrive(shot, E2, nodeGlow(VID, [[-100, 8], [B.drop4 - GLOW_LEAD - cutFrom(shot, E2), 1e9]]));
  addDrive(shot, E3, nodeGlow(VID, -100, 8));
  addDrive(shot, BU, nodeRunning(VID, B.runAll + 4 - cutFrom(shot, BU), 1e9));
  addDrive(shot, MB, imageBlurUp(0, 18));
  const rings: RingCue[] = [
    { at: B.grab1 - 10, aim: { cx: loaderOut.cx, cy: loaderOut.cy, w: 0, h: 0 }, dur: 14, minSize: 30, radius: 15 },
    { at: t['s2-3'].from + 8, aim: { cx: gptIn.cx, cy: gptIn.cy, w: 0, h: 0 }, dur: 40, minSize: 30, radius: 15 },
    { at: B.del - 10, aim: { cx: delBtn.cx, cy: delBtn.cy, w: delBtn.w, h: delBtn.h }, dur: 14, minSize: 30, radius: 15 },
    { at: B.focus - 10, aim: { cx: PROMPT_BOX.cx, cy: 500, w: 262, h: 114 }, dur: 14, radius: 10 },
    { at: B.run - 10, aim: { cx: RUN_GPT.cx, cy: RUN_GPT.cy, w: 68, h: 32 }, dur: 14, radius: 9 },
    { at: B.dblT - 10, aim: { cx: DBL_TEXT.cx, cy: DBL_TEXT.cy, w: 0, h: 0 }, dur: 14, minSize: 44, radius: 22 },
    { at: B.dblV - 10, aim: { cx: DBL_VID.cx, cy: DBL_VID.cy, w: 0, h: 0 }, dur: 14, minSize: 44, radius: 22 },
    { at: t['s2-12'].from + 6, aim: { cx: vidFirst.cx, cy: vidFirst.cy, w: 0, h: 0 }, dur: 40, minSize: 30, radius: 15 },
    { at: t['s2-12'].from + 46, aim: { cx: vidText.cx, cy: vidText.cy, w: 0, h: 0 }, dur: 40, minSize: 30, radius: 15 },
    { at: B.runAll - 10, aim: { cx: RUN_ALL.cx, cy: RUN_ALL.cy, w: 96, h: 42 }, dur: 14, radius: 12 },
    { at: B.grabDot - 10, aim: { cx: SHARED_DOT.cx, cy: SHARED_DOT.cy, w: 0, h: 0 }, dur: 14, minSize: 44, radius: 22 },
  ];
  const keys: KeyCue[] = [
    { at: B.cutStart - 2, keys: ['ctrl', 'drag'], stagger: 2, hold: B.cutEnd - B.cutStart + 2, linger: 24 },
    { at: B.selText - 4, keys: ['shift', 'click'], stagger: 2, hold: 12, linger: 22 },
  ];
  return { shot, rings, keys, B };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

/** 接口颜色图例（页面坐标叠加，s2-1 期间显示在画布右上空白处；2026-09-12 放大：色点 22px、文字 30px，加标题） */
const PortLegend: React.FC<{ u: number; from: number; until: number }> = ({ u, from, until }) => {
  const inn = seg(u, from, from + 12, E.zoom);
  const out = seg(u, until - 10, until, E.inOut);
  if (inn <= 0 || out >= 1) return null;
  const rows = [['#34d399', 'Text'], ['#60a5fa', 'Image'], ['#a78bfa', 'Video'], ['#f472b6', 'Audio']];
  return (
    <div style={{ position: 'absolute', left: 1140, top: 96, padding: '20px 30px 22px', borderRadius: 16, background: 'rgba(20,20,20,0.95)', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 18px 60px rgba(0,0,0,0.6)', opacity: inn * (1 - out), transform: `translateY(${(1 - inn) * 12}px)`, fontFamily: F.sans }}>
      <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(250,250,250,0.55)', marginBottom: 10 }}>PORT COLORS</div>
      {rows.map(([c, l], i) => {
        const ri = seg(u, from + 6 + i * 6, from + 18 + i * 6, E.zoom);
        return (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 18, height: 50, opacity: ri, transform: `translateX(${(1 - ri) * -10}px)` }}>
            <span style={{ width: 22, height: 22, borderRadius: 11, background: c, border: '3px solid #000', boxShadow: `0 0 14px ${c}99` }} />
            <span style={{ fontSize: 30, fontWeight: 600, color: C.paper, letterSpacing: '0.01em' }}>{l}</span>
          </div>
        );
      })}
    </div>
  );
};

/** ⌃拖切线：从起点到光标当前位置的红色虚线（页面坐标），松手时闪一下消失 */
const CutLine: React.FC<{ u: number; from: number; until: number; a: { cx: number; cy: number }; curAt: (f: number) => [number, number] }> = ({ u, from, until, a, curAt }) => {
  if (u < from || u > until + 6) return null;
  const [cx, cy] = u <= until ? curAt(u) : curAt(until);
  const op = u <= until ? 1 : 1 - (u - until) / 6;
  return (
    <svg width={1536} height={864} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', opacity: op }}>
      <line x1={a.cx} y1={a.cy} x2={cx} y2={cy} stroke="#f87171" strokeWidth={2.5} strokeDasharray="8 6" strokeLinecap="round" />
      <circle cx={a.cx} cy={a.cy} r={4} fill="#f87171" />
    </svg>
  );
};

/** 多选后选区右侧的共用输出点（产品：蓝底白边圆点）+ 拖出时从点到光标的连线 */
const SharedDot: React.FC<{ u: number; from: number; grab: number; drop: number; curAt: (f: number) => [number, number] }> = ({ u, from, grab, drop, curAt }) => {
  if (u < from || u > drop) return null;
  const pop = seg(u, from, from + 10, E.zoom);
  const sc = 0.6 + 0.4 * pop + (pop < 1 ? Math.sin(pop * Math.PI) * 0.18 : 0);
  const dragging = u > grab && u <= drop;
  const [cx, cy] = dragging ? curAt(u) : [SHARED_DOT.cx, SHARED_DOT.cy];
  return (
    <>
      {dragging ? (
        <svg width={1536} height={864} style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
          <path d={`M${SHARED_DOT.cx},${SHARED_DOT.cy} C${SHARED_DOT.cx + 80},${SHARED_DOT.cy} ${cx - 80},${cy} ${cx},${cy}`} fill="none" stroke="oklch(0.371 0 0)" strokeWidth={2} />
        </svg>
      ) : null}
      <div style={{ position: 'absolute', left: SHARED_DOT.cx - 14, top: SHARED_DOT.cy - 14, width: 28, height: 28, borderRadius: 14, background: '#3b82f6', border: '3px solid #fff', boxShadow: '0 0 0 2px rgba(59,130,246,0.35), 0 4px 14px rgba(0,0,0,0.5)', opacity: pop, transform: `scale(${sc})`, pointerEvents: 'none' }} />
    </>
  );
};

export const S2_CAPTIONS: Cap[] = capsOf(t, IDS, 10, ['s2-13']);
export const S2_KEYS = () => get().keys;
export const S2_VO = voOf(t, IDS);
export const S2_SFX = () => clicksOf(get().shot.clicks);
export const S2Connect: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings, B } = get();
  const videoOn = u >= B.done + 6;
  const overlay = (
    <>
      <TargetRing u={u} cues={rings} />
      <PortLegend u={u} from={t['s2-1'].from + 8} until={t['s2-2'].from + 20} />
      <CutLine u={u} from={B.cutStart} until={B.cutEnd} a={CUT_A} curAt={(f) => cursorPosAt(shot.curKeys, f)} />
      <SharedDot u={u} from={B.selText + 4} grab={B.grabDot} drop={B.dropDot} curAt={(f) => cursorPosAt(shot.curKeys, f)} />
      {videoOn ? (
        <Sequence from={tl(B.done + 6)} layout="none">
          <div style={{ position: 'absolute', left: VIDEO_RECT.x, top: VIDEO_RECT.y, width: VIDEO_RECT.w, height: VIDEO_RECT.h, overflow: 'hidden', background: '#000', opacity: seg(u, B.done + 6, B.done + 14, E.zoom) }}>
            <OffthreadVideo src={staticFile('works/ep1-basics/captures/assets/sign-video.mp4')} muted style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </Sequence>
      ) : null}
    </>
  );
  return <Stage u={u} shot={shot} slots={S2_SLOTS} enterAt={0} overlay={overlay} />;
};
