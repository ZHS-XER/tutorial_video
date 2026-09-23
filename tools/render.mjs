// render.mjs — 按 work slug 渲染到 works/<slug>/out/<slug>[.suffix].mp4
// 用法：npm run render <slug> [--nobgm] [--novo] [--nocap] [--lang=zh] [--props=x.json] [-- 其他 remotion 参数]
//       --lang=xx：设 REMOTION_LANG=xx（work 内 lang.ts 读取），成片后缀 -xx（如 ep1-basics-zh.mp4）
//       npm run still <slug> <frame> [--out=path.png]   → works/<slug>/out/qa/f<frame>.png
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const still = args.includes('--still');
const pos = args.filter((a) => !a.startsWith('--'));
const slug = pos[0];
if (!slug) { console.error('usage: npm run render <slug> [--nobgm] [--novo]  |  npm run still <slug> <frame>'); process.exit(1); }

// Composition id 不能带下划线，模板 work 目录是 works/_template、id 是 template
const workDir = fs.existsSync(path.join('works', slug)) ? path.join('works', slug) : path.join('works', `_${slug}`);
if (!fs.existsSync(workDir)) { console.error('no such work:', slug); process.exit(1); }
const outDir = path.join(workDir, 'out');
fs.mkdirSync(outDir, { recursive: true });

const props = {};
let suffix = '';
if (args.includes('--nobgm')) { props.bgm = false; suffix += '-nobgm'; }
if (args.includes('--nocap')) { props.captions = false; suffix += '-nocap'; } // 无字幕版（work 的 Main 需支持 captions prop）
const langArg = args.find((a) => a.startsWith('--lang='));
const lang = langArg ? langArg.slice(7) : '';
if (lang) suffix = `-${lang}${suffix}`;
if (args.includes('--novo')) { props.vo = false; suffix += '-novo'; }
const propsArg = args.find((a) => a.startsWith('--props='));
const extra = args.filter((a) => a.startsWith('--') && !['--still', '--nobgm', '--novo', '--nocap'].includes(a) && !a.startsWith('--props=') && !a.startsWith('--out=') && !a.startsWith('--lang='));

let cmd;
if (still) {
  const frame = pos[1] ?? '0';
  const outArg = args.find((a) => a.startsWith('--out='));
  const png = outArg ? outArg.slice(6) : path.join(outDir, 'qa', `f${frame}.png`);
  fs.mkdirSync(path.dirname(png), { recursive: true });
  cmd = ['remotion', 'still', 'src/index.ts', slug, png, `--frame=${frame}`, ...extra];
} else {
  const mp4 = path.join(outDir, `${slug}${suffix}.mp4`);
  cmd = ['remotion', 'render', 'src/index.ts', slug, mp4, '--timeout=180000', '--pixel-format=yuv420p', '--color-space=bt709', ...extra];
}
if (propsArg) cmd.push(propsArg);
else if (Object.keys(props).length) cmd.push(`--props=${JSON.stringify(props)}`);

console.log('$ npx', cmd.join(' '));
const r = spawnSync('npx', cmd, { stdio: 'inherit', env: lang ? { ...process.env, REMOTION_LANG: lang } : process.env });
process.exit(r.status ?? 1);
