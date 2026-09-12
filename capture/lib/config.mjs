// config.mjs — 采集共用常量。
// 125% UI 比例（用户 2026-09-11 定）：CSS 视口 1536×864、deviceScaleFactor 1，成片 1920×1080 时页面正好放大 1.25 倍铺满。
export const VIEW = { w: 1536, h: 864 };
/** work 目录（works/<slug>）与其快照目录 */
export const workDir = (root, slug) => `${root}/works/${slug}`;
export const capturesDir = (root, slug) => `${root}/works/${slug}/captures`;
