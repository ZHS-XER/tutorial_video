// S2G — 多选一起连线的几种手势试验（每种试完 ⌘Z 撤销）
import { STAGE, prep } from './_lib.mjs';
export default async ({ h }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  const loaderH = async () => (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h;
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); };
  let toggled = false; if ((await loaderH()) < 300) { await toggleAuto(); toggled = true; }
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => (e.getAttribute('data-testid') || e.getAttribute('data-id') || '').replace('rf__edge-', '').replace(/Generate-[0-9a-f]+/g, '').replace(/-[0-9a-f]{8}/g, '')));
  const sel = async () => (await h.nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10));
  h.log('edges start', JSON.stringify(await edges()));
  // 起点：切掉进 Seedance 的线
  if ((await edges()).length > 1) { await h.drag(1185, 430, 1185, 780, { mods: ['Control'], steps: 30, settle: 1.2 }); h.log('after cut', JSON.stringify(await edges())); }
  const nodes = await h.nodes(); const gpt = nodes.find((n) => n.id.startsWith('GptImage2')), text = nodes.find((n) => n.id.startsWith('Text-')), sd = nodes.find((n) => n.id.startsWith('Seedance'));
  const gptOut = gpt.handles.find((hh) => hh.id === 'edge-out'), textOut = text.handles.find((hh) => hh.id === 'edge-out');
  h.log('seedance handles', JSON.stringify(sd.handles));
  const selectBoth = async () => { await h.human(250, 780); await h.click(null, null, { settle: 0.5 }); await h.drag(440, 350, 1170, 800, { mods: ['Shift'], steps: 20, settle: 1 }); h.log('sel', JSON.stringify(await sel())); };
  const undo = async (n) => { for (let i = 0; i < n; i++) await h.keys('Meta+z', 0.8); h.log('after undo', JSON.stringify(await edges())); };
  // A: 选中后从 GPT 输出口拖到 Seedance 的 first_frame 输入口
  await selectBoth(); const ff = sd.handles.find((hh) => /first_frame/.test(hh.id)) || sd.handles.find((hh) => hh.type === 'target');
  await h.drag(gptOut.cx, gptOut.cy, ff.cx, ff.cy, { steps: 30, settle: 1.5 }); h.log('A edges', JSON.stringify(await edges())); await undo(1);
  // B: 选中后从 Text 输出口拖到 Seedance 主体
  await selectBoth(); await h.drag(textOut.cx, textOut.cy, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.5 }); h.log('B edges', JSON.stringify(await edges())); await undo(1);
  // C: 选中后从 GPT 输出口旁的 + 圆钮拖到 Seedance 主体（+ 在输出口右侧 30px）
  await selectBoth(); await h.drag(gptOut.cx + 30, gptOut.cy, sd.x + 140, sd.y + 220, { steps: 30, settle: 1.5 }); h.log('C edges', JSON.stringify(await edges())); h.log('C sel', JSON.stringify(await sel()));
  await h.shot('s2g-C');
  await undo(1);
  // D: 反向：从 Seedance 输入口拖到选中的 GPT 主体
  await selectBoth(); await h.drag(ff.cx, ff.cy, gpt.x + 140, gpt.y + 200, { steps: 30, settle: 1.5 }); h.log('D edges', JSON.stringify(await edges())); await undo(1);
  // E: 选中后把 GPT 整体拖到 Seedance 上（拖节点）？不做——会移动节点
  h.log('edges end', JSON.stringify(await edges()));
  await h.human(250, 780); await h.click(null, null, { settle: 0.6 });
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored'); }
};
