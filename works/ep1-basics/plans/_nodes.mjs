import { STAGE, prep } from './_lib.mjs';
export default async ({ h, args }) => {
  await h.goto(args[0] || STAGE, 4); await prep(h);
  h.log('vp', await h.viewport());
  h.log('nodes', JSON.stringify((await h.nodes()).map((n) => ({ id: n.id, x: n.x, y: n.y, w: n.w, h: n.h, tf: n.tf }))));
  h.log('edges', JSON.stringify((await h.meta()).flow?.edges.map((e) => e.id)));
};
