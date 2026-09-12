// dnd.mjs — HTML5 拖放（dragstart/drop 事件链）：node scripts/dnd.mjs <x1> <y1> <x2> <y2> [settleSec]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import puppeteer from 'puppeteer';
const here = path.dirname(fileURLToPath(import.meta.url)); const work = path.resolve(here, '..');
const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const page = (await browser.pages()).filter((p) => !p.url().startsWith('devtools')).pop();
const [x1, y1, x2, y2] = process.argv.slice(2, 6).map(Number); const settle = Number(process.argv[6] ?? 2);
const GUARD = setTimeout(() => { console.error('dnd: timed out (no dragstart?)'); process.exit(2); }, 15000);
await page.setDragInterception(true);
await page.mouse.move(x1, y1); await new Promise((r) => setTimeout(r, 200));
const data = await page.mouse.drag({ x: x1, y: y1 }, { x: x2, y: y2 });
await page.mouse.dragEnter({ x: x2, y: y2 }, data); await page.mouse.dragOver({ x: x2, y: y2 }, data);
await page.mouse.drop({ x: x2, y: y2 }, data); await page.mouse.up();
await page.setDragInterception(false);
await new Promise((r) => setTimeout(r, settle * 1000));
clearTimeout(GUARD); console.log('dnd done; items:', data.items?.length ?? 0); browser.disconnect();
