# tutorial_video — YouArt 教程视频工作区

（CLAUDE.md 是本文件的软链。本文件是工程规范的唯一事实源；实测过的坑在 `docs/PITFALLS.md`，
每支视频的接手说明在 `works/<slug>/docs/HANDOFF.md`。给人看的入门在 `README.md`。）

用 Remotion 把"产品页面快照 + 合成光标 + 自动运镜 + 字幕 / 键帽 / 配音"渲染成教程视频。
单一 Remotion 环境（一套 node_modules），分四层：通用引擎 `engine/`、产品适配 `youart/`、采集工具 `capture/`、每支视频自包含的 `works/<slug>/`。
方法论是 screen-story：不录屏，采页面快照（MHTML），在 Remotion 里重放交互并逐帧驱动 DOM。

## 目录

```
tutorial_video/
├── src/                     # Remotion 入口：index.ts / Root.tsx（遍历 works/registry.ts 注册 Composition + kbd-demo）
├── engine/                  # 通用 screen-story 引擎，与产品无关（别名 @engine/*）
│   ├── stage/               # ScreenStage（舞台/相机变换/运动模糊）、HtmlSnap（iframe 快照）、drives（通用 DOM 打字驱动）
│   ├── camera/              # camera（页面坐标相机）、choreo（Shot 编排 DSL）、autoZoom（自动运镜）
│   ├── cursor/              # Cursor（合成光标）、mouseIcons
│   ├── motion/  audio/      # spring 曲线与弹簧；AudioLayer（BGM/VO/SFX 表）
│   ├── ui/                  # ux（Caption 等）、textFx、trail、ClipCard、TargetRing、kbd/（shadcn 风格键帽 + keymaps）
│   ├── materials.ts         # 快照元数据注册表（各 work 的 materials.gen.ts 注入）
│   └── tokens.ts / fonts.ts # 主题 tokens（配色/字体/FPS/TL/缓动）、Inter 加载
├── youart/                  # 产品适配层（别名 @youart/*）：drivesFlow（React Flow 动效驱动）、drivesYouart、drivesWorkflow、flowMeta
├── capture/                 # 采集工具链：browser-daemon、journey、run（单会话计划）、mouse/drag/dnd/keys/tabs、localize-fonts、verify-replay、lib/、evals/
├── tools/                   # render.mjs（渲染/静帧）、new-work.mjs（建新 work）
├── works/
│   ├── registry.ts          # work 清单（id=slug=Composition id）
│   ├── _template/           # 新 work 复制起点
│   └── <slug>/              # 一支视频的全部：
│       ├── src/             #   Main.tsx、timeline.ts、scenes/、materials.gen.ts（snap 生成）、vo.gen.ts（配音时长表）
│       ├── captures/        #   快照 html + meta/*.json + fonts/（渲染时经 public/works/<slug>/captures 软链读取）
│       ├── audio/vo/        #   配音 sN-i.mp3
│       ├── plans/           #   可重放采集脚本 *.mjs
│       ├── docs/            #   SCRIPT.md、CAPTURE-LOG.md、HANDOFF.md、<slug>-storyboard.md
│       └── out/             #   成片 <slug>.mp4 及变体、qa/、storyboard/（gitignore）
├── shared/                  # 共享资源：sfx/（click-soft.mp3）、fonts/（Inter woff2）、brand/（logo）
├── public/                  # Remotion 静态根，只放软链：shared → ../shared；works/<slug>/{captures,audio} → works/<slug>/…
├── lab/                     # 实验与杂项：demos/（KbdDemo）、canvas-schemas.json 等
├── docs/                    # PITFALLS.md（坑）；INTERNAL.md（维护者本机私有，不入库）
├── archive/                 # 归档：ep1-basics-v2.3/（旧构图 EP1）、option-duplicate/、keyviz-components/
└── .cache/                  # chrome-profile（登录态）、browser-ws.txt（gitignore）
```

## 约定

- **一支视频 = `works/<slug>/` 一个自包含目录**（src / captures / audio / plans / docs / out），slug 小写连字符。
  `npm run new <slug>` 一次建好、挂 public 软链并注册。不再维护的片子整目录移到 `archive/`。
- **分层**：`engine/` 不认识 YouArt（只有主题 tokens），`youart/` 不认识某一支视频，`works/<slug>/` 只写编排与场景。引擎 / 适配层的改动会影响所有 work。
- **时间线用 TL 帧（30fps 语义）**：场景内部拿 `u`，`timeline.ts` 是单一事实源，字幕 / 音效表相对 `S.xxx.from` 定位。渲染帧率由 `engine/tokens.ts` 的 `FPS` 决定（默认 30；改 60 即升格，代码不用动）。
- **走查镜头一律 screen-story**：快照 + 合成光标 + 自动运镜；点击必须有可见反馈。非走查段（标题卡 / 章节卡 / 总结）纯 DOM。
- **快照按 work 存放**：`npm run j snap <slug> <state>` 写入 `works/<slug>/captures/<slug>-<state>.html`（+ meta、字体本地化、QA png），并重生成该 work 的 `src/materials.gen.ts`；Main.tsx 必须 `import './materials.gen'`。
- **采集比例 125%**：采快照一律用 1536×864 的 CSS 视口（`capture/lib/config.mjs` 的 `VIEW`），成片 1920×1080，产品 UI 在成片里比 1920 视口采集大 25%（字才看得清）。编排里手写的绝对坐标按 1536×864 写；`flowMeta` 取的节点 / handle 坐标随 meta 自动正确。
- **画面铺满，不要背景**：产品画面直接铺满 1920×1080，无壁纸、窗口阴影、圆角描边、浏览器地址栏。`ScreenStage` 默认 `wallpaper=null` `chrome=false`。
- **素材数据口径**：采集前移除采集账号的个人项目卡 / 个人信息（参照 `capture/evals/`），快照里出现的账号一律用演示账号；临时凭据只落 `.cache/` 或 `works/<slug>/out/`。服务端影响写进 `works/<slug>/docs/CAPTURE-LOG.md`。
- **成片变体**：默认带英文配音；无配音版 `<slug>-novo.mp4`（只渲音轨再 ffmpeg 合成），无 BGM 版 `-nobgm`，无字幕版 `-nocap`，语言版 `-zh`。
- **语言变体在同一 work 内做**：不新建 work、不动编排与时间线。work 内 `src/lang.ts` 读 `REMOTION_LANG` 切台词 / 配音 / 卡片文案；节拍按英文配音，其他语言只给播放长度。产品界面文案在渲染时按词表替换（`scenes/_i18n.ts`），不重采快照。细节见 PITFALLS §5。

## 教程调性规范（所有教程默认遵守："好看、简洁、实用，首要目的是看清，不是炫"）

**音效**：全片只用一种柔和点击 `shared/sfx/click-soft.mp3`（vol 0.3），由 work 内 `scenes/_shared.tsx` 的 `clicksOf(shot.clicks)` 自动挂在每一次 `.click()`（双击 = 两声）。章节切换、按键、落点、翻页、页面切换一律无声。

**运镜**：一节里最多"推近一次、收回一次"；相邻焦点之间用 `panTo` 平移接力，禁止"缩回又立刻推近"。125% 采集下多数镜头全屏就看得清，只有右键菜单、✕ 按钮、缩放菜单、(i) 菜单这类小目标才推近（菜单约 1.8×，工具栏开关约 2.2×），Settings 面板、+ 菜单、拖拽落点不推。小目标要放到画面中部再推近，位置不合适用 patchCss 挪。视口变化后光标要跟着目标元素走。相邻步骤视觉方向单调递进。

**光标**：讲话时光标原地不动，话快说完再直达目标点下去；不要"边讲边慢慢挪"。一律用 `Shot.go(f, aim)`，只有拖拽才写 `.click(f).cur(f+N, target)`。无手腕摆动、无大回弹（`cursorSway={0} cursorBounce={1.2}`）。

**节拍**：`V(id,k)` = 配音结束后 k 帧、`P(id,frac)` = 配音进行到 frac；"Click X" 在句首的句子动作落在 15–40%，其余落在 voEnd −4…−10；句间 gap 14。配音比字幕长就顺延后续拍位，不压缩配音。

**字幕**：每步一句完整句子，不用 "…" 悬挂半句，不用破折号；关键词用 `*词*` 标成品牌黄。底板圆角矩形（radius 18），Inter 600，**字号全片一致** `size={46}`，不换行，长句用 " | " 拆段先后显示。底部工具栏镜头字幕放顶部（`Cap.y = 120`），其余在底部。片头 / 结尾的配音句也要有字幕。

**按键可视化**（shadcn Kbd 风格，`engine/ui/kbd/`）：在 Main 里声明 `KEYS: KeyCue[]`，如 `{ at, keys: ['cmd','['], hold: 10, linger: 30 }`、`{ at, keys: ['right click'] }`。外观扁平圆角矩形（圆角 = 0.16 × 键高，默认键高 68）、深底白字，按住时反色；组合键并排成组。节律：键帽 K 帧出现并压下，产品状态在 K+6 切换（不能先变再出键帽），hold 10、linger 24–44，总可见 ≥1.3s；相邻两组不叠层。右键 / 拖拽用 `'right click'` / `'drag'` 芯片表达，不用鼠标徽标。

**点击提示环**：光标点下去之前，目标周围亮一圈品牌黄细线（`engine/ui/TargetRing.tsx`，ScreenStage 的 `overlay` 槽），点击后 4 帧内消失（dur 14）。

**形状与文字**：全片不用胶囊（borderRadius 999），一律圆角矩形（字幕 18px、徽标 12px、键帽 0.16×高、进度条 3px）。不生成无信息量的小字；需要传达的信息就用足够大的字。章节卡：编号 44px（mono、品牌黄）、标题 112px、副标题 42px，时长 75 帧（≥2.5s）；底部进度轨道标当前章。片头范式见 `works/ep1-basics/src/scenes/S0Title.tsx`：产品同款点阵画布上迷你 workflow 图自己长出来 → 徽标 + 大标题逐字 blur 显影 → 内容轨道点亮，无音效。

**教学逻辑**：同一效果的两种操作方式（点按钮 vs 快捷键）要明确讲成 "or" 关系，各演示一次；其余重复操作用其中一种带过。每节都要有可见的操作反馈，快捷键必须配键帽。产品反馈要复刻（连线目标氛围光 `nodeGlow`、点选选中框 `nodeSelected`）。

**配音**：台词 = 字幕原句（快捷键读作 "command, left bracket"）+ 片头欢迎语 + 结尾预告。ElevenLabs v3 通过 YouArt 工作流生成（一句一节点），当前声线 Chris；流程与限流细节见 PITFALLS §4。

## 制作流程（一支新教程）

1. `npm run new <slug>`；在 `docs/SCRIPT.md` 写分节脚本（每步：页面状态 slot / 字幕 / 动作）。
2. 在演示账号里建专用项目当舞台；写 `plans/*.mjs` 采集计划，`node capture/run.mjs works/<slug>/plans/<plan>.mjs` 逐状态 `snap`。快照清单与服务端影响记进 `docs/CAPTURE-LOG.md`。
3. 写 `src/timeline.ts` 与 `scenes/`：每个场景自带节拍表 / 光标编排 / 相机 / DOM 驱动 / 提示环 / 键帽，Main 只做拼接。`npm run still <slug> <frame>` 抽 8–10 张关键帧检查，再 `npm run render <slug>`。
4. 配音：生成 mp3 到 `audio/vo/`，ffprobe 时长 +2 帧写 `src/vo.gen.ts`，按 `V/P` 节拍对齐；同时出 `-novo` 版。
5. 交付：抽每节一张终渲帧到 `out/storyboard/`，写 `docs/<slug>-storyboard.md`（每节教了什么 + 画面 + 与大纲出入），写 `docs/HANDOFF.md` 供下一轮修改。

## 命令

```bash
npm run dev                          # Remotion Studio 预览全部 work
npm run typecheck
npm run new <slug>                   # 从 works/_template 建新 work：目录 + public 软链 + 注册
npm run browser                      # 常驻无头 Chrome（后台跑；登录态存 .cache/chrome-profile）
npm run j goto <url> | text | shot <n> | click "<text>" | type "<css>" "<t>" | press Enter | scroll <y> | eval "<js>" | evalf <file.js>
npm run j snap <slug> <state>        # 快照 → works/<slug>/captures/<slug>-<state>.html + meta + QA png，重生成 materials.gen.ts
node capture/run.mjs works/<slug>/plans/<plan>.mjs [args]   # 单 puppeteer 会话跑一整段采集计划（首选）
node capture/drag.mjs x1 y1 x2 y2 [--alt|--shift|--meta]     # 真实鼠标拖拽
node capture/mouse.mjs x y [settle] [--right|--dbl|--move|--direct]
node capture/keys.mjs "Meta+a"  ·  node capture/dnd.mjs …  ·  node capture/tabs.mjs …
node capture/localize-fonts.mjs works/<slug>/captures [slot]   # 老快照手动本地化字体
npm run replay <slug> [slot]         # 断网回放该 work 全部快照做对照截图 → works/<slug>/out/replay/
npm run still <slug> <frame>         # 静帧 → works/<slug>/out/qa/f<frame>.png
npm run render <slug> [--nobgm] [--novo] [--nocap] [--lang=zh]   # 成片 → works/<slug>/out/<slug>[.suffix].mp4
npm run still kbd-demo 30            # 键帽样式总览（Composition kbd-demo，lab/demos）
```
所有 capture 脚本从 `.cache/browser-ws.txt` 接管 `npm run browser` 起的浏览器。

## 环境

Remotion 4.0.520 / React 19.2.8 / TypeScript 6 / puppeteer 25；Node ≥ 22（本机 25）、ffmpeg（本机 8）。
`remotion.config.ts`：jpeg 帧、OpenGL 渲染器 **swangle**（勿改，见 PITFALLS §1）、并发 4、delayRender 超时 180s。
可选：whisper-cli 离线核对台词。

## 协作与安全

- 多个 agent 会话并行改本工程是常态。动共享目录（`engine/`、`youart/`、`capture/`、AGENTS.md、`works/_template/`、`works/registry.ts`）前先 `ListAgents`，有 busy 的同伴先分工。写文件前 `ls` 目标目录，不盲写已存在的文件。渲染进行中别改源文件。
- 本仓库公开。账号、项目 id、内部文档链接、开发机、密钥取法一律写在本机 `docs/INTERNAL.md`（gitignore），不写进本文件或 work 文档。快照里的账号信息必须是演示账号。
- `engine/ui/kbd/keymaps.ts` 与 `engine/cursor/mouseIcons.tsx` 源自 GPL-3.0 项目 keyviz（`engine/ui/kbd/LICENSE-NOTICE-keyviz.md`）；渲出的视频不受影响，分发源码时该部分按 GPL 处理。
- 网站发布（CMS / CDN）不属于本工程默认工作流，出片 + storyboard 之后流程即结束。
