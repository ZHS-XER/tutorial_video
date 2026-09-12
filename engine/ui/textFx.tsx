import React from 'react';
import { Easing, interpolate } from 'remotion';

// 自包含版（video-shotcraft 模板件）：长尾曲线与 progress 内联，
// 拷入工程后可改回引用项目 tokens/motion。
const E = { zoom: Easing.bezier(0.16, 1, 0.3, 1), inOut: Easing.bezier(0.4, 0, 0.2, 1) };
const progress = (
  frame: number,
  start: number,
  duration: number,
  easing: (v: number) => number = E.zoom,
) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });

// textFx — 参考片（Shotbase）文字语法：字/词作为"模糊的烟条"滑入，
// 减速中逐渐锐化（长尾 E.zoom 曲线 + blur→0 + 位移→0）。出场反向。
// 全部帧号纯函数。

export type BlurWord = { t: string; color?: string };

/** 词级（或字级）blur-smear 显影。exitFrom 给出后整体反向拖出。 */
export const BlurSlideText: React.FC<{
  frame: number;
  from: number;
  words: BlurWord[];
  split?: 'word' | 'char';
  stagger?: number;
  dur?: number;
  dx?: number;
  dy?: number;
  blurMax?: number;
  exitFrom?: number;
  exitDur?: number;
  exitDx?: number;
  exitDy?: number;
  /** 四散炸开退场：每个词按序号向不同方向飞离（覆盖 exitDx/exitDy 的整体位移） */
  exitScatter?: boolean;
  style?: React.CSSProperties;
}> = ({
  frame,
  from,
  words,
  split = 'word',
  stagger = 1.6,
  dur = 13,
  dx = 0,
  dy = 22,
  blurMax = 9,
  exitFrom,
  exitDur = 10,
  exitDx = 0,
  exitDy = -14,
  exitScatter = false,
  style,
}) => {
  const units: BlurWord[] =
    split === 'char'
      ? words.flatMap((w) => Array.from(w.t).map((ch) => ({ t: ch, color: w.color })))
      : words;
  const exit = exitFrom == null ? 0 : progress(frame, exitFrom, exitDur, E.inOut);
  if (exit >= 1) return null;
  return (
    <span style={{ display: 'inline-flex', whiteSpace: 'pre', ...style }}>
      {units.map((u, i) => {
        const t = progress(frame, from + i * stagger, dur, E.zoom);
        const b = blurMax * (1 - t) + exit * 7;
        // 炸开退场：以词序为方向种子四散（中心向外、上下交错），带轻旋转
        const c = (units.length - 1) / 2;
        const sx = exitScatter ? (i - c) * 34 : exitDx;
        const sy = exitScatter ? (i % 2 === 0 ? -1 : 1) * (16 + (i % 3) * 10) - 10 : exitDy;
        const rot = exitScatter ? exit * (i - c) * 5 : 0;
        const ox = dx * (1 - t) + sx * exit;
        const oy = dy * (1 - t) + sy * exit;
        const op = Math.min(1, t * 1.8) * (1 - exit);
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              color: u.color,
              opacity: op,
              transform: `translate(${ox}px, ${oy}px)${rot ? ` rotate(${rot}deg)` : ''}`,
              filter: b > 0.15 ? `blur(${b}px)` : undefined,
            }}
          >
            {u.t}
            {split === 'word' && i < units.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
};
