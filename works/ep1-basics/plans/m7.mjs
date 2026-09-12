// M7 — 补：Download Filename 的 Edit 编辑态（在 m-prefs-grid 的状态上：Preferences + 浅色背景 + Grid）→ 快照 m-prefs-edit；采完恢复默认色 + Dots
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchMaterialHtml(fs, ROOT, slot); return slot; };
const deselect = async (h) => { for (let i = 0; i < 3; i++) { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); if ((await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length)) === 0) return; await h.press('Escape', 0.4); } };
const swatches = (h) => h.eval(() => { const lab = [...document.querySelectorAll('div,span,p,label')].find((e) => e.children.length === 0 && (e.innerText || '').trim() === 'Background Color'); if (!lab) return null; let row = lab; for (let i = 0; i < 4 && row.parentElement; i++) { row = row.parentElement; if (row.getBoundingClientRect().width > 500) break; } const btns = [...row.querySelectorAll('button,[role=radio],div')].filter((b) => { const r = b.getBoundingClientRect(); return r.width >= 18 && r.width <= 34 && r.height >= 18 && r.height <= 34 && Math.abs(r.width - r.height) < 4; }); return btns.map((b) => { const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), bg: getComputedStyle(b).backgroundColor }; }); });
const patterns = (h) => h.eval(() => ['Dots', 'Grid', 'None'].map((t) => { const e = [...document.querySelectorAll('div,span,p,button')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === t); if (!e) return null; let b = e; for (let i = 0; i < 3 && b.parentElement && b.parentElement.getBoundingClientRect().width < 120; i++) b = b.parentElement; const r = b.getBoundingClientRect(); return { t, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2 - 14) }; }));
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await setViewport(h, 108.049, 105.024, 0.666618); await h.sleep(0.6); await deselect(h);
  await h.keys('Meta+,', 1.6);
  const pref = await h.find('Preferences', { sel: 'button' }); await h.human(pref.x, pref.y); await h.click(null, null, { settle: 1.5 });
  const sw = await swatches(h); h.log('swatches', JSON.stringify(sw));
  await h.human(sw[1].x, sw[1].y); await h.click(null, null, { settle: 1.0 });
  const pat = await patterns(h); const grid = pat.find((p) => p && p.t === 'Grid'); await h.human(grid.x, grid.y); await h.click(null, null, { settle: 1.0 });
  // Edit 按钮：Download Filename 卡片右上
  const edit = await h.eval(() => { const s = [...document.querySelectorAll('span,button')].find((e) => /^\s*Edit\s*$/.test(e.innerText || '') && e.getBoundingClientRect().width > 0); if (!s) return null; const b = s.closest('button') || s; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height), tag: b.tagName }; });
  h.log('edit btn', JSON.stringify(edit));
  await h.human(edit.x, edit.y); await h.click(null, null, { settle: 1.5 });
  await h.shot('m7-edit-open');
  h.log('after edit text', (await h.eval(() => document.body.innerText)).slice(0, 1600).replace(/\n+/g, ' | '));
  h.log('dialog?', await h.eval(() => [...document.querySelectorAll('[role=dialog]')].map((d) => { const r = d.getBoundingClientRect(); return `${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)} :: ${(d.innerText || '').slice(0, 200).replace(/\n+/g, ' | ')}`; })));
  h.log('inputs', await h.eval(() => [...document.querySelectorAll('input,textarea,[contenteditable=true]')].filter((e) => e.getBoundingClientRect().width > 0).map((e) => { const r = e.getBoundingClientRect(); return `${e.tagName} ${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)} val=${(e.value || e.innerText || '').slice(0, 80)}`; })));
  h.log('buttons', await h.eval(() => [...document.querySelectorAll('button')].filter((e) => e.getBoundingClientRect().width > 0 && (e.innerText || '').trim()).map((e) => { const r = e.getBoundingClientRect(); return `${(e.innerText || '').trim().slice(0, 30)}@${Math.round(r.x + r.width / 2)},${Math.round(r.y + r.height / 2)}`; }).join(' ; ')));
  await h.human(900, 620);
  await snap(h, ROOT, 'm-prefs-edit');
  // 关闭编辑态：优先 Cancel / Done 按钮，其次 Escape
  const closeBtn = await h.eval(() => { const b = [...document.querySelectorAll('button')].find((e) => /^(Cancel|Done|Close|Save)$/.test((e.innerText || '').trim()) && e.getBoundingClientRect().width > 0); if (!b) return null; const r = b.getBoundingClientRect(); return { t: b.innerText.trim(), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; });
  h.log('close btn', JSON.stringify(closeBtn));
  if (closeBtn && closeBtn.t !== 'Save') { await h.human(closeBtn.x, closeBtn.y); await h.click(null, null, { settle: 1 }); } else { await h.press('Escape', 1); }
  h.log('still settings open?', /Preferences/.test(await h.eval(() => document.body.innerText)));
  if (!/Preferences/.test(await h.eval(() => document.body.innerText))) { await h.keys('Meta+,', 1.6); const p2 = await h.find('Preferences', { sel: 'button' }); await h.human(p2.x, p2.y); await h.click(null, null, { settle: 1.2 }); }
  // 恢复：默认色 + Dots
  const sw2 = await swatches(h); await h.human(sw2[0].x, sw2[0].y); await h.click(null, null, { settle: 1 });
  const pat2 = await patterns(h); const dots = pat2.find((p) => p && p.t === 'Dots'); await h.human(dots.x, dots.y); await h.click(null, null, { settle: 1 });
  await h.press('Escape', 1);
  h.log('canvas bg restored', await h.eval(() => getComputedStyle(document.querySelector('.react-flow')).backgroundColor), 'pattern dots?', await h.eval(() => !!document.querySelector('.react-flow__background pattern circle, .react-flow__background circle')));
};
