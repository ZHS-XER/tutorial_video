// M1 — 素材项目（ep1-素材，已跑完）：四节点挪到与舞台一致后快照 m-built；标题 patch 成 Untitled Project
import fs from 'node:fs';
import { MATERIAL, WORK, prep } from './_lib.mjs';
export default async ({ h, ROOT }) => {
  await h.goto(MATERIAL, 5); await prep(h);
  const nodes = await h.nodes(); h.log('nodes', JSON.stringify(nodes.map((n) => ({ id: n.id, x: n.x, y: n.y, w: n.w, h: n.h, tf: n.tf }))));
  h.log('edges', JSON.stringify((await h.meta()).flow?.edges.map((e) => e.id)));
  h.log('zoom label', await h.eval(() => [...document.querySelectorAll('button')].map((b) => (b.innerText || '').trim()).filter((t) => /^\d+%$/.test(t))));
  h.log('previews', await h.eval(() => [...document.querySelectorAll('.react-flow__node img, .react-flow__node video')].map((e) => { const r = e.getBoundingClientRect(); return e.tagName + ' ' + Math.round(r.x) + ',' + Math.round(r.y) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ' ' + (e.currentSrc || e.src || '').slice(-40) + ' cls=' + String(e.className).slice(0, 60); })));
  await h.human(250, 780); await h.click(null, null, { settle: 0.8 }); await h.human(300, 740);
  const { slot } = await h.snap(WORK, 'm-built');
  const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8'); const n = html.split('ep1-素材').length - 1; html = html.split('ep1-素材').join('Untitled Project'); fs.writeFileSync(p, html); h.log('title patched', n);
};
