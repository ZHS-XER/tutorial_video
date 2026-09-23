// Direct Node -> Puppeteer -> system Chrome -> CDP. No desktop UI automation.
// node works/codex-mvp/plans/export-mhtml.mjs [https://youart.ai/zh/mcp] [--headed]
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { VIEW } from '../../../capture/lib/config.mjs';
import { collectMeta } from '../../../capture/lib/snap.mjs';

const work = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = process.argv.slice(2).find(arg => !arg.startsWith('--')) || 'https://youart.ai/zh/mcp';
if (!['http:', 'https:'].includes(new URL(url).protocol)) throw new Error('Expected an HTTP(S) page URL');
const out = path.join(work, 'out/node-cdp');
await fs.mkdir(out, {recursive:true});
const started = Date.now();
// A separate persistent profile; never open the user's everyday profile concurrently.
// pipe avoids exposing a remote-debugging TCP port.
const browser = await puppeteer.launch({
  channel:'chrome',
  headless:!process.argv.includes('--headed'),
  pipe:true,
  userDataDir:path.join(work, 'out/node-chrome-profile'),
  defaultViewport:{width:VIEW.w,height:VIEW.h,deviceScaleFactor:1},
});
try {
  const page = await browser.newPage();
  const response = await page.goto(url, {waitUntil:'networkidle2',timeout:60000});
  if (!response?.ok()) throw new Error(`Navigation HTTP ${response?.status()}`);
  await page.waitForSelector('h1', {visible:true,timeout:30000});
  await page.evaluate(async () => {
    let timer;
    await Promise.race([document.fonts.ready,new Promise(resolve => {timer=setTimeout(resolve,10000)})]);
    clearTimeout(timer);
  });
  const meta = await collectMeta(page);
  const title = await page.title();
  const heading = await page.$eval('h1', el=>el.textContent.trim());
  const cdp = await page.createCDPSession();
  const {data} = await cdp.send('Page.captureSnapshot', {format:'mhtml'});
  await cdp.detach();
  if (!data.includes('multipart/related') || !data.includes('Content-Type: text/html')) {
    throw new Error('Chrome returned an invalid MHTML envelope');
  }
  const file = path.join(out, 'codex-mvp-mcp-node.mhtml');
  await fs.writeFile(file, data, {mode:0o600});
  await fs.writeFile(path.join(out, 'meta.json'), JSON.stringify(meta,null,2));
  await page.screenshot({path:path.join(out,'source.png')});
  const report = {source:'Node + Puppeteer + system Chrome + Page.captureSnapshot',
    browser:await browser.version(),title,heading,url:page.url(),httpStatus:response.status(),
    viewport:page.viewport(),bytes:Buffer.byteLength(data),elapsedMs:Date.now()-started,
    profile:'Separate work-local Chrome profile; everyday Chrome login is not reused',file};
  await fs.writeFile(path.join(out,'export-report.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
} finally {
  await browser.close();
}
