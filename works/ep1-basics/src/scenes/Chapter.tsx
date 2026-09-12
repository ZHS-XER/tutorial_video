// Chapter — 章节卡（沿用归档 v2.3）：大号编号 + 标题 + 副标题，黄条从左扫入；底部 7 段进度轨道点亮当前章。75 帧。
import React from 'react';
import { C, E, F, T } from '@engine/tokens';
import { seg } from '@engine/ui/ux';

export const Chapter: React.FC<{ u: number; n: number; title: string; sub: string; dur: number; total?: number }> = ({ u, n, title, sub, dur, total = 7 }) => {
  const inn = seg(u, 0, 10, E.zoom);
  const out = 1 - seg(u, dur - 8, dur, E.inOut);
  const bar = seg(u, 4, 22, E.zoom);
  const prog = seg(u, 10, 24, E.zoom);
  const subIn = seg(u, 12, 26, E.zoom);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, opacity: out }}>
      <div style={{ position: 'absolute', left: 240, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 28, opacity: inn, transform: `translateY(${(1 - inn) * 18}px)` }}>
          <div style={{ fontFamily: F.mono, fontSize: 44, fontWeight: 600, color: C.accent, letterSpacing: '0.1em' }}>{String(n).padStart(2, '0')}</div>
          <div style={{ ...T.h1, fontSize: 112, color: C.paper, fontFamily: F.sans }}>{title}</div>
        </div>
        <div style={{ height: 5, width: 560 * bar, background: C.accent, borderRadius: 3 }} />
        <div style={{ fontSize: 42, lineHeight: 1.2, fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(250,250,250,0.72)', fontFamily: F.sans, opacity: subIn, transform: `translateY(${(1 - subIn) * 10}px)` }}>{sub}</div>
      </div>
      <div style={{ position: 'absolute', left: 240, bottom: 150, display: 'flex', alignItems: 'center', gap: 10, opacity: prog, transform: `translateY(${(1 - prog) * 8}px)` }}>
        {Array.from({ length: total }, (_, i) => i + 1).map((i) => (
          <div key={i} style={{ width: i === n ? 72 : 40, height: 6, borderRadius: 3, background: i === n ? C.accent : i < n ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.14)', boxShadow: i === n ? '0 0 10px rgba(244,245,92,0.5)' : undefined }} />
        ))}
      </div>
    </div>
  );
};
