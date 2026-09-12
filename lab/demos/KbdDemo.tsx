// KbdDemo — shadcn Kbd 风格按键可视化的样式总览（不是教程）：单键 / 组合键 / 鼠标虚拟键，松开与按下两态，
// 以及 KbdOverlay 在真实叠加位置（底部居中、字幕之上）的时序演示。
// 预览：npm run still kbd-demo 30
import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { ensureFonts } from '@engine/fonts';
import { F } from '@engine/tokens';
import { Kbd, KbdOverlay, type KeyCue } from '@engine/ui/kbd';

export const KBD_DEMO_DUR = 150;

const KEYS = ['⌘', '⇧', '⌥', '⌃', '↩', 'Esc', '⌫', '↑', 'C', '2', '[', 'Click', 'Right-click', 'Drag', 'Scroll'];

const Row: React.FC<{ title: string; size: number; pressed: number }> = ({ title, size, pressed }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
    <div style={{ width: 230, fontFamily: F.mono, fontSize: 15, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.6)' }}>{title}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.18 }}>
      {KEYS.map((k, i) => (
        <Kbd key={k} text={k} pressed={i % 3 === 0 ? pressed : 0} size={size} />
      ))}
    </div>
  </div>
);

// 叠加层实际用法：⌘+[ 与 ⇧+Drag 先后出现，不叠层（AGENTS.md：hold 10 / linger ≥24）
const CUES: KeyCue[] = [
  { at: 10, keys: ['cmd', '['], hold: 10, linger: 30 },
  { at: 70, keys: ['shift', 'drag'], stagger: 6, hold: 30, linger: 30 },
];

export const KbdDemo: React.FC = () => {
  ensureFonts();
  const f = useCurrentFrame();
  const pressed = f % 40 < 20 ? 1 : 0; // 每 40f 交替按下/松开
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <div style={{ position: 'absolute', left: 120, top: 90, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Row title="size 68 (叠加层默认)" size={68} pressed={pressed} />
        <Row title="size 52" size={52} pressed={pressed} />
        <Row title="size 40" size={40} pressed={pressed} />
      </div>
      <div style={{ position: 'absolute', left: 120, top: 420, fontFamily: F.mono, fontSize: 15, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.6)' }}>
        每 3 个键第 1 个演示按下态（40f 交替）· 下方 KbdOverlay：⌘+[ 于 f10，⇧+Drag 于 f70
      </div>
      <KbdOverlay u={f} cues={CUES} marginY={150} />
    </AbsoluteFill>
  );
};
