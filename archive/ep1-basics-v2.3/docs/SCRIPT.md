# EP1 — Workflow basics（基础操作）教程脚本 / Transcript

规格：1920×1080 @30fps，4553 帧 ≈ 2:32，英文字幕 + 英文配音（ElevenLabs v3 via YouArt MCP），shadcn Kbd 风格按键可视化。v2（2026-09-09）修订见文末。
舞台：用户账号下专建的项目 "EP1 Basics"（workflow/d933cf96-…），节点：Image Loader、Text、Seedance 2.5 Omni Reference。
大纲来源：飞书《视频/文章教程大纲》EP1（7 条）。顺序与大纲一致。

| # | 段 | 帧区间 | 画面 / 操作 | 字幕（transcript） |
|---|---|---|---|---|
| 0 | 片头 | 0–190 | 点阵画布上迷你 workflow 自己长出来（Image/Text 节点弹入、连线生长到 Video model）→ 图退散，"YouArt Tutorial · EP 01" 徽标 + "Workflow basics" 逐字烟条显影 + 黄线 → 标题上移，7 步内容轨道从左到右点亮（01 Create a node … 07 Customize the canvas）+ "7 steps · about 2 minutes" | — |
| 1 | 创建节点 | 265–965 | 点左侧 + → 节点面板（按媒体类型分组）→ 悬停 Image models 看子菜单 → 搜索 "image loader" → 把结果拖到画布 → 双击空白搜索 "text" 建 Text → 右键 New Node 搜索 "seedance" 建 Seedance 2.5 Omni Reference。相机只推近一次，之后平移接力 | Click + to open the node menu. / Grouped by media type. Hover to browse. / Or just search. / Drag a result onto the canvas. / Double-click the canvas to add a node there. / Right-click works too: New Node. |
| 2 | 连线 | 1040–1600 | 接口颜色标签（Text 绿 / Image 蓝 / Video 紫 / Audio 粉）→ Image Loader 输出拖到 Reference images → Text 输出拖到 Prompt → 悬停连线出现 ✕ 点击断开 → 重连 | Ports are color-coded: text, image, video, audio. / Drag an output to a matching input. / Hover a connection, click ✕ to remove it. / Connect it again anytime. |
| 3 | 展开/收起 | 1675–2245 | 方式一：点 Seedance 右上箭头收起 → 方式二：选中 Text，⌘[ 收起、⌘] 展开（同一效果）→ 再用箭头收起 Text、Image Loader → 右键画布（菜单居中、镜头推近）Expand All Nodes → 镜头推到工具栏 Auto-collapse 开关 | Click the arrow to collapse a node. / Or select it and press ⌘[. / ⌘] expands it again. / Either way works. Collapse the rest to tidy up. / Right-click the canvas: Expand All Nodes. / Auto-collapse folds nodes you are not using. |
| 4 | Focus view | 2320–2760 | 缩小视图起步 → Shift 框选 Image Loader + Text → F 只框住选中（放大到 zoom 1）→ 点空白取消选择 → 双击 Image Loader 聚焦（zoom 1.2，光标跟着节点标题）→ Fit View 按钮全览。三步均为放大 | Shift-drag to select a few nodes. / Press F to frame just those. / Double-click a node to focus on it. / Fit View (or F) frames everything. |
| 5 | Auto layout | 2835–3413 | 乱序画布 → ⌘A → L 自动排版（toast "Nodes arranged"）→ 右键 Auto Layout ▸ Align Vertically → Align Horizontally → Fit View | Messy canvas? Press ⌘A to select all. / Then press L. Nodes line up. / Right-click: Auto Layout, then Align Vertically. / Or Align Horizontally. / Fit View to see the result. |
| 6 | 复用素材 | 3488–3908 | 左侧 Media Assets 面板 → 缩略图拖到画布生成带图 Image Loader → /assets 页面一瞥 | Everything you make lands in Media Assets. / Drag any asset straight onto the canvas. / Same library on the Assets page. |
| 7 | 画布背景 | 3983–4403 | ⌘, 打开 Settings → Preferences → Background Color: Lighter → Pattern: Grid → Esc 看效果 | Press ⌘, to open Settings. / Preferences: pick a canvas background color. / Then a pattern: dots, grid, or none. / Your canvas, your way. |
| 8 | 结尾 | 4403–4553 | logo · "That's the basics." · next EP2 | — |

## 与大纲的对应与取舍
- 大纲写 "Focus view 快捷键 ctrl/command F"：实测 ⌘F 无效（浏览器查找），产品内 Focus = 双击节点，Fit to view = F（快捷键面板确认），多选后 F 只框选中节点。教程按实测呈现。
- "展开/收起全部的快捷键"：产品无独立快捷键，右键菜单 Expand/Collapse All Nodes + 工具栏 Auto-collapse；节点级 ⌘[ / ⌘]（右键菜单标注）。
- "Layout 横向/纵向"：右键 Auto Layout 子菜单 Default (L) / Align Horizontally / Align Vertically。
- "自定义画布背景"：Settings (⌘,) → Preferences → Project Settings：Background Color (Default/Lighter/Custom) + Pattern (Dots/Grid/None)。

## 动态效果实现（非真录屏）
每个动作 = 真实前后快照 + 手写中间过程（`src/film/drivesFlow.ts`）：
连线生长 `edgeDraw`（临时贝塞尔线跟光标）、Focus/Fit `viewportLerp`（viewport 变换插值）、排版 `nodesLerp`（节点位移 + 连线端点重算）、
框选 `marqueeBox`、面板拖拽 `dragGhost`、接口标签 `handleChips`、搜索打字 `typeInto`。光标/键帽/鼠标徽标为 keyviz 移植件。

## v2 修订（2026-09-09，按用户看片反馈）
- 音效：只保留一种柔和点击 `audio/sfx/click-soft.mp3`（ffmpeg 合成 tick，峰值 −7.7 dB，vol 0.3），自动挂在编排里的每一次 `.click()`；
  章节切换、按键、落点、翻页音效全部去掉（`_shared.tsx` 的 `clicksOf`）。
- 运镜：去掉"缩回又立刻推近"。§1 只推近一次，两处用 `panTo` 平移接力；§3 推近节点区 → 平移到右键菜单（1.8×）→ 平移到工具栏开关（2.2×）→ 收回。
- §3 重排：点箭头与 ⌘[ / ⌘] 明确为"两种方式、同一效果"；其余节点改用箭头收起；键帽在 K 帧压下、K+6 切状态，松开后只留 12 帧（原来 30 帧 linger 造成两组 ⌘[ 叠层、动作看似延迟）。
  右键菜单用 patchCss 挪到画布中部（`translate(702px,440px)`），Auto-collapse 开关推近到 2.2×。
- §4 重采（快照 `ep1-s4b-*`，5 张）：从缩小视图起步，框选紧贴两节点；F 框选中变成放大（产品 fitSelection 上限 zoom=1，旧版在全览态按 F 反而缩小）；
  双击聚焦后光标沿 viewport 插值跟随节点标题（不再漂移）。时长 470 → 440。
- 字幕：删掉所有 "…" 悬挂句，改成完整句；"—" 改句号。
- 已知取舍：§4 快照是当前产品 UI（Seedance 节点为 Prompt / Sources 布局、聊天栏有 Multi-Shot 技能芯片），其余章节仍是 9 月 3 日的旧 UI；
  积分数字已在快照 HTML 里回填为 3,608 与旧快照一致。全片按新 UI 重采需重跑 4 个采集脚本。

## 片头 v2（2026-09-09，同日第二轮）
- `scenes/S01Title.tsx` 重写，90 → 190 帧：迷你 workflow 图（产品三种端口色）→ 徽标 + 标题字级 blur-smear → 7 步轨道。无音效。
- `scenes/Chapter.tsx` 底部加 7 段进度轨道（当前章黄、已讲亮灰、未讲暗）+ "0n / 07"，与片头轨道呼应。
- 帧表整体后移 100 帧。

## v2.2（2026-09-10，按看片反馈）
- 快捷键可视化弃用 keyviz 键帽，改 shadcn `Kbd` 风格（`src/film/kbd/KbdOverlay.tsx`）：扁平圆角矩形、按住反色、组合键并排；
  鼠标徽标一并弃用，右键改为 "Right-click" 芯片（S1/S3/S5 的 KEYS）。
- 键帽停留加长：hold 10、linger 24–44（总可见 ≥1.3s）；此前 12 帧 linger 看不清。
- 章节卡 45 → 75 帧（2.5s），编号 44px、标题 112px、副标题 42px；去掉 "0n / 07" 小字，进度条放大。
- 片头徽标改圆角矩形并放大（24px 正文字体），去掉 "7 steps · about 2 minutes" 小字；轨道编号 19px、标题 27px。
- 全片不用胶囊：字幕底板、徽标、键帽组均改圆角矩形（`film/ux.tsx` Caption borderRadius 18）。
- 帧表整体再后移（7 张章节卡各 +30 帧）。

## v2.3 配音（2026-09-10）
- 台词 = 字幕原句（去掉 * 标记，快捷键读作 "command, left bracket" 等），外加片头一句 "Welcome to YouArt. This tutorial covers workflow basics, in seven quick steps."
  和结尾一句 "That's the basics. Next up: generating images and video."，共 34 句，见 `out/ep1-basics/vo/lines.json`。
- 生成：YouArt MCP 新建项目 **"EP1 Basics · VO (tutorial voiceover)"**（`c3ae2a81-2778-4de5-8908-e5e4a61254c8`），每句一个 `ElevenLabsTextToDialogueV3Generate` 节点
  （voice `EXAVITQu4vr4xnSDxMaL`，stability 0.5，en），节点 id ↔ 台词映射在 `out/ep1-basics/vo/nodes.json`。首轮 34 节点并发有 2 个失败（s7-1、s7-3，
  `workflow_node_failed`，疑似限流）导致 6 个被取消，scoped 重跑 8 个全部成功。文件落 `public/audio/vo/ep1/sN-i.mp3`，时长表 `src/tutorials/ep1-basics/vo.gen.ts`（ffprobe +2 帧）。
- 接入：`Main.tsx` 按字幕起点派生 VO 表（第 N 节第 i 条字幕 ↔ `sN-i.mp3`），`AudioLayer` 播放；`vo` 默认 true，`npm run render ep1-basics --novo` 出无配音版。
- 对齐：配音长于字幕窗口的 6 处，把后续拍位顺延——§3 ⌘] 起 +34 → 再 +66（s3 470 → 570），§5 ⌘A 移到 96、其后 +58（520 → 578），§7 点击拍位顺延（时长不变），
  §1/§2 只改字幕起止；结尾 120 → 150。脚本 `out/ep1-basics/vo/` 下的检查逻辑保证相邻两句配音不重叠、不溢出小节。
- 积分：ElevenLabs 每句 1–3 积分，两轮合计约 40。

## 飞书 Storyboard

- https://f3vaq8z51vv.sg.larksuite.com/wiki/NpVIwuBTWi6tAjkJpaPlzEgcg2C （父节点 C1uDwq2BGiyc29k3omEl9UvegwI，2026-09-04 写入并回读验收：3 个一级标题、7 节、7 张图）
- 2026-09-10 v2.2/v2.3：同一文档更新版本行（v2.3 · 2:32 · 含配音）、各节时间、新增 "v2.2 改了什么" 与 "v2.3 配音" 两节，S3/S4 换图（Kbd 键帽）；回读核对 8 节 8 图。
- 2026-09-09 片头 v2：同一文档新增 "S0 · 片头" 一节（配图 storyboard/s0.png），版本行改 v2.1 / 2:18，各节时间后移 3–4 秒；回读核对 8 节 8 图。
- 2026-09-09 v2 更新同一文档：版本行、呈现形式、S3/S4 文字与配图、S1 配图、各节时间、新增 "v2 改了什么" 一级标题、留档补充；回读验收见 CAPTURE-LOG 同日条目。
- 本地 Markdown：out/ep1-basics/ep1-basics-storyboard.md
