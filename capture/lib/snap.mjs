// lib/snap.mjs — 快照核心（从 journey.mjs snap 子命令抽出，2026-09-11）：
// MHTML → 自包含 HTML → 字体本地化 → meta（元素矩形 + React Flow 真值）→ QA png → 重生成 materials.gen.ts。
// journey.mjs 与 run.mjs 共用；产物路径见 AGENTS.md「快照按 work 存放」。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { mhtmlToHtml } from './mhtml.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, '..', '..');
const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

/** 页面元数据：可瞄准元素矩形 + React Flow 真值（viewport / 节点 / handle / 连线） */
export const collectMeta = (page) =>
  page.evaluate(() => {
    const els = [];
    const seen = new Set();
    for (const el of document.querySelectorAll('button,a,input,textarea,select,[role=button],[role=tab],[role=menuitem],[data-testid],h1,h2,h3,th,td:first-child,label')) {
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8 || r.width > 1900) continue;
      const text = (el.innerText || el.placeholder || el.value || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 80);
      const key = `${el.tagName}|${text}|${Math.round(r.x)}|${Math.round(r.y)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      els.push({ tag: el.tagName.toLowerCase(), text, testid: el.getAttribute('data-testid') || undefined, x: Math.round(r.x + window.scrollX), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) });
    }
    const vp = document.querySelector('.react-flow__viewport');
    const flow = vp
      ? {
          viewport: vp.style.transform,
          nodes: [...document.querySelectorAll('.react-flow__node')].map((n) => {
            const r = n.getBoundingClientRect();
            return {
              id: n.getAttribute('data-id'), transform: n.style.transform,
              x: Math.round(r.x + window.scrollX), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height),
              selected: n.classList.contains('selected'),
              handles: [...n.querySelectorAll('.react-flow__handle')].map((h) => { const hr = h.getBoundingClientRect(); return { id: h.getAttribute('data-handleid'), type: h.classList.contains('source') ? 'source' : 'target', cx: Math.round(hr.x + hr.width / 2), cy: Math.round(hr.y + hr.height / 2) }; }),
            };
          }),
          edges: [...document.querySelectorAll('.react-flow__edge')].map((e) => ({ id: e.getAttribute('data-id') || e.getAttribute('data-testid'), d: e.querySelector('path.react-flow__edge-path')?.getAttribute('d') || null })),
        }
      : undefined;
    return { url: location.href, pageW: Math.max(document.documentElement.scrollWidth, window.innerWidth), pageH: Math.max(document.documentElement.scrollHeight, window.innerHeight), els, flow };
  });

/** 重生成 works/<work>/src/materials.gen.ts（含 src 路径，模块加载时注册进 @engine/materials） */
export const regenMaterials = (workSlug) => {
  const OUT_META = path.join(ROOT, 'works', workSlug, 'captures', 'meta');
  const metas = {};
  for (const f of fs.readdirSync(OUT_META).filter((f) => f.endsWith('.json')).sort()) {
    const m = JSON.parse(fs.readFileSync(path.join(OUT_META, f), 'utf8'));
    metas[m.slot] = { src: `works/${workSlug}/captures/${m.slot}.html`, pageW: m.pageW, pageH: m.pageH, els: m.els, ...(m.flow ? { flow: m.flow } : {}) };
  }
  const gen = `// materials.gen.ts — capture snap 自动生成，勿手改。本 work 的快照元数据，模块加载时注册进 @engine/materials。\n` +
    `import { registerMaterials } from '@engine/materials';\n` +
    `registerMaterials(${JSON.stringify(metas, null, 2)});\n`;
  fs.mkdirSync(path.join(ROOT, 'works', workSlug, 'src'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'works', workSlug, 'src', 'materials.gen.ts'), gen);
};

/**
 * snap(page, workSlug, state)：slot = <work>-<state>，写 works/<work>/captures/<slot>.html + meta/<slot>.json + out/capture-qa/<slot>.png
 * opts.scrollTop=false 时不回页顶（画布页无滚动，默认 true 保持旧行为）。
 */
export const snap = async (page, workSlug, state, opts = {}) => {
  if (!workSlug || !state || !fs.existsSync(path.join(ROOT, 'works', workSlug))) throw new Error(`snap: works/${workSlug} 不存在（npm run new ${workSlug}）`);
  const slot = `${workSlug}-${state}`;
  const OUT_HTML = path.join(ROOT, 'works', workSlug, 'captures');
  const OUT_META = path.join(OUT_HTML, 'meta');
  const OUT_QA = path.join(ROOT, 'works', workSlug, 'out', 'capture-qa');
  for (const d of [OUT_HTML, OUT_META, OUT_QA]) fs.mkdirSync(d, { recursive: true });
  if (opts.scrollTop !== false) { await page.evaluate(() => window.scrollTo(0, 0)); await sleep(0.5); }
  const meta = await collectMeta(page);
  const cdp = await page.createCDPSession();
  const { data: mhtml } = await cdp.send('Page.captureSnapshot', { format: 'mhtml' });
  await cdp.detach().catch(() => {});
  const html = mhtmlToHtml(mhtml);
  fs.writeFileSync(path.join(OUT_HTML, `${slot}.html`), html);
  execFileSync(process.execPath, [path.join(here, '..', 'localize-fonts.mjs'), OUT_HTML, slot], { stdio: 'inherit' });
  fs.writeFileSync(path.join(OUT_META, `${slot}.json`), JSON.stringify({ slot, ...meta }, null, 2));
  await page.screenshot({ path: path.join(OUT_QA, `${slot}.png`) });
  regenMaterials(workSlug);
  console.log(`snap[${slot}] html=${(Buffer.byteLength(html) / 1048576).toFixed(2)}MB page=${meta.pageW}x${meta.pageH} els=${meta.els.length} nodes=${meta.flow?.nodes.length ?? '-'}`);
  return { slot, meta };
};
