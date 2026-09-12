import React from 'react';

// trail.tsx — 道具层运动模糊（快门累积法）与冲击特效。
//
// 参考片（Shotbase 宣传片）拆解结论：快速运动的每个中间帧都必须是"模糊的烟"，
// 清晰的定格贴纸会读作跳帧。相机层已有 Recordly 保真模糊（ScreenStage），
// 本文件补齐道具层：沿同一 poseAt 纯函数向过去回采样 2–3 个子帧实例，
// 透明度递减、模糊递增，叠在本体之下——180° 快门的离散近似。
// 全部帧号纯函数，seek 安全；速度低于阈值时零开销（只渲本体）。

export type TrailPose = { x: number; y: number; rot?: number; scale?: number };

export type TrailDrawOpts = { opacity: number; blur: number; key: string; isGhost: boolean };

/**
 * 带拖影渲染：draw 负责把一个 pose 画成节点（本体与鬼影同一画法，鬼影建议
 * 不挂 drive/阴影）。速度 = |pose(f) − pose(f−span)|（画布 px / span 单位帧），
 * 低于 minStep 只渲本体。
 */
export const withTrail = (
  frame: number,
  poseAt: (f: number) => TrailPose,
  draw: (pose: TrailPose, o: TrailDrawOpts) => React.ReactNode,
  opts: { taps?: number; span?: number; minStep?: number; strength?: number } = {},
): React.ReactNode[] => {
  const { taps = 4, span = 1.0, minStep = 7, strength = 1 } = opts;
  const cur = poseAt(frame);
  const prev = poseAt(frame - span);
  const step = Math.hypot(cur.x - prev.x, cur.y - prev.y);
  const out: React.ReactNode[] = [];
  if (step >= minStep) {
    // 强度随速度爬升：阈值处 0，~90px/单位帧满强度
    const k = Math.min(1, (step - minStep) / 90);
    for (let i = taps; i >= 1; i--) {
      const pose = poseAt(frame - (span * i) / taps);
      out.push(
        draw(pose, {
          opacity: 0.3 * strength * k * (1 - (i - 1) / taps),
          blur: 2 + i * 2.4,
          key: `trail-${i}`,
          isGhost: true,
        }),
      );
    }
  }
  out.push(draw(cur, { opacity: 1, blur: 0, key: 'main', isGhost: false }));
  return out;
};

/** 冲击涟漪环：落章/尾板落地的能量外扩（一圈变细变淡的描边圆） */
export const ShockRing: React.FC<{
  frame: number;
  startF: number;
  cx: number;
  cy: number;
  r0?: number;
  r1?: number;
  durF?: number;
  color?: string;
  width0?: number;
}> = ({ frame, startF, cx, cy, r0 = 26, r1 = 170, durF = 14, color = 'rgba(23,23,23,0.5)', width0 = 5 }) => {
  const t = (frame - startF) / durF;
  if (t <= 0 || t >= 1) return null;
  const e = 1 - Math.pow(1 - t, 3);
  const r = r0 + (r1 - r0) * e;
  return (
    <div
      style={{
        position: 'absolute',
        left: cx - r,
        top: cy - r,
        width: r * 2,
        height: r * 2,
        borderRadius: '50%',
        border: `${width0 * (1 - e) + 1}px solid ${color}`,
        opacity: 1 - e,
        pointerEvents: 'none',
      }}
    />
  );
};

/** 方向性模糊 SVG 滤镜定义 + 引用（whip 甩镜用；stdDeviation "x y" 各向异性） */
export const DirBlurDef: React.FC<{ id: string; sx: number; sy: number }> = ({ id, sx, sy }) =>
  sx < 0.2 && sy < 0.2 ? null : (
    <svg width={0} height={0} style={{ position: 'absolute' }}>
      <filter id={id} x="-15%" y="-15%" width="130%" height="130%">
        <feGaussianBlur stdDeviation={`${sx} ${sy}`} />
      </filter>
    </svg>
  );

// 确定性伪随机（种子哈希，禁 Math.random——seek 安全）
const hash01 = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** 双侧礼炮彩屑（particle-celebrate-hits · confetti-crossfire 语法）：
 * 两门"炮"从下方朝内上方交叉喷出扁纸片，抛物线 + 自转 + 尾段淡出。全帧号纯函数。 */
export const ConfettiCrossfire: React.FC<{
  frame: number;
  startF: number;
  count?: number;
  durF?: number;
  colors?: string[];
  origins?: Array<{ x: number; y: number; dir: number }>;
}> = ({
  frame,
  startF,
  count = 44,
  durF = 34,
  colors = ['#FF4704', '#15362B', '#FFB38A', '#F5F0E6', '#1E7A4F'],
  origins = [
    { x: 560, y: 900, dir: -62 },
    { x: 1360, y: 900, dir: -118 },
  ],
}) => {
  const tU = frame - startF;
  if (tU <= 0 || tU >= durF) return null;
  const pieces: React.ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    const o = origins[i % origins.length];
    const spread = (hash01(i, 1) - 0.5) * 56; // ±28°
    const ang = ((o.dir + spread) * Math.PI) / 180;
    const v0 = 30 + hash01(i, 2) * 26; // px/u 初速
    const delay = hash01(i, 3) * 3;
    const t = tU - delay;
    if (t <= 0) continue;
    const x = o.x + Math.cos(ang) * v0 * t + (hash01(i, 7) - 0.5) * 8 * t;
    const y = o.y + Math.sin(ang) * v0 * t + 1.55 * t * t; // 重力
    if (y > 1140) continue;
    const rot = hash01(i, 4) * 360 + t * (14 + hash01(i, 5) * 22) * (i % 2 ? 1 : -1);
    const w = 9 + hash01(i, 6) * 8;
    const fade = Math.min(1, (durF - t) / 8);
    pieces.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: w,
          height: w * 0.62,
          backgroundColor: colors[i % colors.length],
          borderRadius: 1.5,
          transform: `rotate(${rot}deg) scaleY(${0.4 + 0.6 * Math.abs(Math.sin(t * 0.9 + i))})`,
          opacity: 0.95 * fade,
        }}
      />,
    );
  }
  return <div style={{ position: 'absolute', inset: 0, zIndex: 60, pointerEvents: 'none' }}>{pieces}</div>;
};

/** 点击放射速度线（icon-performance · pop-burst 语法）：8 条短线从点向外射出即逝 */
export const RadialBurst: React.FC<{
  frame: number;
  startF: number;
  cx: number;
  cy: number;
  durF?: number;
  color?: string;
  n?: number;
}> = ({ frame, startF, cx, cy, durF = 9, color = 'rgba(255,71,4,0.8)', n = 8 }) => {
  const t = (frame - startF) / durF;
  if (t <= 0 || t >= 1) return null;
  const e = 1 - Math.pow(1 - t, 3);
  const lines: React.ReactNode[] = [];
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 + 0.35;
    const r0 = 28 + e * 74;
    const len = 26 * (1 - e * 0.6);
    lines.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: cx + Math.cos(ang) * r0,
          top: cy + Math.sin(ang) * r0,
          width: len,
          height: 3.5,
          backgroundColor: color,
          borderRadius: 2,
          transform: `rotate(${(ang * 180) / Math.PI}deg)`,
          transformOrigin: '0 50%',
          opacity: 1 - e,
        }}
      />,
    );
  }
  return <div style={{ position: 'absolute', inset: 0, zIndex: 42, pointerEvents: 'none' }}>{lines}</div>;
};
