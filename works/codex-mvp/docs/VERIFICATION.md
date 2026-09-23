# codex-mvp：Chrome HTML 素材获取验证

日期：2026-09-16（Asia/Shanghai）。这是一个素材导入实验 work，不是正式教程成片。

## 纯 Node 导出追加验证

用户要求验证不使用 Computer Use 的导出路径。新增 `plans/export-mhtml.mjs`，通过已安装的 Puppeteer 启动本机 Google Chrome（`channel: 'chrome'`），专用配置位于 `out/node-chrome-profile`，控制通道使用 pipe。

脚本打开同一公共 MCP 页面，设置 1536×864 视口、等待标题和字体，再调用 `page.createCDPSession()` 与 `Page.captureSnapshot({format:'mhtml'})`，使用 Node 文件 API 保存。全程没有 Computer Use、Chrome 扩展调用或系统保存对话框。专用 Chrome 独立于日常 Chrome，未复用日常浏览器的登录态。

实测 Chrome/153.0.8010.36、HTTP 200、标题 YouArt MCP、导出 1,554,487 字节；脚本计时约 9.249 秒（含启动、加载、导出及截图，不含关闭）。MIME 解析确认 multipart 存档含 HTML/CSS/图片，根 HTML 含预期标题。没有把这一份新存档替换到先前视频；它作为直接导出能力的独立证据保存。

产物：`out/node-cdp/codex-mvp-mcp-node.mhtml`、`source.png`、`meta.json`、`export-report.json`、`validation.json`。

复现：`node works/codex-mvp/plans/export-mhtml.mjs`。可加 `--headed` 显示本次脚本使用的专用 Chrome。

插件路径：Chrome 官方 `chrome.pageCapture.saveAsMHTML({tabId})` 可让有 `pageCapture` 权限的扩展导出指定标签页；这属于 API 可行性，当前会话没有实现或安装该扩展，也没有验证通过现有 Codex 扩展调用此 API。前一次 `content.export()` 返回不支持，只代表现有连接没有暴露该导出功能。

官方参考：https://developer.chrome.com/docs/extensions/reference/api/pageCapture

## 视频导出追加验证

用户随后要求导出视频。现已导出 `out/codex-mvp.mp4`：H.264、1920×1080、30fps、180 个视频帧，视频内容 6 秒；容器包含静音 AAC 轨，报告总时长 6.059 秒，文件 349,335 字节。

原始素材有 3 个 SVG `animateTransform` 流光动画。`src/Main.tsx` 通过 HtmlSnap 的 drive 回调，在每帧先调用 `svg.pauseAnimations()`，再调用 `svg.setCurrentTime(frame / 30)`，使动画按视频时间推进。页面整体固定，蓝色连线流光移动；没有演示鼠标点击。

执行 `npm run typecheck` 与项目 render 命令，渲染日志确认 Rendered 180/180、Encoded 180/180。ffprobe 核对编码、尺寸、帧率和帧数；ffmpeg 完整解码无错误。已查看第 0、45、100、179 帧组成的 `out/qa/video-contact-sheet.png`，确认页面完整且流光位置随时间改变；日志没有资源加载报错。以下部分保留最初静帧实验的步骤描述。

## 结论与范围

成功从用户日常 Chrome 的真实页面保存 MHTML，转换为本地 HTML + 字体，注册到现有 Remotion 工程，完成离线回放和 1920×1080 静帧渲染。
素材为 https://youart.ai/zh/mcp 的首屏；CSS 视口 1536×864、devicePixelRatio 1。最终画面使用 HtmlSnap iframe 按 1.25 倍铺满。
没有调用生成模型，没有新建或编辑 YouArt 云端项目，没有消耗生成积分。没有制作正式教程、配音或发布飞书 Storyboard。

## 本次真实操作流程

1. 用 Codex 的 `mcp__cua_repl` 列出浏览器，找到用户日常使用的 Chrome，通过扩展连接打开 YouArt。页面复用了现有登录态。
2. 最初打开首页；为避开个人项目列表，选择 MCP 介绍页。链接打开了新标签，随后将工作标签明确导航到同一 MCP 页面，最后清理重复标签。
3. 测试 `tab.content.export()`，Chrome 连接明确返回不支持 `tab_content_export`。因此没有通过该接口取得 HTML，也没有通过已有 browser-daemon 连接用户 Chrome。
4. 设置工程要求的 1536×864 视口，通过原生 Chrome UI 按 Command+S，选择“网页（单个文件）”，保存到 `out/codex-mvp-mcp.mhtml`。这一步由 Chrome 原生保存功能完成，未直接调用 CDP `Page.captureSnapshot`。
5. 通过只读 DOM evaluate 取得标题、复制按钮的矩形，以及页面实际视口。保存为 `captures/meta/codex-mvp-mcp.json`。通过 Chrome 截图保存 `out/capture-qa/chrome-live.png`。
6. `npm run new codex-mvp` 创建 work、public 软链接和 registry 项。新增本 work 的 `plans/prepare.mjs` 导入脚本；复用公共 `mhtmlToHtml()` 和 `regenMaterials()`。
7. 使用现有 `npm run replay codex-mvp` 在另一测试浏览器的离线模式中打开本地 HTML。`npm run still codex-mvp 30` 通过 Remotion/HtmlSnap 渲染 1080p PNG。查看截图并检查渲染日志。
8. 恢复 Chrome 临时视口设置，保留采集源页面。

## 实测问题与本 work 的修补

- Chrome 保存的内联样式资源使用 `cid:css-…@mhtml.blink`。现有转换器的邮箱脱敏会误改这个 ID；先解除 quoted-printable 软换行，再对 CID 的 @ 做局部保护，使原转换器正常匹配资源。
- 部分字体位于 base64 内嵌 CSS 内，原字体脚本无法看到它们。导入脚本展开这些 CSS、解析相对字体路径，并按文档字符筛选 Unicode 字体子集，成功本地化 68 个字体 URL。
- 补取并内嵌 6 个原存档未打包的图片 URL。
- 移除脚本、预加载标签、首屏下方视频；冻结 CSS 动画；隐藏账号入口、反馈按钮和已知翻译控件；账号姓名在本地快照替换为 Demo User。原始 MHTML 和原页截图仅用于本地留档。
- HTML 添加只允许本地/data 资源的 CSP，避免验证时悄悄依赖远程资源。
- ScreenStage 当前仍带窗口圆角和描边；本素材对照实验直接复用 HtmlSnap 并放大 1.25 倍，以保持首屏铺满。未修改公共引擎。

所有兼容处理均位于 codex-mvp。共享源码仅新增 registry 注册项。

## 已验证

- `npm run typecheck` 通过。
- `npm run replay codex-mvp` 通过；产物 `out/replay/codex-mvp-mcp.png`。
- `npm run still codex-mvp 30` 通过；产物 `out/qa/f30.png`，1920×1080。
- 最终导入报告：68 个字体 URL、0 字体失败、6 个额外图片、0 script 标签、0 未解析 CID。
- 最终静帧日志未发现 console.error、failed、violates。
- 已人工查看原页面、离线回放和 Remotion 静帧。原页面含动画且截图接口展示比例不同，未宣称逐像素一致。

## 未验证

复杂 React Flow 画布、连续交互状态采集、网页内视频保留、所有网页动画的精确还原。完整视频编码现已验证，见上方追加记录。
本结果证明“日常 Chrome → 本地可渲染 HTML 素材”可以完成，不能代表所有页面都可零修补导入。

## 复现命令

从工作区根目录执行。MHTML 需先通过上述 Chrome UI 保存；这些命令不会重新连接或操作用户 Chrome。

```bash
node works/codex-mvp/plans/prepare.mjs
npm run typecheck
npm run replay codex-mvp
npm run still codex-mvp 30
npm run render codex-mvp
```

## 产物

- `out/codex-mvp-mcp.mhtml`：Chrome 原始存档。
- `captures/codex-mvp-mcp.html` 与 `captures/fonts/`：可复用素材。
- `captures/meta/codex-mvp-mcp.json`：Chrome 实测坐标。
- `src/materials.gen.ts`：自动生成素材注册表。
- `src/Main.tsx`：六秒验证 Composition，SVG 动画由帧时间驱动。
- `out/codex-mvp.mp4`：最终验证视频。
- `out/render.log`：视频渲染日志。
- `out/qa/video-contact-sheet.png`：视频抽帧检查。
- `out/import-report.json`：导入统计。
- `out/capture-qa/chrome-live.png`：Chrome 原页截图。
- `out/replay/codex-mvp-mcp.png`：离线回放截图。
- `out/qa/f30.png`：Remotion 终渲帧。
- `out/still.log`：最终静帧渲染日志。
