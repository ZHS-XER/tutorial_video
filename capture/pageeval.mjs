// pageeval.mjs — 在指定 tab 里执行一个 JS 文件导出的函数（绕过 journey eval 的单行限制）
// 用法：TAB=/home node scripts/pageeval.mjs scripts/evals/<name>.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const here = path.dirname(fileURLToPath(import.meta.url));
const work = path.resolve(here, '..');
const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const pages = (await browser.pages()).filter((p) => !p.url().startsWith('devtools'));
const page = process.env.TAB ? pages.find((p) => p.url().includes(process.env.TAB)) : pages.pop();
if (!page) { console.error('no tab matches', process.env.TAB); process.exit(1); }
const mod = await import(path.resolve(process.argv[2]));
const result = await page.evaluate(mod.default);
console.log(JSON.stringify(result, null, 2)?.slice(0, 4000));
browser.disconnect();
