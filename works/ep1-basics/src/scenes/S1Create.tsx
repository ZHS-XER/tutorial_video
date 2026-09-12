// §1 创建节点：/workflows → New Workflow → 空画布 → + 菜单（分组 / 悬停子菜单 / 搜索）→ 拖 Image Loader 到画布 → 上传 logo
//    → 双击空白 → 搜索 GPT Image 2 → 建节点。
// 2026-09-12 修改轮：全程 z=1 不推近（125% 采集下全屏看得清）；光标只在"话快说完"时用 go() 直达目标，其余时间原地不动；
//    双击点右移到 (856,437)，弹出的搜索框用 patchCss 同步挪位，离 Image Loader 远一点。
// 2026-09-12 追加：上传 logo 之后加两种加图方式——从 Finder 拖文件到画布、⌘C/⌘V 粘贴多个文件（Finder 窗口是真实截图叠加，
//    落下的节点来自快照 s1-files），随后选中三枚新节点按 Delete 删掉回到原状态。
import React from 'react';
import { Img, staticFile } from 'remotion';
import { Shot } from '@engine/camera/choreo';
import { at, type Aim } from '@engine/camera/camera';
import { typeInto } from '@engine/stage/drives';
import { dragGhost, nodeSelected } from '@youart/drivesFlow';
import { cursorPosAt } from '@engine/cursor/Cursor';
import { seg } from '@engine/ui/ux';
import { C, E, F } from '@engine/tokens';
import { imageBlurUp, nodePulse } from '@youart/drivesYouart';
import { elAim } from '@youart/flowMeta';
import { TargetRing, type RingCue } from '@engine/ui/TargetRing';
import type { KeyCue } from '@engine/ui/kbd';
import { Stage, seqLines, capsOf, curAtFrom, addDrive, cutFrom, clicksOf, voOf, type Cap } from './_shared';

const W = 'ep1-basics-s1-workflows', E0 = 'ep1-basics-s1-empty', M = 'ep1-basics-s1-menu', SUB = 'ep1-basics-s1-submenu', SR = 'ep1-basics-s1-search';
const N1 = 'ep1-basics-s1-node1', LD = 'ep1-basics-s1-loaded', D = 'ep1-basics-s1-dbl', DS = 'ep1-basics-s1-dblsearch', N2 = 'ep1-basics-s1-node2', FILES = 'ep1-basics-s1-files';
export const S1_SLOTS = [W, E0, M, SUB, SR, N1, LD, FILES, D, DS, N2];
const IDS = ['s1-1', 's1-2', 's1-3', 's1-4', 's1-5', 's1-6', 's1-7', 's1-7b', 's1-7c', 's1-7d', 's1-8', 's1-9', 's1-10'];
// s1-files 快照：舞台上多出三枚已上传的 Image Loader（MCP 建好后已删除），GPT/Text/Seedance 与 toast 在成片里隐藏
const TEE = 'node-cf1592bb5a29490aabd0b2e217846218', HOODIE = 'node-f558a1c8ce5d4d4a9161af99acfb5ce5', TOTE = 'node-ff88f4918e0f47b984c01abc9811552f';
const HIDE_GTV = '.react-flow__node[data-id^="GptImage2"],.react-flow__node[data-id^="Text-"],.react-flow__node[data-id^="Seedance"]{display:none !important}';
const HIDE_TOAST = '[data-sonner-toaster],[data-sonner-toast],[role="status"]{display:none !important}';
const HIDE_HT = `.react-flow__node[data-id="${HOODIE}"],.react-flow__node[data-id="${TOTE}"]{display:none !important}`;
const HIDE_EDGES = '.react-flow__edge,.react-flow__edges,.react-flow__connectionline{display:none !important}'; // 隐藏节点后连线也要藏
const FILES_CSS = HIDE_GTV + HIDE_TOAST + HIDE_EDGES;
// Finder 窗口（真实截图 800×500pt，成片按 0.85 叠在画布右侧）与三个文件图标在窗口内的中心（pt）
const FW = { x: 800, y: 150, k: 0.85, w: 800, h: 500 };
const FIN = (s: string) => `works/ep1-basics/captures/assets/finder/${s}`;
const fwPt = (px: number, py: number) => at(FW.x + px * FW.k, FW.y + py * FW.k);
const ICON_TEE = fwPt(72, 135), ICON_TOTE = fwPt(210, 135), ICON_HOODIE = fwPt(348, 135);
const FILE_DROP = at(260, 330); // 拖进画布的落点（新节点出现在 120,100）
const HEAD_TEE = at(260, 408), HEAD_HOODIE = at(960, 408), HEAD_TOTE = at(1310, 408); // 新节点标题栏
const KEY_LAG = 6;
const SEARCH = 'input[placeholder="Search nodes..."]';
const HIDE_PANEL = '.rounded-xl.bg-popover{display:none !important}';

// 页面坐标（1536×864 视口采集）
const NEW_WF = at(432, 640);
const PLUS = at(36, 366);
const IMAGE_MODELS_ROW = at(174, 439);
const DROP = at(470, 260); // Image Loader 卡片左上角落点
const UPLOAD = at(610, 385);
const DBL0 = at(766, 437); // 采集时真实双击点（弹框 position:fixed 左上角）
const DBL = at(856, 437); // 成片里的双击点：右移 90，离 Image Loader 远一点
const DX = DBL.cx - DBL0.cx;
const SHIFT_POPUP = `div.min-w-48.p-0.text-popover-foreground{left:${DBL.cx}px !important;top:${DBL.cy}px !important}`;
const shifted = (a: Aim): Aim => ({ ...a, x: a.x + DX, cx: a.cx + DX });

const { t, end } = seqLines(IDS, { gap: 14, extra: { 's1-1': 30, 's1-3': 26, 's1-4': 30, 's1-5': 16, 's1-6': 14, 's1-7': 24, 's1-7b': 14, 's1-7c': 30, 's1-7d': 24, 's1-8': 30, 's1-9': 44 } });
export const S1_DUR = end + 30;
/** 台词末尾偏移 / 台词内进度点 */
const V = (id: string, k = 0) => t[id].voEnd + k;
const P = (id: string, frac: number) => t[id].from + Math.round((t[id].voEnd - t[id].from) * frac);

const build = () => {
  const searchM = elAim(M, 'Search nodes', 'input');
  const rowSR = elAim(SR, 'Image Loader', 'button');
  const searchD = shifted(elAim(D, 'Search nodes', 'input'));
  const rowGPT = shifted(elAim(DS, 'GPT Image 2 50', 'button'));
  const typeLen1 = 'image loader'.length * 2; // 2f/字符
  const typeLen2 = 'gpt image'.length * 2;
  const B = {
    newWf: V('s1-1', -6),
    plus: V('s1-3', -6),
    hover: V('s1-4', -10),
    search: P('s1-5', 0.45),
    grab: P('s1-6', 0.2), drop: 0,
    upload: P('s1-7', 0.35),
    finIn: t['s1-7b'].from + 4, grabFile: P('s1-7b', 0.5), dropFile: 0,
    finIn2: t['s1-7c'].from + 4, clickTote: P('s1-7c', 0.3), clickHoodie: 0, copy: P('s1-7c', 0.55), finOut2: 0, paste: P('s1-7c', 0.85),
    selTee: t['s1-7d'].from + 14, selHoodie: 0, selTote: 0, del: V('s1-7d', -2),
    dbl: V('s1-8', -14),
    search2: P('s1-9', 0.3), pick: V('s1-9', 6),
  };
  B.drop = B.grab + 30;
  B.dropFile = B.grabFile + 34; B.clickHoodie = B.clickTote + 20; B.finOut2 = B.copy + 12; B.selHoodie = B.selTee + 18; B.selTote = B.selHoodie + 18;
  const shot = new Shot(W, { cx: 768, cy: 432, z: 1 })
    // 1 列表页 → New Workflow（话说到 "New Workflow" 时点）
    .cur(0, at(900, 760)).go(B.newWf, NEW_WF).click(B.newWf, { cut: E0, cutDelay: 8 })
    // 2 空画布：光标不动
    // 3 + 菜单
    .go(B.plus, PLUS).click(B.plus, { cut: M, cutDelay: 3 })
    // 4 悬停 Image models → 子菜单
    .go(B.hover, IMAGE_MODELS_ROW).cut(B.hover, SUB)
    // 5 搜索（离开分组行时子菜单收起）
    .go(B.search, searchM).cut(B.search - 6, M).click(B.search, { kind: 'text-field' })
    .curType(B.search + 2, 'text').interact(B.search + 2, searchM, 'type', B.search + 2 + typeLen1)
    .cut(B.search + 4 + typeLen1, SR).curType(B.search + 6 + typeLen1, 'arrow')
    // 6 拖到画布
    .go(B.grab, rowSR).click(B.grab).cur(B.drop, DROP).cut(B.drop + 2, N1, { patchCss: HIDE_PANEL })
    // 7 上传 logo
    .go(B.upload, UPLOAD).click(B.upload, { cut: LD, cutDelay: 14 })
    // 7b 从 Finder 拖文件到画布（Finder 窗口叠加；落下后切到含 black-tee 节点的快照，hoodie/tote 先隐藏）
    .go(B.grabFile, ICON_TEE).click(B.grabFile).cur(B.dropFile, FILE_DROP).cut(B.dropFile + 2, FILES, { patchCss: FILES_CSS + HIDE_HT })
    // 7c Finder 里点选 tote、⇧点 hoodie → ⌘C → 回到画布 ⌘V，两枚节点出现
    .go(B.clickTote, ICON_TOTE).click(B.clickTote).go(B.clickHoodie, ICON_HOODIE).click(B.clickHoodie)
    .go(B.finOut2 + 8, at(700, 720)).cut(B.paste + KEY_LAG, FILES, { patchCss: FILES_CSS })
    // 7d 点选三枚新节点（⇧ 加选）→ Delete → 回到只有 logo 的状态
    .go(B.selTee, HEAD_TEE).click(B.selTee).go(B.selHoodie, HEAD_HOODIE).click(B.selHoodie).go(B.selTote, HEAD_TOTE).click(B.selTote)
    .cut(B.del + KEY_LAG, LD)
    // 8 双击空白
    .go(B.dbl, DBL).click(B.dbl).click(B.dbl + 5, { cut: D, cutDelay: 3, kind: 'dblclick', patchCss: SHIFT_POPUP })
    // 9 搜索 gpt image → 选 GPT Image 2
    .go(B.search2, searchD).click(B.search2, { kind: 'text-field' })
    .curType(B.search2 + 2, 'text').interact(B.search2 + 2, searchD, 'type', B.search2 + 2 + typeLen2)
    .cut(B.search2 + 4 + typeLen2, DS, { patchCss: SHIFT_POPUP }).curType(B.search2 + 6 + typeLen2, 'arrow')
    .go(B.pick, rowGPT).click(B.pick, { cut: N2, cutDelay: 4 })
    // 10 小结：光标让开新节点
    .go(B.pick + 40, at(1000, 720), 16).curHold(S1_DUR);
  // 相机：全程 z=1（无推近）
  // 驱动
  addDrive(shot, M, typeInto(SEARCH, 'image loader', B.search + 2 - cutFrom(shot, M, 1), 2), 1);
  addDrive(shot, SR, dragGhost('button[draggable="true"]', B.grab - cutFrom(shot, SR), B.drop + 2 - cutFrom(shot, SR), curAtFrom(shot, cutFrom(shot, SR)), [-(rowSR.cx - rowSR.x), -(rowSR.cy - rowSR.y)], 0.96, 'background:#1c1c1c;border:1px solid #3a3a3a;display:flex;align-items:center;border-radius:8px'));
  addDrive(shot, N1, nodePulse('LoadImage', 0, 14));
  addDrive(shot, LD, imageBlurUp(0, 20), 0);
  addDrive(shot, FILES, nodePulse(TEE, 0, 14), 0);
  addDrive(shot, FILES, nodePulse(HOODIE, 0, 14), 1);
  addDrive(shot, FILES, nodePulse(TOTE, 0, 14), 1);
  const f1 = cutFrom(shot, FILES, 1);
  addDrive(shot, FILES, nodeSelected(TEE, B.selTee - f1), 1);
  addDrive(shot, FILES, nodeSelected(HOODIE, B.selHoodie - f1), 1);
  addDrive(shot, FILES, nodeSelected(TOTE, B.selTote - f1), 1);
  addDrive(shot, D, typeInto(SEARCH, 'gpt image', B.search2 + 2 - cutFrom(shot, D), 2));
  addDrive(shot, N2, nodePulse('GptImage2', 0, 14));
  const rings: RingCue[] = [
    { at: B.newWf - 10, aim: { cx: 432, cy: 640, w: 224, h: 168 }, dur: 14, radius: 14 },
    { at: B.plus - 10, aim: { cx: 36, cy: 366, w: 36, h: 36 }, dur: 14, radius: 10 },
    { at: B.search - 10, aim: { cx: searchM.cx, cy: searchM.cy, w: searchM.w, h: searchM.h }, dur: 14, radius: 10 },
    { at: B.grab - 10, aim: { cx: rowSR.cx, cy: rowSR.cy, w: rowSR.w, h: rowSR.h }, dur: 14, radius: 10 },
    { at: B.upload - 10, aim: { cx: 610, cy: 372, w: 240, h: 110 }, dur: 14, radius: 12 },
    { at: B.grabFile - 10, aim: { cx: ICON_TEE.cx, cy: ICON_TEE.cy, w: 96, h: 96 }, dur: 14, radius: 14 },
    { at: B.clickTote - 10, aim: { cx: ICON_TOTE.cx, cy: ICON_TOTE.cy, w: 96, h: 96 }, dur: 14, radius: 14 },
    { at: B.clickHoodie - 10, aim: { cx: ICON_HOODIE.cx, cy: ICON_HOODIE.cy, w: 96, h: 96 }, dur: 14, radius: 14 },
    { at: B.selTee - 10, aim: { cx: HEAD_TEE.cx, cy: HEAD_TEE.cy, w: 270, h: 40 }, dur: 14, radius: 10 },
    { at: B.selHoodie - 10, aim: { cx: HEAD_HOODIE.cx, cy: HEAD_HOODIE.cy, w: 270, h: 40 }, dur: 14, radius: 10 },
    { at: B.selTote - 10, aim: { cx: HEAD_TOTE.cx, cy: HEAD_TOTE.cy, w: 270, h: 40 }, dur: 14, radius: 10 },
    { at: B.dbl - 10, aim: { cx: DBL.cx, cy: DBL.cy, w: 0, h: 0 }, dur: 18, minSize: 44, radius: 22 },
    { at: B.pick - 10, aim: { cx: rowGPT.cx, cy: rowGPT.cy, w: rowGPT.w, h: rowGPT.h }, dur: 14, radius: 10 },
  ];
  const keys: KeyCue[] = [
    { at: B.clickHoodie - 4, keys: ['shift', 'click'], stagger: 2, hold: 12, linger: 22 },
    { at: B.copy, keys: ['cmd', 'c'], hold: 10, linger: 30 },
    { at: B.paste, keys: ['cmd', 'v'], hold: 10, linger: 36 },
    { at: B.selHoodie - 4, keys: ['shift', 'click'], stagger: 2, hold: B.selTote - B.selHoodie + 12, linger: 20 },
    { at: B.del, keys: ['delete'], hold: 10, linger: 30 },
  ];
  return { shot, rings, keys, B };
};
let cached: ReturnType<typeof build> | null = null;
const get = () => (cached ??= build());

/** Finder 窗口叠加（真实截图，页面坐标；from 起 14 帧滑入，until 起 12 帧滑出；src 按帧给不同选中态） */
const FinderWindow: React.FC<{ u: number; from: number; until: number; src: (u: number) => string }> = ({ u, from, until, src }) => {
  const inn = seg(u, from, from + 14, E.zoom);
  const out = seg(u, until, until + 12, E.inOut);
  if (inn <= 0 || out >= 1) return null;
  return (
    <div style={{ position: 'absolute', left: FW.x, top: FW.y, width: FW.w * FW.k, height: FW.h * FW.k, opacity: inn * (1 - out), transform: `translateX(${(1 - inn) * 60 + out * 40}px)`, filter: 'drop-shadow(0 28px 60px rgba(0,0,0,0.65))' }}>
      <Img src={staticFile(FIN(src(u)))} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};
/** 拖出 Finder 的文件"影子"：缩略图 + 文件名跟着光标走（页面坐标，与 <Cursor> 同一弹簧位置） */
const FileGhost: React.FC<{ u: number; from: number; until: number; file: string; label: string; curAt: (f: number) => [number, number] }> = ({ u, from, until, file, label, curAt }) => {
  if (u < from || u > until) return null;
  const [cx, cy] = curAt(u);
  return (
    <div style={{ position: 'absolute', left: cx - 41, top: cy - 41, width: 82, opacity: 0.85, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <Img src={staticFile(FIN(file))} style={{ width: 82, height: 82, borderRadius: 8, objectFit: 'cover', boxShadow: '0 10px 28px rgba(0,0,0,0.55)' }} />
      <span style={{ fontFamily: F.sans, fontSize: 13, fontWeight: 500, color: C.paper, background: 'rgba(20,20,20,0.85)', padding: '2px 7px', borderRadius: 6, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  );
};

export const S1_CAPTIONS: Cap[] = capsOf(t, IDS);
export const S1_KEYS = () => get().keys;
export const S1_VO = voOf(t, IDS);
export const S1_SFX = () => clicksOf(get().shot.clicks);
export const S1Create: React.FC<{ u: number }> = ({ u }) => {
  const { shot, rings, B } = get();
  const curAt = (f: number) => cursorPosAt(shot.curKeys, f);
  const overlay = (
    <>
      <TargetRing u={u} cues={rings} />
      <FinderWindow u={u} from={B.finIn} until={B.dropFile + 2} src={() => 'finder-1.png'} />
      <FileGhost u={u} from={B.grabFile + 1} until={B.dropFile + 1} file="black-tee.jpg" label="black-tee.jpg" curAt={curAt} />
      <FinderWindow u={u} from={B.finIn2} until={B.finOut2} src={(f) => (f < B.clickTote + 1 ? 'finder-1.png' : f < B.clickHoodie + 1 ? 'finder-3.png' : 'finder-2.png')} />
    </>
  );
  return <Stage u={u} shot={shot} slots={S1_SLOTS} enterAt={0} overlay={overlay} />;
};
