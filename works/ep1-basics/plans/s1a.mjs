// S1a — /workflows 列表页 → New Workflow → 空画布 → + 菜单 → Image models 子菜单 → 搜索 → 拖 Image Loader 到画布 → 上传 logo
import { STAGE, WORK, POS, UI, prep, hideProjectCards } from './_lib.mjs';
export default async ({ h, page, ROOT }) => {
  await h.goto('https://youart.ai/workflows', 4);
  h.log('cards', await hideProjectCards(h));
  await h.human(700, 300);
  await h.snap(WORK, 's1-workflows', { scrollTop: true });
  // 进入舞台项目（不再真点 New Workflow，避免再建项目）
  await h.goto(STAGE, 4); await prep(h);
  const nodes0 = await h.nodes(); if (nodes0.length) throw new Error('stage not empty: ' + nodes0.map((n) => n.id).join(','));
  await h.human(760, 600);
  await h.snap(WORK, 's1-empty');
  // + 菜单
  await h.human(...UI.plus); await h.click(null, null, { settle: 1.2 });
  await h.snap(WORK, 's1-menu');
  // 悬停 Image models
  const im = await h.find('Image models', { maxX: 300, minY: 300 }); h.log('Image models row', im);
  await h.move(im.x, im.y, 12); await h.sleep(1.2);
  await h.snap(WORK, 's1-submenu');
  // 搜索
  await h.move(...UI.search, 10); await h.click(); await h.type('image loader');
  await h.snap(WORK, 's1-search');
  const row = (await h.eval(() => [...document.querySelectorAll('button[draggable="true"]')].filter((e) => e.getBoundingClientRect().width > 0).map((e) => { const r = e.getBoundingClientRect(); return { t: (e.innerText || '').trim(), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }))).find((r) => /Image Loader/.test(r.t));
  h.log('row', row);
  await h.dnd(row.x, row.y, POS.loader[0], POS.loader[1], 2.5);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  await h.human(POS.loader[0] + 140, POS.loader[1] + 300);
  await h.snap(WORK, 's1-node1');
  // 上传 logo：点上传区触发系统文件选择
  const li = nodes[0];
  const up = await h.find('click to upload'); h.log('upload target', up);
  const [fc] = await Promise.all([page.waitForFileChooser({ timeout: 8000 }).catch((e) => { h.log('no file chooser', e.message); return null; }), h.click(up.x, up.y, { settle: 0.5 })]);
  if (fc) { await fc.accept([ROOT + '/works/ep1-basics/out/plan/ref.png']); await h.sleep(4); h.log('accepted file'); }
  await h.human(POS.loader[0] + 140, POS.loader[1] + 300);
  nodes = await h.nodes(); h.log('nodes after upload', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  h.log('loader has img', await h.eval(() => !!document.querySelector('.react-flow__node img')));
  await h.snap(WORK, 's1-loaded');
};
