// KbdOverlay.tsx — 快捷键叠加层，shadcn/ui <Kbd> / <KbdGroup> 风格（2026-09-10 取代 keyviz 键帽）：
// 扁平圆角矩形、muted 底、无立体底座；组合键并排成组，按下时反色。
// cue 语义与旧 KeyOverlay 完全一致：{ at, keys, hold?, stagger?, linger? }，一切为帧号纯函数。
import React from 'react';
import { C, E, F } from '@engine/tokens';
import { keymaps, resolveKey } from './keymaps'; // 键名/符号映射表（源自 keyviz，见 LICENSE-NOTICE-keyviz.md）

export type KeyCue = {
  at: number; // 首键按下帧（场景 u 语义）
  keys: string[]; // 友好别名：cmd / shift / option / ctrl / enter / esc / drag / click / 单字母 / 数字 / [ ]
  hold?: number; // 全部按住后保持的帧数（默认 10）
  stagger?: number; // 组合键相邻按下间隔（默认 3f）
  linger?: number; // 松开后继续显示的帧数（默认 30 = 1s）
};

const FADE = 8;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const outQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export const keyCueSpan = (c: KeyCue) => {
  const stagger = c.stagger ?? 3;
  const hold = c.hold ?? 10;
  const release = c.at + (c.keys.length - 1) * stagger + hold;
  const end = release + (c.linger ?? 30);
  return { stagger, release, end, hideAt: end + FADE };
};

/** 键面文字：修饰键只给符号（⌘ ⇧ ⌥ ⌃），特殊键给符号或简称（Esc / ↩），字母数字标点原样，鼠标虚拟键给词（Drag / Click） */
const faceOf = (name: string, faces?: Record<string, string>): string => {
  if (faces && faces[name]) return faces[name];
  const d = keymaps[name];
  if (!d) return name;
  if (d.category === 'modifier') return d.glyph ?? d.label;
  if (d.category === 'mouse') return name === 'Right' ? 'Right-click' : name === 'Left' ? 'Click' : name === 'Middle' ? 'Middle-click' : name === 'Drag' ? 'Drag' : 'Scroll';
  if (d.category === 'special') return name === 'Escape' ? 'Esc' : name === 'Return' ? '↩' : d.glyph ?? d.label;
  if (d.category === 'letter') return d.label.toUpperCase();
  return d.label;
};

export const Kbd: React.FC<{ text: string; pressed: number; size: number }> = ({ text, pressed, size }) => {
  const h = size;
  const isWord = text.length > 1 && /[a-z]/.test(text);
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: h, minWidth: h, padding: `0 ${Math.round(h * 0.3)}px`, boxSizing: 'border-box',
        borderRadius: Math.round(h * 0.16),
        background: pressed > 0.5 ? C.paper : 'rgba(38,38,38,0.96)',
        color: pressed > 0.5 ? C.ink900 : C.paper,
        border: `1px solid ${pressed > 0.5 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.14)'}`,
        boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
        fontFamily: F.sans, fontWeight: 600, fontSize: isWord ? h * 0.42 : h * 0.5, lineHeight: 1, letterSpacing: isWord ? '-0.01em' : '0',
        transform: `translateY(${pressed * 2}px)`,
        userSelect: 'none',
      }}
    >
      {text}
    </div>
  );
};

export type Anchor = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center';

/** faces：按键名覆盖键面文字（如中文版 Right→右键、Drag→拖拽、Left→点击） */
export const KbdOverlay: React.FC<{ u: number; cues: KeyCue[]; size?: number; anchor?: Anchor; marginX?: number; marginY?: number; faces?: Record<string, string> }> = ({ u, cues, size = 68, anchor = 'bottom-center', marginX = 100, marginY = 100, faces }) => {
  const visible = cues.filter((c) => u >= c.at && u <= keyCueSpan(c).hideAt);
  if (!visible.length) return null;
  const [v, h] = anchor.split('-') as ['top' | 'bottom', 'left' | 'center' | 'right'];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: v === 'bottom' ? 'flex-end' : 'flex-start', alignItems: h === 'left' ? 'flex-start' : h === 'right' ? 'flex-end' : 'center', paddingInline: marginX, paddingBlock: marginY, gap: size * 0.35, pointerEvents: 'none', zIndex: 45 }}>
      {visible.map((c) => {
        const { stagger, release, end } = keyCueSpan(c);
        const gIn = E.zoom(clamp01((u - c.at) / FADE));
        const gOut = 1 - outQuint(clamp01((u - end) / FADE));
        return (
          <div key={c.at} style={{ display: 'flex', alignItems: 'center', gap: size * 0.18, opacity: gIn * gOut, transform: `translateY(${(1 - gIn) * 14}px)` }}>
            {c.keys.map((k, i) => {
              const name = resolveKey(k);
              const pressAt = c.at + i * stagger;
              const t = E.zoom(clamp01((u - pressAt) / FADE));
              const pressed = u >= pressAt && u < release ? 1 : 0;
              return (
                <div key={`${name}-${i}`} style={{ opacity: t, transform: `scale(${0.9 + 0.1 * t})` }}>
                  <Kbd text={faceOf(name, faces)} pressed={pressed} size={size} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
