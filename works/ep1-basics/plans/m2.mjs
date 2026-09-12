// M2 — S3 展开/收起（素材项目）：点箭头收起 Image Loader → 选中 GPT ⌘[ / ⌘] → 右键 Collapse All → 右键 Expand All → Auto-collapse 开关
import fs from 'node:fs';
import { MATERIAL, WORK, prep, patchMaterialHtml } from './_lib.mjs';
const BLANK = [250, 780];
const patchTitle = (ROOT, slot) => patchMaterialHtml(fs, ROOT, slot);
const snap = async (h, ROOT, state) => { const { slot } = await h.snap(WORK, state); patchTitle(ROOT, slot); };
const deselect = async (h) => { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); };
const chevron = (n) => [n.x + n.w - 20, n.y + (n.h > 300 ? n.h - (n.h - 0) : 0) + 0]; // 占位，实际用 aria 查
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h); await deselect(h);
  let nodes = await h.nodes(); h.log('nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  // 1 Image Loader 卡片右上角箭头（aria-label "Collapse sidebar"）：先悬停卡片标题栏让它出现
  const li = nodes.find((n) => /LoadImage/.test(n.id));
  const findChevron = () => h.eval(() => { const n = document.querySelector('.react-flow__node[data-id^="LoadImage"]'); const nr = n.getBoundingClientRect(); const btns = [...n.querySelectorAll('button')].map((b) => ({ b, r: b.getBoundingClientRect(), aria: b.getAttribute('aria-label') || '' })).filter(({ r }) => r.width > 0 && r.y > nr.y + 100 && r.y < nr.y + nr.height && r.x > nr.x + nr.width - 60); const hit = btns.find((x) => /Collapse sidebar/i.test(x.aria)) || btns.sort((a, b) => a.r.y - b.r.y)[0]; if (!hit) return null; return { x: Math.round(hit.r.x + hit.r.width / 2), y: Math.round(hit.r.y + hit.r.height / 2), aria: hit.aria, all: btns.map((x) => x.aria + '@' + Math.round(x.r.x) + ',' + Math.round(x.r.y)) }; });
  let chev = null;
  for (let i = 0; i < 6 && !chev; i++) { chev = await findChevron(); if (!chev) { await h.human(li.x + 40 + i * 30, li.y + 200); await h.sleep(0.6); } }
  h.log('loader chevron', chev);
  if (!chev) throw new Error('no chevron');
  await h.move(chev.x, chev.y, 8); await h.sleep(0.3); await h.click(null, null, { settle: 1.2 }); await deselect(h);
  nodes = await h.nodes(); h.log('after collapse loader', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  await snap(h, ROOT, 'm-c1');
  // 2 选中 GPT，⌘[ 收起，⌘] 展开
  const gpt = nodes.find((n) => /Gpt/i.test(n.id));
  await h.human(gpt.x + 205, gpt.y + 300); await h.click(null, null, { settle: 0.8 }); // 卡片标题栏右半空白（避开左侧模型切换器、右侧箭头）
  h.log('gpt selected?', (await h.nodes()).find((n) => /Gpt/i.test(n.id)).selected);
  await h.keys('Meta+[', 1.5);
  nodes = await h.nodes(); h.log('after cmd[', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h, n.selected])));
  await h.human(300, 740);
  await snap(h, ROOT, 'm-c2');
  await h.keys('Meta+]', 1.5);
  nodes = await h.nodes(); h.log('after cmd]', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h, n.selected])));
  await snap(h, ROOT, 'm-x2');
  await deselect(h);
  // 3 右键空白 → Collapse All Nodes
  await h.press('Escape', 0.4); await h.human(300, 400); await h.right(300, 400, 1.5);
  h.log('ctx', await h.eval(() => [...document.querySelectorAll('[role=menuitem]')].filter((e) => e.getBoundingClientRect().width > 0).map((e) => { const r = e.getBoundingClientRect(); return (e.innerText || '').trim().replace(/\n/g, '|') + ' @' + Math.round(r.x + r.width / 2) + ',' + Math.round(r.y + r.height / 2); })));
  await snap(h, ROOT, 'm-ctx1');
  const ca = await h.find('Collapse All Nodes', { sel: '[role=menuitem]' }); await h.move(ca.x, ca.y, 10); await h.sleep(0.4); await h.click(null, null, { settle: 1.5 });
  nodes = await h.nodes(); h.log('all collapsed', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  await h.human(300, 740);
  await snap(h, ROOT, 'm-allcollapsed');
  await h.right(300, 400, 1.5);
  h.log('ctx2', await h.eval(() => [...document.querySelectorAll('[role=menuitem]')].filter((e) => e.getBoundingClientRect().width > 0).map((e) => (e.innerText || '').trim().replace(/\n/g, '|'))));
  await snap(h, ROOT, 'm-ctx2');
  const ea = await h.find('Expand All Nodes', { sel: '[role=menuitem]' }); await h.move(ea.x, ea.y, 10); await h.sleep(0.4); await h.click(null, null, { settle: 1.5 });
  nodes = await h.nodes(); h.log('all expanded', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  await h.human(300, 740);
  await snap(h, ROOT, 'm-allexpanded');
  // 4 Auto-collapse：右键菜单里的开关
  await h.right(300, 400, 1.5);
  const ac = await h.find('Auto-collapse', { sel: '[role=menuitem]' }); h.log('auto-collapse item', ac);
  await h.move(ac.x, ac.y, 10); await h.sleep(0.6);
  await snap(h, ROOT, 'm-ctx3');
  await h.click(null, null, { settle: 1.5 });
  nodes = await h.nodes(); h.log('after auto-collapse on', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  h.log('text', (await h.text()).slice(0, 200));
  await h.human(300, 740);
  await snap(h, ROOT, 'm-autoc');
  // 关掉 Auto-collapse（恢复账号/项目偏好）
  await h.right(300, 400, 1.5); const ac2 = await h.find('Auto-collapse', { sel: '[role=menuitem]' }); await h.move(ac2.x, ac2.y, 10); await h.sleep(0.3); await h.click(null, null, { settle: 1.2 });
  nodes = await h.nodes(); h.log('after auto-collapse off', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
};
