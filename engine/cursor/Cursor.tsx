import React from 'react';
import { C, TL } from '@engine/tokens';
import { keyframes, lerp, progress, type Key } from '@engine/motion/motion';
import { E } from '@engine/tokens';
import { CURSOR_SPRING, springTrackN } from '@engine/motion/spring';
import { MouseBadgeIcon, type MouseKind } from './mouseIcons';

// Cursor — 合成光标层（页面坐标系，挂在相机层内部，随 zoom 一起缩放）。
// Recordly 语义（2026-08-26 移植）：
// - 位置双层平滑：waypoints 分段 glide 插值生成目标，硬弹簧逐帧追赶——
//   连续 waypoint 之间不再"停-起"，运动 C¹ 连续且跟手；
// - 点击 squash：350ms 正弦回弹（幅度随 bounce，地板 0.72）；
// - 手腕摆动：按移动速度施加 ±10° 以内的方向性倾斜（速度参考 1400 px/s）；
// - 涟漪锚定点击帧的光标位置，不随光标移动（真实录屏手感）。
// 全部为帧号纯函数，seek 安全。

export type CursorKey = Key<{ x: number; y: number }>;
export type CursorType = 'arrow' | 'text';

/** keyviz 式鼠标指示徽标：光标右下角一枚半透明胶囊里的鼠标图标，点击/滚动时高亮对应部位 */
export type CursorIndicator = {
  /** 无事件时也常驻显示 Default 图标（keyviz keepIndicator） */
  keep?: boolean;
  size?: number; // 默认 50
  offset?: { x: number; y: number }; // 相对光标热点，默认 (50, 50)
  /** 显式事件（右键/中键/滚轮）；左键点击自动取自 clicks */
  events?: Array<{ f: number; kind: Exclude<MouseKind, 'Default'>; dur?: number }>;
  accent?: string; // 高亮色，默认品牌色
  minShow?: number; // 点击最短显示帧数（keyviz 200ms ≈ 6f）
};

const ARROW = // macOS 风格箭头（黑体白描边）
  'M0,0 L0,26.4 L5.5,21.6 L9.4,30.6 L13.3,28.9 L9.4,20.0 L16.6,19.6 Z';

// macOS 风格文本梁（I-beam）：竖杆 + 上下衬线，热点在几何中心
const IBEAM =
  'M4,0 L9,0 M13,0 L18,0 M9,0 C10.2,0 11,0.8 11,2 L11,26 C11,27.2 10.2,28 9,28 M13,0 C11.8,0 11,0.8 11,2 M13,28 C11.8,28 11,27.2 11,26 M4,28 L9,28 M13,28 L18,28';

// Recordly 摆动参数：最大 ±10°，速度参考 1400 px/s，纵向权重 0.65
const SWAY_MAX_DEG = 10;
const SWAY_SPEED_REF = 1400;
const SWAY_VERTICAL_WEIGHT = 0.65;

/** 光标某帧的实际位置（glide 目标 + 弹簧追赶，与 <Cursor> 渲染完全一致）。
 * 供"跟手"驱动器使用：被拖动的元素应按此位置位移，才能与光标严格同步。 */
export const cursorPosAt = (
  keys: CursorKey[],
  frame: number,
  fps: number = TL,
  smoothing: 'spring' | 'ease' = 'spring',
): [number, number] => {
  const targetAt = (f: number): number[] => {
    const p = keyframes(keys, f, E.glide);
    return [p.x, p.y];
  };
  const r = smoothing === 'spring' ? springTrackN(targetAt, frame, fps, CURSOR_SPRING) : targetAt(frame);
  return [r[0], r[1]];
};

export const Cursor: React.FC<{
  frame: number;
  keys: CursorKey[];
  clicks: number[];
  /** 进场帧：之前不渲染 */
  appearAt?: number;
  size?: number;
  /** 位置平滑：'spring' = glide 目标 + 弹簧追赶（默认）；'ease' = 旧版纯插值 */
  smoothing?: 'spring' | 'ease';
  /** 点击回弹幅度：squash 深度 = 0.08×bounce（默认 2 → 最低 0.84），地板 0.72 */
  bounce?: number;
  /** 摆动强度：1 = 满速时 ±10°（授意编排的移动通常远低于满速，观感克制）；0 关闭 */
  sway?: number;
  /** 光标形态按帧段切换（Recordly 按系统光标状态重绘）：取 f ≤ 当前帧的最后一条，缺省 arrow */
  types?: Array<{ f: number; type: CursorType }>;
  indicator?: CursorIndicator;
  fps?: number;
}> = ({
  frame,
  keys,
  clicks,
  appearAt = 0,
  size = 34,
  smoothing = 'spring',
  bounce = 2,
  sway = 1,
  types = [],
  indicator,
  fps = TL,
}) => {
  if (frame < appearAt || keys.length === 0) return null;
  const posAt = (f: number): number[] => cursorPosAt(keys, f, fps, smoothing);
  const [px, py] = posAt(frame);

  // 手腕摆动：由平滑后位置的帧间速度推方向性倾斜
  let swayDeg = 0;
  if (sway > 0 && frame > 0) {
    const [qx, qy] = posAt(frame - 1);
    const dx = px - qx;
    const dy = py - qy;
    const dist = Math.hypot(dx, dy);
    if (dist > 0.01) {
      const speedFactor = Math.min((dist * fps) / SWAY_SPEED_REF, 1);
      const bias = Math.max(-1, Math.min(1, (dx + dy * SWAY_VERTICAL_WEIGHT) / dist));
      swayDeg = Math.max(-SWAY_MAX_DEG, Math.min(SWAY_MAX_DEG, bias * speedFactor * SWAY_MAX_DEG * sway));
    }
  }

  // 点击 squash：350ms 正弦回弹，地板 0.72（Recordly 手感）
  const bounceDur = Math.max(1, Math.round(0.35 * fps));
  let press = 1;
  for (const fc of clicks) {
    if (frame >= fc && frame <= fc + bounceDur) {
      const t = (frame - fc) / bounceDur;
      press = Math.min(press, Math.max(0.72, 1 - Math.sin(t * Math.PI) * 0.08 * bounce));
    }
  }

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}>
      {/* 点击涟漪（锚定在点击发生时的光标位置，不随光标移动） */}
      {clicks.map((fc) => {
        if (frame < fc || frame > fc + 22) return null;
        const [anchorX, anchorY] = posAt(fc);
        const t = progress(frame, fc, 22, E.out);
        const r = lerp(10, 56, t);
        return (
          <div
            key={fc}
            style={{
              position: 'absolute',
              left: anchorX - r,
              top: anchorY - r,
              width: r * 2,
              height: r * 2,
              borderRadius: '50%',
              border: `${lerp(5, 1.5, t)}px solid ${C.accent}`,
              opacity: lerp(0.6, 0, t),
            }}
          />
        );
      })}
      {/* 光标本体（形态按帧段切换） */}
      {(() => {
        let type: CursorType = 'arrow';
        for (const t of types) if (t.f <= frame) type = t.type;
        if (type === 'text') {
          return (
            <svg
              width={size * 0.72}
              height={size}
              viewBox="0 0 22 28"
              style={{
                position: 'absolute',
                left: px - size * 0.36,
                top: py - size / 2,
                transform: `rotate(${swayDeg}deg) scale(${press})`,
                transformOrigin: '50% 50%',
                filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))',
              }}
            >
              <path d={IBEAM} fill="none" stroke="#FFFFFF" strokeWidth="4.4" strokeLinecap="round" />
              <path d={IBEAM} fill="none" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          );
        }
        return (
          <svg
            width={size}
            height={size * 1.9}
            viewBox="-2 -2 21 35"
            style={{
              position: 'absolute',
              left: px,
              top: py,
              transform: `rotate(${swayDeg}deg) scale(${press})`,
              transformOrigin: '2px 2px',
              filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.35))',
            }}
          >
            <path d={ARROW} fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        );
      })()}
      {/* keyviz 鼠标指示徽标 */}
      {indicator
        ? (() => {
            const sz = indicator.size ?? 50;
            const off = indicator.offset ?? { x: 50, y: 50 };
            const minShow = indicator.minShow ?? 6;
            const fade = Math.max(1, Math.round(0.2 * fps));
            let kind: MouseKind = 'Default';
            let op = indicator.keep ? 1 : 0;
            const consider = (f0: number, f1: number, k: MouseKind) => {
              if (frame < f0 || frame > f1 + fade) return;
              const inT = Math.min(1, (frame - f0 + 1) / fade);
              const outT = frame > f1 ? Math.min(1, (frame - f1) / fade) : 0;
              const o = inT * (1 - outT);
              if (o >= op || kind === 'Default') { kind = k; op = Math.max(op, o); }
            };
            for (const fc of clicks) consider(fc, fc + Math.max(minShow, 1), 'Left');
            for (const ev of indicator.events ?? []) consider(ev.f, ev.f + (ev.dur ?? minShow), ev.kind);
            if (op <= 0.01) return null;
            return (
              <div
                style={{
                  position: 'absolute',
                  left: px + off.x,
                  top: py + off.y,
                  width: sz * 0.92,
                  height: sz,
                  padding: sz * 0.2,
                  boxSizing: 'border-box',
                  borderRadius: '28%',
                  background: 'rgba(0,0,0,0.5)',
                  opacity: op,
                }}
              >
                <MouseBadgeIcon kind={kind} accent={indicator.accent ?? C.accent} />
              </div>
            );
          })()
        : null}
    </div>
  );
};
