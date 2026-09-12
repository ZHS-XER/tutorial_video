// §1 创建节点：+ 面板（分类/子菜单/搜索/拖到画布）→ 双击空白 → 右键 New Node
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { typeInto } from '../../../film/drives';
import { dragGhost } from '../../../film/drivesFlow';
import { elAim } from '../../../film/flowMeta';
import { Stage, curAtFrom, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const E = 'ep1-s1-empty', M = 'ep1-s1-menu', SUB = 'ep1-s1-submenu', SR = 'ep1-s1-search', N1 = 'ep1-s1-node1';
const D = 'ep1-s1-dbl', SR2 = 'ep1-s1-search2', N2 = 'ep1-s1-node2', CX = 'ep1-s1-ctx', CM = 'ep1-s1-ctxmenu', SR3 = 'ep1-s1-search3', N3 = 'ep1-s1-node3';
export const S1_SLOTS = [E, M, SUB, SR, N1, D, SR2, N2, CX, CM, SR3, N3];

const PLUS = at(35, 474);
const IMAGE_MODELS_ROW = at(160, 547);
const NEW_NODE = at(969, 220);
const SEEDANCE_ROW = at(1073, 261);
const DROP = at(480, 160);
const SEARCH = 'input[placeholder="Search nodes..."]';

// 节拍（场景相对帧）
const B = { plus: 56, sub: 92, search1: 172, type1: 178, results1: 204, grab: 256, drop: 300,
  dbl: 370, search2: 400, type2: 404, results2: 414, pick2: 444,
  rc: 510, newNode: 538, search3: 558, type3: 562, results3: 580, pick3: 604, end: 700 } as const;

const build = () => {
  const searchM = elAim(M, 'Search nodes...', 'input');
  const rowSR = elAim(SR, 'Image Loader', 'button');
  const searchD = elAim(D, 'Search nodes...', 'input');
  const rowSR2 = elAim(SR2, 'Text', 'button');
  const searchCM = elAim(CM, 'Search nodes...', 'input');

  const shot = new Shot(E, { cx: 960, cy: 540, z: 1.0 })
    .cur(14, at(560, 720)).cur(48, PLUS)
    .click(B.plus, { cut: M, cutDelay: 2 })
    .cur(70, PLUS).cur(88, IMAGE_MODELS_ROW)
    .cut(B.sub, SUB)
    .curHold(140)
    .cur(160, searchM)                        // 离开分类 → 子菜单关闭
    .cut(162, M)
    .click(B.search1, { kind: 'text-field' })
    .curType(B.type1, 'text')
    .cut(B.results1, SR)
    .curType(B.results1 + 6, 'arrow')
    .cur(240, rowSR)
    .click(B.grab)                              // 按住结果行
    .cur(B.drop, DROP)                          // 拖到画布
    .cut(B.drop + 2, N1)
    .curHold(330)
    // 双击空白
    .cur(360, at(480, 520))
    .click(B.dbl).click(B.dbl + 5, { cut: D, cutDelay: 3 })
    .cur(392, searchD)
    .click(B.search2, { kind: 'text-field' })
    .curType(B.type2, 'text')
    .cut(B.results2, SR2)
    .curType(B.results2 + 4, 'arrow')
    .cur(436, rowSR2)
    .click(B.pick2, { cut: N2, cutDelay: 4 })
    .curHold(475)
    // 右键 → New Node
    .cur(500, at(920, 200))
    .click(B.rc, { cut: CX, cutDelay: 2 })
    .cur(532, NEW_NODE)
    .click(B.newNode, { cut: CM, cutDelay: 2 })
    .cur(552, searchCM)
    .click(B.search3, { kind: 'text-field' })
    .curType(B.type3, 'text')
    .cut(B.results3, SR3)
    .curType(B.results3 + 4, 'arrow')
    .cur(596, SEEDANCE_ROW)
    .click(B.pick3, { cut: N3, cutDelay: 4 })
    .cur(640, at(1290, 620))
    .curHold(B.end)
    // 相机：一次推近（面板），之后两处只平移接力（不缩回再推近），最后收回
    .zoomIn(B.plus, at(560, 560), 1.5).camHold(B.dbl - 40).panTo(B.dbl - 6, at(720, 620))
    .camHold(B.pick2 + 12).panTo(B.rc - 6, at(1040, 420))
    .camHold(B.pick3).zoomOut(B.pick3 + 6);

  // 驱动：三段打字 + 拖拽幽灵
  const cutFrom = (slot: string, nth = 0) => shot.cuts.filter((c) => c.slot === slot)[nth].from;
  const setDrive = (slot: string, nth: number, drive: (typeof shot.cuts)[number]['drive']) => { shot.cuts.filter((c) => c.slot === slot)[nth].drive = drive; };
  const mCut2 = cutFrom(M, 1);
  setDrive(M, 1, typeInto(SEARCH, 'image loader', B.type1 - mCut2, 2));
  setDrive(SR, 0, dragGhost('button[draggable="true"]', B.grab - cutFrom(SR), B.drop + 2 - cutFrom(SR), curAtFrom(shot, cutFrom(SR)), [-(rowSR.cx - rowSR.x), -(rowSR.cy - rowSR.y)], 0.96, 'background:#1c1c1c;border:1px solid #3a3a3a;display:flex;align-items:center'));
  setDrive(D, 0, typeInto(SEARCH, 'text', B.type2 - cutFrom(D), 2));
  setDrive(CM, 0, typeInto(SEARCH, 'seedance', B.type3 - cutFrom(CM), 2));
  return shot;
};
let cached: Shot | null = null;
const getShot = () => (cached ??= build());

export const S1_CAPTIONS: Cap[] = [
  { from: 12, until: 80, text: 'Click *+* to open the node menu.' },
  { from: 82, until: 178, text: 'Grouped by *media type*. Hover to browse.' },
  { from: 186, until: 240, text: 'Or just *search*.' },
  { from: 244, until: 328, text: '*Drag* a result onto the canvas.' },
  { from: 350, until: 470, text: '*Double-click* the canvas to add a node there.' },
  { from: 496, until: 640, text: '*Right-click* works too: New Node.' },
];
export const S1_KEYS: KeyCue[] = [{ at: B.rc, keys: ['right click'], hold: 10, linger: 30 }];
export const S1_SFX: Cue[] = clicksOf(getShot().clicks);

export const S1Create: React.FC<{ u: number }> = ({ u }) => (
  <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S1_SLOTS} enterAt={0} />
);
