// ux.tsx — 共享 UI 件：字幕 Caption、场景边界 whip 包装、涟漪接管、杂项。
// 帧号一律 30fps 时间线语义（u）。
import React from 'react';
import { C, E, F } from '@engine/tokens';
import { DirBlurDef } from '@engine/ui/trail';

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const seg = (u: number, a: number, b: number, ease?: (v: number) => number) => {
  const t = clamp01((u - a) / (b - a));
  return ease ? ease(t) : t;
};
export const lerp = (t: number, a: number, b: number) => a + (b - a) * t;

/** VO 字幕：底部胶囊 scrim，Inter 600 / 56px 有效字高（Q11），关键词品牌黄。
 * 不遮 UI：默认 y 中心 1002（走查窗口下缘壁纸带）。 */
export const Caption: React.FC<{
  u: number;
  from: number;
  until: number;
  /** glue：该词与前一词之间不留词距（中文字幕里高亮词与前后文相接，2026-09-17） */
  words: Array<{ t: string; hi?: boolean; glue?: boolean }>;
  y?: number;
  /** 固定字号（不随句长缩放，不换行——长句由编排拆段先后显示）。底部字幕以底边锚定 */
  size?: number;
  maxWidth?: number;
}> = ({ u, from, until, words, y = 1002, size, maxWidth = 1500 }) => {
  if (u < from - 2 || u > until + 8) return null;
  const inn = seg(u, from, from + 8, E.zoom);
  const out = seg(u, until, until + 7, E.inOut);
  const op = inn * (1 - out);
  if (op <= 0.005) return null;
  // 长句自动缩字号：46 字以内 56px，更长按比例缩到最小 36px（避免撑出 1920 宽）
  const chars = words.reduce((n, w) => n + w.t.length + 1, 0);
  const fontSize = size ?? Math.min(56, Math.max(36, Math.round((56 * 46) / Math.max(46, chars))));
  const anchorBottom = size != null && y > 540;
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        ...(anchorBottom ? { bottom: 1080 - (y + 44) } : { top: y - 44 }),
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 40,
      }}
    >
      <div
        style={{
          display: size != null ? 'inline-block' : 'flex',
          textAlign: 'center',
          maxWidth: size != null ? maxWidth : undefined,
          lineHeight: size != null ? 1.22 : undefined,
          gap: '0.32em',
          alignItems: 'baseline',
          padding: '14px 34px',
          borderRadius: 18,
          background: 'rgba(0,0,0,0.44)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.09)',
          opacity: op,
          transform: `translateY(${(1 - inn) * 22 + out * 14}px)`,
          fontFamily: F.sans,
          fontWeight: 600,
          fontSize,
          letterSpacing: '-0.015em',
          whiteSpace: 'nowrap',
        }}
      >
        {words.map((w, i) => {
          const wi = seg(u, from + i * 0.7, from + i * 0.7 + 6, E.zoom);
          return (
            <span
              key={i}
              style={{
                color: w.hi ? C.accent : C.paper,
                opacity: wi,
                filter: `blur(${(1 - wi) * 6}px)`,
                transform: `translateY(${(1 - wi) * 10}px)`,
                display: 'inline-block',
                marginRight: size != null && i < words.length - 1 && !words[i + 1]?.glue ? '0.3em' : undefined,
              }}
            >
              {w.t}
            </span>
          );
        })}
      </div>
    </div>
  );
};

/** 便捷：纯文本转 words（*词* 标记品牌黄） */
export const cap = (s: string): Array<{ t: string; hi?: boolean }> => {
  // 支持多词高亮（*Auto Layout*）与尾随标点（*input*. / *color-coded*:）
  const out: Array<{ t: string; hi?: boolean }> = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  const pushPlain = (txt: string) => txt.split(' ').filter(Boolean).forEach((w) => out.push({ t: w }));
  while ((m = re.exec(s))) {
    pushPlain(s.slice(last, m.index));
    const ws = m[1].split(' ').filter(Boolean);
    // 高亮后紧跟的标点并入最后一个高亮词（作为普通色尾巴会割裂，直接同色）
    const tail = /^[.,:;!?…)]+/.exec(s.slice(m.index + m[0].length))?.[0] ?? '';
    ws.forEach((w, i) => out.push({ t: i === ws.length - 1 ? w + tail : w, hi: true }));
    last = m.index + m[0].length + tail.length;
  }
  pushPlain(s.slice(last));
  return out;
};

/** 场景边界 whip 半程包装：exit 甩出 / enter 落入（motion-silk §五，两侧各自实现）。
 * dir: 'left'（A 左甩 → B 自右落）| 'up'（层级下钻）。补边 scale 按公式给足。 */
export const WhipWrap: React.FC<{
  u: number;
  dur: number;
  mode: 'exitLeft' | 'enterRight' | 'exitUp' | 'enterDown' | 'none';
  exitStart?: number; // exit 模式：起甩帧
  children: React.ReactNode;
}> = ({ u, dur, mode, exitStart = 0, children }) => {
  const id = React.useId();
  let tx = 0;
  let ty = 0;
  let sc = 1;
  let p = 0;
  if (mode === 'exitLeft' || mode === 'exitUp') {
    p = seg(u, exitStart, exitStart + 8, E.inOut);
    if (mode === 'exitLeft') tx = -150 * p;
    else ty = -110 * p;
    sc = 1 + (mode === 'exitLeft' ? 0.16 : 0.2) * p;
  } else if (mode === 'enterRight' || mode === 'enterDown') {
    p = 1 - seg(u, 0, 12, E.zoom);
    if (mode === 'enterRight') tx = 150 * p;
    else ty = 130 * p;
    sc = 1 + (mode === 'enterRight' ? 0.16 : 0.2) * p;
  }
  const blurAmt = Math.sin(Math.PI * clamp01(p)) * 1;
  const horizontal = mode === 'exitLeft' || mode === 'enterRight';
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {blurAmt > 0.03 ? (
        <DirBlurDef
          id={id}
          sx={horizontal ? 16 * blurAmt : 1.2 * blurAmt}
          sy={horizontal ? 1.2 * blurAmt : 14 * blurAmt}
        />
      ) : null}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate(${tx}px, ${ty}px) scale(${sc})`,
          transformOrigin: '50% 50%',
          filter: blurAmt > 0.03 ? `url(#${id})` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** 涟漪接管前沿：从 (x,y) 扩张的亮环 + 内部填充遮盖（S02 尾）/ 外扩余波（S03 头）。
 * phase='cover'：环外为原画面，环内填暗色盖住（到 1 全覆盖）。
 * phase='reveal'：全屏已是新画面，只画余波环淡出。 */
export const RippleFront: React.FC<{
  u: number;
  from: number;
  dur: number;
  x: number;
  y: number;
  phase: 'cover' | 'reveal';
}> = ({ u, from, dur, x, y, phase }) => {
  const p = seg(u, from, from + dur, E.inOut);
  if (p <= 0 || (phase === 'reveal' && p >= 1)) return null;
  const maxR = 2350;
  const r = p * maxR;
  const ringW = 90 + 160 * p;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 60 }}>
      {phase === 'cover' ? (
        <div
          style={{
            position: 'absolute',
            left: x - r,
            top: y - r,
            width: r * 2,
            height: r * 2,
            borderRadius: '50%',
            background: '#000',
            boxShadow: `0 0 ${ringW}px ${ringW * 0.4}px rgba(244,245,92,${0.5 * Math.sin(Math.PI * p) + 0.12})`,
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            left: x - r,
            top: y - r,
            width: r * 2,
            height: r * 2,
            borderRadius: '50%',
            border: `${Math.max(2, 26 * (1 - p))}px solid rgba(244,245,92,${0.55 * (1 - p)})`,
            filter: `blur(${3 + 8 * p}px)`,
          }}
        />
      )}
    </div>
  );
};

/** 白闪（全画面级冲击，全片 ≤3 处预算内使用一次） */
export const WhiteFlash: React.FC<{ u: number; at: number; span?: number }> = ({ u, at, span = 4 }) => {
  const d = Math.abs(u - at);
  if (d > span) return null;
  const op = Math.pow(1 - d / span, 1.6) * 0.92;
  return <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: op, zIndex: 70, pointerEvents: 'none' }} />;
};

/** 星云氛围底（品牌紫，极缓漂移；暗场场景公用） */
export const NebulaBg: React.FC<{ u: number; intensity?: number }> = ({ u, intensity = 1 }) => (
  <div style={{ position: 'absolute', inset: 0, background: '#000' }}>
    <div
      style={{
        position: 'absolute',
        inset: '-12%',
        background: `
          radial-gradient(1100px 700px at ${28 + Math.sin(u / 90) * 3}% ${20 + Math.cos(u / 110) * 3}%, rgba(139,123,255,${0.16 * intensity}), transparent 62%),
          radial-gradient(1300px 800px at ${78 - Math.sin(u / 100) * 3}% ${86 - Math.cos(u / 95) * 2}%, rgba(255,61,166,${0.07 * intensity}), transparent 60%),
          radial-gradient(900px 620px at 55% 50%, rgba(46,230,214,${0.04 * intensity}), transparent 70%)
        `,
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(1500px 950px at 50% 52%, transparent 55%, rgba(0,0,0,0.55) 100%)',
      }}
    />
  </div>
);
