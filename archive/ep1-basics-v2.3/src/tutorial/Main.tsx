// Main — EP1 基础操作（YouArt Workflow）：标题 → 7 节（章节卡 + 走查）→ 结尾。
// 字幕/按键/音效表都相对各节起点（S.sN.from）定位；各节内部帧号为 30fps 语义 u。
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { C, F, TL_SCALE, tl } from '../../film/tokens';
import { ensureFonts } from '../../film/fonts';
import { Caption, cap } from '../../film/ux';
import { AudioLayer, type Cue } from '../../film/AudioLayer';
import { KbdOverlay, type KeyCue } from '../../film/kbd';
import type { TutorialProps } from '../registry';
import { S, CHAPTERS, TOTAL_TL } from './timeline';
import { VO_DUR } from './vo.gen';
import { S01Title } from './scenes/S01Title';
import { Chapter } from './scenes/Chapter';
import { Outro } from './scenes/Outro';
import { S1Create, S1_CAPTIONS, S1_KEYS, S1_SFX } from './scenes/S1Create';
import { S2Connect, S2_CAPTIONS, S2_KEYS, S2_SFX } from './scenes/S2Connect';
import { S3Collapse, S3_CAPTIONS, S3_KEYS, S3_SFX } from './scenes/S3Collapse';
import { S4Focus, S4_CAPTIONS, S4_KEYS, S4_SFX } from './scenes/S4Focus';
import { S5Layout, S5_CAPTIONS, S5_KEYS, S5_SFX } from './scenes/S5Layout';
import { S6Assets, S6_CAPTIONS, S6_KEYS, S6_SFX } from './scenes/S6Assets';
import { S7Background, S7_CAPTIONS, S7_KEYS, S7_SFX } from './scenes/S7Background';

export { TOTAL_TL };

export type Cap = { from: number; until: number; text: string };
const shift = <T extends { from?: number; at?: number; until?: number }>(items: T[], by: number): T[] =>
  items.map((c) => ({ ...c, ...(c.from != null ? { from: c.from + by } : {}), ...(c.until != null ? { until: c.until + by } : {}), ...(c.at != null ? { at: c.at + by } : {}) }) as T);

const CAPTIONS: Cap[] = [
  ...shift(S1_CAPTIONS, S.s1.from), ...shift(S2_CAPTIONS, S.s2.from), ...shift(S3_CAPTIONS, S.s3.from), ...shift(S4_CAPTIONS, S.s4.from),
  ...shift(S5_CAPTIONS, S.s5.from), ...shift(S6_CAPTIONS, S.s6.from), ...shift(S7_CAPTIONS, S.s7.from),
];
const KEYS: KeyCue[] = [
  ...shift(S1_KEYS, S.s1.from), ...shift(S2_KEYS, S.s2.from), ...shift(S3_KEYS, S.s3.from), ...shift(S4_KEYS, S.s4.from),
  ...shift(S5_KEYS, S.s5.from), ...shift(S6_KEYS, S.s6.from), ...shift(S7_KEYS, S.s7.from),
];
// 配音（ElevenLabs v3，YouArt MCP 生成，public/audio/vo/ep1/sN-i.mp3）：第 N 节第 i 句 = 第 i 条字幕起点；片头/结尾各一句
const SCENE_CAPS: Array<[number, Cap[], string]> = [[1, S1_CAPTIONS, 's1'], [2, S2_CAPTIONS, 's2'], [3, S3_CAPTIONS, 's3'], [4, S4_CAPTIONS, 's4'], [5, S5_CAPTIONS, 's5'], [6, S6_CAPTIONS, 's6'], [7, S7_CAPTIONS, 's7']];
const VO: Cue[] = [
  { at: S.title.from + 4, src: 'audio/vo/ep1/s0-1.mp3', vol: 0.9, dur: VO_DUR['s0-1'] },
  ...SCENE_CAPS.flatMap(([n, caps, key]) => caps.map((c, i) => ({ at: S[key].from + c.from, src: `audio/vo/ep1/s${n}-${i + 1}.mp3`, vol: 0.9, dur: VO_DUR[`s${n}-${i + 1}`] }))),
  { at: S.outro.from + 8, src: 'audio/vo/ep1/s8-1.mp3', vol: 0.9, dur: VO_DUR['s8-1'] },
];
const SFX: Cue[] = [
  ...shift(S1_SFX, S.s1.from), ...shift(S2_SFX, S.s2.from), ...shift(S3_SFX, S.s3.from), ...shift(S4_SFX, S.s4.from),
  ...shift(S5_SFX, S.s5.from), ...shift(S6_SFX, S.s6.from), ...shift(S7_SFX, S.s7.from),
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

export const Main: React.FC<TutorialProps> = ({ bgm = false, vo = true, captions = true }) => {
  ensureFonts();
  const frame = useCurrentFrame();
  const u = frame / TL_SCALE;
  return (
    <AbsoluteFill style={{ background: C.ink, fontFamily: F.sans }}>
      <Scene from={S.title.from} dur={S.title.dur}>{(su) => <S01Title u={su} title="Workflow basics" ep="EP 01" steps={CHAPTERS.map((c) => ({ n: c.n, title: c.title }))} />}</Scene>
      {CHAPTERS.map((c) => (
        <Scene key={c.key} from={S[c.key].from} dur={S[c.key].dur}>{(su) => <Chapter u={su} n={c.n} title={c.title} sub={c.sub} dur={S[c.key].dur} />}</Scene>
      ))}
      <Scene from={S.s1.from} dur={S.s1.dur}>{(su) => <S1Create u={su} />}</Scene>
      <Scene from={S.s2.from} dur={S.s2.dur}>{(su) => <S2Connect u={su} />}</Scene>
      <Scene from={S.s3.from} dur={S.s3.dur}>{(su) => <S3Collapse u={su} />}</Scene>
      <Scene from={S.s4.from} dur={S.s4.dur}>{(su) => <S4Focus u={su} />}</Scene>
      <Scene from={S.s5.from} dur={S.s5.dur}>{(su) => <S5Layout u={su} />}</Scene>
      <Scene from={S.s6.from} dur={S.s6.dur}>{(su) => <S6Assets u={su} />}</Scene>
      <Scene from={S.s7.from} dur={S.s7.dur}>{(su) => <S7Background u={su} />}</Scene>
      <Scene from={S.outro.from} dur={S.outro.dur}>{(su) => <Outro u={su} />}</Scene>

      {captions ? CAPTIONS.map((c, i) => <Caption key={i} u={u} from={c.from} until={c.until} words={cap(c.text)} />) : null}
      <KbdOverlay u={u} cues={KEYS} size={68} marginY={captions ? 150 : 100} />
      <AudioLayer bgm={bgm} bgmSrc={null} vo={vo} voCues={VO} sfx={SFX} totalTL={TOTAL_TL} />
    </AbsoluteFill>
  );
};
