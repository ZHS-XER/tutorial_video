// S1c — 双击空白建 GPT Image 2（目标卡片左上角 ≈ (860,380)，双击点按实测偏移 (+94,-57) 反推）
import { STAGE, WORK, prep } from './_lib.mjs';
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  if (nodes.length !== 1) throw new Error('expect 1 node');
  const C = [766, 437];
  await h.human(C[0], C[1]); await h.dbl(C[0], C[1], 1.5);
  await h.snap(WORK, 's1-dbl');
  const inp = await h.find('Search nodes', { sel: 'input' }); h.log('dbl input', inp);
  await h.move(inp.x, inp.y); await h.click(); await h.type('gpt image');
  await h.snap(WORK, 's1-dblsearch');
  const row = await h.eval(() => { const e = [...document.querySelectorAll('div,span')].find((x) => (x.innerText || '').trim() === 'GPT Image 2' && x.getBoundingClientRect().width > 0); if (!e) return null; let r = e; for (let i = 0; i < 4; i++) { const p = r.parentElement; if (!p || p.getBoundingClientRect().height > 60) break; r = p; } const b = r.getBoundingClientRect(); return { x: Math.round(b.x + b.width / 2), y: Math.round(b.y + b.height / 2) }; });
  h.log('gpt row', row);
  await h.move(row.x, row.y); await h.click(null, null, { settle: 2.5 });
  nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  // 取消选中再快照
  await h.human(700, 760); await h.click(null, null, { settle: 1 });
  await h.human(1000, 720);
  await h.snap(WORK, 's1-node2');
};
