// run.mjs — 在同一个 puppeteer 会话里跑一整段采集计划（2026-09-11）：
//   node capture/run.mjs works/<slug>/plans/<plan>.mjs [args...]
// 计划文件 export default async ({ page, h, args }) => { ... }，h 是助手集（见下）。
// 为什么不用 journey/mouse 等 CLI 串联：每次连接 puppeteer 的鼠标位置都从 (0,0) 重置，
// 穿过悬停面板（+ 节点菜单、素材面板）就会把它关掉；单会话里鼠标状态连续，路径可控。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { VIEW } from './lib/config.mjs';
import { snap as snapCore, collectMeta, ROOT } from './lib/snap.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const planPath = process.argv[2];
if (!planPath) { console.error('usage: node capture/run.mjs <plan.mjs> [args...]'); process.exit(1); }
const ws = fs.readFileSync(path.join(ROOT, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const pages = (await browser.pages()).filter((p) => !p.url().startsWith('devtools'));
let page = process.env.TAB ? pages.find((p) => p.url().includes(process.env.TAB)) : pages.pop();
if (!page) page = await browser.newPage();
await page.setViewport({ width: VIEW.w, height: VIEW.h, deviceScaleFactor: 1 });
await page.bringToFront();

const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));
let cur = { x: VIEW.w / 2, y: VIEW.h / 2 };
const RECON = path.join(ROOT, 'lab', 'recon');
fs.mkdirSync(RECON, { recursive: true });

const h = {
  sleep,
  log: (...a) => console.log('[plan]', ...a),
  /** 直线移动（悬停面板内部/进入面板必须用它，路径可控） */
  move: async (x, y, steps = 12) => { await page.mouse.move(x, y, { steps }); cur = { x, y }; await sleep(0.12); },
  /** 类人移动：先绕一段再落点（面板外的普通目标） */
  human: async (x, y) => {
    const pts = [[cur.x + (x - cur.x) * 0.35 + 40, cur.y + (y - cur.y) * 0.3 + 60], [cur.x + (x - cur.x) * 0.8 - 12, cur.y + (y - cur.y) * 0.85 + 8], [x, y]];
    for (const [px, py] of pts) { await page.mouse.move(px, py, { steps: 8 }); await sleep(0.1); }
    cur = { x, y };
  },
  click: async (x, y, opts = {}) => {
    if (x != null) await h.move(x, y, opts.steps ?? 10);
    await sleep(0.15);
    const button = opts.right ? 'right' : 'left';
    if (opts.right) {
      // 右键：contextmenu 只对分离的 down/up 可靠触发
      await page.mouse.down({ button }); await sleep(0.09); await page.mouse.up({ button });
    } else if (opts.dbl) {
      // 双击：两对 down/up 紧接（实测 click(1)+click(2) 间隔稍长就不触发 dblclick）
      await page.mouse.down(); await page.mouse.up(); await sleep(0.06); await page.mouse.down({ clickCount: 2 }); await page.mouse.up({ clickCount: 2 });
    } else {
      await page.mouse.click(cur.x, cur.y, { button, clickCount: 1 });
    }
    await sleep(opts.settle ?? 1.2);
  },
  dbl: (x, y, settle = 1.5) => h.click(x, y, { dbl: true, settle }),
  right: (x, y, settle = 1.5) => h.click(x, y, { right: true, settle }),
  type: async (text, delay = 30) => { await page.keyboard.type(text, { delay }); await sleep(0.4); },
  press: async (key, settle = 1) => { await page.keyboard.press(key); await sleep(settle); },
  /** 组合键 "Meta+a" / "Meta+[" */
  keys: async (combo, settle = 1) => {
    const parts = combo.split('+'); const key = parts.pop();
    for (const m of parts) await page.keyboard.down(m);
    await page.keyboard.press(key);
    for (const m of parts.reverse()) await page.keyboard.up(m);
    await sleep(settle);
  },
  keyDown: (k) => page.keyboard.down(k),
  keyUp: (k) => page.keyboard.up(k),
  /** 真实鼠标拖拽（画布连线/框选/移节点），可带修饰键 */
  drag: async (x1, y1, x2, y2, opts = {}) => {
    const mods = opts.mods ?? []; const steps = opts.steps ?? 30;
    await h.move(x1, y1); await sleep(0.2);
    for (const m of mods) await page.keyboard.down(m);
    await page.mouse.down(); await sleep(0.15);
    for (let i = 1; i <= steps; i++) { await page.mouse.move(x1 + ((x2 - x1) * i) / steps, y1 + ((y2 - y1) * i) / steps); await sleep(0.02); }
    await sleep(opts.hold ?? 0.25);
    if (opts.beforeUp) await opts.beforeUp();
    await page.mouse.up(); cur = { x: x2, y: y2 };
    for (const m of [...mods].reverse()) await page.keyboard.up(m);
    await sleep(opts.settle ?? 1.5);
  },
  /** HTML5 拖放（素材面板/菜单结果行 → 画布） */
  dnd: async (x1, y1, x2, y2, settle = 2) => {
    // 拦截式 HTML5 拖放；dragstart 没触发时 mouse.drag 会永久挂起，这里 12s 超时并复位
    await h.move(x1, y1); await sleep(0.3);
    await page.setDragInterception(true);
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('dnd: no dragstart within 12s')), 12000));
    try {
      const data = await Promise.race([page.mouse.drag({ x: x1, y: y1 }, { x: x2, y: y2 }), timeout]);
      await page.mouse.dragEnter({ x: x2, y: y2 }, data); await page.mouse.dragOver({ x: x2, y: y2 }, data);
      await page.mouse.drop({ x: x2, y: y2 }, data); await page.mouse.up();
    } finally {
      await page.setDragInterception(false).catch(() => {});
      await page.mouse.up().catch(() => {});
    }
    cur = { x: x2, y: y2 };
    await sleep(settle);
  },
  upload: async (selector, file) => { const input = await page.$(selector); if (!input) throw new Error('no file input ' + selector); await input.uploadFile(path.resolve(ROOT, file)); await sleep(2.5); },
  goto: async (url, settle = 3) => { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); await Promise.race([page.evaluate(() => document.fonts.ready).catch(() => {}), sleep(5)]); await sleep(settle); },
  eval: (fn, ...args) => page.evaluate(fn, ...args),
  text: async () => page.evaluate(() => (document.body?.innerText || '').replace(/\s+/g, ' ').slice(0, 600)),
  shot: async (name) => { const p = path.join(RECON, `${name}.png`); await page.screenshot({ path: p }); console.log('shot →', p); },
  snap: (work, state, opts) => snapCore(page, work, state, opts),
  meta: () => collectMeta(page),
  /** 找可见元素中心（文本包含匹配，最短文本优先）；可限定 tag 与区域 */
  find: async (needle, opts = {}) => page.evaluate((needle, opts) => {
    const sel = opts.sel || 'button,a,[role=button],[role=menuitem],[role=option],[role=tab],li,label,span,div,input';
    const els = [...document.querySelectorAll(sel)].filter((el) => {
      const own = (el.innerText || el.placeholder || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ');
      if (!own || own.length > 80) return false;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return false;
      if (opts.minX != null && r.x < opts.minX) return false;
      if (opts.maxX != null && r.x > opts.maxX) return false;
      if (opts.minY != null && r.y < opts.minY) return false;
      return opts.exact ? own.toLowerCase() === needle.toLowerCase() : own.toLowerCase().includes(needle.toLowerCase());
    });
    els.sort((a, b) => (a.innerText || a.placeholder || '').length - (b.innerText || b.placeholder || '').length);
    const el = els[opts.nth ?? 0];
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { text: (el.innerText || el.placeholder || '').trim().slice(0, 60), x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), w: Math.round(r.width), h: Math.round(r.height), tag: el.tagName };
  }, needle, opts),
  /** React Flow 节点矩形（页面坐标）与 handle 中心 */
  nodes: () => page.evaluate(() => [...document.querySelectorAll('.react-flow__node')].map((n) => { const r = n.getBoundingClientRect(); return { id: n.getAttribute('data-id'), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), tf: n.style.transform, selected: n.classList.contains('selected'), handles: [...n.querySelectorAll('.react-flow__handle')].map((hh) => { const hr = hh.getBoundingClientRect(); return { id: hh.getAttribute('data-handleid'), type: hh.classList.contains('source') ? 'source' : 'target', cx: Math.round(hr.x + hr.width / 2), cy: Math.round(hr.y + hr.height / 2) }; }) }; })),
  viewport: () => page.evaluate(() => document.querySelector('.react-flow__viewport')?.style.transform),
  page,
};

const mod = await import(path.resolve(planPath));
try {
  await mod.default({ page, h, args: process.argv.slice(3), ROOT });
} catch (e) {
  console.error('plan failed:', e);
  process.exitCode = 1;
} finally {
  browser.disconnect();
}
