// localize-fonts.mjs — 把快照里指向远程的 woff2 字体下载到 <capturesDir>/fonts/，
// 并把 <link rel=preload href> 与 CSS url() 改写为相对路径（同源，避开 CORS，离线可渲）。
// MHTML 快照不含字体资源，这是采集后的必要补丁。用法：node capture/localize-fonts.mjs <capturesDir> [slot]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const work = path.resolve(here, '..');
const DIR = path.resolve(process.argv[2] || '');
if (!process.argv[2] || !fs.existsSync(DIR)) { console.error('usage: node capture/localize-fonts.mjs <capturesDir> [slot]'); process.exit(1); }
const FONTS = path.join(DIR, 'fonts');
fs.mkdirSync(FONTS, { recursive: true });

const only = process.argv[3];
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.html') && (!only || f === `${only}.html`));
const RE = /https?:\/\/[^"'()\s]+\/([A-Za-z0-9._-]+\.(?:woff2|woff|ttf|otf))/g;

for (const f of files) {
  const p = path.join(DIR, f);
  let html = fs.readFileSync(p, 'utf8');
  const refs = new Map();
  for (const m of html.matchAll(RE)) refs.set(m[0], m[1]);
  if (!refs.size) { console.log(`${f}: no remote fonts`); continue; }
  for (const [url, name] of refs) {
    const dst = path.join(FONTS, name);
    if (!fs.existsSync(dst)) {
      const res = await fetch(url);
      if (!res.ok) { console.warn(`  ! ${url} → ${res.status}`); continue; }
      fs.writeFileSync(dst, Buffer.from(await res.arrayBuffer()));
      console.log(`  ↓ ${name} (${fs.statSync(dst).size} B)`);
    }
    html = html.split(url).join(`fonts/${name}`);
  }
  fs.writeFileSync(p, html);
  console.log(`${f}: localized ${refs.size} font refs`);
}
