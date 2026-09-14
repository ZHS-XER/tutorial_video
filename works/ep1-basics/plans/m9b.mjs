// M9B — 接着 m9：重新进 Preferences → Edit，看积木当前顺序（Timestamp 是否已删且保存）→ 拖 YouArt 到最前 → 快照 edit3 → Done → 快照 done → Reset/恢复
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchMaterialHtml(fs, ROOT, slot); return slot; };
const swatches = (h) => h.eval(() => { const lab = [...document.querySelectorAll('div,span,p,label')].find((e) => e.children.length === 0 && (e.innerText || '').trim() === 'Background Color'); if (!lab) return null; let row = lab; for (let i = 0; i < 4 && row.parentElement; i++) { row = row.parentElement; if (row.getBoundingClientRect().width > 500) break; } const btns = [...row.querySelectorAll('button,[role=radio],div')].filter((b) => { const r = b.getBoundingClientRect(); return r.width >= 18 && r.width <= 34 && r.height >= 18 && r.height <= 34 && Math.abs(r.width - r.height) < 4; }); return btns.map((b) => { const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }); });
const patterns = (h) => h.eval(() => ['Dots', 'Grid', 'None'].map((t) => { const e = [...document.querySelectorAll('div,span,p,button')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === t); if (!e) return null; let b = e; for (let i = 0; i < 3 && b.parentElement && b.parentElement.getBoundingClientRect().width < 120; i++) b = b.parentElement; const r = b.getBoundingClientRect(); return { t, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2 - 14) }; }));
// 积木 = class 含 "rounded-md border bg-background p-1" 的 div，按 x 排序
const blocks = (h) => h.eval(() => [...document.querySelectorAll('div')].filter((e) => /rounded-md border bg-background p-1/.test(e.className || '') && e.getBoundingClientRect().width > 40).map((el) => { const r = el.getBoundingClientRect(); const svgs = [...el.querySelectorAll('svg')].map((s) => { const q = s.getBoundingClientRect(); return { x: Math.round(q.x + q.width / 2), y: Math.round(q.y + q.height / 2), cls: (s.getAttribute('class') || '').split(' ')[1] }; }); return { text: (el.innerText || '').trim().split('\n')[0].slice(0, 20), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), svgs }; }).sort((a, b) => a.x - b.x));
const preview = (h) => h.eval(() => { const lab = [...document.querySelectorAll('p,span,div')].find((e) => e.children.length === 0 && (e.innerText || '').trim() === 'PREVIEW'); if (!lab) return null; let box = lab; for (let i = 0; i < 4 && box.parentElement; i++) { box = box.parentElement; if (/\.png/.test(box.innerText || '')) break; } return (box.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 120); });
const clickEdit = async (h) => { const edit = await h.eval(() => { const s = [...document.querySelectorAll('span,button')].find((e) => /^\s*Edit\s*$/.test(e.innerText || '') && e.getBoundingClientRect().width > 0); if (!s) return null; const b = s.closest('button') || s; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }); if (edit) { await h.human(edit.x, edit.y); await h.click(null, null, { settle: 1.5 }); } return !!edit; };
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, 108.049, 105.024, 0.666618); await h.sleep(0.6);
  await h.human(...BLANK); await h.click(null, null, { settle: 0.8 });
  await h.keys('Meta+,', 1.6);
  const pref = await h.find('Preferences', { sel: 'button' }); await h.human(pref.x, pref.y); await h.click(null, null, { settle: 1.5 });
  h.log('preview (closed)', await preview(h));
  h.log('bg', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor), 'dots?', await h.eval(() => !!document.querySelector('.react-flow__background circle')));
  const sw = await swatches(h); if ((await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor)) === 'rgb(0, 0, 0)') { await h.human(sw[1].x, sw[1].y); await h.click(null, null, { settle: 1.0 }); }
  if (await h.eval(() => !!document.querySelector('.react-flow__background circle'))) { const pat = await patterns(h); const grid = pat.find((p) => p && p.t === 'Grid'); await h.human(grid.x, grid.y); await h.click(null, null, { settle: 1.0 }); }
  await clickEdit(h);
  let bl = await blocks(h); h.log('blocks', JSON.stringify(bl)); h.log('preview', await preview(h));
  // Timestamp 若还在则删掉
  const ts = bl.find((b) => /^Timestamp/.test(b.text));
  if (ts) { const x = ts.svgs[ts.svgs.length - 1]; await h.human(x.x, x.y); await h.click(null, null, { settle: 1.2 }); bl = await blocks(h); h.log('blocks after remove', JSON.stringify(bl)); }
  // 拖 YouArt 到最前
  const ya = bl.find((b) => /YouArt/.test(b.text)) || bl.find((b) => b.text === ""), first = bl[0];
  const handle = ya.svgs[0];
  await h.drag(handle.x, handle.y, first.x + 4, first.y + first.h / 2, { steps: 40, hold: 0.4, settle: 1.5 });
  bl = await blocks(h); h.log('blocks after drag', JSON.stringify(bl.map((b) => b.text))); h.log('preview', await preview(h));
  if (!(bl[0].text === '' || /YouArt/.test(bl[0].text))) {
    h.log('mouse drag failed → HTML5 dnd');
    await h.dnd(handle.x, handle.y, first.x + 4, first.y + first.h / 2, 1.5).catch((e) => h.log('dnd err', e.message));
    bl = await blocks(h); h.log('blocks after dnd', JSON.stringify(bl.map((b) => b.text))); h.log('preview', await preview(h));
  }
  await h.human(900, 620); await h.shot('m9-edit3');
  await snap(h, ROOT, 'm-prefs-edit3');
  const done = await h.find('Done', { sel: 'button' }); await h.human(done.x, done.y); await h.click(null, null, { settle: 1.2 });
  h.log('preview after done', await preview(h));
  await h.human(900, 620); await h.shot('m9-done');
  await snap(h, ROOT, 'm-prefs-done');
  // 恢复
  await clickEdit(h);
  const reset = await h.find('Reset', { sel: 'button' }); await h.human(reset.x, reset.y); await h.click(null, null, { settle: 1 });
  h.log('preview after reset', await preview(h));
  const done2 = await h.find('Done', { sel: 'button' }); await h.human(done2.x, done2.y); await h.click(null, null, { settle: 1 });
  const sw2 = await swatches(h); await h.human(sw2[0].x, sw2[0].y); await h.click(null, null, { settle: 1 });
  const pat2 = await patterns(h); const dots = pat2.find((p) => p && p.t === 'Dots'); await h.human(dots.x, dots.y); await h.click(null, null, { settle: 1 });
  await h.press('Escape', 1);
  h.log('restored bg', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor), 'dots?', await h.eval(() => !!document.querySelector('.react-flow__background circle')));
};
