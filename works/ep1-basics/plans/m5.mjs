// M5 — S7 偏好设置（素材项目，起点 = Default 排版 + fit 视口）：⌘, → Preferences → 背景色 → Grid → Esc；采完恢复
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchMaterialHtml(fs, ROOT, slot); };
const deselect = async (h) => { for (let i = 0; i < 3; i++) { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); if ((await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length)) === 0) return; await h.press('Escape', 0.4); } };
const swatches = (h) => h.eval(() => { const lab = [...document.querySelectorAll('div,span,p,label')].find((e) => e.children.length === 0 && (e.innerText || '').trim() === 'Background Color'); if (!lab) return null; let row = lab; for (let i = 0; i < 4 && row.parentElement; i++) { row = row.parentElement; if (row.getBoundingClientRect().width > 500) break; } const btns = [...row.querySelectorAll('button,[role=radio],div')].filter((b) => { const r = b.getBoundingClientRect(); return r.width >= 18 && r.width <= 34 && r.height >= 18 && r.height <= 34 && Math.abs(r.width - r.height) < 4; }); return btns.map((b) => { const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), bg: getComputedStyle(b).backgroundColor, aria: b.getAttribute('aria-label') }; }); });
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, 108.049, 105.024, 0.666618); await h.sleep(0.6); await deselect(h);
  h.log('canvas bg before', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor));
  await h.keys('Meta+,', 1.6);
  h.log('settings text', (await h.text()).slice(0, 120));
  await snap(h, ROOT, 'm-settings');
  const pref = await h.find('Preferences', { sel: 'button' }); h.log('prefs', pref);
  await h.human(pref.x, pref.y); await h.click(null, null, { settle: 1.5 });
  const sw = await swatches(h); h.log('swatches', JSON.stringify(sw));
  const pat = await h.eval(() => ['Dots', 'Grid', 'None'].map((t) => { const e = [...document.querySelectorAll('div,span,p,button')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === t); if (!e) return null; let b = e; for (let i = 0; i < 3 && b.parentElement && b.parentElement.getBoundingClientRect().width < 120; i++) b = b.parentElement; const r = b.getBoundingClientRect(); return { t, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2 - 14) }; }));
  h.log('patterns', JSON.stringify(pat));
  const dl = await h.find('Edit', { sel: 'button,div,span' }); h.log('download filename edit', dl);
  await h.human(900, 600);
  await snap(h, ROOT, 'm-prefs');
  // 背景色：第二个色板（浅一档）
  const second = sw && sw[1]; if (!second) throw new Error('no swatch');
  await h.human(second.x, second.y); await h.click(null, null, { settle: 1.2 });
  h.log('canvas bg after color', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor));
  await snap(h, ROOT, 'm-prefs-color');
  const grid = pat.find((p) => p && p.t === 'Grid'); await h.human(grid.x, grid.y); await h.click(null, null, { settle: 1.2 });
  await snap(h, ROOT, 'm-prefs-grid');
  await h.press('Escape', 1.2);
  await h.human(300, 740);
  await snap(h, ROOT, 'm-result');
  // 恢复：默认色 + Dots
  await h.keys('Meta+,', 1.6); const pref2 = await h.find('Preferences', { sel: 'button' }); await h.human(pref2.x, pref2.y); await h.click(null, null, { settle: 1.2 });
  const sw2 = await swatches(h); await h.human(sw2[0].x, sw2[0].y); await h.click(null, null, { settle: 1 });
  const pat2 = await h.eval(() => ['Dots'].map((t) => { const e = [...document.querySelectorAll('div,span,p,button')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === t); let b = e; for (let i = 0; i < 3 && b.parentElement && b.parentElement.getBoundingClientRect().width < 120; i++) b = b.parentElement; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2 - 14) }; }));
  await h.human(pat2[0].x, pat2[0].y); await h.click(null, null, { settle: 1 });
  await h.press('Escape', 1);
  h.log('canvas bg restored', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor), 'pattern dots?', await h.eval(() => !!document.querySelector('.react-flow__background pattern circle, .react-flow__background circle')));
};
