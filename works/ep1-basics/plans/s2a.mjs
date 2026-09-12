// S2a — 重快照 node2（GPT 已挪到 860,380）→ 连线（主体落点自动匹配）→ 悬停连线 ✕ 断开 → 重连 → 输入提示词 → 双击建 Text 节点
import { STAGE, WORK, prep } from './_lib.mjs';
export const GPT_PROMPT = 'Photorealistic storefront sign for a boutique clothing store. Use this logo in white on a black metal sign, with the tagline WEAR YOUR STYLE.';
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  const li = nodes.find((n) => /LoadImage/.test(n.id)), gpt = nodes.find((n) => /Gpt/i.test(n.id));
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 });
  await h.snap(WORK, 's1-node2');
  // 连线：LoadImage 输出口 → GPT 主体中部
  const out = li.handles.find((x) => x.type === 'source'); h.log('loader out', out);
  const dropAt = [gpt.x + gpt.w * 0.5, gpt.y + gpt.h * 0.55];
  await h.human(out.cx - 40, out.cy + 60);
  await h.drag(out.cx, out.cy, dropAt[0], dropAt[1], { steps: 36, hold: 0.6, settle: 1.5 });
  let m = await h.meta(); h.log('edges', JSON.stringify(m.flow?.edges));
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  await h.snap(WORK, 's2-edge1');
  // 悬停连线中点 → Delete connection
  const mid = await h.eval(() => { const p = document.querySelector('.react-flow__edge path.react-flow__edge-path'); if (!p) return null; const len = p.getTotalLength(); const pt = p.getPointAtLength(len / 2); const svg = p.ownerSVGElement; const mm = svg.getScreenCTM(); const sp = svg.createSVGPoint(); sp.x = pt.x; sp.y = pt.y; const s = sp.matrixTransform(mm); return [Math.round(s.x), Math.round(s.y)]; });
  h.log('edge mid', mid);
  await h.human(mid[0] - 30, mid[1] + 90); await h.move(mid[0], mid[1], 10); await h.sleep(1.2);
  const del = await h.eval(() => { const b = [...document.querySelectorAll('button')].find((x) => /Delete connection/i.test(x.getAttribute('aria-label') || x.title || '') && x.getBoundingClientRect().width > 0); if (!b) return null; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width) }; });
  h.log('delete btn', del);
  await h.snap(WORK, 's2-edgehover');
  await h.move(del.x, del.y, 8); await h.sleep(0.4); await h.click(null, null, { settle: 1.2 });
  m = await h.meta(); h.log('edges after delete', JSON.stringify(m.flow?.edges));
  await h.human(1100, 700);
  await h.snap(WORK, 's2-deleted');
  // 重连
  nodes = await h.nodes(); const li2 = nodes.find((n) => /LoadImage/.test(n.id)); const out2 = li2.handles.find((x) => x.type === 'source');
  await h.human(out2.cx - 40, out2.cy + 60);
  await h.drag(out2.cx, out2.cy, dropAt[0], dropAt[1], { steps: 36, hold: 0.6, settle: 1.5 });
  m = await h.meta(); h.log('edges after reconnect', JSON.stringify(m.flow?.edges));
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  await h.snap(WORK, 's2-edge1b');
  // 提示词
  const ta = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const t = n.querySelector('textarea, [contenteditable="true"]'); if (!t) return null; const r = t.getBoundingClientRect(); return { tag: t.tagName, x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height), cls: String(t.className).slice(0, 80) }; }, gpt.id);
  h.log('gpt prompt box', ta);
  await h.human(ta.x, ta.y); await h.click(null, null, { settle: 0.6 }); await h.type(GPT_PROMPT, 12); await h.sleep(0.6);
  await h.snap(WORK, 's2-prompt-typing');
  await h.human(1000, 720); await h.click(null, null, { settle: 0.8 }); await h.human(1100, 700);
  nodes = await h.nodes(); h.log('gpt after prompt', nodes.find((n) => /Gpt/i.test(n.id)));
  await h.snap(WORK, 's2-prompt');
  // Run 按钮位置（不点）
  h.log('gpt run btn', await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const b = [...n.querySelectorAll('button')].find((x) => /^Run$/.test((x.innerText || '').trim())); if (!b) return null; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height) }; }, gpt.id));
  // 双击建 Text 节点（目标卡片 ≈ (470,560)）
  const C = [376, 617];
  await h.human(C[0], C[1]); await h.dbl(C[0], C[1], 1.5);
  await h.snap(WORK, 's2-dbltext');
  const inp = await h.find('Search nodes', { sel: 'input' }); await h.move(inp.x, inp.y); await h.click(); await h.type('text');
  h.log('text rows', await h.eval(() => [...document.querySelectorAll('div,span')].filter((x) => x.children.length === 0 && /^Text/.test((x.innerText || '').trim()) && x.getBoundingClientRect().width > 0).map((x) => { const r = x.getBoundingClientRect(); return (x.innerText || '').trim() + ' @' + Math.round(r.x) + ',' + Math.round(r.y); })));
  await h.snap(WORK, 's2-dbltextsearch');
  const row = await h.eval(() => { const e = [...document.querySelectorAll('div,span')].find((x) => x.children.length === 0 && (x.innerText || '').trim() === 'Text' && x.getBoundingClientRect().width > 0 && x.getBoundingClientRect().x > 300); if (!e) return null; let r = e; for (let i = 0; i < 4; i++) { const p = r.parentElement; if (!p || p.getBoundingClientRect().height > 60) break; r = p; } const b = r.getBoundingClientRect(); return { x: Math.round(b.x + b.width / 2), y: Math.round(b.y + b.height / 2) }; });
  h.log('text row', row);
  await h.move(row.x, row.y); await h.click(null, null, { settle: 2.5 });
  nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
};
