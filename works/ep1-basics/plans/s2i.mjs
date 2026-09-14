// S2I — 用户指出：多选后选区右侧会出现一个大蓝点（共用输出口），拖它到目标节点即一起连线。找到它并试拖。
import fs from 'node:fs';
import { STAGE, WORK, prep } from './_lib.mjs';
const patch = (ROOT, slot) => { const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8'); html = html.split('>EP1 Basics<').join('>Untitled Project<').replace(/>10,[45]\d\d</g, '>10,673<'); fs.writeFileSync(p, html); };
export default async ({ h, ROOT }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  const loaderH = async () => (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h;
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); };
  let toggled = false; if ((await loaderH()) < 300) { await toggleAuto(); toggled = true; }
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => (e.getAttribute('data-testid') || e.getAttribute('data-id') || '').replace('rf__edge-', '').replace(/Generate-[0-9a-f]+/g, '').replace(/-[0-9a-f]{8}/g, '')));
  h.log('edges start', JSON.stringify(await edges()));
  if ((await edges()).length > 1) { await h.drag(1185, 430, 1185, 780, { mods: ['Control'], steps: 30, settle: 1.2 }); h.log('after cut', JSON.stringify(await edges())); }
  // 选中 GPT + Text（⇧框选，避开 LoadImage：框从 y=500 开始只框到 GPT 下半 + Text 全部）
  const nodes0 = await h.nodes(); const gpt = nodes0.find((n) => n.id.startsWith('GptImage2')), text = nodes0.find((n) => n.id.startsWith('Text-')), sd = nodes0.find((n) => n.id.startsWith('Seedance'));
  await h.human(gpt.x + 205, gpt.y + 20); await h.click(null, null, { settle: 0.6 });
  await h.keyDown('Shift'); await h.human(text.x + 205, text.y + 20); await h.click(null, null, { settle: 0.6 }); await h.keyUp('Shift');
  let sel = (await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10)); h.log('sel', JSON.stringify(sel));
  if (sel.length < 2) { await h.human(250, 780); await h.click(null, null, { settle: 0.5 }); await h.drag(440, 500, 1170, 800, { mods: ['Shift'], steps: 20, settle: 1 }); sel = (await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10)); h.log('sel via box', JSON.stringify(sel)); }
  const rect = await h.eval(() => { const r = document.querySelector('.react-flow__nodesselection-rect'); if (!r) return null; const b = r.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; });
  h.log('selection rect', JSON.stringify(rect));
  // 找选区附近的圆点元素（不属于任何节点）
  const dots = () => h.eval(() => [...document.querySelectorAll('div,span,button')].filter((e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width >= 14 && r.width <= 40 && Math.abs(r.width - r.height) < 3 && (cs.borderRadius.includes('%') || parseFloat(cs.borderRadius) >= r.width / 2 - 1) && !e.closest('.react-flow__node') && r.x > 100 && r.y > 60; }).map((e) => { const r = e.getBoundingClientRect(); return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), cls: (e.className || '').toString().slice(0, 80), bg: getComputedStyle(e).backgroundColor }; }));
  h.log('dots before hover', JSON.stringify(await dots()));
  await h.shot('s2i-sel');
  if (rect) { await h.move(rect.x + rect.w + 8, rect.y + rect.h / 2, 12); await h.sleep(0.8); h.log('dots after hover right edge', JSON.stringify(await dots())); await h.shot('s2i-hover'); }
  const { slot } = await h.snap(WORK, 's2-multisel'); patch(ROOT, slot);
  const cand = (await dots()).filter((d) => d.w >= 18);
  h.log('candidates', JSON.stringify(cand));
  if (cand.length) {
    const d = cand.sort((a, b) => b.w - a.w)[0];
    await h.drag(d.x, d.y, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.8 });
    h.log('edges after drag from dot', JSON.stringify(await edges()));
    await h.shot('s2i-after');
    const { slot: s3 } = await h.snap(WORK, 's2-multi'); patch(ROOT, s3);
  }
  await h.human(250, 780); await h.click(null, null, { settle: 0.6 });
  h.log('edges end', JSON.stringify(await edges()));
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored'); }
};
