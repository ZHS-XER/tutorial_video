// §3 展开/收起：两种方式、同一效果——点节点箭头 / 选中后 ⌘[ ⌘]；再收起其余 → 右键 Expand All → Auto-collapse 开关
import React from 'react';
import { Shot } from '../../../film/choreo';
import { at } from '../../../film/camera';
import { nodeHeader, flowNode } from '../../../film/flowMeta';
import { Stage, clicksOf, type Cap } from './_shared';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

const AE = 'ep1-s2-edge2b', C1 = 'ep1-s3-collapsed1', C2 = 'ep1-s3-collapsed2', X2 = 'ep1-s3-expanded2', AC = 'ep1-s3-allcollapsed', CX = 'ep1-s3-ctx', AX = 'ep1-s3-allexpanded', AUTO = 'ep1-s3-autocollapse';
export const S3_SLOTS = [AE, C1, C2, X2, AC, CX, AX, AUTO];

// 右键菜单：采集时在 (700,950) 右键，Radix 把菜单上翻到 translate(702px,757px)（贴窗口底边，难看）。
// 这里改成在 (700,440) 右键，并用 patchCss 把菜单挪到该点（菜单 ≈128×320，落在画布中部）。
const RC_AT = at(700, 440);
const MENU_TOP = 440;
const MENU_CSS = `[data-radix-popper-content-wrapper]{transform:translate(702px,${MENU_TOP}px) !important}`;
const EXPAND_ALL = at(772, MENU_TOP + 271); // "Expand All Nodes" 行相对菜单顶 271px（原 1028-757）
const AUTO_BTN = at(128, 1048);

// 键帽节律：K 帧键帽出现并压下（3f），K+6 切状态，松开后停留 24–30f（≈1.3s 总可见，反馈说太短），仍不与下一组叠层。
const KEY_LAG = 6;
// 2026-09-10：配音对齐——⌘] 之后各拍后移 34 帧（VO "Or select it and press command, left bracket" 3.1s）
const B = { chevron: 46, selText: 90, kCollapse: 104, kExpand: 184, chevText: 290, chevImg: 326, rc: 378, expandAll: 414, auto: 476, autoOff: 524, end: 570 } as const;

/** 节点右上角折叠箭头（页面坐标） */
const chevronOf = (slot: string, prefix: string) => { const n = flowNode(slot, prefix); return at(n.x + n.w - 20, n.y + 21); };

const build = () =>
  new Shot(AE, { cx: 960, cy: 540, z: 1.0 })
    // 方式一：点箭头
    .cur(10, at(700, 760)).cur(40, chevronOf(AE, 'Seedance')).click(B.chevron, { cut: C1, cutDelay: 2 })
    // 方式二：选中 + ⌘[ / ⌘]
    .cur(84, nodeHeader(AE, 'Text')).click(B.selText)
    .cut(B.kCollapse + KEY_LAG, C2)
    .cut(B.kExpand + KEY_LAG, X2)
    // 其余用箭头收起（再次强调两种方式等价）
    .cur(284, chevronOf(X2, 'Text')).click(B.chevText, { cut: C2, cutDelay: 2 })
    .cur(320, chevronOf(C2, 'LoadImage')).click(B.chevImg, { cut: AC, cutDelay: 2 })
    // 右键 → Expand All Nodes（菜单居中并推近）
    .cur(370, RC_AT).click(B.rc, { cut: CX, cutDelay: 2, patchCss: MENU_CSS })
    .cur(404, EXPAND_ALL).click(B.expandAll, { cut: AX, cutDelay: 3 })
    // Auto-collapse 开关（推近工具栏）
    .cur(468, AUTO_BTN).click(B.auto, { cut: AUTO, cutDelay: 2 })
    .click(B.autoOff, { cut: AX, cutDelay: 2 })
    .cur(550, at(700, 760)).curHold(B.end)
    // 相机：推近节点区 → 平移到菜单（更近）→ 平移到工具栏开关（最近）→ 收回
    .zoomIn(B.chevron, at(880, 480), 1.35).camHold(B.rc - 26)
    .cam(B.rc + 22, { cx: 766, cy: MENU_TOP + 160, z: 1.8 }).camHold(B.expandAll + 30)
    .cam(B.auto - 4, { cx: 128, cy: 1048, z: 2.2 }).camHold(B.autoOff + 4)
    .zoomOut(B.autoOff + 4);
let cached: Shot | null = null; const getShot = () => (cached ??= build());

export const S3_CAPTIONS: Cap[] = [
  { from: 10, until: 80, text: 'Click the *arrow* to collapse a node.' },
  { from: 86, until: 180, text: 'Or select it and press *⌘[*.' },
  { from: 184, until: 268, text: '*⌘]* expands it again.' },
  { from: 272, until: 368, text: 'Either way works. Collapse the rest to tidy up.' },
  { from: 372, until: 470, text: '*Right-click* the canvas: Expand All Nodes.' },
  { from: 474, until: 560, text: '*Auto-collapse* folds nodes you are not using.' },
];
export const S3_KEYS: KeyCue[] = [
  { at: B.kCollapse, keys: ['cmd', '['], hold: 10, linger: 24 },
  { at: B.kExpand, keys: ['cmd', ']'], hold: 10, linger: 30 },
  { at: B.rc, keys: ['right click'], hold: 10, linger: 26 },
];
export const S3_SFX: Cue[] = clicksOf(getShot().clicks);
export const S3Collapse: React.FC<{ u: number }> = ({ u }) => <Stage u={u} shot={getShot()} url="youart.ai/workflow" slots={S3_SLOTS} enterAt={0} />;
