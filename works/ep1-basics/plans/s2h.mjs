// S2H — 反过来试：选中多个目标节点，从一个输出口拖到其中一个 → 是否同时连到所有选中节点
import { STAGE, prep } from './_lib.mjs';
export default async ({ h }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  const loaderH = async () => (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h;
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); };
  let toggled = false; if ((await loaderH()) < 300) { await toggleAuto(); toggled = true; }
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => (e.getAttribute('data-testid') || e.getAttribute('data-id') || '').replace('rf__edge-', '').replace(/Generate-[0-9a-f]+/g, '').replace(/-[0-9a-f]{8}/g, '')));
  const sel = async () => (await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10));
  const nodes = await h.nodes(); const gpt = nodes.find((n) => n.id.startsWith('GptImage2')), text = nodes.find((n) => n.id.startsWith('Text-')), sd = nodes.find((n) => n.id.startsWith('Seedance')), ld = nodes.find((n) => n.id.startsWith('LoadImage'));
  const textOut = text.handles.find((hh) => hh.id === 'edge-out');
  h.log('edges start', JSON.stringify(await edges()));
  // 选中 GPT + Seedance（两个目标），从 Text 输出口拖到 Seedance 主体
  await h.drag(840, 350, 1530, 880, { mods: ['Shift'], steps: 20, settle: 1 }); h.log('sel', JSON.stringify(await sel()));
  await h.drag(textOut.cx, textOut.cy, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.5 }); h.log('A edges', JSON.stringify(await edges()));
  await h.shot('s2h-A');
  await h.keys('Meta+z', 0.8); h.log('after undo', JSON.stringify(await edges()));
  // 选中 GPT + Seedance，从 Text 输出口拖到 GPT 主体
  await h.human(250, 780); await h.click(null, null, { settle: 0.5 }); await h.drag(840, 350, 1530, 880, { mods: ['Shift'], steps: 20, settle: 1 });
  await h.drag(textOut.cx, textOut.cy, gpt.x + 140, gpt.y + 300, { steps: 30, settle: 1.5 }); h.log('B edges', JSON.stringify(await edges()));
  await h.keys('Meta+z', 0.8); h.log('after undo', JSON.stringify(await edges()));
  await h.human(250, 780); await h.click(null, null, { settle: 0.6 });
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored'); }
};
