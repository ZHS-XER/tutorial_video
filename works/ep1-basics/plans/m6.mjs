// M6 — 补：缩放菜单（在 m-focus1 视口、GPT 选中态下）快照 m-zoommenu；顺带核对 Fit view 项位置
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h);
  // 先回标准布局视口下的 focus1 视口
  await setViewport(h, -174.717, 5.42062, 0.942717); await h.sleep(0.6);
  let nodes = await h.nodes(); h.log('nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h])));
  await h.human(40, 832); await h.click(null, null, { settle: 1.2 });
  h.log('zoom menu items', await h.eval(() => [...document.querySelectorAll('[role=menuitem],button,div')].filter((e) => e.children.length <= 2 && /^(Zoom in|Zoom out|Zoom to 100%|Fit view|Minimap)$/.test((e.innerText || '').trim()) && e.getBoundingClientRect().width > 0).map((e) => { const r = e.getBoundingClientRect(); return (e.innerText || '').trim() + ' @' + Math.round(r.x + r.width / 2) + ',' + Math.round(r.y + r.height / 2); })));
  const { slot } = await h.snap(WORK, 'm-zoommenu'); patchMaterialHtml(fs, ROOT, slot);
  await h.press('Escape', 0.6);
};
