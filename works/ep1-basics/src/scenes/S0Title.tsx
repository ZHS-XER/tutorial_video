// S0 — 片头：点阵画布上迷你 workflow 长出来 → 徽标 + 大标题烟条显影（第一屏）→ 切到第二屏：七步内容竖排清单从上到下点亮（2026-09-12 用户：横向轨道不好看，拆两屏、竖排），
// 之后接一段"成片预览"：圆角矩形卡片里播放店招视频（s0-2 "…Like this."），淡出进第一章。无音效。
import React from 'react';
import { Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { C, E, F, tl } from '@engine/tokens';
import { seg } from '@engine/ui/ux';
import { BlurSlideText } from '@engine/ui/textFx';

export type TitleStep = { n: number; title: string };
export const TITLE_ANIM = 300; // 标题动画段（2026-09-12 拆成两屏：0–118 徽标+大标题，118–230 七步竖排清单）
export const TITLE_PREVIEW = 143; // 成片预览段（2026-09-12 +23 帧 ≈ 0.75s：让示例视频播完）
export const TITLE_DUR = TITLE_ANIM + TITLE_PREVIEW;

const popScale = (u: number, at: number, dur = 14) => {
  const t = seg(u, at, at + dur);
  if (t <= 0) return 0;
  return 1 + Math.pow(1 - t, 2.2) * Math.sin(t * Math.PI * 1.15) * 0.22 - (1 - t) * 0.6 * (1 - t);
};

// 迷你 workflow：四个折叠态节点（与本集主线一致：Image → Image model → Video model，Text 汇入）+ 三条连线
const NODES = [
  { key: 'img', x: 420, y: 392, w: 240, h: 58, port: 'oklch(0.76 0.14 242)', at: 4, label: 'Image' },
  { key: 'gpt', x: 790, y: 392, w: 270, h: 58, port: 'oklch(0.76 0.14 242)', at: 14, label: 'Image model' },
  { key: 'txt', x: 790, y: 640, w: 270, h: 58, port: 'oklch(0.78 0.16 163)', at: 22, label: 'Text' },
  { key: 'vid', x: 1190, y: 511, w: 280, h: 58, port: 'oklch(0.74 0.18 293)', at: 34, label: 'Video model' },
] as const;
const bez = (x1: number, y1: number, x2: number, y2: number) => {
  const d = Math.max(60, Math.abs(x2 - x1) * 0.5);
  return `M${x1},${y1} C${x1 + d},${y1} ${x2 - d},${y2} ${x2},${y2}`;
};
const EDGES = [
  { d: bez(660, 421, 790, 421), at: 10, color: 'oklch(0.76 0.14 242)' },
  { d: bez(1060, 421, 1190, 531), at: 24, color: 'oklch(0.76 0.14 242)' },
  { d: bez(1060, 669, 1190, 549), at: 30, color: 'oklch(0.78 0.16 163)' },
] as const;

const MiniGraph: React.FC<{ u: number }> = ({ u }) => {
  const gone = seg(u, 84, 102, E.inOut);
  if (gone >= 1) return null;
  return (
    <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0, opacity: 1 - gone, transform: `scale(${1 + gone * 0.08})`, transformOrigin: '50% 50%', filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined }}>
      {EDGES.map((e, i) => {
        const t = seg(u, e.at, e.at + 20, E.inOut);
        return <path key={i} d={e.d} fill="none" stroke={e.color} strokeWidth={2.5} strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - t} opacity={0.9} />;
      })}
      {NODES.map((n) => {
        const s = popScale(u, n.at);
        if (s <= 0) return null;
        const cx = n.x + n.w / 2, cy = n.y + n.h / 2;
        const hasIn = n.key !== 'img';
        return (
          <g key={n.key} transform={`translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`} opacity={Math.min(1, s * 1.4)}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={14} fill="#161616" stroke="#3a3a3a" strokeWidth={1.5} />
            <rect x={n.x + 18} y={cy - 9} width={18} height={18} rx={4} fill="none" stroke="#9CA3AF" strokeWidth={1.6} />
            <text x={n.x + 48} y={cy + 6.5} fontFamily={F.sans} fontSize={19} fontWeight={600} fill="#E5E5E5">{n.label}</text>
            {hasIn ? <circle cx={n.x} cy={n.key === 'vid' ? cy - 9 : cy} r={6} fill="oklch(0.76 0.14 242)" stroke="#000" strokeWidth={2} /> : null}
            {n.key === 'vid' ? <circle cx={n.x} cy={cy + 9} r={6} fill="oklch(0.78 0.16 163)" stroke="#000" strokeWidth={2} /> : null}
            <circle cx={n.x + n.w} cy={cy} r={6} fill={n.port} stroke="#000" strokeWidth={2} />
          </g>
        );
      })}
    </svg>
  );
};

export const S0Title: React.FC<{ u: number; title: string; ep: string; steps: TitleStep[]; previewSrc: string }> = ({ u, title, ep, steps, previewSrc }) => {
  // —— 第一屏：徽标 + 大标题 ——
  const T1_OUT = 176; // 第一屏开始淡出（2026-09-13 用户：迷你 workflow 与大标题都多停一会）
  const titleOut = 1 - seg(u, T1_OUT, T1_OUT + 12, E.inOut);
  const badgeIn = seg(u, 92, 106, E.zoom);
  const lineW = seg(u, 116, 136, E.zoom);
  const glow = seg(u, 88, 128, E.zoom) * titleOut;
  // —— 第二屏：七步竖排清单 ——
  const L0 = T1_OUT + 10; // 清单入场帧
  const listOut = 1 - seg(u, TITLE_ANIM - 14, TITLE_ANIM, E.inOut);
  const n = steps.length;
  const ROW = 76, LIST_X = 700, LIST_W = 520;
  const listTop = 540 - (n * ROW) / 2;
  const railGrow = seg(u, L0, L0 + 30, E.zoom);
  // —— 预览段 ——
  const pv = seg(u, TITLE_ANIM - 6, TITLE_ANIM + 14, E.zoom);
  const pvOut = seg(u, TITLE_DUR - 12, TITLE_DUR, E.inOut);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: -60, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.17) 1.2px, transparent 1.8px)', backgroundSize: '28px 28px', backgroundPosition: `${(u * 0.12).toFixed(2)}px ${(u * 0.06).toFixed(2)}px`, maskImage: 'radial-gradient(ellipse 70% 62% at 50% 50%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 62% at 50% 50%, black 30%, transparent 100%)', opacity: 0.9 * (1 - pvOut) }} />
      {u < T1_OUT + 12 ? (
        <div style={{ position: 'absolute', inset: 0, opacity: titleOut }}>
          <div style={{ position: 'absolute', left: 960 - 700, top: 540 - 360, width: 1400, height: 720, background: `radial-gradient(ellipse at center, rgba(244,245,92,${0.10 * glow}) 0%, transparent 60%)`, filter: 'blur(20px)' }} />
          <MiniGraph u={u} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scale(${1 - (1 - titleOut) * 0.06})`, transformOrigin: '50% 50%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 24px 12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.05)', opacity: badgeIn, transform: `translateY(${(1 - badgeIn) * 14}px)` }}>
                <Img src={staticFile('shared/brand/youart-logo-dark.svg')} style={{ width: 34, height: 34 }} />
                <span style={{ fontFamily: F.sans, fontSize: 24, fontWeight: 600, letterSpacing: '0.02em', color: C.paper }}>YouArt Tutorial</span>
                <span style={{ width: 5, height: 5, borderRadius: 1, background: C.accent }} />
                <span style={{ fontFamily: F.sans, fontSize: 24, fontWeight: 700, letterSpacing: '0.04em', color: C.accent }}>{ep}</span>
              </div>
              <div style={{ fontFamily: F.sans, fontSize: 112, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.02, color: C.paper }}>
                <BlurSlideText frame={u} from={98} words={[{ t: title }]} split="char" stagger={1.1} dur={16} dy={26} blurMax={12} />
              </div>
              <div style={{ height: 4, width: 260 * lineW, background: C.accent, borderRadius: 2, boxShadow: `0 0 18px rgba(244,245,92,${0.5 * lineW})` }} />
            </div>
          </div>
        </div>
      ) : null}
      {u >= L0 && u < TITLE_ANIM ? (
        <div style={{ position: 'absolute', inset: 0, opacity: listOut }}>
          {/* 左侧竖轨：从上到下长出 */}
          <div style={{ position: 'absolute', left: LIST_X, top: listTop + ROW / 2, width: 2, height: (n - 1) * ROW * railGrow, background: 'rgba(255,255,255,0.22)' }} />
          {steps.map((st, i) => {
            const at = L0 + 6 + i * 6;
            const dot = popScale(u, at, 12);
            const label = seg(u, at + 3, at + 17, E.zoom);
            const y = listTop + i * ROW;
            return (
              <div key={st.n} style={{ position: 'absolute', left: LIST_X, top: y, height: ROW, width: LIST_W, display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', left: -8, top: ROW / 2 - 9, width: 18, height: 18, borderRadius: 9, background: C.ink, border: `2px solid ${C.accent}`, transform: `scale(${Math.max(0, dot)})`, boxShadow: `0 0 14px rgba(244,245,92,${0.45 * Math.min(1, dot)})` }}>
                  <div style={{ position: 'absolute', left: 4, top: 4, width: 6, height: 6, borderRadius: 3, background: C.accent }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 22, marginLeft: 44, opacity: label, transform: `translateX(${(1 - label) * 16}px)`, filter: label < 0.98 ? `blur(${(1 - label) * 6}px)` : undefined }}>
                  <span style={{ fontFamily: F.mono, fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', color: C.accent, width: 44 }}>{String(st.n).padStart(2, '0')}</span>
                  <span style={{ fontFamily: F.sans, fontSize: 40, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.1, color: C.paper, whiteSpace: 'nowrap' }}>{st.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      {/* 成片预览：圆角矩形卡片弹入，店招视频播放 */}
      {u >= TITLE_ANIM - 6 ? (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: pv * (1 - pvOut) }}>
          <div style={{ width: 1180, height: 760, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 40px 120px rgba(0,0,0,0.6)', transform: `scale(${0.92 + 0.08 * pv}) translateY(${(1 - pv) * 30}px)`, background: '#000' }}>
            <Sequence from={tl(TITLE_ANIM - 6)} layout="none">
              <OffthreadVideo src={staticFile(previewSrc)} startFrom={48} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Sequence>
          </div>
        </div>
      ) : null}
    </div>
  );
};
