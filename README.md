# tutorial_video — 用 Remotion 制作产品教程视频

把 Web 产品的页面快照、合成光标、自动运镜、字幕、键帽和配音，在 [Remotion](https://www.remotion.dev/) 里合成教程视频。
不录屏：采集页面 MHTML 快照，在渲染时重放交互并逐帧驱动 DOM，因此每一帧都可精确控制，改台词、改节拍、换语言都不用重新录制。

第一支成片 **EP1 · Workflow Basics**（YouArt 工作流基础，约 5 分 50 秒，中 / 英配音）在 `works/ep1-basics/`。
公开页面：https://youart.ai/tutorial/lessons/workflow-basics

## 它是怎么工作的

```
产品页面 ──puppeteer──▶ MHTML 快照 + React Flow 真值(meta)   works/<slug>/captures/
                                    │
脚本 SCRIPT.md ──▶ timeline.ts + scenes/*.tsx（节拍 / 光标 / 相机 / DOM 驱动 / 字幕 / 键帽）
                                    │
配音 mp3 + 时长表 vo.gen.ts ────────┤
                                    ▼
                         Remotion 渲染 ──▶ works/<slug>/out/<slug>[-zh][-novo][-nocap].mp4
```

- `engine/`：与产品无关的 screen-story 引擎。舞台与相机（`ScreenStage`）、iframe 快照（`HtmlSnap`）、编排 DSL（`Shot.go / click / panTo / zoomIn`）、合成光标、字幕、点击提示环、shadcn 风格键帽、音频层。
- `youart/`：YouArt 画布（React Flow）的适配：从快照 meta 读节点 / 端口坐标，逐帧驱动连线生长、选中框、氛围光、视口插值等。换一个产品只需换这一层。
- `capture/`：采集工具链。常驻无头 Chrome、单会话采集计划 `run.mjs`、真实鼠标 / 键盘 / 拖放、字体本地化、断网回放校验。
- `works/<slug>/`：一支视频的全部（源码、快照、配音、采集计划、文档），互不依赖。

规范与流程写在 `AGENTS.md`（同时是 Claude Code / Codex 等 agent 的项目说明），实测过的坑在 `docs/PITFALLS.md`，
EP1 的逐文件接手说明在 `works/ep1-basics/docs/HANDOFF.md`。

## 快速开始（只预览 / 重渲，不需要任何账号）

```bash
npm install                      # Node ≥ 22，另需 ffmpeg 在 PATH
npm run typecheck
npm run dev                      # Remotion Studio，Composition 列表里选 ep1-basics
npm run still ep1-basics 300     # 渲一张静帧 → works/ep1-basics/out/qa/f300.png（首帧约 1 分钟）
npm run render ep1-basics        # 全片 → works/ep1-basics/out/ep1-basics.mp4（约 6 分钟片长，本机渲约 25 分钟）
npm run render ep1-basics --lang=zh --novo   # 中文界面文案 + 无配音
```

快照、字体、配音都已随仓库提供，clone 即可渲染。成片不进仓库。

## 自己采集一支新教程需要什么

- 一个能登录目标产品的浏览器会话：`npm run browser` 起常驻 Chrome（登录态存 `.cache/`，不入库），首次手动登录一次。
- 采集计划：参考 `works/ep1-basics/plans/*.mjs`，用 `node capture/run.mjs <plan>` 在同一会话里移动、点击、拖拽、`snap`。视口固定 1536×864，成片里正好放大 1.25 倍铺满 1080p。
- 配音：EP1 用 ElevenLabs v3（通过 YouArt 工作流批量生成），任何能出 mp3 的 TTS 都行，只要把时长写进 `src/vo.gen.ts`。
- 演示用账号：快照里会带账号名、项目列表等信息，请用专门的演示账号采集，并按 `AGENTS.md` 的"素材数据口径"清理。

`npm run new <slug>` 会从 `works/_template` 建好目录、软链和注册项。

## 目录

```
src/        Remotion 入口（Root 遍历 works/registry.ts）
engine/     通用引擎             youart/    YouArt 画布适配
capture/    采集工具链           tools/     render.mjs / new-work.mjs
works/      每支视频一个目录      shared/    音效、Inter 字体、logo
docs/       PITFALLS.md          archive/   旧版本与弃用组件
lab/        实验与演示
```

## 技术栈与许可

Remotion 4.0.520 · React 19 · TypeScript 6 · puppeteer 25 · ffmpeg。

`engine/ui/kbd/keymaps.ts` 与 `engine/cursor/mouseIcons.tsx` 改编自 GPL-3.0 项目 [keyviz](https://github.com/mulaRahul/keyviz)，
见 `engine/ui/kbd/LICENSE-NOTICE-keyviz.md`；渲出的视频不受影响。`shared/fonts/` 的 Inter 为 SIL OFL。
其余源码版权归作者，仅供学习参考；快照中的产品界面与商标归 YouArt 所有。
