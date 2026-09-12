// mouse.mjs — 真实鼠标事件：move 轨迹 + click 指定坐标（用于跨域 iframe 内的 Turnstile 勾选框）
// 用法：node scripts/mouse.mjs <x> <y> [settleSec] [--right] [--dbl] [--move] [--direct]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const here = path.dirname(fileURLToPath(import.meta.url));
const work = path.resolve(here, '..');
const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const pages = await browser.pages();
const page = pages.filter((p) => !p.url().startsWith('devtools')).pop();

const [x, y] = [Number(process.argv[2]), Number(process.argv[3])];
const settle = Number(process.argv[4] ?? 4);
const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

// 类人轨迹：从画面别处分几步移动过去，带微小停顿
// --direct：从当前位置直线移动（悬停面板等"离开即关闭"的 UI 必须用它）
if (process.argv.includes('--direct')) {
  await page.mouse.move(x, y, { steps: 12 });
  await sleep(0.15);
} else {
  const steps = [
    [x - 320, y + 180], [x - 160, y + 90], [x - 60, y + 30], [x - 12, y + 6], [x, y],
  ];
  for (const [px, py] of steps) {
    await page.mouse.move(px, py, { steps: 8 });
    await sleep(0.12 + Math.abs(px % 7) * 0.02);
  }
}
await sleep(0.4);
const right = process.argv.includes('--right');
const dbl = process.argv.includes('--dbl');
const moveOnly = process.argv.includes('--move');
if (!moveOnly) {
  // 2026-09-11：产品新版对分离的 down/up（间隔 90ms）不再触发 click，改用 page.mouse.click（React 合成事件可靠）
  const button = right ? 'right' : 'left';
  await page.mouse.click(x, y, { button, clickCount: 1 });
  if (dbl) {
    await sleep(0.08);
    await page.mouse.click(x, y, { button, clickCount: 2 });
  }
}
await sleep(settle);
console.log('clicked at', x, y);
console.log(await page.evaluate(() => (document.body?.innerText || '').replace(/\s+/g, ' ').slice(0, 300)));
browser.disconnect();
