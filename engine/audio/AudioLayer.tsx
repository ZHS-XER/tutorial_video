// AudioLayer — 通用声明式音频层：BGM（inputProp 开关）+ VO 表 + SFX 钉帧表。
// 帧号全部 TL 语义（相对教程 0 帧），渲染时 tl() 换算。
// 参照 youart-promo-v3 film/audio.tsx 去项目化；AAC priming 补偿保留为可调常量。
import React from 'react';
import { Audio, Sequence, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { TL_SCALE, tl } from '@engine/tokens';

export type Cue = { at: number; src: string; vol?: number; dur?: number };

/** AAC 编码 priming 导致的输出偏移（渲染帧）。30fps≈1.58f，60fps≈3.16f；渲后回测校正 */
export const OUTPUT_AUDIO_OFFSET_F = 1.58 * TL_SCALE;

const from = (atTL: number) => Math.max(0, Math.round(atTL * TL_SCALE - OUTPUT_AUDIO_OFFSET_F));

export const AudioLayer: React.FC<{
  /** BGM 文件（public 相对路径）；null/undefined 或 bgm=false 时不放 */
  bgmSrc?: string | null;
  bgm?: boolean;
  bgmVol?: number;
  /** VO 播放期间 BGM 压到的倍率（ducking） */
  duck?: number;
  vo?: boolean;
  voCues?: Cue[];
  sfx?: Cue[];
  totalTL: number;
}> = ({ bgmSrc, bgm = true, bgmVol = 0.32, duck = 0.35, vo = true, voCues = [], sfx = [], totalTL }) => {
  const frame = useCurrentFrame();
  const u = frame / TL_SCALE;

  // BGM 包络：入 12u 淡入，尾 30u 淡出，VO 段 ducking（前后各 6u 过渡）
  let env = interpolate(u, [0, 12, totalTL - 30, totalTL], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  if (vo) {
    for (const c of voCues) {
      const d = c.dur ?? 0;
      const k = interpolate(u, [c.at - 6, c.at, c.at + d, c.at + d + 6], [1, duck, duck, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      env = Math.min(env, k);
    }
  }

  return (
    <>
      {bgm && bgmSrc ? <Audio src={staticFile(bgmSrc)} volume={bgmVol * env} /> : null}
      {vo
        ? voCues.map((c, i) => (
            <Sequence key={`vo-${i}`} from={from(c.at)} durationInFrames={c.dur ? tl(c.dur) + 6 : undefined} layout="none">
              <Audio src={staticFile(c.src)} volume={c.vol ?? 0.8} />
            </Sequence>
          ))
        : null}
      {sfx.map((s, i) => (
        <Sequence key={`sfx-${i}`} from={from(s.at)} durationInFrames={tl(s.dur ?? 90)} layout="none">
          <Audio src={staticFile(s.src)} volume={s.vol ?? 0.3} />
        </Sequence>
      ))}
    </>
  );
};
