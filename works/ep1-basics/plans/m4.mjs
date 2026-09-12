// M4 — S6 素材复用 + S7 偏好设置（素材项目，起点 = S5 终态 Default 排版 + fit 视口）
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const patchTitle = (ROOT, slot) => patchMaterialHtml(fs, ROOT, slot);
const snap = async (h, ROOT, state, opts) => { const { slot, meta } = await h.snap(WORK, state, opts); patchTitle(ROOT, slot); h.log(state, 'vp', meta.flow?.viewport); return meta; };
const deselect = async (h) => { for (let i = 0; i < 3; i++) { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); if ((await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length)) === 0) return; await h.press('Escape', 0.4); } };
// 教程相关素材（logo / 店招图 / 视频）的 URL 片段；其它个人素材采集前隐藏
const KEEP = ['f02490c0', '896e7aab', 'rlxf4kunnvdb'];
export default async ({ h, ROOT, args }) => {
  const vp = (args[0] || 'translate(108.049px, 105.024px) scale(0.666618)').match(/translate\(([-\d.]+)px, ([-\d.]+)px\) scale\(([\d.]+)\)/);
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, Number(vp[1]), Number(vp[2]), Number(vp[3])); await h.sleep(0.6); await deselect(h);
  let nodes = await h.nodes(); h.log('nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.tf])));
  // 素材预览的样式（供舞台快照的叠加层仿制）
  h.log('preview styles', await h.eval(() => [...document.querySelectorAll('.react-flow__node img')].filter((i) => i.getBoundingClientRect().width > 100).map((i) => { const cs = getComputedStyle(i); const p = i.parentElement; const pcs = getComputedStyle(p); const r = i.getBoundingClientRect(); return { src: (i.currentSrc || i.src).slice(-30), w: Math.round(r.width), h: Math.round(r.height), radius: cs.borderRadius, fit: cs.objectFit, pClass: String(p.className).slice(0, 80), pRadius: pcs.borderRadius, pBg: pcs.backgroundColor, pOverflow: pcs.overflow }; })));
  await snap(h, ROOT, 'm-tidy');
  // S5 尾：(i) 悬停菜单 → Keyboard shortcuts（在整洁排版视口下重采）
  await h.human(192, 832); await h.sleep(1.2);
  await snap(h, ROOT, 'm-infomenu');
  const ks = await h.find('Keyboard shortcuts'); h.log('ks', ks);
  await h.move(ks.x, ks.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.5 });
  await snap(h, ROOT, 'm-shortcuts');
  await h.press('Escape', 0.8); await h.human(300, 740);
  // —— S6 —— Media Assets 面板
  await h.human(35, 418); await h.click(null, null, { settle: 1.5 });
  // 只保留教程相关三项（视频 / 店招图 / logo）：直接从 DOM 移除其它格子，然后核对
  const hide = () => h.eval((KEEP) => { const imgs = [...document.querySelectorAll('img,video')].filter((e) => { const r = e.getBoundingClientRect(); return r.x < 560 && r.x > 60 && r.y > 480 && r.width > 60; }); const grid = imgs[0] && (() => { let g = imgs[0]; for (let i = 0; i < 8 && g.parentElement; i++) { g = g.parentElement; if (g.children.length >= 6) return g; } return null; })(); if (!grid) return { err: 'no grid', n: imgs.length }; let removed = 0, kept = 0; for (const item of [...grid.children]) { const media = item.querySelector('img,video'); const src = media ? (media.currentSrc || media.src || media.getAttribute('poster') || '') : ''; const keep = KEEP.some((k) => src.includes(k)); if (keep) kept++; else { item.remove(); removed++; } } return { removed, kept, gridClass: String(grid.className).slice(0, 60) }; }, KEEP);
  h.log('assets panel hide', JSON.stringify(await hide())); await h.sleep(0.8); h.log('assets panel hide (2nd pass)', JSON.stringify(await hide()));
  await h.sleep(0.5); await h.shot('m-assets-panel');
  const thumbs = await h.eval(() => [...document.querySelectorAll('img,video')].filter((e) => { const r = e.getBoundingClientRect(); return r.x < 560 && r.y > 480 && r.width > 60 && r.height > 0; }).map((e) => { const r = e.getBoundingClientRect(); return { src: (e.currentSrc || e.src || e.getAttribute('poster') || '').slice(-40), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height) }; }));
  h.log('thumbs', JSON.stringify(thumbs));
  await snap(h, ROOT, 'm-assets');
  const sign = thumbs.find((t) => t.src.includes('896e7aab')) || thumbs[0];
  await h.move(sign.x, sign.y, 12); await h.sleep(1.0);
  await snap(h, ROOT, 'm-assetshover');
  // 拖到画布空白（右下）
  const drop = [1000, 700];
  try { await h.dnd(sign.x, sign.y, drop[0], drop[1], 2.5); h.log('dnd ok'); } catch (e) { h.log('dnd failed', e.message); }
  nodes = await h.nodes(); h.log('after drop', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  await h.human(300, 740);
  await snap(h, ROOT, 'm-assetdropped');
  // /assets 页面
  await h.goto('https://youart.ai/assets', 5);
  // /assets：只留 "Today" 分组（今天生成的店招图 / 视频 / logo），隐藏 Previous 7 Days / 30 Days 及其内容
  const hid2 = await h.eval(() => { const heads = [...document.querySelectorAll('h1,h2,h3,h4,div,span,p')].filter((e) => e.children.length === 0 && /^(Today|Previous 7 Days|Previous 30 Days|Older|Yesterday)$/.test((e.innerText || '').trim())); const info = heads.map((e) => (e.innerText || '').trim()); let hidden = 0; for (const hd of heads) { const t = (hd.innerText || '').trim(); if (t === 'Today') continue; let sec = hd; for (let i = 0; i < 4 && sec.parentElement && sec.parentElement.children.length <= 3; i++) sec = sec.parentElement; sec.style.display = 'none'; hidden++; } return { groups: info, hidden }; });
  h.log('assets page hide', JSON.stringify(hid2), (await h.text()).slice(0, 160));
  h.log('assets page imgs', await h.eval(() => [...document.querySelectorAll('img')].filter((i) => i.getBoundingClientRect().width > 80).map((i) => (i.currentSrc || i.src).slice(-36) + ' @' + Math.round(i.getBoundingClientRect().y))));
  await h.human(900, 500);
  await snap(h, ROOT, 'm-assetspage');
};
