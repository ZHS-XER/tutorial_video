// Run from the workspace root: node works/codex-mvp/plans/prepare.mjs
import fs from 'node:fs';
import path from 'node:path';
import { mhtmlToHtml } from '../../../capture/lib/mhtml.mjs';
import { regenMaterials } from '../../../capture/lib/snap.mjs';
const root = path.resolve('works/codex-mvp');
const captures = path.join(root, 'captures');
let raw = fs.readFileSync(path.join(root, 'out/codex-mvp-mcp.mhtml'), 'utf8');
const boundary = raw.match(/boundary="([^"]+)"/)[1];
raw = raw.split('--' + boundary).map(part => part.includes('Content-Transfer-Encoding: quoted-printable')
  ? part.replace(/=\r?\n/g, '') : part).join('--' + boundary);
// Protect Chrome cid stylesheet IDs from the shared email scrubber.
raw = raw.replace(/cid:css-[\w-]+@mhtml\.blink/g, s => s.replace('@', '-'));
let html = mhtmlToHtml(raw);
// Expose embedded CSS and resolve relative Next font URLs.
html = html.replace(/<link\b[^>]*href="data:text\/css;base64,([^"]+)"[^>]*>/g, (_, b64) => {
  const css = Buffer.from(b64, 'base64').toString('utf8')
    .replace(/url\((['"]?)(\/[^'"\s)]+)\1\)/g, 'url("https://youart.ai$2")');
  return `<style>${css}</style>`;
});
const text = html.replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, '');
const points = [...new Set([...text].map(c => c.codePointAt(0)))];
html = html.replace(/@font-face\s*\{[^}]+\}/g, block => {
  const range = block.match(/unicode-range:\s*([^;}]+)/i)?.[1];
  if (!range) return block;
  const ranges = [...range.matchAll(/U\+([0-9a-f?]+)(?:-([0-9a-f]+))?/gi)].map(m => [
    parseInt(m[1].replaceAll('?', '0'), 16), parseInt(m[2] || m[1].replaceAll('?', 'f'), 16),
  ]);
  return ranges.some(([lo, hi]) => points.some(cp => cp >= lo && cp <= hi)) ? block : '';
});
const urls = [...new Set(html.match(/https?:\/\/[^"'()\s<>]+\.(?:woff2|woff|ttf|otf)/g) || [])];
fs.mkdirSync(path.join(captures, 'fonts'), { recursive: true });
const failures = [];
let completed = 0;
const queue = [...urls];
await Promise.all(Array.from({length: 8}, async () => {
  while (queue.length) {
    const url = queue.shift();
    const name = new URL(url).pathname.split('/').pop();
    const dest = path.join(captures, 'fonts', name);
    try {
      if (!fs.existsSync(dest)) {
        const response = await fetch(url, {signal: AbortSignal.timeout(30000)});
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        fs.writeFileSync(dest, Buffer.from(await response.arrayBuffer()));
      }
      html = html.split(url).join(`fonts/${name}`);
    } catch (error) { failures.push({url, error: String(error)}); }
    completed++;
    if (completed % 20 === 0) console.log(`fonts ${completed}/${urls.length}`);
  }
}));
if (failures.length) throw new Error(JSON.stringify(failures));
const imageUrls = [...new Set([...html.matchAll(/<img\b[^>]*\bsrc="(https?:[^"<>]+)"/g)].map(m=>m[1]))];
for (const url of imageUrls) {
  const response = await fetch(url, {signal:AbortSignal.timeout(30000)});
  if (!response.ok) throw new Error(`Image ${response.status}: ${url}`);
  const data = Buffer.from(await response.arrayBuffer());
  html = html.split(url).join(`data:${response.headers.get('content-type')?.split(';')[0] || 'image/svg+xml'};base64,${data.toString('base64')}`);
}
// This MVP validates the first viewport. Drop below-fold videos and preload tags.
html = html.replace(/<link\b[^>]*rel="(?:preload|prefetch|modulepreload|preconnect|dns-prefetch)"[^>]*>/g, '')
  .replace(/<video\b[\s\S]*?<\/video>/g, '<div data-mvp-omitted="video"></div>')
  .replaceAll('Enrong Xie', 'Demo User');
html = html.replace(/<head>/i, `<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self' data:; style-src 'self' 'unsafe-inline' data:; font-src 'self' data:;">`);
html = html.replace('</head>', `<style>
[aria-label="账户菜单"],[data-feedback-recorder-ui],immersive-translate-button,immersive-translate-panel{display:none!important}
*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}
</style></head>`);
fs.writeFileSync(path.join(captures, 'codex-mvp-mcp.html'), html);
regenMaterials('codex-mvp');
const report = {source:'Chrome UI Save Page As > Single file',sourceUrl:'https://youart.ai/zh/mcp',viewport:{width:1536,height:864},bytes:Buffer.byteLength(html),fontUrls:urls.length,fontFailures:failures,extraImages:imageUrls.length,scripts:(html.match(/<script\b/gi)||[]).length,unresolvedCid:(html.match(/cid:/g)||[]).length,scope:'First viewport, static. Below-fold videos omitted; account and feedback controls hidden.'};
fs.writeFileSync(path.join(root,'out/import-report.json'),JSON.stringify(report,null,2));
console.log(report);
