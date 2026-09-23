import type React from 'react';
import * as template from './_template/src/Main';
import * as codexMvp from './codex-mvp/src/Main';
import * as ep1Basics from './ep1-basics/src/Main';

export type TutorialProps = { bgm?: boolean; vo?: boolean; captions?: boolean };

export type Tutorial = {
  /** slug：既是 Composition id，也是 works/<slug>/ 目录名 */
  id: string;
  Main: React.FC<TutorialProps>;
  /** 总时长，TL（30fps 时间线）帧 */
  totalTL: number;
  defaultProps?: TutorialProps;
};

// 新建教程：npm run new <slug>（复制 works/_template 并自动在这里加一行；旧片见 archive/）
export const TUTORIALS: Tutorial[] = [
  { id: 'codex-mvp', Main: codexMvp.Main, totalTL: codexMvp.TOTAL_TL, defaultProps: { bgm: false, vo: false, captions: false } },
  { id: 'ep1-basics', Main: ep1Basics.Main, totalTL: ep1Basics.TOTAL_TL, defaultProps: { bgm: false, vo: true, captions: true } },
  { id: 'template', Main: template.Main, totalTL: template.TOTAL_TL, defaultProps: { bgm: false, vo: false, captions: true } },
];
