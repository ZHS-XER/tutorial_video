// Keycap.tsx — 键帽（移植 keyviz lowprofile / minimal 两种样式），帧驱动的按下动画。
// lowprofile：键帽压在深色底座上，按下时键帽下沉 0.25em（keyviz 0.1s easeInOutExpo ≈ 3f）。
import React from 'react';
import { F } from '../tokens';
import { keymaps, isModifier } from './keymaps';

export type KeyTheme = {
  cap: string; // 键帽色
  base: string; // 底座色
  text: string;
  border: string;
  borderWidth: number;
  radius: number; // 0–1，keyviz 语义：× 1.25em
  group: string; // 组背景（胶囊）
  modifierCap?: string; // 修饰键高亮（keyviz modifier.highlight，可选）
  modifierText?: string;
};
export const THEME_LIGHT: KeyTheme = { cap: '#ffffff', base: '#1a1a1a', text: '#000000', border: '#1a1a1a', borderWidth: 2, radius: 0.5, group: 'rgba(255,255,255,0.6)' };
export const THEME_DARK: KeyTheme = { cap: '#262626', base: '#000000', text: '#fafafa', border: '#000000', borderWidth: 2, radius: 0.5, group: 'rgba(0,0,0,0.5)' };

export type KeycapStyle = 'lowprofile' | 'minimal';

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
// keyviz easeInOutExpo 近似
const expo = (t: number) => (t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2);

/** 按下进度 0→1：pressAt 起 3f 压下，releaseAt 起 3f 回弹 */
export const pressProgress = (frame: number, pressAt: number, releaseAt: number, dur = 3) => {
  if (frame < pressAt) return 0;
  if (frame < releaseAt) return expo(clamp01((frame - pressAt) / dur));
  return 1 - expo(clamp01((frame - releaseAt) / dur));
};

const Face: React.FC<{ name: string; size: number; color: string; showSymbol: boolean; shortLabel: boolean }> = ({ name, size, color, showSymbol, shortLabel }) => {
  const d = keymaps[name];
  const label = (shortLabel ? d.shortLabel ?? d.label : d.label);
  const cap: React.CSSProperties = { textTransform: 'capitalize' };
  const mod = isModifier(name);
  // 箭头：仅符号
  if (d.category === 'arrow') {
    return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.8, lineHeight: 1, color }}>{d.glyph}</div>;
  }
  // 带符号/图标：上符号（修饰键靠右，其它居中）下标签
  if (d.glyph || d.icon) {
    const Icon = d.icon;
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: mod ? 'flex-end' : 'center' }}>
        {Icon ? <Icon size={size * 0.5} color={color} /> : <span style={{ fontSize: size * 0.5, lineHeight: 1, color }}>{d.glyph}</span>}
        <div style={{ ...cap, fontSize: size * 0.5, lineHeight: 1.2, color }}>{label}</div>
      </div>
    );
  }
  // 上档字符 + 主字符
  if (showSymbol && d.symbol) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.56, lineHeight: 1.4, color }}>
        <span>{d.symbol}</span>
        <span style={{ fontWeight: 600 }}>{d.label}</span>
      </div>
    );
  }
  return <div style={{ ...cap, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size, lineHeight: 1.2, color }}>{label}</div>;
};

export const Keycap: React.FC<{
  name: string; // keymaps 键名（已 resolveKey）
  press: number; // 0–1
  size?: number; // keyviz text.size，默认 32
  style?: KeycapStyle;
  theme?: KeyTheme;
  showSymbol?: boolean;
  shortLabel?: boolean;
}> = ({ name, press, size = 32, style = 'lowprofile', theme = THEME_LIGHT, showSymbol = false, shortLabel = true }) => {
  const mod = isModifier(name);
  const capColor = mod && theme.modifierCap ? theme.modifierCap : theme.cap;
  const textColor = mod && theme.modifierText ? theme.modifierText : theme.text;
  const radius = theme.radius * size * 1.25;
  const font = { fontFamily: F.sans, fontWeight: 500 as const };

  if (style === 'minimal') {
    const d = keymaps[name];
    return (
      <div style={{ ...font, display: 'flex', alignItems: 'center', gap: '0.1em', height: size * 1.6, fontSize: size, color: textColor, textTransform: 'capitalize', transform: `scale(${1 - 0.05 * press})` }}>
        {d.glyph ? <span style={{ lineHeight: 1 }}>{d.glyph}</span> : null}
        <span>{shortLabel ? d.shortLabel ?? d.label : d.label}</span>
      </div>
    );
  }

  const capH = size * 2.25;
  return (
    <div style={{ ...font, position: 'relative', height: size * 2.5, minWidth: size * (mod ? 2.5 : 2.25) }}>
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: capH,
          paddingInline: size * 0.5,
          paddingBlock: size * 0.4,
          boxSizing: 'border-box',
          border: `${theme.borderWidth}px solid ${theme.border}`,
          borderRadius: radius,
          background: capColor,
          transform: `translateY(${size * 0.25 * press}px)`,
        }}
      >
        <Face name={name} size={size} color={textColor} showSymbol={showSymbol} shortLabel={shortLabel} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: capH, zIndex: 1, boxSizing: 'border-box', border: `${theme.borderWidth}px solid ${theme.border}`, borderRadius: radius, background: theme.base }} />
    </div>
  );
};
