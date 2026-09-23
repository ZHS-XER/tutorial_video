// dump-i18n.mjs — 从已登录的产品页抓 next-intl 文案包：直接 fetch 当前页 HTML（含全部 self.__next_f.push 内联脚本），写到 out/i18n/page-<lang>.html
// 用法：node works/ep1-basics/plans/dump-i18n.mjs <en|zh>
import fs from 'node:fs';
import puppeteer from 'puppeteer';
const lang = process.argv[2] || 'zh';
const ws = fs.readFileSync('.cache/browser-ws.txt', 'utf8').trim();
const browser = await puppeteer.connect({ browserWSEndpoint: ws, defaultViewport: null });
const pages = (await browser.pages()).filter((p) => !p.url().startsWith('devtools'));
const page = pages.pop();
await page.evaluate((l) => { document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000`; }, lang);
const url = `https://youart.ai/${lang === 'en' ? '' : lang + '/'}workflow/d97e9e57-06c6-485c-b3f8-d9a54676dc85`;
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
const res = await page.evaluate(async (u) => {
  const html = await (await fetch(u, { credentials: 'include' })).text();
  const faces = [];
  for (const ss of Array.from(document.styleSheets)) { try { for (const r of Array.from(ss.cssRules)) if (r instanceof CSSFontFaceRule) faces.push(r.cssText); } catch (e) {} }
  return { lang: document.documentElement.lang, html, faces };
}, url);
fs.mkdirSync('works/ep1-basics/out/i18n', { recursive: true });
fs.writeFileSync(`works/ep1-basics/out/i18n/page-${lang}.html`, res.html);
fs.writeFileSync(`works/ep1-basics/out/i18n/fontfaces-${lang}.css`, res.faces.join('\n'));
console.log(res.lang, 'html', res.html.length, 'zh-runs', (res.html.match(/[一-鿿]{2,}/g) || []).length, 'faces', res.faces.length);
browser.disconnect();
