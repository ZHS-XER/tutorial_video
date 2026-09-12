// journey.mjs — 全流程采集的步进驱动器。接管 browser-daemon 的常驻 Chrome，
// 每个子命令做一小步，便于逐步核对不熟悉的产品 UI。
//
// 子命令：
//   goto <url> [settleSec]        导航
//   text                          当前 URL + 页面文本摘要
//   shot <name>                   快速 QA 截图 → out/recon/<name>.png
//   click "<text>" [settleSec]    点击首个文本匹配的 button/a/[role=button]
//   clicksel "<css>" [settleSec]  点击选择器
//   type "<css>" "<text>"         聚焦并键入（触发 React onChange）
//   press <Key> [settleSec]       键盘按键（Enter 等）
//   upload "<css>" <file>         file input 上传
//   scroll <y>                    滚动到 y
//   eval "<js>"                   逃生舱：页面内执行 JS 并打印返回值
//   evalf <file.js>               同上，但从文件读表达式（避开 shell 转义）
//   snap <work> <state>           MHTML 快照 → works/<work>/captures/<work>-<state>.html
//                                 + 元数据 captures/meta/<slot>.json + QA png（works/<work>/out/capture-qa/）
//                                 + 重生成 works/<work>/src/materials.gen.ts（含 src 路径，注册进 @engine/materials）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { VIEW } from './lib/config.mjs';
import { snap } from './lib/snap.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const work = path.resolve(here, '..');
const OUT_RECON = path.join(work, 'lab', 'recon');
fs.mkdirSync(OUT_RECON, { recursive: true });

const ws = fs.readFileSync(path.join(work, '.cache', 'browser-ws.txt'), 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });

// 复用最后一个非空 tab；没有就开一个。TAB=<substr> 时选 URL 含该子串的 tab。
const pages = await browser.pages();
const usable = pages.filter((p) => !p.url().startsWith('devtools'));
let page = process.env.TAB
  ? usable.find((p) => p.url().includes(process.env.TAB))
  : usable.pop();
if (!page || page.url() === 'about:blank') {
  page = page || (await browser.newPage());
}
await page.setViewport({ width: VIEW.w, height: VIEW.h, deviceScaleFactor: 1 }); // 125% UI 比例（AGENTS.md）

const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));
const [cmd, a1, a2] = process.argv.slice(2);
const settle = Number(a2 ?? process.argv[4] ?? 2.5);

const pageText = async () => ({
  url: page.url(),
  text: await page.evaluate(() => (document.body?.innerText || '').replace(/\s+/g, ' ').slice(0, 700)),
});

if (cmd === 'goto') {
  await page.goto(a1, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await Promise.race([
    page.evaluate(() => document.fonts.ready).catch(() => {}),
    sleep(5),
  ]);
  await sleep(Number(a2 ?? 3));
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'text') {
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'shot') {
  const p = path.join(OUT_RECON, `${a1}.png`);
  await page.screenshot({ path: p });
  console.log('shot →', p);
} else if (cmd === 'click') {
  const clicked = await page.evaluate((needle) => {
    const els = [...document.querySelectorAll('button,a,[role=button],[role=menuitem],[role=tab],li,label,span,div')];
    const match = els.filter((el) => {
      const own = (el.innerText || '').trim().replace(/\s+/g, ' ');
      if (!own || own.length > 80) return false;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return false;
      return own.toLowerCase().includes(needle.toLowerCase());
    });
    // 最内层的匹配（文本最短者）最可能是真按钮
    match.sort((x, y) => (x.innerText || '').length - (y.innerText || '').length);
    const el = match[0];
    if (!el) return null;
    el.scrollIntoView({ block: 'center' });
    const r = el.getBoundingClientRect();
    return { text: (el.innerText || '').trim().slice(0, 60), x: r.x + r.width / 2, y: r.y + r.height / 2 };
  }, a1);
  if (!clicked) { console.log('NO MATCH:', a1); process.exit(1); }
  await page.mouse.click(clicked.x, clicked.y);
  await sleep(settle);
  console.log('clicked:', JSON.stringify(clicked.text));
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'clicksel') {
  await page.$eval(a1, (el) => { el.scrollIntoView({ block: 'center' }); });
  const box = await (await page.$(a1)).boundingBox();
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await sleep(settle);
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'type') {
  await page.click(a1);
  await page.type(a1, a2, { delay: 20 });
  await sleep(0.5);
  console.log('typed into', a1);
} else if (cmd === 'press') {
  await page.keyboard.press(a1);
  await sleep(settle);
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'upload') {
  const input = await page.$(a1);
  if (!input) { console.log('NO INPUT:', a1); process.exit(1); }
  await input.uploadFile(path.resolve(work, a2));
  await sleep(2);
  console.log('uploaded:', a2);
  console.log(JSON.stringify(await pageText(), null, 2));
} else if (cmd === 'scroll') {
  await page.evaluate((y) => window.scrollTo(0, Number(y)), a1);
  await sleep(1);
  console.log('scrolled to', a1);
} else if (cmd === 'evalf') {
  // 从文件读 JS 表达式执行（避开 shell 引号转义）：evalf <path>
  const code = fs.readFileSync(path.resolve(a1), 'utf8');
  const v = await page.evaluate((c) => new Function(`return (${c})`)(), code);
  console.log(JSON.stringify(v, null, 2)?.slice(0, 6000));
} else if (cmd === 'eval') {
  const v = await page.evaluate((code) => new Function(`return (${code})`)(), a1);
  console.log(JSON.stringify(v, null, 2)?.slice(0, 3000));
} else if (cmd === 'snap') {
  // snap <work> <state>：核心逻辑在 lib/snap.mjs（run.mjs 计划文件共用）
  const workSlug = a1;
  const state = process.argv[4];
  if (!workSlug || !state || !fs.existsSync(path.join(work, 'works', workSlug))) { console.error('usage: npm run j snap <work> <state>   (works/<work>/ 必须已存在，npm run new <work>)'); process.exit(1); }
  await snap(page, workSlug, state);
} else {
  console.log('unknown cmd');
  process.exit(1);
}

browser.disconnect();
