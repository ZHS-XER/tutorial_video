// new-work.mjs — 从 works/_template 复制一支新视频：npm run new <slug>
// slug 只能用小写字母/数字/连字符（它同时是 Composition id 与 works/<slug> 目录名）。
// 会建好 src/ captures/ audio/vo/ plans/ docs/ out/，挂 public/works/<slug> 软链，并注册到 works/registry.ts。
import fs from 'node:fs';
import path from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) { console.error('usage: npm run new <slug>  (小写字母/数字/连字符)'); process.exit(1); }
const src = path.join('works', '_template');
const dst = path.join('works', slug);
if (fs.existsSync(dst)) { console.error('exists:', dst); process.exit(1); }
fs.cpSync(src, dst, { recursive: true });
for (const d of ['captures/meta', 'audio/vo', 'plans', 'docs', 'out']) fs.mkdirSync(path.join(dst, d), { recursive: true });
// slot 前缀换成新 slug
for (const f of fs.readdirSync(path.join(dst, 'src', 'scenes'))) {
  const p = path.join(dst, 'src', 'scenes', f);
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll("'template-", `'${slug}-`));
}
fs.writeFileSync(path.join(dst, 'docs', 'SCRIPT.md'), `# ${slug} — 教程脚本\n\n规格：1920×1080 @30fps，采集视口 1536×864（125%），画面铺满无背景。\n\n| # | 步骤 | 页面状态 (slot) | 字幕 / 旁白 | 帧区间 |\n|---|---|---|---|---|\n`);
fs.writeFileSync(path.join(dst, 'docs', 'CAPTURE-LOG.md'), `# CAPTURE-LOG — ${slug}\n\n账号/数据口径、服务端影响、快照清单。\n`);
// public 挂载（Remotion staticFile 只认 public/）
const pub = path.join('public', 'works', slug);
fs.mkdirSync(pub, { recursive: true });
for (const d of ['captures', 'audio']) if (!fs.existsSync(path.join(pub, d))) fs.symlinkSync(path.join('..', '..', '..', 'works', slug, d), path.join(pub, d));
// 注册
const reg = path.join('works', 'registry.ts');
const camel = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
let s = fs.readFileSync(reg, 'utf8');
s = s.replace("import * as template from './_template/src/Main';", `import * as template from './_template/src/Main';\nimport * as ${camel} from './${slug}/src/Main';`);
s = s.replace(/(export const TUTORIALS: Tutorial\[\] = \[\n)/, `$1  { id: '${slug}', Main: ${camel}.Main, totalTL: ${camel}.TOTAL_TL, defaultProps: { bgm: false, vo: true, captions: true } },\n`);
fs.writeFileSync(reg, s);
console.log(`created works/${slug}/ (src, captures, audio/vo, plans, docs, out), mounted public/works/${slug}, registered in works/registry.ts`);
console.log(`next: npm run browser  →  npm run j goto <url> → … → npm run j snap ${slug} <state>`);
