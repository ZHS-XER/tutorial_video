// S2F — 重试多选一起连线：⌃拖切断 GPT→Seedance → 点 GPT 标题栏右半 + ⇧点 Text 标题栏右半 → 从 GPT 输出口拖到 Seedance 主体 → 看是否两条都连上
import fs from 'node:fs';
import { STAGE, WORK, prep } from './_lib.mjs';
const patch = (ROOT, slot) => { const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8'); html = html.split('>EP1 Basics<').join('>Untitled Project<').replace(/>10,[45]\d\d</g, '>10,673<'); fs.writeFileSync(p, html); };
export default async ({ h, ROOT }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  const loaderH = async () => (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h;
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); };
  let toggled = false; if ((await loaderH()) < 300) { await toggleAuto(); toggled = true; }
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => (e.getAttribute('data-id') || '').replace('rf__edge-', '')));
  const sel = async () => (await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 12));
  h.log('edges start', JSON.stringify(await edges()));
  if ((await edges()).length > 1) { await h.drag(1185, 430, 1185, 780, { mods: ['Control'], steps: 30, settle: 1.5 }); h.log('edges after cut', JSON.stringify(await edges())); }
  const nodes = await h.nodes(); const gpt = nodes.find((n) => n.id.startsWith('GptImage2')), text = nodes.find((n) => n.id.startsWith('Text-')), sd = nodes.find((n) => n.id.startsWith('Seedance'));
  await h.human(gpt.x + 205, gpt.y + 20); await h.click(null, null, { settle: 0.8 }); h.log('sel after gpt click', JSON.stringify(await sel()));
  await h.keyDown('Shift'); await h.human(text.x + 205, text.y + 20); await h.click(null, null, { settle: 0.8 }); await h.keyUp('Shift'); h.log('sel after shift-click text', JSON.stringify(await sel()));
  if ((await sel()).length < 2) { // 兜底：⇧框选两节点
    await h.human(250, 780); await h.click(null, null, { settle: 0.6 });
    await h.drag(440, 350, 1170, 800, { mods: ['Shift'], steps: 30, settle: 1.2 }); h.log('sel after shift-box', JSON.stringify(await sel()));
  }
  await h.shot('s2f-multisel');
  const { slot: s2 } = await h.snap(WORK, 's2-multisel'); patch(ROOT, s2);
  const out = gpt.handles.find((hh) => hh.id === 'edge-out');
  await h.drag(out.cx, out.cy, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.8 });
  h.log('edges after multi-connect', JSON.stringify(await edges())); h.log('sel after', JSON.stringify(await sel()));
  await h.shot('s2f-multi');
  const { slot: s3 } = await h.snap(WORK, 's2-multi'); patch(ROOT, s3);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  h.log('edges final', JSON.stringify(await edges()));
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored'); }
};
