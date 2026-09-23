// Main — EP1 Workflow basics（v3，2026-09-11）：片头 → 7 节（章节卡 + 走查）→ 结尾。
// 字幕 / 键帽 / 音效 / 配音表都由各节按 VO 真实时长推出，再相对 S.sN.from 平移。
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { C, F, TL_SCALE, tl } from '@engine/tokens';
import { ensureFonts } from '@engine/fonts';
import { Caption } from '@engine/ui/ux';
import { AudioLayer, type Cue } from '@engine/audio/AudioLayer';
import { KbdOverlay, type KeyCue } from '@engine/ui/kbd';
import type { TutorialProps } from '../../registry';
import './materials.gen';
import { S, CHAPTERS, TOTAL_TL } from './timeline';
import { VO_DUR } from './vo.gen';
import { CAPS_L, LANG, UI, VO_PLAY, capL, voSrc } from './lang';
import { S0Title, TITLE_ANIM } from './scenes/S0Title';
import { Chapter } from './scenes/Chapter';
import { Outro, OUTRO_RECAP } from './scenes/Outro';
import { S1Create, S1_CAPTIONS, S1_KEYS, S1_SFX, S1_VO } from './scenes/S1Create';
import { S2Connect, S2_CAPTIONS, S2_KEYS, S2_SFX, S2_VO } from './scenes/S2Connect';
import { S3Collapse, S3_CAPTIONS, S3_KEYS, S3_SFX, S3_VO } from './scenes/S3Collapse';
import { S4Focus, S4_CAPTIONS, S4_KEYS, S4_SFX, S4_VO } from './scenes/S4Focus';
import { S5Layout, S5_CAPTIONS, S5_KEYS, S5_SFX, S5_VO } from './scenes/S5Layout';
import { S6Assets, S6_CAPTIONS, S6_KEYS, S6_SFX, S6_VO } from './scenes/S6Assets';
import { S7Prefs, S7_CAPTIONS, S7_KEYS, S7_SFX, S7_VO } from './scenes/S7Prefs';
import { splitCap, type Cap } from './scenes/_shared';

export { TOTAL_TL };
const VIDEO = 'works/ep1-basics/captures/assets/sign-video.mp4';

type Shiftable = { from?: number; until?: number; at?: number };
const shift = <T extends Shiftable>(items: T[], by: number): T[] =>
  items.map((c) => ({ ...c, ...(c.from != null ? { from: c.from + by } : {}), ...(c.until != null ? { until: c.until + by } : {}), ...(c.at != null ? { at: c.at + by } : {}) }) as T);

const SECTIONS: Array<{ key: string; caps: Cap[]; keys: KeyCue[] | (() => KeyCue[]); sfx: () => Cue[]; vo: Array<{ id: string; at: number }> }> = [
  { key: 's1', caps: S1_CAPTIONS, keys: S1_KEYS, sfx: S1_SFX, vo: S1_VO },
  { key: 's2', caps: S2_CAPTIONS, keys: S2_KEYS, sfx: S2_SFX, vo: S2_VO },
  { key: 's3', caps: S3_CAPTIONS, keys: S3_KEYS, sfx: S3_SFX, vo: S3_VO },
  { key: 's4', caps: S4_CAPTIONS, keys: S4_KEYS, sfx: S4_SFX, vo: S4_VO },
  { key: 's5', caps: S5_CAPTIONS, keys: S5_KEYS, sfx: S5_SFX, vo: S5_VO },
  { key: 's6', caps: S6_CAPTIONS, keys: S6_KEYS, sfx: S6_SFX, vo: S6_VO },
  { key: 's7', caps: S7_CAPTIONS, keys: S7_KEYS, sfx: S7_SFX, vo: S7_VO },
];
const voCue = (id: string, at: number): Cue => ({ at, src: voSrc(id), vol: 0.9, dur: VO_PLAY[id] });

const s01 = S.title.from + 8, s02 = S.title.from + TITLE_ANIM - 30;
const s81 = S.outro.from + OUTRO_RECAP + 20, s82 = s81 + VO_DUR['s8-1'] + 14;
const CAPTIONS: Cap[] = [
  // 片头、结尾的配音句也上字幕（2026-09-12/13 用户要求）
  ...splitCap(CAPS_L['s0-1'], s01, s01 + VO_DUR['s0-1'], s01 + VO_DUR['s0-1'] + 4),
  ...splitCap(CAPS_L['s0-2'], s02, s02 + VO_DUR['s0-2'], s02 + VO_DUR['s0-2'] + 6),
  ...SECTIONS.flatMap((s) => shift(s.caps, S[s.key].from)),
  ...splitCap(CAPS_L['s8-1'], s81, s81 + VO_DUR['s8-1'], s82 - 4),
  ...splitCap(CAPS_L['s8-2'], s82, s82 + VO_DUR['s8-2'], s82 + VO_DUR['s8-2'] + 6),
];
/** 字幕统一字号（用户 2026-09-12：字号尽量一致），长句自动换两行 */
const CAP_SIZE = 46;
const KEYS: KeyCue[] = SECTIONS.flatMap((s) => shift(typeof s.keys === 'function' ? s.keys() : s.keys, S[s.key].from));
const SFX: Cue[] = SECTIONS.flatMap((s) => shift(s.sfx(), S[s.key].from));
const VO: Cue[] = [
  voCue('s0-1', S.title.from + 8),
  voCue('s0-2', S.title.from + TITLE_ANIM - 30),
  ...SECTIONS.flatMap((s) => s.vo.map((v) => voCue(v.id, S[s.key].from + v.at))),
  voCue('s8-1', s81),
  voCue('s8-2', s82),
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
    <AbsoluteFill lang={LANG === 'zh' ? 'zh-Hans' : 'en'} style={{ background: C.ink, fontFamily: F.sans }}>
      <Scene from={S.title.from} dur={S.title.dur}>{(su) => <S0Title u={su} title={UI.title} ep="EP 01" steps={CHAPTERS.map((c) => ({ n: c.n, title: c.title }))} previewSrc={VIDEO} />}</Scene>
      {CHAPTERS.map((c) => (
        <Scene key={c.key} from={S[c.key].from} dur={S[c.key].dur}>{(su) => <Chapter u={su} n={c.n} title={c.title} sub={c.sub} dur={S[c.key].dur} />}</Scene>
      ))}
      <Scene from={S.s1.from} dur={S.s1.dur}>{(su) => <S1Create u={su} />}</Scene>
      <Scene from={S.s2.from} dur={S.s2.dur}>{(su) => <S2Connect u={su} />}</Scene>
      <Scene from={S.s3.from} dur={S.s3.dur}>{(su) => <S3Collapse u={su} />}</Scene>
      <Scene from={S.s4.from} dur={S.s4.dur}>{(su) => <S4Focus u={su} />}</Scene>
      <Scene from={S.s5.from} dur={S.s5.dur}>{(su) => <S5Layout u={su} />}</Scene>
      <Scene from={S.s6.from} dur={S.s6.dur}>{(su) => <S6Assets u={su} />}</Scene>
      <Scene from={S.s7.from} dur={S.s7.dur}>{(su) => <S7Prefs u={su} />}</Scene>
      <Scene from={S.outro.from} dur={S.outro.dur}>{(su) => <Outro u={su} videoSrc={VIDEO} />}</Scene>

      {captions ? CAPTIONS.map((c, i) => <Caption key={i} u={u} from={c.from} until={c.until} words={capL(c.text)} y={c.y} size={CAP_SIZE} />) : null}
      <KbdOverlay u={u} cues={KEYS} size={68} marginY={captions ? 150 : 100} faces={UI.kbdFaces} />
      <AudioLayer bgm={bgm} bgmSrc={null} vo={vo} voCues={VO} sfx={SFX} totalTL={TOTAL_TL} />
    </AbsoluteFill>
  );
};
