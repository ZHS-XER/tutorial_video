# tutorial_video — YouArt 教程视频工作区

（CLAUDE.md 是本文件的软链。本文件是本工程全部规范、经验、流程与坑的唯一事实源；跨会话记忆不再单独存。）

单一 Remotion 环境（一套 node_modules），分四层：通用引擎 `engine/`、产品适配 `youart/`、采集工具 `capture/`、每支视频自包含的 `works/<slug>/`。
引擎方法论沿用 `../Motion_Graphics/shotcraft-lab/video-shotcraft`（skill）的 screen-story 路线，见其 `references/screen-story.md` 与 `references/render-pitfalls.md`。
2026-09-11 重构；重构前的完整源码树在 `archive/pre-restructure-2026-09-11.tgz`。

## 目录

```
tutorial_video/
├── src/                     # Remotion 入口：index.ts / Root.tsx（遍历 works/registry.ts 注册 Composition + kbd-demo）
├── engine/                  # 通用 screen-story 引擎，与产品无关（别名 @engine/*）
│   ├── stage/               # ScreenStage（舞台/相机变换/运动模糊）、HtmlSnap（iframe 快照）、drives（通用 DOM 打字驱动）
│   ├── camera/              # camera（页面坐标相机）、choreo（Shot 编排 DSL）、autoZoom（Recordly 式自动运镜）
│   ├── cursor/              # Cursor（合成光标）、mouseIcons
│   ├── motion/  audio/      # motion/spring 曲线与弹簧；AudioLayer（BGM/VO/SFX 表）
│   ├── ui/                  # ux（Caption 等）、textFx、trail、ClipCard、kbd/（shadcn Kbd 键帽 + keymaps）
│   ├── materials.ts         # 快照元数据注册表（各 work 的 materials.gen.ts 注入）
│   └── tokens.ts / fonts.ts # 主题 tokens（YouArt 配色/字体/FPS/TL/缓动）、Inter 加载
├── youart/                  # 产品适配层（别名 @youart/*）：drivesFlow（React Flow 动效驱动）、drivesYouart、drivesWorkflow、flowMeta
├── capture/                 # 采集工具链：browser-daemon、journey、mouse/drag/dnd/keys/tabs、localize-fonts、verify-replay、lib/、evals/
├── tools/                   # render.mjs（渲染/静帧）、new-work.mjs（建新 work）
├── works/
│   ├── registry.ts          # work 清单（id=slug=Composition id）
│   ├── _template/           # 新 work 复制起点（Composition id 为 template）
│   └── <slug>/              # 一支视频的全部：
│       ├── src/             #   Main.tsx、timeline.ts、scenes/、materials.gen.ts（snap 生成）、vo.gen.ts（配音时长表）
│       ├── captures/        #   快照 html + meta/*.json + fonts/（渲染时经 public/works/<slug>/captures 软链读取）
│       ├── audio/vo/        #   配音 sN-i.mp3
│       ├── plans/           #   可重放采集脚本 *.sh
│       ├── docs/            #   SCRIPT.md、CAPTURE-LOG.md、<slug>-storyboard.md
│       └── out/             #   成片 <slug>.mp4 / <slug>-novo.mp4、qa/、storyboard/、capture-qa/、replay/
├── shared/                  # 共享资源：sfx/（click-soft.mp3 等）、fonts/（Inter woff2）、brand/（logo）
├── public/                  # Remotion 静态根，只放软链：shared → ../shared；works/<slug>/{captures,audio} → works/<slug>/…
├── lab/                     # 实验与杂项：avatar/（数字人）、demos/（KbdDemo）、recon/（采集侦察截图）、qa/、canvas-schemas.json、_mcp/
├── archive/                 # 归档：ep1-basics-v2.3/（EP1 v2.3 全量：src/captures/audio/plans/docs/out）、option-duplicate/、keyviz-components/、wallpaper
└── .cache/                  # chrome-profile（登录态）、browser-ws.txt
```

## 约定

- **一支视频 = `works/<slug>/` 一个自包含目录**（src / captures / audio / plans / docs / out），slug 小写连字符。
  `npm run new <slug>` 一次建好、挂 public 软链并注册。不再维护的片子整目录移到 `archive/`。
- **分层**：`engine/` 不认识 YouArt（只有主题 tokens），`youart/` 不认识某一支视频，`works/<slug>/` 只写编排与场景。引擎/适配层的改动会影响所有 work，改前先 `ListAgents`。
- **时间线用 TL 帧（30fps 语义）**：场景内部拿 `u`，`timeline.ts` 是单一事实源，
  字幕/音效表相对 `S.xxx.from` 定位。渲染帧率由 `engine/tokens.ts` 的 `FPS` 决定
  （默认 30；改 60 即升格，代码不用动）。
- **走查镜头一律 screen-story**：快照 + 合成光标 + `planZooms` 自动运镜；点击必须有
  可见反馈；音效只有一种柔和点击（见下文"教程调性规范"）。非走查段（标题卡/总结）纯 DOM。
- **快照按 work 存放**：`npm run j snap <slug> <state>` 写入 `works/<slug>/captures/<slug>-<state>.html`（+ meta、字体本地化、QA png），
  并重生成该 work 的 `src/materials.gen.ts`（含 `src` 路径，模块加载时 `registerMaterials` 注入 `@engine/materials`）；Main.tsx 必须 `import './materials.gen'`。
- 素材数据口径：用户个人项目卡采集前 DOM 移除（参照 `capture/evals/`），
  临时凭据只落 `.cache/` 或 `works/<slug>/out/`。服务端影响写进 `works/<slug>/docs/CAPTURE-LOG.md`。
- 成片默认带英文配音；无配音版命名 `<slug>-novo.mp4`（只渲音轨再 ffmpeg 合成，见"配音流程"），无 BGM 版 `<slug>-nobgm.mp4`。

## 教程调性规范（用户 2026-09-09/10 看 EP1 后定，所有教程默认遵守；"好看、简洁、实用，首要目的是看清，不是炫"）

**音效**
- 全片只用一种柔和点击 `shared/sfx/click-soft.mp3`（staticFile 路径 `shared/sfx/click-soft.mp3`）（ffmpeg 合成 tick，峰值 −7.7 dB，vol 0.3），由 work 内 `scenes/_shared.tsx` 的 `clicksOf(shot.clicks)` 自动挂在编排里每一次 `.click()`（双击 = 两声）。
- 章节切换、按键、落点、翻页、页面切换一律无声；不用 pop / swoosh / transition 类音效。

**运镜**
- 一节里最多"推近一次、收回一次"；相邻两个焦点之间用 `panTo` 平移接力，禁止"缩回又立刻推近"。
- 右键菜单、工具栏小按钮这类小目标必须放到画面中部并推近到能看清（菜单约 1.8×，工具栏开关约 2.2×）；菜单位置不合适就用 patchCss 挪（Radix 菜单见"已踩的坑"）。
- 视口变化（双击聚焦、Fit View）后，光标要跟着目标元素走，不能漂在空处（沿 viewport 插值算标题栏位置，见 `S4Focus.tsx` 的 `headAt`）。
- 相邻步骤的视觉方向要单调递进（如 F 框选中 → 双击聚焦 → Fit View 三步都是放大）；产品行为导致方向相反时改起始状态或顺序，不要硬演。

**字幕**
- 每步一句完整句子，不用 "…" 悬挂半句，不用破折号；关键词用 `*词*` 标成品牌黄。
- 字幕底板是圆角矩形（`engine/ui/ux.tsx` Caption borderRadius 18），Inter 600。**字号要全片一致**（用户 2026-09-12）：传 `size={46} maxWidth={1500}`，长句 `text-wrap: balance` 自动换两行、底部字幕以底边锚定向上长；不传 size 时才是旧的按句长 56→36px 缩放。片头/结尾的配音句也要有字幕。

**按键可视化**（shadcn Kbd 风格，`engine/ui/kbd/`；2026-09-10 起默认，keyviz 键帽已弃用）
- 在 Main 里声明 `KEYS: KeyCue[]`，如 `{ at, keys: ['cmd','['], hold: 10, linger: 30 }`、`{ at, keys: ['right click'] }`。键名别名沿用 keymaps.ts（cmd/shift/option/ctrl/enter/esc/drag/click/right click/单字母/数字/标点）。
- 外观：扁平圆角矩形（圆角 = 0.16 × 键高，默认键高 68）、深 muted 底、白字，按住时反色（白底黑字）；组合键并排成组，无立体底座、无胶囊。
- 节律：键帽 K 帧出现并压下，产品状态在 K+6 切换（不能先变再出键帽），hold 10、linger 24–44，总可见 ≥1.3s（12 帧 linger 被否决为"太短看不清"）；相邻两组不叠层。
- 鼠标徽标（keyviz `mouseIndicator`）已弃用，Stage 不再默认显示；右键 / 拖拽用 `'right click'` / `'drag'` 芯片表达。

**点击提示环（2026-09-11 起默认）**
- 光标点下去之前，目标周围亮一圈品牌黄细线（`engine/ui/TargetRing.tsx`，挂在 ScreenStage 的 `overlay` 槽，页面坐标随相机缩放），点击后 4 帧内消失（dur 14），不要拖到状态切换之后。
- 底部工具栏镜头字幕改放顶部（`Cap.y`），其余镜头字幕在底部。

**形状与文字**
- 全片不用胶囊（borderRadius 999），字幕底板、片头徽标、键帽、进度条、章节卡元素一律**圆角矩形**（字幕 18px、徽标 12px、键帽 0.16×高、进度条 3px）。
- 不生成无信息量的小字（如 "7 steps · about 2 minutes"、"01 / 07"）；需要传达的信息就用足够大的字。
- 章节卡：编号 44px（mono、品牌黄）、标题 112px、副标题 42px（≥40px），时长 75 帧（≥2.5s，45 帧被否决为太短）；底部 7 段进度轨道标当前章。
- 片头（EP1 `S01Title.tsx` 为范式，190 帧）：产品同款点阵画布上迷你 workflow 图自己长出来（节点弹入、连线用产品端口色生长）→ 图退散，圆角矩形徽标 "YouArt Tutorial · EP 0n"（24px）+ 大标题逐字 blur 显影 + 黄色短线 → 标题上移，7 步内容轨道从左到右点亮（编号 19px、标题 27px）。要明确体现"这是教程 + 讲什么"，简约不花哨，无音效。

**教学逻辑**
- 同一效果的两种操作方式（点箭头 vs ⌘[ / ⌘]）要明确讲成 "or" 关系，各演示一次，不要混着来回演示；其余重复操作用其中一种带过。
- 每节都要有可见的操作反馈（点击涟漪、状态切换），快捷键必须配键帽。

**配音**
- 默认带英文配音：台词 = 字幕原句（快捷键读作 "command, left bracket" 等）+ 片头欢迎语 + 结尾预告；配音比字幕长时顺延后续拍位，不压缩配音；同时出 `-novo` 版。流程见下文"配音流程"。

**画面铺满，不要背景（用户 2026-09-11 定）**
- 走查镜头不再用"macOS 壁纸 + 圆角窗口卡片"的桌面式构图：产品画面直接铺满 1920×1080，没有壁纸、窗口阴影、圆角描边，也不显示浏览器地址栏（chrome）。
- 配合 125% 采集：1536×864 的页面正好 1.25× 铺满 1080p，z=1 就是全屏，推近（panTo / zoomIn）语义不变，只是不再有"出血到壁纸"的过程。
- 已实施（2026-09-11 重构时）：`engine/stage/ScreenStage.tsx` 默认 `wallpaper=null`、`chrome=false`、`rect` 铺满 1920×1080；需要旧构图的片子自行传参。标题卡、章节卡、结尾卡不受影响。

**采集比例：125%（用户 2026-09-11 定）**
- 采快照一律用 1536×864 的 CSS 视口（deviceScaleFactor 1），成片仍 1920×1080，产品 UI 在成片里比 1920 视口采集大 25%。
  依据：EP1 v1–v2.3 全按 1920×1080 采集，成片里窗口只占画布 67%，菜单字约 8px，是"字太小"的根源。150% 未采用（1280 宽下产品可能收起聊天面板，未验证）。
- 已实施：`capture/lib/config.mjs` 的 `VIEW = {1536, 864}`，journey/mouse/drag 等 `setViewport` 统一读它；ScreenStage 整页适配窗口宽度，pageW 变小自动放大。
  编排里手写的绝对坐标（工具栏按钮、右键菜单位置、空白点击点）按 1536×864 视口写；`flowMeta` 取的节点/handle 坐标随 meta 自动正确。旧 EP1 快照（1920 视口）已归档不复用。

## 配音流程（ElevenLabs v3 via YouArt MCP；EP1 2026-09-10 实测）

- 专用项目（EP1：**"EP1 Basics · VO (tutorial voiceover)"** `c3ae2a81-2778-4de5-8908-e5e4a61254c8`），每句一个 `ElevenLabsTextToDialogueV3Generate` 节点（无输入口，输出 audio），display_name 写 `VO sN-i`。
  params：`dialogue` 是 JSON 字串 `[{"text":"...","voice":"EXAVITQu4vr4xnSDxMaL"}]`，`stability` 0.5，`language_code` "en"。每句 1–3 积分（EP1 34 句两轮约 40）。
- `run_project_workflow scope=all` 并发 34 节点时有 2 个 `workflow_node_failed`（疑似限流）并连带取消 6 个；用 `scope=node_ids` 重跑失败 + 取消的节点即可。
- `list_workflow_run_results media_types=[AUDIO]` 拿 URL（static.youart.ai 可直接 curl），按 node_id↔台词映射（`works/<slug>/out/vo/nodes.json`）存成 `works/<slug>/audio/vo/sN-i.mp3`（staticFile 路径 `works/<slug>/audio/vo/…`）；
  ffprobe 时长 +2 帧写成 `works/<slug>/src/vo.gen.ts`，Main 按"第 N 节第 i 条字幕起点"派生 VO 表交给 `AudioLayer`，`dur` 必须用真实时长（用字幕窗口会截尾）。
- 对齐：写脚本检查相邻两句不重叠、不溢出小节（见 SCRIPT.md v2.3）；配音长于字幕就顺延后续拍位（B 表 + `.cur` 帧 + captions）。
- 无配音版：`npx remotion render src/index.ts <slug> works/<slug>/out/qa/novo-audio.mp3 --codec=mp3 --props='{"vo":false}'` 只渲音轨，再 `ffmpeg -i <slug>.mp4 -i novo-audio.mp3 -map 0:v -map 1:a -c:v copy -c:a aac` 合成 `<slug>-novo.mp4`，省一次全片渲染。
- 校对：`whisper-cli`（base.en）对成片整段听写会漏词、错切，按句切片段再听写才准。

## 并行会话协作（用户常同时开 2–3 个 Claude 会话改本工程）

- 动共享目录（`engine/`、`youart/`、`capture/`、AGENTS.md、`works/_template/`、`works/registry.ts`）前先 `ListAgents`；有 busy 的同伴先 `SendMessage` 分工，明确各自拥有的路径。
- 工程不是 git 仓库，覆盖即丢失：写文件前 `ls` 目标目录，不用 `cat >` 盲写已存在的文件。2026-09-10 两个会话同时做 keyviz→kbd 迁移，`kbd/index.ts` 被互相覆盖过一次。
- 渲染进行中别改源文件：另一会话覆盖 `kbd/index.ts` 导致 render 在第 1 帧报 React #130，只能重渲。
- 样式类约定以 AGENTS.md 当前内容为准，改约定先改这里。

## 旧：keyviz 来源

- `engine/ui/kbd/keymaps.ts`（键名/符号表）与 `engine/cursor/mouseIcons.tsx` 源自 GPL-3.0 项目 keyviz（`engine/ui/kbd/LICENSE-NOTICE-keyviz.md`）；旧键帽组件在 `archive/keyviz-components/`。
- 许可：keyviz 为 GPL-3.0，渲出的视频不受影响；对外分发本仓库源码时该目录须按 GPL 处理。

## 交付环节：每支教程出片后写飞书 Storyboard（默认必做）

成片渲染并通过抽帧检查后，按顺序执行，不要等用户催：

1. 抽帧：每节挑一张信息最完整的落定态终渲帧，存 `works/<slug>/out/storyboard/s1.png…`（顺序与小节一致）。
2. 落盘：写 `works/<slug>/docs/<slug>-storyboard.md`。重点写**教学了哪些内容**：每节"教了什么"（用户学到的操作/概念/快捷键）+
   "画面"（演示路径），另加教学覆盖（对照大纲哪几条）、与大纲的出入（按实测产品行为改了什么）、工程与留档。
   面向产品/教程同事写陈述句，不用内部行话，不用表格。
3. 飞书：用 lark-wiki 在父节点 **`C1uDwq2BGiyc29k3omEl9UvegwI`**（f3vaq8z51vv.sg.larksuite.com）下新建 docx 子文档，
   标题 `<EPn> <教程标题>｜Storyboard`（`--as user`），再用 lark-doc 原生块写入（标题、摘要、教学覆盖 callout、
   逐节 H2 + 每节一张终渲帧图 + 列表、出入、留档）。图片用本地 `works/<slug>/out/storyboard/` 文件插入，不用外链。
4. 回读验收：重新 fetch 远端文档，核对标题、节数、图片数与顺序、每节"教了什么"齐全，再把文档链接写进 `works/<slug>/docs/SCRIPT.md` 末尾。

## 命令

```bash
npm run dev                          # Remotion Studio 预览全部 work
npm run typecheck
npm run new <slug>                   # 从 works/_template 建新 work：目录 + public 软链 + 注册
npm run browser                      # 常驻无头 Chrome（后台跑；登录态存 .cache/chrome-profile）
npm run j goto <url> | text | shot <n> | click "<text>" | type "<css>" "<t>" | press Enter | scroll <y> | eval "<js>" | evalf <file.js>
npm run j snap <slug> <state>        # 快照 → works/<slug>/captures/<slug>-<state>.html + meta + QA png，重生成该 work 的 materials.gen.ts
node capture/drag.mjs x1 y1 x2 y2 [--alt|--shift|--meta]     # 真实鼠标拖拽
node capture/mouse.mjs x y [settle] [--right|--dbl|--move|--direct]
node capture/keys.mjs "Meta+a"  ·  node capture/dnd.mjs …  ·  node capture/tabs.mjs …
node capture/localize-fonts.mjs works/<slug>/captures [slot]   # 老快照手动本地化字体
npm run replay <slug> [slot]         # 断网回放该 work 全部快照做对照截图 → works/<slug>/out/replay/
node capture/run.mjs works/<slug>/plans/<plan>.mjs [args]   # 单 puppeteer 会话跑一整段采集计划（2026-09-11 起首选，见下文）
npm run still <slug> <frame>         # 静帧 → works/<slug>/out/qa/f<frame>.png
npm run render <slug> [--nobgm] [--novo]   # 成片 → works/<slug>/out/<slug>[.suffix].mp4
npm run still kbd-demo 30            # 键帽样式总览（Composition kbd-demo，lab/demos）
lark-cli wiki +node-create --parent-node-token C1uDwq2BGiyc29k3omEl9UvegwI --title "<EPn> <标题>｜Storyboard" --obj-type docx --as user   # 飞书子文档
```
采集视口固定 1536×864（`capture/lib/config.mjs` 的 `VIEW`，125% 规则）；所有 capture 脚本从 `.cache/browser-ws.txt` 接管浏览器。

## 已踩的坑（本工程实测）

- **iframe 白屏**：Remotion 4.0.520 自带 Chrome 用 `angle`/`swiftshader`/`egl` 渲染器时，HtmlSnap 的
  iframe 内容整块白（只有 backdrop-filter 运动模糊层盖着时才显示）。`remotion.config.ts` 已固定
  `swangle`，勿改回 angle。
- **快照字体**：MHTML 不含 woff2，快照里 `<link rel=preload>` 与 @font-face 指向 youart.ai，渲染时被
  CORS 拦截回退系统字体。`snap` 现在自动跑 `capture/localize-fonts.mjs` 下载到
  `works/<slug>/captures/fonts/` 并改写为相对路径；老快照可手动跑一次。
- 画布类操作（拖拽/带修饰键拖拽）用 `capture/drag.mjs x1 y1 x2 y2 --alt`，真实鼠标事件。
- **YouArt Workflow 画布采集工具箱**（EP1 实战沉淀）：`capture/mouse.mjs`（--right/--dbl/--move/--direct；悬停面板必须 --direct 直线进入）、
  `capture/keys.mjs "Meta+a"`、`capture/dnd.mjs`（HTML5 拖放，素材面板/节点面板拖到画布）、`capture/tabs.mjs`、
  `journey evalf <file.js>`（复杂 JS 走文件避开 zsh 转义，片段放 `capture/evals/`）。按节写可重放采集计划到 `works/<slug>/plans/`。
  `snap` 会把 React Flow 真值（viewport/节点/handle/连线）写进 meta，`youart/flowMeta.ts` 读取；
  画布动效驱动器在 `youart/drivesFlow.ts`（edgeDraw / viewportLerp / nodesLerp / marqueeBox / dragGhost / handleChips / nodeFollow）。
- 采集时按快捷键前先 blur（否则字母会打进选中的 Text 节点）；Fit View 用工具栏按钮兜底。改动账号偏好后必须恢复。
- **EP1 v2 复盘（2026-09-09/10）**：产品 UI 会漂移（Seedance 节点布局、聊天栏芯片、积分数字），补采只能整节一致，跨节差异要在留档里标注，
  积分数字可在快照 HTML 里 sed 回填；产品 fitSelection 上限 zoom=1，演示"F 框选中"必须从缩小视图起步；多选态下双击节点不会聚焦，先点空白。
  Radix 右键菜单是 `[data-radix-popper-content-wrapper]` 的 transform，用 patchCss 可挪到画面中部再推近。
  browser-daemon 的 Chrome 几天后会失联，`npm run browser` 重启即可（登录态保留）。渲染中途别改源文件：另一会话覆盖 `kbd/index.ts` 让 render 在第 1 帧报 React #130。
  配音流程见上文"配音流程"与 `archive/ep1-basics-v2.3/docs/SCRIPT.md` v2.3 节（ElevenLabs v3 节点、scoped 重跑、`--codec=mp3` 出 novo 音轨再 ffmpeg 合成）。

- **EP1 v3 采集经验（2026-09-11）**：
  - 采集统一用 `capture/run.mjs <plan.mjs>` 单会话计划（`h.move/human/click/dbl/right/type/keys/drag/dnd/snap/find/nodes/eval`），不再串 CLI：每次新连 puppeteer 鼠标位置从 (0,0) 重置，路径穿出悬停面板（+ 节点菜单、素材面板）就把它关了。
    产品新版对分离的 down/up 单击不再触发 click → 单击用 `page.mouse.click`；双击要两对 down/up 紧接；右键仍需 down/up。`mouse.mjs` 已同步改。
  - 页面加载时产品会 fitView（0.83×），直接改 `.react-flow__viewport` 的 transform 只改 DOM 不改内部状态（缩放标签、后续 F/L 会跳）。用 React fiber 找到 React Flow v11 store，`d3Zoom.transform(d3Selection, new ZoomTransform(k,x,y))` 真·归零（`works/ep1-basics/plans/_lib.mjs` setViewport）。成片侧再用 `fixZoomLabel()` 按当前 viewport scale 回填标签。
  - 快照里图片全是 data URL，`img[src*=...]` 选不到，用结构选择器（`.grid.gap-2 > *:nth-child(2) img`）。面板列表会被 React 重渲染补回，DOM 删除不可靠，隐私清理用成片 patchCss（`:nth-child(n+4){display:none}`）。
  - 判断聊天栏是否展开要查整页 innerText，`h.text()` 只有前 600 字。取消选中的空白点要避开节点下缘（点到 "Balanced" 会弹 Quality 下拉进快照）。
  - 上传：`page.waitForFileChooser` 在 Image Loader 上传区不触发；改 MCP `create_asset_upload` → PUT → `set_upload_node_asset`。双击节点标题栏会碰到模型切换器，双击节点**主体**才是 Focus。无选中按 F 视口不变，全览走缩放菜单 Fit view。
  - 结果预览渲染在卡片上方（节点 position = 预览顶部），舞台快照上用 `injectNodePreview` 注入真图即可无缝切到素材项目快照；"运行中"用 `nodeRunning`（Run 文案在 `<span>` 里，改文字要遍历文本节点）。
  - ScreenStage 是"绕锚点缩放"模型，不是居中：目标在画面边缘时要用 `focus(cx,cy,z)` 反推锚点（`_shared.tsx`），否则推近后目标被推出画面。底部工具栏（Run All、缩放菜单、(i) 菜单、选区工具栏）永远压在字幕底下，这些镜头把字幕放顶部（Cap.y = 120）。
  - Remotion 延后起播视频要包 `<Sequence from>`，`OffthreadVideo startFrom` 是裁掉片头不是延时（片头 / 节点内视频 / 结尾都踩过）。**Seedance（首帧模式）成片的前 3 帧是参考图本身**，铺满播放时会闪一帧"完整结果"，用 `startFrom={5}` 跳过；改局部后可用 `remotion render --frames=a-b` 只渲该段再 ffmpeg concat 重编，不必全片重渲。
  - ElevenLabs v3 并发 >16 节点会 `service.busy`，分批 scoped 重跑；失败 run 里已完成节点的 credit_status 显示 RELEASED 但音频正常可下。声线 Sarah（EXAVITQu4vr4xnSDxMaL）被用户否为太机械，EP1 v3 起用 Brian（nPczCjzI2devNBz1zQrb，stability 0.4）。

- **EP1 v3.1 修改轮经验（2026-09-12，用户 17 条看片反馈）**：
  - 用户对光标的要求：**讲话时光标原地不动，话快说完再直达目标点下去**；"边讲边慢慢挪"是大忌。编排一律用 `Shot.go(f, aim)`（`engine/camera/choreo.ts`：f−dur 前补停顿桩，dur 帧到达，默认按距离 12–24 帧），只有拖拽才写 `.click(f).cur(f+N, target)`。两个相隔很久的 `.cur()` 之间会整段插值——那就是漂移的来源。光标手腕摆动/大回弹也被否（"无意义的抖动"），Stage 传 `cursorSway={0} cursorBounce={1.2}`。
  - 节拍写法：`V(id,k)` = 配音结束后 k 帧、`P(id,frac)` = 配音进行到 frac；"Click X" 在句首的句子动作落在 15–40%，其余落在 voEnd −4…−10；句间 gap 14。配音时长变了节拍自动跟着走。
  - 缩放：125% 采集下多数镜头全屏就看得清，用户明确要"大幅减少无意义缩放"——只有右键菜单、✕ 删除按钮、缩放菜单、(i) 菜单这类小目标才推近，Settings 面板、+ 菜单、拖拽落点都不推。
  - 产品反馈复刻：连线拖到目标节点要亮淡蓝氛围光（`nodeGlow`，驱动节点里 `shadow-[0_0_24px_…blue]` 那层 div）；点选节点要立刻出选中框（`nodeSelected`：`.selected` + inset −6px 层描边）；产品选中态 DOM = node 加 `.selected`、外沿层加 `border-blue-500` 且 opacity 1、上方出 "Untitled Node" 标签。
  - 选区工具栏是 `div[style*="z-index: 40"][style*="translateX(-50%)"]`（fixed，随选区下缘），⌘A 全选大节点时会被排到画面底边外；底部中央 Run 胶囊是 `[data-feedback-recorder-avoid="bottom"]`，与工具栏贴在一起时用户要求避免（成片隐藏胶囊）。Auto Layout 悬停菜单是按钮 wrapper 里的 `[role=group][aria-label="Default / Horizontal / Vertical"]`（absolute top-full），贴底边时改 `bottom:100%` 向上弹，图标位置关于按钮中心镜像。
  - 产品 Auto Layout（Horizontal/Default）的结果**不可复现**：同一组节点两次采集排出不同坐标和缩放，补采"某布局下的悬停态"不能指望和旧快照对齐——改为只取菜单 DOM 注入旧快照（`works/ep1-basics/src/scenes/_almenu.ts` + `injectAlMenu`）。补采后记得 `move_nodes` 挪回。
  - 双击弹出的节点搜索框是 `div.min-w-48.p-0.text-popover-foreground`（position:fixed，left/top = 双击点），可 patchCss 挪位；创建的节点位置与双击点不严格一致（(766,437) 双击 → 节点在 (860,380)），挪 90px 内没人看得出。
  - Download Filename 的 Edit 是行内积木编辑器（Name/Timestamp/Index/自定义块 + Connector，右上 Done），不是弹窗；Esc 会关整个 Settings。积木可用真实鼠标拖拽重排、✕ 删除，**编辑即时保存**（采完必须 Reset）；自定义块的文字在 input 里，innerText 为空。patchMaterialHtml 的积分回填只认 10,6xx，积分掉到 10,5xx/10,4xx 后要手动 sed。
  - ElevenLabs v3 换声线只改 dialogue JSON 里的 `voice`；**Chris**（iP95p4xoKVk53GoZ742B）被用户指定，自然语速约 185 wpm，比 Brian 快 16%，不用再 atempo。每批 14 节点仍有 1–3 个随机 `workflow_node_failed`，scoped 补跑即可（6 批约 60 积分）。节点无 speed 参数。
  - 每次 `still` 约 60–100s，4 张并行；关键帧抽查比整片重渲便宜得多，改编排后先抽 8–10 张再渲。

- **EP1 v3.3/3.4（2026-09-12/13）**："多选节点一起连线"在新版产品里是选区右侧的蓝色共用输出点（用户截图，新版节点 UI 为"参考图片 1/16"），本机无头 Chrome 拿到的仍是旧版没有该点——产品分版本灰度，采不到的新版功能用 overlay 复刻并在留档标明。字幕规则：固定字号、**不换行**，长句用 " | " 拆段先后显示（`splitCap`）。⌃+拖切线可用（切断后目标节点的输入区会收起）；⌘Z 撤销一步连线有效。点节点标题栏要点右半（x+205），左半是模型切换器。
- **EP1 v3.2 追加经验（2026-09-12 下午）**：
  - 需要 macOS 系统 UI（Finder 窗口）进画面时：真实截图叠加最省事——AppleScript 建 Finder 窗口（`set sidebar width of w to 0`、icon view、固定 bounds、icon size），`screencapture -x -R x,y,w,h` 取区域（本机已有屏幕录制权限），PIL 抠 26px 圆角；每个选中态各截一张，在同一脚本里连拍保证布局一致（分次开窗 Finder 会记住不同图标尺寸）。侧栏含个人文件夹名和中文，必须隐藏。
  - 舞台/素材项目的 Auto-collapse 是账号级偏好，开着时所有未选中节点收起——补采前查 `.react-flow__node` 高度，关掉再采、采完开回。
  - `set_upload_node_asset` 之后产品把 LoadImage 的 position 上移 288（预览顶 = position−288 变为 position），之后 move_nodes 不再偏移；补节点时先上传再摆位。
  - 隐藏节点（patchCss display:none）时连线不会跟着消失，`.react-flow__edge` 要一起藏。
  - 样图用 Nano Banana Pro 1K 1:1 单张最省（3 张约 30 积分），提示词写 "no text, no logo, no people" 得到干净的产品图。

## 环境

Remotion 4.0.520 / React 19.2.8 / TS 6.0.3 / puppeteer 25；系统 Node 25、ffmpeg 8。
`remotion.config.ts`：jpeg 帧、angle、并发 4、delayRender 超时 180s（HtmlSnap iframe 首帧慢）。

## 项目背景与外部资源（原 Claude 自动记忆并入，2026-09-05）

- 教程大纲在飞书 wiki `HRhuwUEiLi3OaZkSPGJl4l3jgWN`（EP0–EP7）；Storyboard 父节点见上文交付环节。
- EP1 v2.3（2026-09-10 成片）已整体归档到 `archive/ep1-basics-v2.3/`（1920 视口采集、桌面壁纸构图，不再维护）；EP1 将按 125% + 铺满规则新起 work 重做。
  演示舞台是用户账号里专建的项目 **"EP1 Basics"**（`workflow/d933cf96-fe7e-4660-9189-3720611bdf8f`），后续 EP 各建专用项目，**别动用户的 Untitled Project**。
- **EP1 v3（2026-09-11，works/ep1-basics）**：新舞台 "EP1 Basics" `d97e9e57-06c6-485c-b3f8-d9a54676dc85`（与旧 v2.3 舞台同名并存）；结果节点来自用户跑好的 "ep1-素材" `357a2788-6c79-47d9-a147-64b2e30152f1`（prompt 已改短、节点已挪位，详见其 CAPTURE-LOG）；VO 项目 `8bd93552-1bfa-4d34-b1de-744ed4b2eb58`。主线：logo → GPT Image 2 店招 → Seedance 2.5 店招视频。
- keyviz 原仓库副本在 `/Users/xer/project_ai/YouArt/keyviz`；用户明确要求教程里显示 option 等按键被按下。
- 决策（2026-09-03）：所有教程共用本根目录一套 Remotion，不沿用 shotcraft-lab "每支视频独立工程" 的做法。
- 本机有 `/opt/homebrew/bin/whisper-cli` + `~/.cache/whisper-cpp/ggml-base.en.bin`，可离线核对成片台词。

## 数字人主持人（YouArt MCP，talking head）

专用项目 **"Tutorial Avatar · Host persona"**，project_id `21ad5b85-9f4c-4437-acc5-1cf4a0528b5d`。
人设：年轻金发美国女性、自然现代客厅、真实摄影、柔光。参考图在 `out/avatar/refs/r1/`，
口型视频在 `out/avatar/talkinghead/<slug>/`。

**默认流程**：参考图（图像模型）→ Seedance 2.5 Omni，参考图接 image_1，**台词直接写进提示词由模型自配音，不先做 TTS**。
只有用户明确要指定声线、或需与 Remotion 里的 VO 文件精确同步时，才走 ElevenLabs v3（voice `EXAVITQu4vr4xnSDxMaL`）
+ LTX-2.5 透传。Remotion 侧直接用 Seedance 成片自带音轨；Seedance 2.5 输出 HEVC，进 Remotion 前转 H.264。

**用户已定的偏好（勿再推荐相反做法）**
- 景别：保持 gpt-1 那种胸像中景宽景别，**不要再做或推荐"紧景别"头肩特写**（2026-09-04 用户否决）。
  `refs/r2/tight-1.jpg` 及相关节点不再使用。提升真实感优先考虑真人驱动（Kling Motion Control）、真人声音等路径。
- 配音：默认 Seedance 自配音（见上）。实测接 ElevenLabs 音频做 @Audio1 只是学声线，仍会重新演绎重排时间，音轨不能透传，多一步没有对齐收益。

**复用节点**（新台词只换 prompt 或 LoadAudio 文件，再 `scope=node_ids` 跑视频节点）：
Face A `node-f0cdfe09…`（gpt-1 宽景别 LoadImage）、Face B `node-f5ce1433…`、固定 VO LoadAudio `node-47a4bd7a…`、
LTX A/B `node-50fdea67…`/`node-f9af5e5f…`、Seedance 2.0 A/B `node-120ff475…`/`node-af8cebf7…`、
Seedance 2.5 audioref `node-b12dea9f…` / nativevoice `node-55794c80…`、Kling v3.0 `node-70a23876…`。
上传本地文件：`create_asset_upload` → curl PUT（带返回的 headers）→ `set_upload_node_asset`。

**实测坑**
- Seedance 2.0 Omni 用 @Image1/@Audio1 时必须 `use_assets: true`，否则 5 秒内 workflow_node_failed。
- LTX-2.5 接音频后视频长度按音频向下取整（6.64s → 6.04s），会切掉最后一个词；音频前补 0.4s、后补 0.8s 静音再喂。
- scoped run 每次都重跑 ElevenLabs 节点（无 virtual loader），每个 take 不同；固定配音必须走 LoadAudio 上传文件。
- LTX 原样透传输入音频；Seedance 2.0/2.5 都会按参考声线重新演绎，成片只能用其自带音轨。Seedance 2.5 不接音频也能逐字说对台词，2.0 听写疑似多了 "the"。
- Kling v3.0 Pro 台词逐字正确但口型幅度偏大，提示词加 understated 约束。
- `get_current_account` / `get_credit_balance` 在此连接返回 "capability unavailable"；`get_workflow_run` 的 wait_seconds 服务端上限 25s。

**积分实测**：Nano Banana Pro 2K×4 张 40；GPT Image 2 2K high×4 张 80；Seedream 5.0 Pro 2K 18/张；
LTX-2.5 Pro 1080p 一条 272（约 45s）；Seedance 2.0 Stable 1080p 8s 一条 520（约 6.5 分钟）；
Seedance 2.5 1080p 8s 一条 800（约 5 分钟）；Kling v3.0 Pro 1080p 8s + sound 一条 192（约 3 分钟）。
