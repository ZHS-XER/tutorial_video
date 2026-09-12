// TargetRing — 点击目标提示环（2026-09-11，教程调性：点下去之前先告诉观众看哪里）。
// 页面坐标系（挂在 ScreenStage 的 overlay 槽里，随相机一起缩放）：品牌黄细线圆角矩形，
// 从 1.12× 缩到 1 落到目标外沿（LAND 弹簧观感），停留后淡出。全部帧号纯函数。
import React from 'react';
import { C, E } from '@engine/tokens';
import { seg } from '@engine/ui/ux';
import type { Aim } from '@engine/camera/camera';

export type RingCue = {
  /** 出现帧（场景 u 语义） */
  at: number;
  /** 目标矩形（页面坐标）；w/h 为 0 时按 minSize 画一个正方形 */
  aim: Aim | { cx: number; cy: number; x?: number; y?: number; w?: number; h?: number };
  /** 可见总时长（含淡出），默认 30 */
  dur?: number;
  /** 外扩边距，默认 6 */
  pad?: number;
  /** 圆角，默认 10（小目标自动收到高度的 0.3） */
  radius?: number;
  /** 极小目标（如 handle 圆点）的最小外框边长，默认 34 */
  minSize?: number;
};

const rectOf = (c: RingCue) => {
  const a = c.aim as { cx: number; cy: number; x?: number; y?: number; w?: number; h?: number };
  const min = c.minSize ?? 34;
  const w = Math.max(a.w ?? 0, min);
  const h = Math.max(a.h ?? 0, min);
  return { x: a.cx - w / 2, y: a.cy - h / 2, w, h };
};

export const TargetRing: React.FC<{ u: number; cues: RingCue[]; color?: string; stroke?: number }> = ({ u, cues, color = C.accent, stroke = 2 }) => (
  <>
    {cues.map((c, i) => {
      const dur = c.dur ?? 30;
      if (u < c.at || u > c.at + dur) return null;
      const inn = seg(u, c.at, c.at + 9, E.zoom); // 落位
      const out = seg(u, c.at + dur - 8, c.at + dur, E.inOut); // 淡出
      const pad = (c.pad ?? 6) + (1 - inn) * 14; // 从外侧收进来
      const r = rectOf(c);
      const radius = Math.min(c.radius ?? 10, r.h * 0.3 + pad);
      const op = Math.min(1, inn * 1.6) * (1 - out) * 0.95;
      return (
        <div
          key={`${c.at}-${i}`}
          style={{
            position: 'absolute',
            left: r.x - pad,
            top: r.y - pad,
            width: r.w + pad * 2,
            height: r.h + pad * 2,
            borderRadius: radius,
            border: `${stroke}px solid ${color}`,
            boxShadow: `0 0 ${10 * inn}px rgba(244,245,92,${0.35 * (1 - out)})`,
            opacity: op,
            pointerEvents: 'none',
          }}
        />
      );
    })}
  </>
);
