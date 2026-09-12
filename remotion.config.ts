import path from 'node:path';
import { Config } from '@remotion/cli/config';

// 与 shotcraft-lab 各 work 一致的基线配置
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
// swangle（软件 ANGLE）：4.0.520 自带 Chrome 在 angle/swiftshader/egl 下不绘制 HtmlSnap 的 iframe
// （只有 backdrop-filter 盖在上面时才被迫合成，表现为窗口内容整块白屏），swangle 正常。
Config.setChromiumOpenGlRenderer('swangle');
Config.setConcurrency(4);
// HtmlSnap 用 iframe 加载整页快照，首帧 delayRender 较慢
Config.setDelayRenderTimeoutInMilliseconds(180000);
// 路径别名（与 tsconfig paths 一致）：@engine = 通用引擎，@youart = 产品适配层
Config.overrideWebpackConfig((cfg) => ({
  ...cfg,
  resolve: {
    ...cfg.resolve,
    alias: { ...(cfg.resolve?.alias ?? {}), '@engine': path.resolve(process.cwd(), 'engine'), '@youart': path.resolve(process.cwd(), 'youart') },
  },
}));
