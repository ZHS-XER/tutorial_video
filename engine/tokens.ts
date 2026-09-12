// tokens.ts — YouArt 品牌 tokens（实测自 youart.ai app computed styles，2026-08-31）
// 视觉方向 "Dark Studio · Electric Yellow"：界面语言黑+黄，生成内容青+品红（见 DESIGN_SPEC §1）。

import { Easing } from 'remotion';

export const C = {
  ink: '#000000', // app 纯黑底
  ink900: '#0A0A0A',
  surface: '#161616', // 卡片/面板
  surface2: '#262626',
  border: '#333333',
  border2: '#404040',
  paper: '#FAFAFA', // 高对比文字（app body color）
  dim: '#9CA3AF', // 次级文字
  accent: '#F4F55C', // 品牌黄（Start for Free / Sign up / Upgrade）——只点关键词与交互高光
  accentInk: '#1A1A05', // 黄底上的近黑字
  violet: '#8B7BFF', // 营销紫（星云艺术图系）
  // 生成内容专属色（VOLTA 霓虹）——只用于"输出很惊艳"的色彩证据，不进界面语言
  neonCyan: '#2EE6D6',
  neonMagenta: '#FF3DA6',
  // screen-story 兼容别名（ScreenStage ChromeBar/BrandGradient 引用）
  paper2: '#111111',
  cream: '#161616',
  warmGray: '#8A8A93',
  forest: '#161616',
} as const;

export const F = {
  sans: 'Inter, "Inter Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  serif: 'ui-serif, Georgia, "Times New Roman", serif', // "Made with AI UGC" 区块衬线气质
} as const;

export const T = {
  h1: { fontSize: 84, lineHeight: '1.06', fontWeight: 700, letterSpacing: '-0.03em' },
  h2: { fontSize: 44, lineHeight: '1.1', fontWeight: 600, letterSpacing: '-0.02em' },
  h3: { fontSize: 28, lineHeight: '1.15', fontWeight: 600, letterSpacing: '-0.01em' },
  label: { fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const },
} as const;

export const E = {
  quint: Easing.bezier(0.22, 1, 0.36, 1),
  out: Easing.bezier(0, 0, 0.2, 1),
  inOut: Easing.bezier(0.4, 0, 0.2, 1),
  soft: Easing.bezier(0.45, 0.05, 0.15, 1),
  // Recordly 缩放强度曲线（双层平滑第一层）
  zoom: Easing.bezier(0.16, 1, 0.3, 1),
  glide: Easing.bezier(0.3, 0.05, 0.2, 1),
} as const;

// 60fps 渲染 × 30fps 时间线（motion-silk §二）：场景内部帧常量保持 30fps 语义，
// Main 传 useCurrentFrame()/TL_SCALE 的分数 TL 帧；ScreenStage/Cursor 的 fps 传 TL。
export const FPS = 30; // 渲染帧率：30 直出；改 60 即升格（TL 语义不变，见 tl()）
export const TL = 30;
export const TL_SCALE = FPS / TL;
/** TL 帧 → 渲染帧 */
export const tl = (u: number) => Math.round(u * TL_SCALE);
