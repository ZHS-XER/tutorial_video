// verify-replay.mjs — 快照离线回放验收：works/<work>/captures/*.html 断网加载并截图
// 用法：npm run replay <work> [slot]；产物 works/<work>/out/replay/<slot>.png，与 out/capture-qa/<slot>.png（采集时活页截图）对照。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';
import { VIEW } from './lib/config.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const work = path.resolve(here, '..');
const workSlug = process.argv[2];
if (!workSlug) { console.error('usage: npm run replay <work> [slot]'); process.exit(1); }
const HTML_DIR = path.join(work, 'works', workSlug, 'captures');
const OUT = path.join(work, 'works', workSlug, 'out', 'replay');
fs.mkdirSync(OUT, { recursive: true });

const only = process.argv[3];
const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith('.html') && (!only || f === `${only}.html`));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: VIEW.w, height: VIEW.h, deviceScaleFactor: 1 }); // 125% UI 比例（AGENTS.md）
await page.setOfflineMode(true);

for (const f of files) {
  const slot = f.replace(/\.html$/, '');
  await page.goto(pathToFileURL(path.join(HTML_DIR, f)).href, { waitUntil: 'load', timeout: 30000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUT, `${slot}.png`) });
  console.log('replay ok:', slot);
}
await browser.close();
