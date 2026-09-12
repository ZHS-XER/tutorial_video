// KeyOverlay.tsx — 按键可视化叠加层（移植 keyviz key-overlay.tsx 的分组/胶囊/淡入淡出语义）。
// 编排：cues 表声明"第几帧按了什么"，一切为帧号纯函数。
//   { at: 130, keys: ['cmd', 'enter'] }          组合键：依次按下（stagger），一起松开
//   { at: 200, keys: ['option'], hold: 60 }      长按 option 2 秒
//   { at: 260, keys: ['cmd', 'click'] }          修饰键 + 鼠标
import React from 'react';
import { Keycap, pressProgress, THEME_LIGHT, type KeycapStyle, type KeyTheme } from './Keycap';
import { resolveKey } from './keymaps';

export type KeyCue = {
  at: number; // 首键按下帧（场景 u 语义）
  keys: string[]; // 友好别名或 keymaps 键名
  hold?: number; // 全部按住后保持的帧数（默认 8 ≈ 0.27s）
  stagger?: number; // 组合键相邻按下间隔（默认 3f）
  linger?: number; // 松开后继续显示的帧数（默认 30 = 1s）
};

export type Anchor = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';

const FADE = 8; // keyviz animationDuration 0.25s
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const outQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export const keyCueSpan = (c: KeyCue) => {
  const stagger = c.stagger ?? 3;
  const hold = c.hold ?? 8;
  const release = c.at + (c.keys.length - 1) * stagger + hold;
  const end = release + (c.linger ?? 30);
  return { stagger, release, end, hideAt: end + FADE };
};

export const KeyOverlay: React.FC<{
  u: number;
  cues: KeyCue[];
  size?: number;
  style?: KeycapStyle;
  theme?: KeyTheme;
  anchor?: Anchor;
  marginX?: number;
  marginY?: number;
  /** 键入场动画（keyviz appearance.animation） */
  anim?: 'fade' | 'float' | 'zoom';
  showSymbol?: boolean;
  /** 键名用简称（Cmd/Opt/Del，keyviz 默认 text-short）；false 用全称（Command/Option/Delete） */
  shortLabel?: boolean;
  showGroupBg?: boolean;
}> = ({ u, cues, size = 48, style = 'lowprofile', theme = THEME_LIGHT, anchor = 'bottom-center', marginX = 100, marginY = 100, anim = 'fade', showSymbol = false, shortLabel = true, showGroupBg = true }) => {
  const visible = cues.filter((c) => u >= c.at && u <= keyCueSpan(c).hideAt);
  if (!visible.length) return null;

  const [v, h] = anchor.split('-') as ['top' | 'bottom', 'left' | 'center' | 'right'];
  const justify = v === 'bottom' ? 'flex-end' : 'flex-start';
  const align = h === 'left' ? 'flex-start' : h === 'right' ? 'flex-end' : 'center';

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: justify, alignItems: align, paddingInline: marginX, paddingBlock: marginY, gap: size * 0.5, pointerEvents: 'none', zIndex: 45 }}>
      {visible.map((c) => {
        const { stagger, release, end } = keyCueSpan(c);
        const gIn = outQuint(clamp01((u - c.at) / FADE));
        const gOut = 1 - outQuint(clamp01((u - end) / FADE));
        return (
          <div
            key={c.at}
            style={{
              display: 'flex',
              columnGap: style === 'minimal' ? size * 0.15 : size * 0.3,
              opacity: gIn * gOut,
              ...(showGroupBg
                ? { paddingInline: size * 0.4, paddingBlock: style === 'minimal' ? size * 0.25 : size * 0.4, background: theme.group, borderRadius: theme.radius * size * 0.9 }
                : {}),
            }}
          >
            {c.keys.map((k, i) => {
              const name = resolveKey(k);
              const pressAt = c.at + i * stagger;
              const t = outQuint(clamp01((u - pressAt) / FADE));
              const tr = anim === 'float' ? `translateY(${(1 - t) * size}px)` : anim === 'zoom' ? `scale(${t})` : undefined;
              return (
                <div key={`${name}-${i}`} style={{ opacity: t, transform: tr }}>
                  <Keycap name={name} press={pressProgress(u, pressAt, release)} size={size} style={style} theme={theme} showSymbol={showSymbol} shortLabel={shortLabel} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
