// tabs.mjs — 列出/切换 daemon Chrome 的标签页：node scripts/tabs.mjs [index|close-others]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import puppeteer from 'puppeteer';
const here = path.dirname(fileURLToPath(import.meta.url)); const work = path.resolve(here, '..');
const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const pages = (await browser.pages()).filter((p) => !p.url().startsWith('devtools'));
const arg = process.argv[2];
if (arg === 'close-others') { for (const p of pages.slice(0, -1)) await p.close(); console.log('closed', pages.length - 1); }
else if (arg !== undefined) { const p = pages[Number(arg)]; await p.bringToFront(); console.log('front:', p.url()); }
for (const [i, p] of (await browser.pages()).filter((p) => !p.url().startsWith('devtools')).entries()) console.log(i, p.url());
browser.disconnect();
