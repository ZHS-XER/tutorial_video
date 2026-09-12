// M3 — S4 Focus view + S5 Auto layout + 快捷键面板（素材项目）
import fs from 'node:fs';
import { MATERIAL, WORK, prep, setViewport, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const patchTitle = (ROOT, slot) => patchMaterialHtml(fs, ROOT, slot);
const snap = async (h, ROOT, state) => { const { slot, meta } = await h.snap(WORK, state); patchTitle(ROOT, slot); h.log(state, 'vp', meta.flow?.viewport); };
const deselect = async (h) => {
  for (let i = 0; i < 3; i++) {
    await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740);
    const n = await h.eval(() => document.querySelectorAll('.react-flow__node.selected').length);
    if (n === 0) return; h.log('still selected', n, '→ Escape + retry'); await h.press('Escape', 0.4);
  }
};
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await deselect(h);
  // —— S4 —— 缩小到 0.6 居中（相当于用户 ⌘+滚轮缩小）
  const K = 0.6, cx = 990, cy = 490; const tx = 768 - cx * K, ty = 432 - cy * K;
  h.log('setViewport', await setViewport(h, tx, ty, K)); await h.sleep(0.8);
  let nodes = await h.nodes(); h.log('zoomout nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h])));
  await snap(h, ROOT, 'm-zoomout');
  // Shift+框选左列（Image Loader + Text）
  const li = nodes.find((n) => /LoadImage/.test(n.id)), tx0 = nodes.find((n) => /^Text/.test(n.id));
  const x0 = li.x - 20, y0 = li.y - 20, x1 = Math.max(li.x + li.w, tx0.x + tx0.w) + 20, y1 = tx0.y + tx0.h + 20;
  await h.human(x0, y0); await h.drag(x0, y0, x1, y1, { mods: ['Shift'], steps: 30, settle: 1.5 });
  nodes = await h.nodes(); h.log('selected', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.selected])));
  await h.human(x1 + 30, y1 - 40);
  await snap(h, ROOT, 'm-sel2');
  await h.press('f', 1.8);
  nodes = await h.nodes(); h.log('after F nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h])));
  await snap(h, ROOT, 'm-fit2');
  // 取消选择 → 双击 GPT 卡片主体（Sources 标签行右侧空白）聚焦
  await deselect(h);
  nodes = await h.nodes(); const gptN = nodes.find((n) => /Gpt/i.test(n.id));
  const s = (await h.eval(() => { const m = /scale\(([\d.]+)\)/.exec(document.querySelector('.react-flow__viewport').style.transform); return m ? Number(m[1]) : 1; }));
  const lab = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const el = [...n.querySelectorAll('div,span,label')].find((e) => e.children.length <= 1 && /^Sources/.test((e.innerText || '').trim())); if (!el) return null; const r = el.getBoundingClientRect(); return { x: Math.round(r.right + 60), y: Math.round(r.y + r.height / 2) }; }, gptN.id);
  const body = lab ? [lab.x, lab.y] : [gptN.x + 200 * s, gptN.y + (280 + 60) * s]; h.log('gpt body dbl at', body, 'scale', s);
  await h.human(body[0], body[1]); await h.dbl(body[0], body[1], 1.8);
  nodes = await h.nodes(); h.log('after dbl nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.selected])), 'vp', await h.viewport());
  await snap(h, ROOT, 'm-focus1');
  // Fit view（无选中按 F；无变化则点缩放菜单 Fit view）
  await deselect(h); const vpBefore = await h.viewport(); await h.press('f', 1.8);
  let vpAfter = await h.viewport(); h.log('F fit-all', vpBefore, '→', vpAfter);
  if (vpAfter === vpBefore) { await h.human(40, 832); await h.click(null, null, { settle: 1 }); const fv = await h.find('Fit view'); h.log('fit view item', fv); if (fv) { await h.move(fv.x, fv.y, 8); await h.sleep(0.3); await h.click(null, null, { settle: 1.8 }); } vpAfter = await h.viewport(); h.log('menu fit-all →', vpAfter); }
  nodes = await h.nodes(); h.log('fitall nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h])));
  await snap(h, ROOT, 'm-fitall');
  // —— S5 —— ⌘A → L
  await h.keys('Meta+a', 1.2);
  nodes = await h.nodes(); h.log('selall', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.selected])));
  h.log('sel toolbar', await h.eval(() => [...document.querySelectorAll('button')].filter((b) => { const r = b.getBoundingClientRect(); return r.width > 0 && !b.closest('.react-flow__node') && /Run selected|Save as Asset|Group|Auto Layout|Add to Chat/.test(b.innerText || ''); }).map((b) => { const r = b.getBoundingClientRect(); return (b.innerText || '').trim() + ' @' + Math.round(r.x + r.width / 2) + ',' + Math.round(r.y + r.height / 2); })));
  await snap(h, ROOT, 'm-selall');
  await h.press('l', 0.6);
  await snap(h, ROOT, 'm-arranged');
  nodes = await h.nodes(); h.log('arranged', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.tf])));
  // Auto Layout 子菜单
  let al = await h.find('Auto Layout', { sel: 'button' }); h.log('auto layout btn', al);
  if (al) {
    await h.human(al.x, al.y); await h.sleep(1.2);
    h.log('al sub', await h.eval(() => [...document.querySelectorAll('button,[role=menuitem],[role=radio],[role=option],[role=menuitemradio]')].filter((b) => b.getBoundingClientRect().width > 0 && !b.closest('.react-flow__node') && /Default|Horizontal|Vertical/i.test(b.innerText || b.getAttribute('aria-label') || '')).map((b) => { const r = b.getBoundingClientRect(); return (b.getAttribute('aria-label') || b.innerText || '').trim().replace(/\n/g, '|') + ' @' + Math.round(r.x + r.width / 2) + ',' + Math.round(r.y + r.height / 2); })));
    await snap(h, ROOT, 'm-almenu');
    const hz = await h.find('Horizontal', { sel: 'button,[role=menuitem],[role=radio],[role=option],[role=menuitemradio]' }); h.log('horizontal', hz);
    if (hz) { await h.move(hz.x, hz.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.8 }); await snap(h, ROOT, 'm-horizontal'); nodes = await h.nodes(); h.log('horizontal nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.tf]))); }
    al = await h.find('Auto Layout', { sel: 'button' });
    if (al) { await h.human(al.x, al.y); await h.sleep(1.2); const vt = await h.find('Vertical', { sel: 'button,[role=menuitem],[role=radio],[role=option],[role=menuitemradio]' }); h.log('vertical', vt); if (vt) { await h.move(vt.x, vt.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.8 }); await snap(h, ROOT, 'm-vertical'); nodes = await h.nodes(); h.log('vertical nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.tf]))); } }
  }
  al = await h.find('Auto Layout', { sel: 'button' });
  if (al) { await h.human(al.x, al.y); await h.sleep(1.2); const df = await h.find('Default', { sel: 'button,[role=menuitem],[role=radio],[role=option],[role=menuitemradio]' }); h.log('default', df); if (df) { await h.move(df.x, df.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.8 }); nodes = await h.nodes(); h.log('default nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 10), n.x, n.y, n.w, n.h, n.tf]))); } }
  await deselect(h);
  await snap(h, ROOT, 'm-default');
  // 快捷键面板：(i) → Keyboard shortcuts
  await h.human(192, 832); await h.sleep(1.2); // 悬停即展开（点击会收起）
  await snap(h, ROOT, 'm-infomenu');
  const ks = await h.find('Keyboard shortcuts'); h.log('ks', ks);
  await h.move(ks.x, ks.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.5 });
  await snap(h, ROOT, 'm-shortcuts');
  await h.press('Escape', 0.8);
};
