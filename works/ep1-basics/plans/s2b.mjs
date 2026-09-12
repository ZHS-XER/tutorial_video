// S2b — GPT 提示词（可靠聚焦）→ 双击建 Text 节点
import { STAGE, WORK, prep } from './_lib.mjs';
export const GPT_PROMPT = 'Photorealistic storefront sign for a boutique clothing store. Use this logo in white on a black metal sign, with the tagline WEAR YOUR STYLE.';
const focusBox = async (h, nodeId) => {
  const ta = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const t = n.querySelector('textarea, [contenteditable="true"]'); if (!t) return null; const r = t.getBoundingClientRect(); return { tag: t.tagName, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + 20), w: Math.round(r.width), h: Math.round(r.height) }; }, nodeId);
  h.log('box', ta);
  for (let i = 0; i < 3; i++) {
    await h.human(ta.x, ta.y); await h.click(null, null, { settle: 0.6 });
    const ok = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const a = document.activeElement; return !!(a && n.contains(a) && (a.isContentEditable || a.tagName === 'TEXTAREA')); }, nodeId);
    h.log('focused?', ok); if (ok) return ta;
  }
  throw new Error('prompt box not focused');
};
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  if (nodes.length !== 2) throw new Error('expect 2 nodes');
  const gpt = nodes.find((n) => /Gpt/i.test(n.id));
  await focusBox(h, gpt.id);
  await h.type(GPT_PROMPT, 10); await h.sleep(0.8);
  await h.snap(WORK, 's2-prompt-focus');
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  nodes = await h.nodes(); h.log('gpt after prompt', nodes.find((n) => /Gpt/i.test(n.id)));
  h.log('prompt text now', await h.eval((id) => document.querySelector(`.react-flow__node[data-id="${id}"] [contenteditable="true"], .react-flow__node[data-id="${id}"] textarea`)?.textContent?.slice(0, 80), gpt.id));
  await h.snap(WORK, 's2-prompt');
  h.log('gpt run btn', await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const b = [...n.querySelectorAll('button')].find((x) => /^Run$/.test((x.innerText || '').trim())); if (!b) return null; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height) }; }, gpt.id));
  // 双击建 Text
  const C = [376, 617];
  await h.human(C[0], C[1]); await h.dbl(C[0], C[1], 1.5);
  let inp = await h.find('Search nodes', { sel: 'input' }); h.log('dbl input', inp);
  if (!inp) { await h.shot('s2-dbl-fail'); await h.press('Escape', 0.5); await h.human(C[0] + 10, C[1] + 10); await h.dbl(C[0] + 10, C[1] + 10, 1.5); inp = await h.find('Search nodes', { sel: 'input' }); h.log('retry input', inp); }
  await h.snap(WORK, 's2-dbltext');
  await h.move(inp.x, inp.y); await h.click(); await h.type('text');
  h.log('text rows', await h.eval(() => [...document.querySelectorAll('div,span')].filter((x) => x.children.length === 0 && /^Text/.test((x.innerText || '').trim()) && x.getBoundingClientRect().width > 0 && x.getBoundingClientRect().x > 300).map((x) => { const r = x.getBoundingClientRect(); return (x.innerText || '').trim() + ' @' + Math.round(r.x) + ',' + Math.round(r.y); })));
  await h.snap(WORK, 's2-dbltextsearch');
  const row = await h.eval(() => { const e = [...document.querySelectorAll('div,span')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === 'Text' && x.getBoundingClientRect().width > 0 && x.getBoundingClientRect().x > 300); if (!e) return null; let r = e; for (let i = 0; i < 4; i++) { const p = r.parentElement; if (!p || p.getBoundingClientRect().height > 60) break; r = p; } const b = r.getBoundingClientRect(); return { x: Math.round(b.x + b.width / 2), y: Math.round(b.y + b.height / 2) }; });
  h.log('text row', row);
  await h.move(row.x, row.y); await h.click(null, null, { settle: 2.5 });
  nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
};
