// S2E — 补：⌃拖切断连线 + 多选一起连线（舞台，E3 状态：三条连线都在）。快照 s2-cut / s2-multisel / s2-multi；采完开回 Auto-collapse
import fs from 'node:fs';
import { STAGE, WORK, prep } from './_lib.mjs';
const patch = (ROOT, slot) => { const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8'); html = html.split('>EP1 Basics<').join('>Untitled Project<').replace(/>10,[45]\d\d</g, '>10,673<'); fs.writeFileSync(p, html); };
export default async ({ h, ROOT }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  const loaderH = async () => (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h;
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); };
  let toggled = false; if ((await loaderH()) < 300) { await toggleAuto(); toggled = true; }
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => e.getAttribute('data-id') || e.getAttribute('data-testid')));
  const nodes = await h.nodes(); h.log('nodes', JSON.stringify(nodes.map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h, n.handles.filter((hh) => hh.type === 'source').map((hh) => [hh.id, hh.cx, hh.cy])])));
  h.log('edges before', JSON.stringify(await edges()));
  await h.shot('s2e-before');
  // ⌃ + 拖：竖线从 Seedance 左侧上方划到下方，切断进 Seedance 的两条线
  await h.drag(1185, 430, 1185, 780, { mods: ['Control'], steps: 30, settle: 1.5 });
  await h.shot('s2e-cut');
  h.log('edges after cut', JSON.stringify(await edges()));
  await h.human(700, 800);
  const { slot: s1 } = await h.snap(WORK, 's2-cut'); patch(ROOT, s1);
  // 多选：点 GPT 标题栏，⇧ 点 Text 标题栏
  const gpt = nodes.find((n) => n.id.startsWith('GptImage2')), text = nodes.find((n) => n.id.startsWith('Text-'));
  await h.human(gpt.x + 140, gpt.y + 20); await h.click(null, null, { settle: 0.8 });
  await h.keyDown('Shift'); await h.human(text.x + 140, text.y + 20); await h.click(null, null, { settle: 0.8 }); await h.keyUp('Shift');
  h.log('selected', JSON.stringify((await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 12))));
  await h.shot('s2e-multisel');
  const { slot: s2 } = await h.snap(WORK, 's2-multisel'); patch(ROOT, s2);
  // 从 GPT 输出口拖到 Seedance 主体
  const out = gpt.handles.find((hh) => hh.id === 'edge-out'); const sd = nodes.find((n) => n.id.startsWith('Seedance'));
  await h.drag(out.cx, out.cy, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.8 });
  h.log('edges after multi-connect', JSON.stringify(await edges()));
  h.log('selected after', JSON.stringify((await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 12))));
  await h.shot('s2e-multi');
  const { slot: s3 } = await h.snap(WORK, 's2-multi'); patch(ROOT, s3);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  h.log('edges final', JSON.stringify(await edges()));
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored'); }
};
