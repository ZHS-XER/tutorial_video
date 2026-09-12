// fonts.ts — Inter（Google Fonts latin 可变字体，public/fonts/）本地加载。
// 快照 iframe 内字体由素材自带；本模块只服务父文档（标题/字幕/字卡）。
import { continueRender, delayRender, staticFile } from 'remotion';

let loaded = false;

export const ensureFonts = () => {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;
  const handle = delayRender('load Inter', { timeoutInMilliseconds: 30000 });
  const face = new FontFace('Inter', `url(${staticFile('shared/fonts/inter-400.woff2')}) format('woff2')`, {
    weight: '100 900',
    style: 'normal',
  });
  face
    .load()
    .then((f) => {
      document.fonts.add(f);
      continueRender(handle);
    })
    .catch(() => continueRender(handle));
};
