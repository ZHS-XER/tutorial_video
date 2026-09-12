// S1D — 补：舞台上多出三枚"从 Finder 拖入 / 粘贴"的 Image Loader（MCP 建好 + 上传 black-tee / grey-hoodie / canvas-tote，position y=388 → 预览顶 y=100），快照 s1-files
//   成片里用 patchCss 隐藏 GPT/Text/Seedance（以及按阶段隐藏 hoodie/tote）。采完 MCP 删除这三枚节点。
import fs from 'node:fs';
import { STAGE, WORK, prep } from './_lib.mjs';
export default async ({ h, ROOT }) => {
  await h.goto(STAGE, 5); await prep(h);
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
  // 舞台项目上 Auto-collapse 处于开启（未选中节点自动收起）：右键空白 → Auto-collapse nodes 关掉，采完再开回去
  const autoOn = async () => { const l = (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')); return l.h < 300; };
  const toggleAuto = async () => { await h.right(300, 400, 1.2); const it = await h.find('Auto-collapse nodes', { sel: '[role=menuitem],div,button' }); h.log('auto item', JSON.stringify(it)); await h.human(it.x, it.y); await h.click(null, null, { settle: 1.2 }); };
  let nodes = await h.nodes();
  const loader = nodes.find((n) => n.id.startsWith('LoadImage-170c'));
  h.log('loader before', JSON.stringify([loader.x, loader.y, loader.w, loader.h]));
  let toggled = false;
  if (loader.h < 300) {
    await toggleAuto(); toggled = true;
    await h.human(250, 780); await h.click(null, null, { settle: 0.8 });
    let l2 = (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')); h.log('loader after toggle', JSON.stringify([l2.x, l2.y, l2.w, l2.h]));
    if (l2.h < 300) { await h.human(l2.x + l2.w - 21, l2.y + l2.h - 18); await h.click(null, null, { settle: 1.2 }); await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); l2 = (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')); h.log('loader after expand', JSON.stringify([l2.x, l2.y, l2.w, l2.h])); }
  }
  h.log('nodes', JSON.stringify((await h.nodes()).map((n) => [n.id.slice(0, 14), n.x, n.y, n.w, n.h, n.selected])));
  await h.human(700, 760);
  await h.shot('s1d-files');
  const { slot } = await h.snap(WORK, 's1-files');
  const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8');
  html = html.split('>EP1 Basics<').join('>Untitled Project<').replace(/>10,5\d\d</g, '>10,673<');
  fs.writeFileSync(p, html); h.log('patched title/credits');
  if (toggled) { await toggleAuto(); h.log('auto-collapse restored, loader h =', (await h.nodes()).find((n) => n.id.startsWith('LoadImage-170c')).h); }
};
