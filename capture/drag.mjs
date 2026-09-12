// drag.mjs — 真实鼠标拖拽（可带修饰键），用于画布类操作的状态采集。
// 用法：node scripts/drag.mjs <x1> <y1> <x2> <y2> [--alt] [--shift] [--meta] [--steps=30] [--settle=2]
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

const args = process.argv.slice(2);
const nums = args.filter((a) => !a.startsWith('--')).map(Number);
const [x1, y1, x2, y2] = nums;
const opt = (k, d) => { const a = args.find((s) => s.startsWith(`--${k}=`)); return a ? Number(a.split('=')[1]) : d; };
const steps = opt('steps', 30);
const settle = opt('settle', 2);
const mods = [];
if (args.includes('--alt')) mods.push('Alt');
if (args.includes('--shift')) mods.push('Shift');
if (args.includes('--meta')) mods.push('Meta');
const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

await page.mouse.move(x1, y1);
await sleep(0.3);
for (const m of mods) await page.keyboard.down(m);
await sleep(0.2);
await page.mouse.down();
await sleep(0.15);
for (let i = 1; i <= steps; i++) {
  await page.mouse.move(x1 + ((x2 - x1) * i) / steps, y1 + ((y2 - y1) * i) / steps);
  await sleep(0.02);
}
await sleep(0.2);
await page.mouse.up();
await sleep(0.2);
for (const m of mods.reverse()) await page.keyboard.up(m);
await sleep(settle);
console.log(`dragged (${x1},${y1}) → (${x2},${y2}) mods=[${mods.join(',')}]`);
browser.disconnect();
