// S2d — 重采 GPT/Text 提示词状态（上一轮取消选中点到了 Balanced 下拉）→ videonode → 多选测试 → 连线到 Seedance → 全部连好
// 取消选中一律点 BLANK (250,780)（左下工具栏之上、节点之外）
import { STAGE, WORK, prep } from './_lib.mjs';
export const GPT_PROMPT = 'Photorealistic storefront sign for a boutique clothing store. Use this logo in white on a black metal sign, with the tagline WEAR YOUR STYLE.';
export const TEXT_PROMPT = 'Logo reveal: the sign starts blank, then the logo letters rise out of the signboard one by one, like real acrylic signage. Subtle slow push-in. Hold on the finished sign.';
const BLANK = [250, 780];
const deselect = async (h) => { await h.human(...BLANK); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740); };
const focusBox = async (h, nodeId) => {
  const ta = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const t = n.querySelector('textarea, [contenteditable="true"]'); if (!t) return null; const r = t.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + 20) }; }, nodeId);
  for (let i = 0; i < 3; i++) {
    await h.human(ta.x, ta.y); await h.click(null, null, { settle: 0.6 });
    const ok = await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const a = document.activeElement; return !!(a && n.contains(a) && (a.isContentEditable || a.tagName === 'TEXTAREA')); }, nodeId);
    if (ok) return ta;
  }
  throw new Error('box not focused ' + nodeId);
};
export default async ({ h }) => {
  await h.goto(STAGE, 4); await prep(h);
  let nodes = await h.nodes(); h.log('nodes', nodes.map((n) => [n.id, n.x, n.y, n.w, n.h]));
  if (nodes.length !== 4) throw new Error('expect 4 nodes');
  const gpt = nodes.find((n) => /Gpt/i.test(n.id)), text = nodes.find((n) => /^Text/.test(n.id)), vid = nodes.find((n) => /Seedance/.test(n.id));
  h.log('open poppers', await h.eval(() => document.querySelectorAll('[data-radix-popper-content-wrapper]').length));
  await deselect(h);
  await h.snap(WORK, 's2-edge1');
  await focusBox(h, gpt.id); await h.type(GPT_PROMPT, 10); await h.sleep(0.8);
  await h.snap(WORK, 's2-prompt-focus');
  await deselect(h);
  await h.snap(WORK, 's2-prompt');
  await h.snap(WORK, 's2-textnode');
  await focusBox(h, text.id); await h.type(TEXT_PROMPT, 10); await h.sleep(0.8);
  await h.snap(WORK, 's2-text-focus');
  await deselect(h);
  await h.snap(WORK, 's2-textfilled');
  await h.snap(WORK, 's2-videonode');
  // 多选：点 GPT 标题，Shift+点 Text 标题
  await h.human(gpt.x + 120, gpt.y + 18); await h.click(null, null, { settle: 0.6 });
  await h.keyDown('Shift'); await h.human(text.x + 120, text.y + 18); await h.click(null, null, { settle: 0.6 }); await h.keyUp('Shift');
  nodes = await h.nodes(); h.log('selected', nodes.map((n) => [n.id.slice(0, 12), n.selected]));
  await h.human(700, 520);
  await h.snap(WORK, 's2-sel2');
  const gOut = gpt.handles.find((x) => x.type === 'source');
  const drop = [vid.x + vid.w * 0.5, vid.y + vid.h * 0.5];
  await h.drag(gOut.cx, gOut.cy, drop[0], drop[1], { steps: 36, hold: 0.6, settle: 1.8 });
  let m = await h.meta(); h.log('edges after GPT→Seedance', JSON.stringify(m.flow?.edges.map((e) => e.id)));
  await deselect(h);
  await h.snap(WORK, 's2-edge2');
  if ((m.flow?.edges.length ?? 0) < 3) {
    nodes = await h.nodes(); const t2 = nodes.find((n) => /^Text/.test(n.id)); const v2 = nodes.find((n) => /Seedance/.test(n.id));
    const tOut = t2.handles.find((x) => x.type === 'source');
    await h.human(tOut.cx - 30, tOut.cy + 60);
    await h.drag(tOut.cx, tOut.cy, v2.x + v2.w * 0.5, v2.y + v2.h * 0.5, { steps: 36, hold: 0.6, settle: 1.8 });
    m = await h.meta(); h.log('edges after Text→Seedance', JSON.stringify(m.flow?.edges.map((e) => e.id)));
    await deselect(h);
    await h.snap(WORK, 's2-edge3');
  }
  nodes = await h.nodes(); h.log('final nodes', JSON.stringify(nodes.map((n) => ({ id: n.id, x: n.x, y: n.y, w: n.w, h: n.h }))));
  h.log('run all', await h.find('Run All'));
  h.log('gpt run btn', await h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const b = [...n.querySelectorAll('button')].find((x) => /^Run$/.test((x.innerText || '').trim())); if (!b) return null; const r = b.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) }; }, gpt.id));
  await h.snap(WORK, 's2-built');
};
