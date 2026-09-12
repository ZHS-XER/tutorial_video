// Main — 教程主时间线。结构照 youart-promo-v3：Scene 包装把渲染帧换成 TL 帧 u，
// 场景内部一律写 30fps 语义；字幕、音效作为独立叠加层。
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { C, F, TL_SCALE, tl } from '@engine/tokens';
import { ensureFonts } from '@engine/fonts';
import { Caption, cap } from '@engine/ui/ux';
import { AudioLayer, type Cue } from '@engine/audio/AudioLayer';
import { KbdOverlay, type KeyCue } from '@engine/ui/kbd';
import type { TutorialProps } from '../../registry';
import './materials.gen'; // 注册本 work 的快照元数据
import { S, TOTAL_TL } from './timeline';
import { S01Title } from './scenes/S01Title';
import { S02Walkthrough } from './scenes/S02Walkthrough';

export { TOTAL_TL };

// 字幕表（TL 帧）：*星号* 包住的词高亮为品牌黄
const CAPTIONS: Array<{ from: number; until: number; text: string }> = [
  { from: S.s02Walkthrough.from + 10, until: S.s02Walkthrough.from + 110, text: 'Type your *idea* into the prompt box.' },
  { from: S.s02Walkthrough.from + 130, until: S.s02Walkthrough.from + 220, text: 'Then hit *Send* — YouArt takes it from there.' },
];

// 音效钉帧（TL 帧）：只配动作型点击，音量 ≤0.35（screen-story 军规 4）
const SFX: Cue[] = [
  { at: S.s02Walkthrough.from + 34, src: 'shared/sfx/switch-click-quick.mp3', vol: 0.3 },
  { at: S.s02Walkthrough.from + 130, src: 'shared/sfx/switch-tap.mp3', vol: 0.32 },
];
const VO: Cue[] = [];

// 按键可视化（shadcn Kbd 风格，@engine/ui/kbd）：TL 帧；别名 cmd/shift/option/ctrl/enter/esc/drag/click/'right click'/单字母/数字/标点。
// 约定：键帽 K 帧压下、产品状态在 K+6 切换；hold 10、linger ≥24；相邻两组不叠层。
const KEYS: KeyCue[] = [
  { at: S.s02Walkthrough.from + 128, keys: ['cmd', 'enter'], hold: 10, linger: 30 }, // 发送：⌘ + ↩
  { at: S.s02Walkthrough.from + 180, keys: ['option'], hold: 40 }, // 长按 option 示例
];

const Scene: React.FC<{ from: number; dur: number; overlap?: number; children: (u: number) => React.ReactNode }> = ({
  from,
  dur,
  overlap = 0,
  children,
}) => {
  const frame = useCurrentFrame();
  const u = frame / TL_SCALE - from;
  return (
    <Sequence from={tl(from)} durationInFrames={tl(dur + overlap)} layout="none">
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
        {(su) => <S01Title u={su} title="How to start a project" kicker="YouArt Tutorial · 01" />}
      </Scene>
      <Scene from={S.s02Walkthrough.from} dur={S.s02Walkthrough.dur}>
        {(su) => <S02Walkthrough u={su} />}
      </Scene>

      {captions
        ? CAPTIONS.map((c, i) => <Caption key={i} u={u} from={c.from} until={c.until} words={cap(c.text)} />)
        : null}

      {/* 按键叠加：底部居中，marginY 抬到字幕之上（字幕 y≈958–1046） */}
      <KbdOverlay u={u} cues={KEYS} size={68} marginY={captions ? 150 : 100} />

      <AudioLayer bgm={bgm} bgmSrc={null} vo={vo} voCues={VO} sfx={SFX} totalTL={TOTAL_TL} />
    </AbsoluteFill>
  );
};
