// Outro — 结尾卡：logo + "Next: EP2"
import React from 'react';
import { Img, staticFile } from 'remotion';
import { C, E, F, T } from '../../../film/tokens';
import { seg } from '../../../film/ux';

export const Outro: React.FC<{ u: number }> = ({ u }) => {
  const inn = seg(u, 0, 14, E.zoom);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30, opacity: inn }}>
      <Img src={staticFile('brand/youart-logo-dark.svg')} style={{ width: 96, height: 96, transform: `translateY(${(1 - inn) * 20}px)` }} />
      <div style={{ ...T.h2, color: C.paper, fontFamily: F.sans }}>That's the basics.</div>
      <div style={{ ...T.label, color: C.dim, fontFamily: F.mono, opacity: seg(u, 16, 30, E.zoom) }}>next · EP2 — generating images & video</div>
    </div>
  );
};
