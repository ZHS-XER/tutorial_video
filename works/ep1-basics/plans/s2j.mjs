// S2J（2026-09-17）— 采多选共用输出点：新版 UI 下多选后，选区右侧出现带数字徽标 + 按接口色分段彩环的圆点，拖它到目标节点即把选中节点一起连上。
// 前提：采集浏览器 UA 必须是普通 Chrome（browser-daemon 已加 --user-agent），HeadlessChrome UA 会拿到旧版节点 UI，没有这个点。
// 流程：E3 → ⌃拖切断两条线 → ⇧ 点选 GPT + Text → 找圆点、导出带计算样式的 DOM（out/plan/shared-dot.json）→ snap s2-multisel-new
//       → 拖圆点到 Seedance → snap s2-multi-new → 取消选中 → 校验回到 E3（不足用 MCP add_edges 补）。
// 用法：node capture/run.mjs works/ep1-basics/plans/s2j.mjs [--dry]   （--dry 只侦察不 snap、不拖）
import fs from 'node:fs';
import { STAGE, WORK, prep } from './_lib.mjs';
const patch = (ROOT, slot) => { const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8'); html = html.split('>EP1 Basics<').join('>Untitled Project<').replace(/>10,[2345]\d\d</g, '>10,673<'); fs.writeFileSync(p, html); };
export default async ({ h, page, ROOT, args }) => {
  const dry = args.includes('--dry');
  const ua = await h.eval(() => navigator.userAgent); if (/Headless/.test(ua)) throw new Error('UA is HeadlessChrome — restart `npm run browser` (daemon sets a normal UA)');
  await page.setCookie({ name: 'NEXT_LOCALE', value: 'en', domain: 'youart.ai', path: '/' });
  try { await h.goto(STAGE, 5); } catch (e) { h.log('goto retry:', e.message.slice(0, 60)); await h.sleep(3); await h.goto(STAGE, 5); }
  h.log('path', await h.eval(() => location.pathname + ' ' + document.documentElement.lang));
  const gptTxt = await h.eval(() => (document.querySelector('.react-flow__node[data-id^="GptImage2"]')?.innerText || '').slice(0, 60));
  if (!/Reference images/.test(gptTxt)) throw new Error('old node UI still rendered: ' + gptTxt);
  await prep(h);
  const deselect = async () => { await h.human(250, 800); await h.click(null, null, { settle: 0.7 }); };
  await deselect();
  const nodes = () => h.nodes();
  const byId = async (pre) => (await nodes()).find((n) => n.id.startsWith(pre));
  const edges = () => h.eval(() => [...document.querySelectorAll('.react-flow__edge')].map((e) => (e.getAttribute('data-testid') || e.getAttribute('data-id') || '').replace('rf__edge-', '').replace(/Generate-[0-9a-f]+/g, '').replace(/-[0-9a-f]{8}/g, '')));
  h.log('nodes', JSON.stringify((await nodes()).map((n) => [n.id.slice(0, 12), n.x, n.y, n.w, n.h])));
  h.log('edges start', JSON.stringify(await edges()));
  const nE = (await edges()).length; if (nE !== 3 && nE !== 1) throw new Error('expect 3 (E3) or 1 (already cut) edges at start');
  // Text 若收起（账号偏好 Auto-collapse）先展开
  const expandIfCollapsed = async (pre) => { const n = await byId(pre); if (n.h < 100) { await h.human(n.x + n.w - 60, n.y + 19); await h.click(null, null, { settle: 0.6 }); await h.keys('Meta+]', 1); await deselect(); h.log(pre, 'expanded'); } };
  await expandIfCollapsed('Text-'); await expandIfCollapsed('LoadImage-'); await expandIfCollapsed('GptImage2');
  // ⌃ 拖切断进 Seedance 的两条线（竖线划过 x=1185）
  const sd0 = await byId('Seedance');
  if (nE === 3) { await h.drag(1185, sd0.y + 40, 1185, Math.min(sd0.y + sd0.h - 20, 840), { mods: ['Control'], steps: 30, settle: 1.2 }); h.log('after cut', JSON.stringify(await edges())); }
  if ((await edges()).length !== 1) throw new Error('cut failed');
  // ⇧ 点选 GPT + Text：点标题栏右侧空白（左侧是模型切换器）
  const headAt = (id) => h.eval((id) => { const n = document.querySelector(`.react-flow__node[data-id="${id}"]`); const t = [...n.querySelectorAll('span,div')].find((e) => e.children.length === 0 && /^(GPT Image 2|Text)$/.test((e.textContent || '').trim())); const r = (t || n).getBoundingClientRect(); const nr = n.getBoundingClientRect(); return { x: Math.round(nr.x + nr.width - 70), y: Math.round(r.y + r.height / 2) }; }, id);
  const gpt = await byId('GptImage2'), text = await byId('Text-'), sd = await byId('Seedance');
  const gh = await headAt(gpt.id), th = await headAt(text.id); h.log('heads', JSON.stringify([gh, th]));
  await h.human(gh.x, gh.y); await h.click(null, null, { settle: 0.7 });
  await page.keyboard.down('Shift'); await h.human(th.x, th.y); await h.click(null, null, { settle: 0.8 }); await page.keyboard.up('Shift');
  let sel = (await nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10)); h.log('sel', JSON.stringify(sel));
  if (sel.length !== 2) {
    // 兜底：⇧ 框选，从右下往左上，起点 y 在 LoadImage 下缘之下（部分覆盖即选中，Text 全覆盖、GPT 下半覆盖、LoadImage 不碰）
    const li = await byId('LoadImage-');
    await deselect(); await h.drag(1180, 848, text.x - 30, li.y + li.h + 18, { mods: ['Shift'], steps: 20, settle: 1 });
    sel = (await nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10)); h.log('sel via box', JSON.stringify(sel));
  }
  if ((await byId('Text-')).h < 100) { await h.keys('Meta+]', 1); h.log('text re-expanded'); }
  await h.move(1000, 835, 8); await h.sleep(1);
  // 找圆点：不在 header 里、叶子文本为纯数字、位于 GPT 右侧
  const dots = await h.eval(() => [...document.querySelectorAll('body *')].filter((e) => !e.closest('header') && e.children.length === 0 && /^\d+$/.test((e.textContent || '').trim())).map((e) => { const r = e.getBoundingClientRect(); return { txt: e.textContent.trim(), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), inNode: !!e.closest('.react-flow__node') }; }));
  h.log('digits', JSON.stringify(dots));
  const selBox = (await nodes()).filter((n) => n.selected).reduce((b, n) => ({ x1: Math.min(b.x1, n.x), y1: Math.min(b.y1, n.y), x2: Math.max(b.x2, n.x + n.w), y2: Math.max(b.y2, n.y + n.h) }), { x1: 1e9, y1: 1e9, x2: -1e9, y2: -1e9 });
  h.log('selection bbox', JSON.stringify(selBox));
  const dot = dots.find((d) => d.txt === '2' && d.x > selBox.x2 - 40 && d.x < selBox.x2 + 120);
  await h.shot('s2j-sel');
  if (!dot) { h.log('!! shared output dot NOT found'); await deselect(); return; }
  h.log('dot', JSON.stringify(dot), 'offset from bbox right', dot.x - selBox.x2, 'from bbox cy', dot.y - (selBox.y1 + selBox.y2) / 2);
  // 导出圆点子树（向上找到不在 .react-flow__node 内、尺寸 ≤ 120 的最外层容器），每个元素写入关键计算样式
  const dump = await h.eval((x, y) => {
    let e = document.elementFromPoint(x, y); if (!e) return null;
    let top = e; while (top.parentElement && top.parentElement !== document.body) { const r = top.parentElement.getBoundingClientRect(); if (r.width > 140 || r.height > 140) break; top = top.parentElement; }
    const PROPS = ['position', 'left', 'top', 'right', 'bottom', 'inset', 'width', 'height', 'display', 'align-items', 'justify-content', 'flex-direction', 'gap', 'padding', 'margin', 'border', 'border-radius', 'background', 'background-color', 'background-image', 'color', 'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'box-shadow', 'transform', 'transform-origin', 'z-index', 'opacity', 'overflow', 'pointer-events', 'cursor', 'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'box-sizing', 'text-align', 'white-space', 'translate', 'rotate', 'scale'];
    const clone = top.cloneNode(true);
    const src = [top, ...top.querySelectorAll('*')], dst = [clone, ...clone.querySelectorAll('*')];
    src.forEach((s, i) => { const cs = getComputedStyle(s); const d = dst[i]; for (const p of PROPS) { const v = cs.getPropertyValue(p); if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== 'rgba(0, 0, 0, 0)' && v !== '0px' && v !== 'static' && v !== 'visible') d.style.setProperty(p, v); } d.removeAttribute('class'); for (const a of [...d.attributes]) if (a.name.startsWith('data-') || a.name.startsWith('on')) d.removeAttribute(a.name); });
    const r = top.getBoundingClientRect();
    return { rect: { x: r.x, y: r.y, w: r.width, h: r.height }, parentCls: top.parentElement.getAttribute('class'), parentStyle: top.parentElement.getAttribute('style'), topStyle: top.getAttribute('style'), raw: top.outerHTML.slice(0, 6000), styled: clone.outerHTML.slice(0, 12000) };
  }, dot.x, dot.y);
  fs.mkdirSync(`${ROOT}/works/${WORK}/out/plan`, { recursive: true });
  fs.writeFileSync(`${ROOT}/works/${WORK}/out/plan/shared-dot.json`, JSON.stringify({ dot, selBox, dump }, null, 1));
  h.log('dot dump rect', JSON.stringify(dump.rect), 'parent', dump.parentCls, '| raw head:', dump.raw.slice(0, 300));
  // 悬停圆点看有没有悬停态
  await h.move(dot.x, dot.y, 10); await h.sleep(0.8); await h.shot('s2j-dot-hover');
  const hoverDump = await h.eval((x, y) => { let e = document.elementFromPoint(x, y); let top = e; while (top.parentElement && top.parentElement !== document.body) { const r = top.parentElement.getBoundingClientRect(); if (r.width > 140 || r.height > 140) break; top = top.parentElement; } return top.outerHTML.slice(0, 3000); }, dot.x, dot.y);
  fs.writeFileSync(`${ROOT}/works/${WORK}/out/plan/shared-dot-hover.html`, hoverDump);
  await h.move(1000, 835, 8); await h.sleep(0.6);
  if (dry) { h.log('dry: stop before snap'); await deselect(); return; }
  const { slot } = await h.snap(WORK, 's2-multisel-new'); patch(ROOT, slot);
  // 拖圆点到 Seedance 主体，中途截图看拖出的连线样式
  await h.drag(dot.x, dot.y, sd.x + 140, sd.y + Math.min(200, sd.h - 40), { steps: 30, hold: 0.8, settle: 2, beforeUp: async () => { await h.shot('s2j-dragging'); } });
  h.log('edges after drag', JSON.stringify(await edges()), 'sel', JSON.stringify((await nodes()).filter((n) => n.selected).map((n) => n.id.slice(0, 10))));
  await h.move(1000, 835, 8); await h.sleep(0.8); await h.shot('s2j-after');
  const { slot: s3 } = await h.snap(WORK, 's2-multi-new'); patch(ROOT, s3);
  await deselect();
  const fin = await edges(); h.log('edges end', JSON.stringify(fin));
  if (fin.length !== 3) h.log('!! edges != 3 → MCP add_edges: GPT→Seedance edge-in-first_frame, Text→Seedance edge-in-text_input-1');
};
