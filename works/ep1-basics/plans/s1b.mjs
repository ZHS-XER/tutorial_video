// S1b — logo 已由 MCP 写入 Image Loader；重载 → 快照 loaded → 双击空白建 GPT Image 2
import { STAGE, WORK, POS, prep } from './_lib.mjs';
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  h.log('loader has img', await h.eval(() => !!document.querySelector('.react-flow__node img')));
  await h.human(POS.loader[0] + 140, POS.loader[1] + 320);
  await h.snap(WORK, 's1-loaded');
  // 双击空白 → 紧凑菜单
  await h.human(POS.gpt[0], POS.gpt[1]); await h.dbl(POS.gpt[0], POS.gpt[1], 1.5);
  await h.snap(WORK, 's1-dbl');
  const inp = await h.find('Search nodes', { sel: 'input' }); h.log('dbl input', inp);
  await h.move(inp.x, inp.y); await h.click(); await h.type('gpt image');
  await h.snap(WORK, 's1-dblsearch');
  const row = await h.eval(() => { const e = [...document.querySelectorAll('div,span')].find((x) => (x.innerText || '').trim() === 'GPT Image 2' && x.getBoundingClientRect().width > 0); if (!e) return null; let r = e; for (let i = 0; i < 4; i++) { const p = r.parentElement; if (!p || p.getBoundingClientRect().height > 60) break; r = p; } const b = r.getBoundingClientRect(); return { x: Math.round(b.x + b.width / 2), y: Math.round(b.y + b.height / 2) }; });
  h.log('gpt row', row);
  await h.move(row.x, row.y); await h.click(null, null, { settle: 2.5 });
  nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  await h.human(POS.gpt[0] + 140, POS.gpt[1] + 520);
  await h.snap(WORK, 's1-node2');
};
