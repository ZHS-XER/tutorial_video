// S03 — 结尾卡：⌥ + Drag = Duplicate in place（大号 Kbd 芯片，按下态呼吸一次）
import React from 'react';
import { C, E, F, T } from '../../../film/tokens';
import { seg } from '../../../film/ux';
import { Kbd } from '../../../film/kbd';

export const S03Recap: React.FC<{ u: number }> = ({ u }) => {
  const inn = seg(u, 0, 14, E.zoom);
  const pressed = u >= 30 && u < 48 ? 1 : 0; // 演示一次按下（与 KbdOverlay 同款反色）
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44, opacity: inn }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, transform: `translateY(${(1 - inn) * 24}px)` }}>
        <Kbd text="⌥" pressed={pressed} size={120} />
        <div style={{ color: C.dim, fontSize: 56, fontWeight: 300, lineHeight: 1 }}>+</div>
        <Kbd text="Drag" pressed={pressed} size={120} />
      </div>
      <div style={{ ...T.h2, color: C.paper, fontFamily: F.sans }}>
        Duplicate <span style={{ color: C.accent }}>in place</span>
      </div>
      <div style={{ ...T.label, color: C.dim, fontFamily: F.mono, opacity: seg(u, 16, 30, E.zoom) }}>works on any node · YouArt Workflow</div>
    </div>
  );
};
