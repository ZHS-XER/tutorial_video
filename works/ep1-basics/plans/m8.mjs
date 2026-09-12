// M8 — 补：Horizontal 排版下悬停 Auto Layout 的菜单态 m-horizontal-menu（与 m-horizontal 同布局/视口）；采完点 Default 回整洁排版并取消选中
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchMaterialHtml(fs, ROOT, slot); return slot; };
const toolbarItem = (h, label) => h.eval((label) => { const b = [...document.querySelectorAll('button')].find((e) => (e.innerText || '').trim() === label && e.getBoundingClientRect().width > 0); if (!b) return null; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }, label);
const menuIcons = (h) => h.eval(() => { const al = [...document.querySelectorAll('button')].find((e) => (e.innerText || '').trim() === 'Auto Layout'); if (!al) return null; const ar = al.getBoundingClientRect(); return [...document.querySelectorAll('button')].filter((b) => { const r = b.getBoundingClientRect(); return r.width > 20 && r.width < 60 && r.height > 20 && r.height < 60 && Math.abs(r.y - ar.y) < 90 && Math.abs(r.x - ar.x) < 200 && !(b.innerText || '').trim(); }).map((b) => { const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), aria: b.getAttribute('aria-label') || b.getAttribute('title') || '' }; }); });
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, 108.049, 105.024, 0.666618); await h.sleep(0.6);
  await h.human(300, 740); await h.keys('Meta+a', 1.0);
  h.log('selected', await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length));
  let al = await toolbarItem(h, 'Auto Layout'); h.log('auto layout @', JSON.stringify(al));
  await h.human(al.x, al.y); await h.sleep(1.0);
  let icons = await menuIcons(h); h.log('menu icons (AR)', JSON.stringify(icons));
  const hz = icons && icons[1]; if (!hz) throw new Error('no horizontal icon');
  await h.human(hz.x, hz.y); await h.click(null, null, { settle: 2.0 });
  h.log('viewport after horizontal', await h.eval(() => document.querySelector('.react-flow__viewport').style.transform));
  h.log('nodes', JSON.stringify((await h.nodes()).map((n) => [n.id.slice(0, 10), n.tf])));
  await h.human(600, 700); await h.sleep(0.5);
  al = await toolbarItem(h, 'Auto Layout'); h.log('auto layout (HZ) @', JSON.stringify(al));
  await h.human(al.x, al.y); await h.sleep(1.2);
  icons = await menuIcons(h); h.log('menu icons (HZ)', JSON.stringify(icons));
  await h.shot('m8-hz-menu');
  await snap(h, ROOT, 'm-horizontal-menu');
  // 恢复：Default 排版 → 取消选中
  const dflt = icons && icons[0]; await h.human(dflt.x, dflt.y); await h.click(null, null, { settle: 2.0 });
  h.log('viewport after default', await h.eval(() => document.querySelector('.react-flow__viewport').style.transform));
  h.log('nodes', JSON.stringify((await h.nodes()).map((n) => [n.id.slice(0, 10), n.tf])));
  await h.human(...BLANK); await h.click(null, null, { settle: 0.8 });
  h.log('selected after', await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length));
};
