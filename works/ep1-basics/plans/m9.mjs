// M9 — 文件名积木编辑：Edit → 删掉 Timestamp（✕）→ 把 YouArt 拖到最前 → Done。快照 m-prefs-edit2 / m-prefs-edit3 / m-prefs-done；采完 Reset 文件名、恢复默认色 + Dots
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchMaterialHtml(fs, ROOT, slot); return slot; };
const deselect = async (h) => { for (let i = 0; i < 3; i++) { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); if ((await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length)) === 0) return; await h.press('Escape', 0.4); } };
const swatches = (h) => h.eval(() => { const lab = [...document.querySelectorAll('div,span,p,label')].find((e) => e.children.length === 0 && (e.innerText || '').trim() === 'Background Color'); if (!lab) return null; let row = lab; for (let i = 0; i < 4 && row.parentElement; i++) { row = row.parentElement; if (row.getBoundingClientRect().width > 500) break; } const btns = [...row.querySelectorAll('button,[role=radio],div')].filter((b) => { const r = b.getBoundingClientRect(); return r.width >= 18 && r.width <= 34 && r.height >= 18 && r.height <= 34 && Math.abs(r.width - r.height) < 4; }); return btns.map((b) => { const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }); });
const patterns = (h) => h.eval(() => ['Dots', 'Grid', 'None'].map((t) => { const e = [...document.querySelectorAll('div,span,p,button')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === t); if (!e) return null; let b = e; for (let i = 0; i < 3 && b.parentElement && b.parentElement.getBoundingClientRect().width < 120; i++) b = b.parentElement; const r = b.getBoundingClientRect(); return { t, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2 - 14) }; }));
// 积木：文本以 label 开头、宽 < 320 的最小元素；返回块矩形、拖柄（第一个子元素）中心、✕ 按钮中心
const blocks = (h) => h.eval(() => {
  const out = [];
  for (const lab of ['Name', 'Timestamp', 'Index', 'YouArt']) {
    const cands = [...document.querySelectorAll('div,button,span')].filter((e) => { const t = (e.innerText || '').trim(); const r = e.getBoundingClientRect(); return t.startsWith(lab) && r.width > 60 && r.width < 340 && r.height > 24 && r.height < 60 && e.querySelector('svg'); });
    if (!cands.length) { out.push({ lab, missing: true }); continue; }
    const el = cands.sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height)[0];
    const r = el.getBoundingClientRect();
    const svgs = [...el.querySelectorAll('svg')].map((s) => { const q = s.getBoundingClientRect(); return { x: Math.round(q.x + q.width / 2), y: Math.round(q.y + q.height / 2), cls: (s.getAttribute('class') || '').slice(0, 40) }; });
    out.push({ lab, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), svgs, tag: el.tagName, cls: (el.className || '').toString().slice(0, 80) });
  }
  return out;
});
const preview = (h) => h.eval(() => { const e = [...document.querySelectorAll('p,span,div,code')].find((x) => x.children.length === 0 && /\.png$/.test((x.innerText || '').trim())); return e ? e.innerText.trim() : null; });
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, 108.049, 105.024, 0.666618); await h.sleep(0.6); await deselect(h);
  await h.keys('Meta+,', 1.6);
  const pref = await h.find('Preferences', { sel: 'button' }); await h.human(pref.x, pref.y); await h.click(null, null, { settle: 1.5 });
  const sw = await swatches(h); await h.human(sw[1].x, sw[1].y); await h.click(null, null, { settle: 1.0 });
  const pat = await patterns(h); const grid = pat.find((p) => p && p.t === 'Grid'); await h.human(grid.x, grid.y); await h.click(null, null, { settle: 1.0 });
  const edit = await h.eval(() => { const s = [...document.querySelectorAll('span,button')].find((e) => /^\s*Edit\s*$/.test(e.innerText || '') && e.getBoundingClientRect().width > 0); const b = s.closest('button') || s; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; });
  await h.human(edit.x, edit.y); await h.click(null, null, { settle: 1.5 });
  h.log('preview0', await preview(h));
  let bl = await blocks(h); h.log('blocks', JSON.stringify(bl));
  // 1) 删 Timestamp：块内最后一个 svg（✕）
  const ts = bl.find((b) => b.lab === 'Timestamp'); const xBtn = ts.svgs[ts.svgs.length - 1];
  await h.human(xBtn.x, xBtn.y); await h.click(null, null, { settle: 1.2 });
  h.log('preview after remove', await preview(h)); bl = await blocks(h); h.log('blocks2', JSON.stringify(bl));
  await h.human(900, 620); await h.shot('m9-edit2');
  await snap(h, ROOT, 'm-prefs-edit2');
  // 2) 把 YouArt 拖到 Name 前面：抓拖柄（第一个 svg），拖到 Name 块左侧
  const ya = bl.find((b) => b.lab === 'YouArt'), nm = bl.find((b) => b.lab === 'Name');
  const handle = ya.svgs[0];
  await h.drag(handle.x, handle.y, nm.x - 6, nm.y + nm.h / 2, { steps: 40, hold: 0.4, settle: 1.5 });
  h.log('preview after drag', await preview(h)); bl = await blocks(h); h.log('blocks3', JSON.stringify(bl));
  if (!/^YouArt/.test((await preview(h)) || '')) {
    h.log('mouse drag did not reorder → try HTML5 dnd');
    await h.dnd(handle.x, handle.y, nm.x - 6, nm.y + nm.h / 2, 1.5).catch((e) => h.log('dnd err', e.message));
    h.log('preview after dnd', await preview(h)); bl = await blocks(h); h.log('blocks3b', JSON.stringify(bl));
  }
  await h.human(900, 620); await h.shot('m9-edit3');
  await snap(h, ROOT, 'm-prefs-edit3');
  // 3) Done
  const done = await h.find('Done', { sel: 'button' }); await h.human(done.x, done.y); await h.click(null, null, { settle: 1.2 });
  h.log('preview after done', await preview(h));
  await h.human(900, 620); await h.shot('m9-done');
  await snap(h, ROOT, 'm-prefs-done');
  // 恢复：Edit → Reset → Done；默认色 + Dots；Esc
  const edit2 = await h.eval(() => { const s = [...document.querySelectorAll('span,button')].find((e) => /^\s*Edit\s*$/.test(e.innerText || '') && e.getBoundingClientRect().width > 0); const b = s.closest('button') || s; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; });
  await h.human(edit2.x, edit2.y); await h.click(null, null, { settle: 1.2 });
  const reset = await h.find('Reset', { sel: 'button' }); await h.human(reset.x, reset.y); await h.click(null, null, { settle: 1 });
  h.log('preview after reset', await preview(h));
  const done2 = await h.find('Done', { sel: 'button' }); await h.human(done2.x, done2.y); await h.click(null, null, { settle: 1 });
  const sw2 = await swatches(h); await h.human(sw2[0].x, sw2[0].y); await h.click(null, null, { settle: 1 });
  const pat2 = await patterns(h); const dots = pat2.find((p) => p && p.t === 'Dots'); await h.human(dots.x, dots.y); await h.click(null, null, { settle: 1 });
  await h.press('Escape', 1);
  h.log('restored bg', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor), 'dots?', await h.eval(() => !!document.querySelector('.react-flow__background circle')));
};
