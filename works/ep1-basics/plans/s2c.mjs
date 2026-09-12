// S2c — Text 节点已挪到 (470,560)：快照 textnode → 填写运动提示词 → 双击建 Seedance 2.5
import { STAGE, WORK, prep } from './_lib.mjs';
export const TEXT_PROMPT = 'Logo reveal: the sign starts blank, then the logo letters rise out of the signboard one by one, like real acrylic signage. Subtle slow push-in. Hold on the finished sign.';
const focusBox = async (h, nodeId) => {
  const ta = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const t = n.querySelector('textarea, [contenteditable="true"]'); if (!t) return null; const r = t.getBoundingClientRect(); return { tag: t.tagName, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + 20), w: Math.round(r.width), h: Math.round(r.height) }; }, nodeId);
  h.log('box', ta);
  for (let i = 0; i < 3; i++) {
    await h.human(ta.x, ta.y); await h.click(null, null, { settle: 0.6 });
    const ok = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const a = document.activeElement; return !!(a && n.contains(a) && (a.isContentEditable || a.tagName === 'TEXTAREA')); }, nodeId);
    h.log('focused?', ok); if (ok) return ta;
  }
  throw new Error('box not focused');
};
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  if (nodes.length !== 3) throw new Error('expect 3 nodes');
  const text = nodes.find((n) => /^Text/.test(n.id));
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  await h.snap(WORK, 's2-textnode');
  await focusBox(h, text.id);
  await h.type(TEXT_PROMPT, 10); await h.sleep(0.8);
  await h.snap(WORK, 's2-text-focus');
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  nodes = await h.nodes(); h.log('text after', nodes.find((n) => /^Text/.test(n.id)));
  await h.snap(WORK, 's2-textfilled');
  // 双击建 Seedance（目标卡片 ≈ (1230,380)）；菜单在光标处向右下展开，点靠右会翻转，先试 (1136,437)
  const C = [1136, 437];
  await h.human(C[0], C[1]); await h.dbl(C[0], C[1], 1.5);
  let inp = await h.find('Search nodes', { sel: 'input' }); h.log('dbl input', inp);
  if (!inp) { await h.press('Escape', 0.5); await h.human(C[0] + 10, C[1] + 10); await h.dbl(C[0] + 10, C[1] + 10, 1.5); inp = await h.find('Search nodes', { sel: 'input' }); h.log('retry input', inp); }
  await h.snap(WORK, 's2-dblvideo');
  await h.move(inp.x, inp.y); await h.click(); await h.type('seedance');
  const rows = await h.eval(() => [...document.querySelectorAll('div,span')].filter((x) => x.children.length === 0 && /^Seedance/.test((x.innerText || '').trim()) && x.getBoundingClientRect().width > 0).map((x) => { const r = x.getBoundingClientRect(); return { t: (x.innerText || '').trim(), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }));
  h.log('seedance rows', rows);
  await h.snap(WORK, 's2-dblvideosearch');
  const pick = rows.find((r) => r.t === 'Seedance 2.5') || rows.find((r) => /^Seedance 2\.5/.test(r.t)) || rows[0];
  h.log('pick', pick);
  await h.move(pick.x + 40, pick.y); await h.click(null, null, { settle: 3 });
  nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  h.log('video node text', await h.eval(() => { const n = [...document.querySelectorAll('.react-flow__node')].pop(); return (n.innerText || '').replace(/\s+/g, ' ').slice(0, 200); }));
};
