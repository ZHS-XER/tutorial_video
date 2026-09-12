// S01 — 标题卡：kicker 小字 + 大标题逐词入场 + 品牌黄下划线。非走查镜头，纯 DOM。
import React from 'react';
import { C, E, F, T } from '../../../film/tokens';
import { seg } from '../../../film/ux';

export const S01Title: React.FC<{ u: number; title: string; kicker?: string }> = ({ u, title, kicker }) => {
  const words = title.split(' ');
  const out = 1 - seg(u, 78, 88, E.inOut); // 尾部淡出交给下一镜
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: out }}>
      <div style={{ textAlign: 'center', maxWidth: 1400 }}>
        {kicker ? (
          <div style={{ ...T.label, color: C.dim, fontFamily: F.mono, opacity: seg(u, 4, 16, E.zoom), marginBottom: 28 }}>{kicker}</div>
        ) : null}
        <div style={{ ...T.h1, color: C.paper, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 0.28em' }}>
          {words.map((w, i) => {
            const t = seg(u, 10 + i * 4, 26 + i * 4, E.zoom);
            return (
              <span key={i} style={{ display: 'inline-block', opacity: t, transform: `translateY(${(1 - t) * 28}px)` }}>
                {w}
              </span>
            );
          })}
        </div>
        <div
          style={{
            margin: '30px auto 0',
            height: 4,
            width: 220 * seg(u, 30, 52, E.zoom),
            background: C.accent,
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
};
