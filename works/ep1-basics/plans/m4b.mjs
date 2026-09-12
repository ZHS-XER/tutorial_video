// M4b — /assets 页面：只留 Today 分组（隐藏其它 SECTION），快照 m-assetspage
import fs from 'node:fs';
import { WORK, patchMaterialHtml } from './_lib.mjs';
export default async ({ h, ROOT }) => {
  await h.goto('https://youart.ai/assets', 6);
  const r = await h.eval(() => { const heads = [...document.querySelectorAll('h2')].filter((e) => /^(Today|Yesterday|Previous 7 Days|Previous 30 Days|Older)$/.test((e.innerText || '').trim())); const out = []; for (const hd of heads) { const t = hd.innerText.trim(); out.push(t); if (t !== 'Today') hd.parentElement.style.display = 'none'; } return out; });
  h.log('groups', r); await h.sleep(1.5);
  h.log('imgs', await h.eval(() => [...document.querySelectorAll('img')].filter((i) => i.getBoundingClientRect().width > 80).map((i) => (i.currentSrc || i.src).slice(-36) + ' @' + Math.round(i.getBoundingClientRect().x) + ',' + Math.round(i.getBoundingClientRect().y))));
  await h.human(1000, 600);
  const { slot } = await h.snap(WORK, 'm-assetspage'); patchMaterialHtml(fs, ROOT, slot);
};
