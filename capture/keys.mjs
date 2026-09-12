// keys.mjs — 组合键：node scripts/keys.mjs "Meta+f" [settleSec]   （修饰键 Meta/Alt/Shift/Control）
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import puppeteer from 'puppeteer';
const here = path.dirname(fileURLToPath(import.meta.url)); const work = path.resolve(here, '..');
const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const page = (await browser.pages()).filter((p) => !p.url().startsWith('devtools')).pop();
const combo = process.argv[2]; const settle = Number(process.argv[3] ?? 1);
const parts = combo.split('+'); const key = parts.pop(); const mods = parts;
for (const m of mods) await page.keyboard.down(m);
await page.keyboard.press(key.length === 1 ? key : key);
for (const m of mods.reverse()) await page.keyboard.up(m);
await new Promise((r) => setTimeout(r, settle * 1000));
console.log('pressed', combo); browser.disconnect();
