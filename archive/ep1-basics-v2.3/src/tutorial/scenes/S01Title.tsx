// S01 — 片头（v2，190 帧）：产品同款点阵画布上，一张迷你 workflow 图自己"长"出来
// （节点弹入 + 连线生长，接口用产品的三种端口色）→ 图退散，教程徽标 + 大标题烟条显影 →
// 标题上移让位，7 步内容轨道从左到右点亮（编号 + 标题）→ 整体淡出进第一章。
// 全部帧号纯函数，无音效。
import React from 'react';
import { Img, staticFile } from 'remotion';
import { C, E, F } from '../../../film/tokens';
import { seg } from '../../../film/ux';
import { BlurSlideText } from '../../../film/textFx';

export type TitleStep = { n: number; title: string };

// 弹入（轻过冲，不回摆两次）
const pop = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.pow(2, -10 * t) * Math.cos(t * 6.5) * (1 - t) * 1.0 + 0.0);
const popScale = (u: number, at: number, dur = 14) => {
  const t = seg(u, at, at + dur);
  if (t <= 0) return 0;
  return 1 + Math.pow(1 - t, 2.2) * Math.sin(t * Math.PI * 1.15) * 0.22 - (1 - t) * 0.6 * (1 - t);
};
void pop;

// 迷你 workflow：三个折叠态节点 + 两条贝塞尔连线（页面坐标 1920×1080 居中）
const NODES = [
  { key: 'img', x: 520, y: 392, w: 250, h: 58, port: 'oklch(0.76 0.14 242)', at: 4, label: 'Image' },
  { key: 'txt', x: 520, y: 630, w: 250, h: 58, port: 'oklch(0.78 0.16 163)', at: 10, label: 'Text' },
  { key: 'vid', x: 1150, y: 511, w: 280, h: 58, port: 'oklch(0.74 0.18 293)', at: 30, label: 'Video model' },
] as const;
const bez = (x1: number, y1: number, x2: number, y2: number) => {
  const d = Math.max(60, Math.abs(x2 - x1) * 0.5);
  return `M${x1},${y1} C${x1 + d},${y1} ${x2 - d},${y2} ${x2},${y2}`;
};
const EDGES = [
  { d: bez(770, 421, 1150, 531), at: 14, color: 'oklch(0.76 0.14 242)' },
  { d: bez(770, 659, 1150, 549), at: 20, color: 'oklch(0.78 0.16 163)' },
] as const;

const MiniGraph: React.FC<{ u: number }> = ({ u }) => {
  const gone = seg(u, 46, 64, E.inOut); // 退散：放大 + 模糊 + 淡出
  if (gone >= 1) return null;
  return (
    <svg
      width={1920}
      height={1080}
      viewBox="0 0 1920 1080"
      style={{ position: 'absolute', inset: 0, opacity: 1 - gone, transform: `scale(${1 + gone * 0.08})`, transformOrigin: '50% 50%', filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined }}
    >
      {EDGES.map((e, i) => {
        const t = seg(u, e.at, e.at + 20, E.inOut);
        return <path key={i} d={e.d} fill="none" stroke={e.color} strokeWidth={2.5} strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - t} opacity={0.9} />;
      })}
      {NODES.map((n) => {
        const s = popScale(u, n.at);
        if (s <= 0) return null;
        const cx = n.x + n.w / 2, cy = n.y + n.h / 2;
        const isOut = n.key !== 'vid';
        return (
          <g key={n.key} transform={`translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`} opacity={Math.min(1, s * 1.4)}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={14} fill="#161616" stroke="#3a3a3a" strokeWidth={1.5} />
            <rect x={n.x + 18} y={cy - 9} width={18} height={18} rx={4} fill="none" stroke="#9CA3AF" strokeWidth={1.6} />
            <text x={n.x + 48} y={cy + 6.5} fontFamily={F.sans} fontSize={19} fontWeight={600} fill="#E5E5E5">{n.label}</text>
            {isOut ? <circle cx={n.x + n.w} cy={cy} r={6} fill={n.port} stroke="#000" strokeWidth={2} /> : null}
            {!isOut ? (
              <>
                <circle cx={n.x} cy={cy - 9} r={6} fill="oklch(0.76 0.14 242)" stroke="#000" strokeWidth={2} />
                <circle cx={n.x} cy={cy + 9} r={6} fill="oklch(0.78 0.16 163)" stroke="#000" strokeWidth={2} />
                <circle cx={n.x + n.w} cy={cy} r={6} fill={n.port} stroke="#000" strokeWidth={2} />
              </>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
};

export const S01Title: React.FC<{ u: number; title: string; ep: string; steps: TitleStep[] }> = ({ u, title, ep, steps }) => {
  const out = 1 - seg(u, 176, 188, E.inOut);
  // 标题组：50 帧进场，96–114 上移让位给内容轨道
  const lift = seg(u, 102, 120, E.inOut);
  const badgeIn = seg(u, 54, 68, E.zoom);
  const lineW = seg(u, 78, 98, E.zoom);
  const glow = seg(u, 50, 90, E.zoom) * (1 - seg(u, 160, 188, E.inOut) * 0.6);
  // 内容轨道
  const railX0 = 300, railX1 = 1620, railY = 690;
  const rail = seg(u, 110, 136, E.zoom);
  const n = steps.length;
  const gap = (railX1 - railX0) / (n - 1);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, overflow: 'hidden', opacity: out }}>
      {/* 产品同款点阵画布（极缓漂移）+ 暗角 */}
      <div
        style={{
          position: 'absolute', inset: -60,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.17) 1.2px, transparent 1.8px)',
          backgroundSize: '28px 28px',
          backgroundPosition: `${(u * 0.12).toFixed(2)}px ${(u * 0.06).toFixed(2)}px`,
          maskImage: 'radial-gradient(ellipse 70% 62% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 62% at 50% 50%, black 30%, transparent 100%)',
          opacity: 0.9,
        }}
      />
      {/* 品牌黄微光（标题落定时呼吸一下） */}
      <div style={{ position: 'absolute', left: 960 - 700, top: 540 - 360 - lift * 150, width: 1400, height: 720, background: `radial-gradient(ellipse at center, rgba(244,245,92,${0.10 * glow}) 0%, transparent 60%)`, filter: 'blur(20px)' }} />

      <MiniGraph u={u} />

      {/* 标题组 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `translateY(${-lift * 180}px) scale(${1 - lift * 0.12})`, transformOrigin: '50% 50%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 24px 12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.05)', opacity: badgeIn, transform: `translateY(${(1 - badgeIn) * 14}px)` }}>
            <Img src={staticFile('brand/youart-logo-dark.svg')} style={{ width: 34, height: 34 }} />
            <span style={{ fontFamily: F.sans, fontSize: 24, fontWeight: 600, letterSpacing: '0.02em', color: C.paper }}>YouArt Tutorial</span>
            <span style={{ width: 5, height: 5, borderRadius: 1, background: C.accent }} />
            <span style={{ fontFamily: F.sans, fontSize: 24, fontWeight: 700, letterSpacing: '0.04em', color: C.accent }}>{ep}</span>
          </div>
          <div style={{ fontFamily: F.sans, fontSize: 112, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.02, color: C.paper }}>
            <BlurSlideText frame={u} from={60} words={[{ t: title }]} split="char" stagger={1.1} dur={16} dy={26} blurMax={12} />
          </div>
          <div style={{ height: 4, width: 260 * lineW, background: C.accent, borderRadius: 2, boxShadow: `0 0 18px rgba(244,245,92,${0.5 * lineW})` }} />
        </div>
      </div>

      {/* 7 步内容轨道 */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', left: railX0, top: railY - 1, width: (railX1 - railX0) * rail, height: 2, background: 'linear-gradient(90deg, rgba(255,255,255,0.28), rgba(255,255,255,0.28))', borderRadius: 1 }} />
        {steps.map((s, i) => {
          const at = 116 + i * 5;
          const dot = popScale(u, at, 12);
          const label = seg(u, at + 3, at + 17, E.zoom);
          const x = railX0 + gap * i;
          return (
            <div key={s.n} style={{ position: 'absolute', left: x, top: railY, width: 0 }}>
              <div style={{ position: 'absolute', left: -9, top: -9, width: 18, height: 18, borderRadius: 9, background: C.ink, border: `2px solid ${C.accent}`, transform: `scale(${Math.max(0, dot)})`, boxShadow: `0 0 14px rgba(244,245,92,${0.45 * Math.min(1, dot)})` }}>
                <div style={{ position: 'absolute', left: 4, top: 4, width: 6, height: 6, borderRadius: 3, background: C.accent }} />
              </div>
              <div style={{ position: 'absolute', left: -gap / 2, top: 26, width: gap, textAlign: 'center', opacity: label, transform: `translateY(${(1 - label) * 12}px)`, filter: label < 0.98 ? `blur(${(1 - label) * 6}px)` : undefined }}>
                <div style={{ fontFamily: F.mono, fontSize: 19, fontWeight: 600, letterSpacing: '0.1em', color: C.accent, marginBottom: 10 }}>{String(s.n).padStart(2, '0')}</div>
                <div style={{ fontFamily: F.sans, fontSize: 27, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2, color: C.paper, padding: '0 6px' }}>{s.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
