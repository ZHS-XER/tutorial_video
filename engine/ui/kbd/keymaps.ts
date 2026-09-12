// keymaps.ts — macOS 键位显示映射（移植自 keyviz lib/keymaps.ts，去平台分支）。
// label 全称 / shortLabel 简称 / glyph 符号（键帽右上角）/ symbol 上档字符 / category 分类。
import type React from 'react';
import { MouseLeftClickIcon, MouseMiddleClickIcon, MouseRightClickIcon, MouseRightDragIcon, MouseScrollDownIcon, MouseScrollUpIcon, ReturnIcon } from '@engine/cursor/mouseIcons';

export type Category = 'modifier' | 'letter' | 'digit' | 'punctuation' | 'function' | 'arrow' | 'navigation' | 'special' | 'mouse';
export type IconComp = React.FC<{ size: number; color: string }>;
export interface DisplayData {
  label: string;
  shortLabel?: string;
  glyph?: string;
  symbol?: string;
  icon?: IconComp;
  category: Category;
}

export const keymaps: Record<string, DisplayData> = {
  // 修饰键
  MetaLeft: { label: 'command', shortLabel: 'cmd', glyph: '⌘', category: 'modifier' },
  MetaRight: { label: 'command', shortLabel: 'cmd', glyph: '⌘', category: 'modifier' },
  Alt: { label: 'option', shortLabel: 'opt', glyph: '⌥', category: 'modifier' },
  ShiftLeft: { label: 'shift', glyph: '⇧', category: 'modifier' },
  ShiftRight: { label: 'shift', glyph: '⇧', category: 'modifier' },
  ControlLeft: { label: 'control', shortLabel: 'ctrl', glyph: '⌃', category: 'modifier' },
  ControlRight: { label: 'control', shortLabel: 'ctrl', glyph: '⌃', category: 'modifier' },
  Function: { label: 'fn', glyph: '🌐', category: 'modifier' },
  // 特殊键
  Return: { label: 'return', glyph: '↩', icon: ReturnIcon, category: 'special' },
  Tab: { label: 'tab', glyph: '⇆', category: 'special' },
  Space: { label: 'space', glyph: '⎵', category: 'special' },
  Backspace: { label: 'delete', shortLabel: 'del', glyph: '⌫', category: 'special' },
  Delete: { label: 'delete', shortLabel: 'del', glyph: '⌦', category: 'special' },
  Escape: { label: 'escape', shortLabel: 'esc', glyph: '⎋', category: 'special' },
  CapsLock: { label: 'caps lock', glyph: '⇪', category: 'special' },
  // 导航
  UpArrow: { label: 'up', glyph: '↑', category: 'arrow' },
  DownArrow: { label: 'down', glyph: '↓', category: 'arrow' },
  LeftArrow: { label: 'left', glyph: '←', category: 'arrow' },
  RightArrow: { label: 'right', glyph: '→', category: 'arrow' },
  Home: { label: 'home', glyph: '⇱', category: 'navigation' },
  End: { label: 'end', glyph: '⇲', category: 'navigation' },
  PageUp: { label: 'page up', shortLabel: 'pg up', glyph: '⤒', category: 'navigation' },
  PageDown: { label: 'page down', shortLabel: 'pg dn', glyph: '⤓', category: 'navigation' },
  // 鼠标（虚拟键，可与修饰键并排：⌘ + click）
  Left: { label: 'left click', shortLabel: 'click', icon: MouseLeftClickIcon, category: 'mouse' },
  Middle: { label: 'middle click', shortLabel: 'middle', icon: MouseMiddleClickIcon, category: 'mouse' },
  Right: { label: 'right click', shortLabel: 'right', icon: MouseRightClickIcon, category: 'mouse' },
  Drag: { label: 'drag', icon: MouseRightDragIcon, category: 'mouse' },
  ScrollUp: { label: 'scroll up', shortLabel: 'scroll', icon: MouseScrollUpIcon, category: 'mouse' },
  ScrollDown: { label: 'scroll down', shortLabel: 'scroll', icon: MouseScrollDownIcon, category: 'mouse' },
};
for (let i = 1; i <= 12; i++) keymaps[`F${i}`] = { label: `F${i}`, category: 'function' };
for (const ch of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') keymaps[`Key${ch}`] = { label: ch, category: 'letter' };
const DIGIT_SYMBOLS = ')!@#$%^&*(';
for (let d = 0; d <= 9; d++) keymaps[`Num${d}`] = { label: String(d), symbol: DIGIT_SYMBOLS[d], category: 'digit' };
const PUNCT: Array<[string, string, string]> = [
  ['BackQuote', '`', '~'], ['Minus', '-', '_'], ['Equal', '=', '+'], ['LeftBracket', '[', '{'], ['RightBracket', ']', '}'],
  ['BackSlash', '\\', '|'], ['SemiColon', ';', ':'], ['Quote', "'", '"'], ['Comma', ',', '<'], ['Dot', '.', '>'], ['Slash', '/', '?'],
];
for (const [k, l, s] of PUNCT) keymaps[k] = { label: l, symbol: s, category: 'punctuation' };

export const isModifier = (name: string) => keymaps[name]?.category === 'modifier';

// 编排时可写友好别名：'cmd' 'option' 'shift' 'enter' 'C' '2' 'click' '↑' …
const ALIASES: Record<string, string> = {
  cmd: 'MetaLeft', command: 'MetaLeft', meta: 'MetaLeft', '⌘': 'MetaLeft',
  opt: 'Alt', option: 'Alt', alt: 'Alt', '⌥': 'Alt',
  shift: 'ShiftLeft', '⇧': 'ShiftLeft',
  ctrl: 'ControlLeft', control: 'ControlLeft', '⌃': 'ControlLeft',
  fn: 'Function',
  enter: 'Return', return: 'Return', '↩': 'Return',
  tab: 'Tab', space: 'Space', esc: 'Escape', escape: 'Escape',
  backspace: 'Backspace', delete: 'Backspace', del: 'Backspace',
  up: 'UpArrow', down: 'DownArrow', left: 'LeftArrow', right: 'RightArrow',
  '↑': 'UpArrow', '↓': 'DownArrow', '←': 'LeftArrow', '→': 'RightArrow',
  home: 'Home', end: 'End', pageup: 'PageUp', pagedown: 'PageDown',
  click: 'Left', 'left click': 'Left', 'right click': 'Right', rightclick: 'Right', 'middle click': 'Middle',
  drag: 'Drag', 'scroll up': 'ScrollUp', 'scroll down': 'ScrollDown', scroll: 'ScrollDown',
};
export const resolveKey = (k: string): string => {
  if (keymaps[k]) return k;
  const low = k.toLowerCase();
  if (ALIASES[low]) return ALIASES[low];
  if (/^[a-z]$/.test(low)) return `Key${low.toUpperCase()}`;
  if (/^[0-9]$/.test(low)) return `Num${low}`;
  if (/^f([1-9]|1[0-2])$/.test(low)) return low.toUpperCase();
  for (const [name, d] of Object.entries(keymaps)) if (d.label === k) return name;
  throw new Error(`keyviz: unknown key "${k}"`);
};
