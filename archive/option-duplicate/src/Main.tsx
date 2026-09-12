// Main — option-duplicate：Workflow 画布里按住 Option 拖动节点即可原地复制。
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { C, F, TL_SCALE, tl } from '../../film/tokens';
import { ensureFonts } from '../../film/fonts';
import { Caption, cap } from '../../film/ux';
import { AudioLayer, type Cue } from '../../film/AudioLayer';
import { KbdOverlay, type KeyCue } from '../../film/kbd';
import type { TutorialProps } from '../registry';
import { S, D, TOTAL_TL } from './timeline';
import { S01Title } from './scenes/S01Title';
import { S02Walkthrough } from './scenes/S02Walkthrough';
import { S03Recap } from './scenes/S03Recap';

export { TOTAL_TL };

const s2 = S.s02Drag.from;

// 字幕表（TL 帧）：*星号* 高亮
const CAPTIONS: Array<{ from: number; until: number; text: string }> = [
  { from: s2 + 8, until: s2 + D.mouseDown - 4, text: 'Hold *Option* on your keyboard…' },
  { from: s2 + D.mouseDown + 2, until: s2 + D.mouseUp, text: '…and *drag* the node anywhere.' },
  { from: s2 + D.cutAfter + 6, until: s2 + S.s02Drag.dur - 6, text: 'Let go — a *duplicate* lands right there.' },
];

// 按键可视化（shadcn Kbd 风格）：⌥ 先按下，拖动开始时补 Drag 芯片，松手一起释放
const KEYS: KeyCue[] = [
  { at: s2 + D.optionDown, keys: ['option', 'drag'], stagger: D.mouseDown - D.optionDown, hold: D.mouseUp - D.mouseDown, linger: 26 },
];

// 音效：只配动作（军规 4）
const SFX: Cue[] = [
  { at: S.s02Drag.from, src: 'audio/sfx/transition-soft.mp3', vol: 0.28 },
  { at: s2 + D.optionDown, src: 'audio/sfx/switch-tap.mp3', vol: 0.3 },
  { at: s2 + D.mouseDown, src: 'audio/sfx/switch-click-quick.mp3', vol: 0.3 },
  { at: s2 + D.mouseUp, src: 'audio/sfx/pop.mp3', vol: 0.34 },
  { at: S.s03Recap.from, src: 'audio/sfx/transition-snap.mp3', vol: 0.26 },
];

const Scene: React.FC<{ from: number; dur: number; children: (u: number) => React.ReactNode }> = ({ from, dur, children }) => {
  const frame = useCurrentFrame();
  const u = frame / TL_SCALE - from;
  return (
    <Sequence from={tl(from)} durationInFrames={tl(dur)} layout="none">
      <AbsoluteFill>{children(u)}</AbsoluteFill>
    </Sequence>
  );
};

export const Main: React.FC<TutorialProps> = ({ bgm = false, vo = false, captions = true }) => {
  ensureFonts();
  const frame = useCurrentFrame();
  const u = frame / TL_SCALE;

  return (
    <AbsoluteFill style={{ background: C.ink, fontFamily: F.sans }}>
      <Scene from={S.s01Title.from} dur={S.s01Title.dur}>
        {(su) => <S01Title u={su} title="Duplicate a node in place" kicker="YouArt Workflow · Quick Tip" />}
      </Scene>
      <Scene from={S.s02Drag.from} dur={S.s02Drag.dur}>
        {(su) => <S02Walkthrough u={su} />}
      </Scene>
      <Scene from={S.s03Recap.from} dur={S.s03Recap.dur}>
        {(su) => <S03Recap u={su} />}
      </Scene>

      {captions ? CAPTIONS.map((c, i) => <Caption key={i} u={u} from={c.from} until={c.until} words={cap(c.text)} />) : null}
      <KbdOverlay u={u} cues={KEYS} size={68} marginY={captions ? 150 : 100} />

      <AudioLayer bgm={bgm} bgmSrc={null} vo={vo} voCues={[]} sfx={SFX} totalTL={TOTAL_TL} />
    </AbsoluteFill>
  );
};
