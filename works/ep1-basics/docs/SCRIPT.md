# ep1-basics — EP1 Workflow basics 教程脚本（v3 重做 2026-09-11；v3.1 按用户反馈修改 2026-09-12）

规格：1920×1080 @30fps，采集视口 1536×864（125%），画面铺满无背景，右侧 Agent 聊天栏采集前收起。
英文字幕 + 英文配音（ElevenLabs v3 via YouArt MCP，声线见"配音"节），shadcn Kbd 键帽。
主线：把 YouArt logo 做成"店招 logo 浮现"短视频（素材项目 "ep1-素材" 357a2788-…，四节点已跑完，教程不重跑）。
舞台项目："EP1 Basics" d97e9e57-06c6-485c-b3f8-d9a54676dc85（采集期间标题保持 "Untitled Project"，与 New Workflow 之后的真实状态一致；ep1-素材 快照的标题 patch 成同名）。
计划稿（教学原则、逐节编排）见 `ep1-basics-storyboard.md` 与飞书 Storyboard。

## 台词（= 字幕原句；`*词*` 品牌黄；配音把 ⌘[ 读作 "command, left bracket"，⌘, 读作 "command, comma"，✕ 读作 "the X"）

### s0 片头
- s0-1 Welcome to YouArt. In this episode, we'll cover the workflow basics.
- s0-2 By the end, you'll have turned a logo into a short sign-reveal video. Like this.

### s1 Create a node
- s1-1 Open the *Workflows* page, and click *New Workflow*.（v3.1：不再念网址）
- s1-2 You get a blank canvas. Everything you build here is a *node*.
- s1-3 Click the *+* button in the left toolbar to open the node menu.
- s1-4 Nodes are grouped by media type. Hover a group to browse it.
- s1-5 Or just type to *search*. We need an Image Loader.
- s1-6 Drag it onto the canvas. This node holds an image you upload.
- s1-7 Click it and pick your file. Our logo is in.
- s1-7b You can also *drag* image files straight from Finder onto the canvas.（v3.2 新增）
- s1-7c Or copy files in Finder and press *⌘V*. Several at once is fine.（v3.2 新增）
- s1-7d We don't need these here, so select them and press *Delete*.（v3.2 新增：顺带教了删除节点）
- s1-8 Another way to add nodes: *double-click* anywhere on the canvas.
- s1-9 Search for an image model. We'll use *GPT Image 2*.
- s1-10 Two ways to add a node: the + menu, or double-click the canvas.

### s2 Connect nodes
- s2-1 Every port has a color. *Green* is text, *blue* is image, *purple* is video, *pink* is audio.
- s2-2 Drag from the blue output, and drop it anywhere on the target node.
- s2-3 YouArt picks the matching input for you. No need to aim for the dot.
- s2-4 Hover a connection and click the *✕* to remove it.
- s2-5 Then connect it again, the same way.
- s2-6 Write your prompt in the prompt box. We've prepared one: a boutique storefront sign with our logo.
- s2-7 Click *Run*. Generation takes a minute or two, so we'll skip ahead.
- s2-8 The result shows up right inside the node.
- s2-9 Now the video. Add a *Text* node for the motion prompt.
- s2-10 And a video model: *Seedance 2.5*.
- s2-11 Connect the image to Seedance, then the text to Seedance.
- s2-12 Image to first frame, text to prompt. Each one finds its matching port.
- s2-12b To cut connections, hold *Control* and drag across them.（v3.3 新增：⌃拖切线）
- s2-12c Or select both source nodes: a shared output dot appears. | Drag it to Seedance, and both connect at once.（v3.4：多选一起连线，替换掉 v3.3 的 ⌘Z）
- s2-13 Click *Run All* at the bottom, and skip the wait.
- s2-14 There's our video, playing right in the node.
- s2-15 That's a complete workflow: reference image, image model, text prompt, video model.

### s3 Expand and collapse
- s3-1 Expanded nodes take up space. Click the *arrow* in a node's corner to collapse it.
- s3-2 Or select a node and press *⌘[* to collapse it.
- s3-3 *⌘]* expands it again.
- s3-4 To fold everything at once, right-click the canvas and choose *Collapse All Nodes*.
- s3-5 Right-click again: *Expand All Nodes* brings them back.
- s3-6 There's also *Auto-collapse*. Turn it on, and nodes you're not working on fold themselves.
- s3-7 Arrow, shortcut, or right-click menu. All three do the same thing.

### s4 Focus view
- s4-1 Zoomed out, it's hard to read. Drag a box around a few nodes to select them.
- s4-2 Press *F*, and the canvas frames just those.
- s4-3 For a single node, *double-click* it to focus.
- s4-4 With nothing selected, use *Fit view* in the zoom menu, bottom left, to see the whole workflow.（实测：无选中时按 F 视口不变，缩放菜单 Fit view 有效）
- s4-5 So F frames whatever you've selected, and *Fit view* brings everything back.

### s5 Auto layout, and where the shortcuts live
- s5-1 Our canvas got a little messy. Press *⌘A* to select everything.
- s5-2 Then press *L*. Nodes line up automatically.
- s5-3 Prefer a different direction? Use *Auto Layout* in the selection toolbar, horizontal or vertical.
- s5-4 Connected nodes stay next to each other, so the flow stays readable.
- s5-5 Forget a shortcut? Click the *info* button at the bottom left, then *Keyboard shortcuts*.
- s5-6 Every shortcut is listed here. ⌘A and L to tidy up, and this panel whenever you need a reminder.

### s6 Reuse your assets
- s6-1 Everything you generate is saved in *Media Assets*, in the left toolbar.
- s6-2 Drag an asset onto the canvas, and it becomes a new node, ready to use.
- s6-3 The same library lives on the *Assets* page, for all your projects.

### s7 Preferences
- s7-1 Press *⌘,* to open Settings, then choose *Preferences*.
- s7-2 Pick a canvas background color.
- s7-3 And a pattern: dots, grid, or none.
- s7-4 Right above, you can set how downloaded files are *named*.
- s7-5 Click *Edit*. The name is built from blocks.（v3.5 改写）
- s7-5b Remove the *Timestamp*, | and drag *YouArt* to the front.（v3.5 新增：真操作积木，快照 m-prefs-edit2 / edit3）
- s7-5c The preview updates. | Click *Done* to keep it.（v3.5 新增：快照 m-prefs-done，预览变成 YouArt_Hero_shot_03.png）
- s7-6 Press Esc, and your canvas is updated.

### s8 结尾
- s8-1 That's all for EP1: the basics of the workflow canvas.（v3.3 改写；画面不再叠 "That's the basics." 大字）
- s8-2 Next up, EP2: generating images and video, with parameters, credits, and troubleshooting.

## 实测产品行为（2026-09-11 侦察，1536×864，英文界面）
- /workflows：New Workflow 卡片 (432,640)；My Projects 行显示用户全部项目卡，采集前 DOM 移除个人项目卡。
- 编辑器：左侧工具栏 + (35,365) Add node / (35,418) Media Assets / (35,458) Node Assets / (35,498) Community Assets；右上 (1504,32) 收起/展开 Agent 聊天栏（收起后画布铺满）；
  底部左 100% 缩放 (40,832)、Node options (80,832)（Snapping: None / Snap to Grid / Node Alignment；Auto-collapse nodes）、Discord、通知、(i) 信息 (192,832)（User Manual / Keyboard shortcuts / Release Note）；
  底部中 选择工具 (688,826)、Comments C、Open Video Editor T、Run All。
- + 菜单 "Add a node"：面板 (64,214,220×436)，搜索框 (174,280)，分组 Upload / Text / Video models / Image models / Audio models / Video tools / Image tools / Audio tools / LLM Models；
  悬停分组出子菜单（x≈434，行高 48，含价格徽标）；搜索后面板加宽到 340，结果行 `button[draggable=true]`，可 HTML5 拖到画布（落点 = 节点左上角）或点击（在光标处建节点）。
- 双击空白：光标处弹出紧凑搜索框（约 300×130，结果行不是 draggable，点击建节点在光标处）。空画布有 "Start creating with AI, or double click to add node" 提示 + 快捷分组芯片。
- 右键空白：New Node / Open Video Editor T / Open Comments Panel / Select All ⌘A / Paste ⌘V / Undo ⌘Z / Redo ⇧⌘Z / Collapse All Nodes（全收起后文案切 Expand All Nodes）/ Auto-collapse nodes。
  右键节点：Fit View F / Add to Chat / Copy ⌘C / Duplicate ⌘D / Paste / Delete ⌫ / Save as Asset / Collapse ⌘[ / Auto-collapse nodes。
- 连线：从输出口拖到目标节点主体任意处即自动接到匹配类型输入（实测 LoadImage → GPT Image 2 落在主体中部，接到 edge-in-1）。悬停连线出现 "Delete connection" 圆形按钮。
- 多选：Shift+拖框选（`.react-flow__nodesselection-rect`），上方浮出选区工具栏 Run selected / Save as Asset / Group / Auto Layout / Add to Chat。
  选区没有独立的"共同输出接口"元素（elementFromPoint 只找到节点自己的 handle）；"多选一次连接"待 S2 采集时用"从选中节点输出口拖到目标"验证，不成立则改为逐条连接并在留档标注。
- L（≥2 选中）→ toast "Nodes arranged"，同时 fit view（缩放变 185%）。⌘[ / ⌘] 收起/展开选中节点（GPT 节点 846→73 高）。
- 快捷键面板（(i) → Keyboard shortcuts）：CANVAS Zoom ⌘+Scroll / Zoom in-out + - / Pan Space+Drag / Fit to view F / Toggle AI assistant ⌘L / Open node menu Double-click / Cut connections ⌃+Drag / Undo ⌘Z / Redo ⌘⇧Z；
  NODES Select all ⌘A / Auto-Layout L / Group G / Ungroup ⇧G / Duplicate ⌘D / Duplicate in place ⌥Drag / Duplicate without inputs ⌥⇧Drag / Delete ⌫。
- 设置 ⌘,：Profile / Billing / Preferences / MCP / Teams。Preferences：Language；Download Filename（PREVIEW + Edit）；Project Settings：Background Color 三个色板 + Custom，Background Pattern Dots / Grid / None；Workflow Canvas：Show Run Button When Collapsed、Chat Panel Position。
- 节点：GPT Image 2 展开态 280×~460（Prompt 文本框 260×112 contenteditable、Sources Image1、1024×1024 / Balanced / x1、Run + Batch Run + Advanced Settings）；Image Loader 280×222；节点右上角箭头 = 收起（aria "Collapse sidebar"）。
- Media Assets 面板：All / Images / Videos / Audios，搜索框，缩略图网格（含用户全部素材，采集前只保留教程相关三项）。
- 双击 / 右键需要分离的 down/up 事件，单击用 page.mouse.click；连续 CLI 调用会重置鼠标位置穿出悬停面板，所以采集统一用 `capture/run.mjs <plan.mjs>` 单会话计划。

## v3.1 修改轮（2026-09-12，按用户看片反馈 17 条）
- 节奏：光标只在"话快说完"时用 `Shot.go()` 直达目标（12–24 帧），其余时间原地不动，全片不再有边讲边漂移；句间 gap 14 帧，动作用 `V(id, k)`（台词末尾偏移）/ `P(id, frac)`（台词内进度）定位，多数点击落在 voEnd 前 4–10 帧，"Click Run / Run All" 这类先说动作再说结果的句子落在句首 15–35%。
- 相机：S1 / S6 / S7 全程 z=1（125% 采集下全屏看得清），S2 只为 ✕ 删除按钮推近一次（1.5×），S3 / S4 / S5 保留右键菜单、缩放菜单、(i) 菜单的小目标推近。光标手腕摆动关闭（`cursorSway=0`），回弹减小。
- S1：双击点右移到 (856,437)，弹出的搜索框用 patchCss 同步挪位（`div.min-w-48.p-0.text-popover-foreground{left/top !important}`），离 Image Loader 远一点。
- S2：连线拖到目标节点时，节点外沿亮起产品同款淡蓝氛围光（`nodeGlow` 驱动产品 DOM 里 `shadow-[0_0_24px_…blue]` 那层 div），落点后 8 帧淡出。
- S3：点选 GPT 节点后立刻出现蓝色选中框（`nodeSelected`：加 `.selected` + inset −6px 描边层 opacity 1）。
- S5：⌘A / L 期间字幕放顶部，选中态隐藏底部中央 Run 胶囊（与选区工具栏贴在一起观感差），⌘A 刚选中时工具栏被产品排到画面底边外→该态先不显示；L 之后取消选中再 ⌘A，让工具栏"出现"成为可见事件；Auto Layout 悬停菜单改为向上弹出（向下弹贴底边被裁）；Horizontal 布局下再次悬停的菜单由 `injectAlMenu` 注入产品 DOM（`scenes/_almenu.ts`，取自 m-horizontal-menu 快照）。
- S6：拖入的 Image Loader 用 patchCss 挪到 Seedance 右侧空位 (1170,498)，不再重叠。
- S7：⌘, 在句中 40% 处按、Preferences 在句末点；新增 Edit → 积木编辑态 → Done。
- 片头示例视频多停 23 帧（0.75s）。
- 配音全部换 ElevenLabs Chris（iP95p4xoKVk53GoZ742B，stability 0.4），语速自然比 Brian 快约 16%（209s vs 249s，约 185 wpm），未再加速。旧 Brian 音频留在 `out/vo/brian/`。
- 时间线：片头 343 → 7 节 → 结尾 390，总长 9430 帧 ≈ 5:14（v3.0 为 5:52）。s1 1431 / s2 2240 / s3 1174 / s4 792 / s5 1260 / s6 475 / s7 800。

## v3.5.1（2026-09-13 晚）
- 片尾成片视频开头闪一帧完整招牌：Seedance 输出的前 3 帧（0.125s）就是参考图（完整招牌），之后才切到空招牌开始 reveal。Outro 的 OffthreadVideo 改 `startFrom={5}` 跳过。只重渲了 outro 段（`--frames=10205-10594`）再与主片 concat。

## v3.5（2026-09-13 下午）
- 第 7 节文件名编辑真操作：Edit → 点 Timestamp 的 ✕ 删掉 → 拖 YouArt 积木到最前 → 预览从 Hero_shot_2026-08-22-14-29-53_03_YouArt.png 变成 YouArt_Hero_shot_03.png → Done。三张新快照 m-prefs-edit2 / edit3 / done（`plans/m9.mjs` + `m9b.mjs`，积木用真实鼠标拖拽即可重排，编辑即时保存；采完 Reset 恢复）。拖动中的积木用 overlay 影子（BlockGhost）表现。
- 总长 10595 帧 ≈ 5:53。

## v3.4（2026-09-13）
- **多选一起连线**：用户截图确认新版产品多选后选区右侧会出现一个蓝色共用输出点，拖它到目标节点即把所有选中节点连上。本机无头 Chrome 里的产品版本没有这个点（节点 UI 也还是旧版 "Sources"），无法真采：多选态用真实快照 s2-multisel（GPT + Text 选中、选区矩形、选区工具栏），蓝点与拖出的连线由 overlay 复刻（`SharedDot`），落下切到 s2-edge3（两节点保持选中的驱动），再点空白取消选中。s2-12c 台词重写，⌘Z 段删除。
- 字幕不再换行：长句在 lines.json 里用 " | " 拆成 2–3 段先后显示，各段时长按字数比例分配（`_shared.tsx` splitCap）；字号固定 46px；片头、结尾的配音也有字幕（结尾 logo/EP2 芯片上移到 bottom 250 让位）。
- 片头两屏都多停：迷你 workflow 长完停到 84 帧再退散，大标题停到 176 帧，七步清单 186–300；TITLE_ANIM 300、片头总长 443 帧。
- 总长 10384 帧 ≈ 5:46。

## v3.3 追加（2026-09-12 傍晚）
- 第 2 节两条连线接好后加"⌃ + 拖切断连线"（覆盖快捷键面板里的 Cut connections ⌃+Drag）→ ⌘Z 撤销恢复。切线是 overlay 画的红色虚线，切断后的状态是新快照 s2-cut（Seedance 失去输入后 Frames 区与提示词芯片消失，产品真实行为），⌘Z 回到 s2-edge3。
- 用户要求的"选中多个节点一起连接"**实测不存在**：在舞台上试了 6 种手势（多选源节点后从任一输出口 / + 圆钮拖到目标主体或具体输入口、反向从目标输入口拖到选中节点、多选目标节点后从一个输出口拖入），每次都只连一条；选区矩形上也没有共用接口 DOM。v2.3 归档里同样没有这一段（edgesel 快照弃用）。因此改成"切断 → ⌘Z 撤销"，待用户给出触发方式再补。
- 第 3 节箭头 / 点选 / ⌘[ ⌘] 不再推近（推近反而把节点截断），只在右键菜单推近一次。
- 结尾去掉 "That's the basics." 大字，只留 logo 与 EP2 预告芯片；配音改为 "That's all for EP1: the basics of the workflow canvas."。
- 片头两句也上字幕；全片字幕改为固定 46px（`Caption size` 属性，长句自动平衡换两行，底部字幕以底边锚定向上长），不再按句长缩到 36px。
- 片头拆成两屏：0–2:00 秒徽标 + 大标题（迷你 workflow 长出后退散），随后七步内容改为**竖排清单**从上到下点亮（用户：横向轨道不好看）；TITLE_ANIM 200→230。
- 总长 10161 帧 ≈ 5:39。

## v3.2 追加（2026-09-12 下午，用户两条补充）
- 第 1 节上传 logo 之后加"另外两种加图方式"：从 Finder 拖文件到画布（1 个文件）、Finder 里 ⌘C 两个文件回画布 ⌘V（多文件），然后 ⇧ 加选三枚新节点按 Delete 删掉回到原状态。
  Finder 窗口是本机真实截图（`captures/assets/finder/finder-1/2/3.png`：未选中 / 只选 tote / 选中 tote+hoodie，文件夹 "Brand photos"，侧栏隐藏），按 0.85 叠在画布右侧；
  拖出的文件影子 = 缩略图 + 文件名跟光标走；落下的节点来自新快照 s1-files（舞台上 MCP 建 3 枚 LoadImage 并上传 black-tee / grey-hoodie / canvas-tote，采完删除）。
  三张样图用 Nano Banana Pro 1K 生成（VO 项目里 3 节点，约 30 积分），存 `captures/assets/finder/*.jpg`。
- 第 2 节接口颜色图例放大：色点 22px、文字 30px，加 "PORT COLORS" 标题，位置右上空白。
- 总长 9863 帧 ≈ 5:29。

## 制作说明（2026-09-11 成片）
- 时间线（TL 帧，30fps）：片头 320 → 7 节各前置 75 帧章节卡 → 结尾 390；各节时长由 VO 真实时长顺排（`scenes/_shared.tsx` seqLines，句间 16 帧，动作长的句子加 extra）。
  s1 1615 / s2 2766 / s3 1271 / s4 922 / s5 1425 / s6 618 / s7 723，总长 10575 帧 ≈ 5:52。
- 配音（v3.0）：ElevenLabs v3 声线 Brian（nPczCjzI2devNBz1zQrb，stability 0.4，language en），55 句，`audio/vo/<id>.mp3`，时长表 `src/vo.gen.ts`（ffprobe +2 帧）。
  s4-4 / s4-5 因实测"无选中按 F 无效"改词后重生成。声线候选样本在 `out/vo/voicetest/`（brian / george / jessica / laura 同一句）。
- 镜头：舞台快照（S1、S2 前半）+ 素材快照（S2 Run All 之后、S3–S7）。GPT 结果图在舞台快照上用 `injectNodePreview` 注入，Run 用 `nodeRunning` 假运行，Run All 后切素材快照并在 Seedance 预览位叠 `OffthreadVideo` 播放真视频。
- 新增引擎件：`engine/ui/TargetRing.tsx`（点击提示环）、ScreenStage `overlay` 槽、`youart/drivesFlow.ts` 的 fixZoomLabel / injectNodePreview / nodeRunning；`capture/run.mjs` + `capture/lib/snap.mjs` 采集运行器。
- 与计划稿的出入：s4-4/s4-5 改用缩放菜单 Fit view；多选"共同接口"不存在，s2-11 逐条连接；S5 结尾回到 Default 排版用 m-arranged 复用（隐藏 toast）；S6 /assets 页只留 Today 分组前三张；S7 快照里多出的拖入节点用 patchCss 隐藏。
- 成片：`out/ep1-basics.mp4`（带配音）、`out/ep1-basics-novo.mp4`（无配音，音轨单渲后 ffmpeg 合成）。

## 飞书 Storyboard
- https://f3vaq8z51vv.sg.larksuite.com/wiki/DFZhwKC3Ii29sqkdUn1lG0zug4d （父节点 C1uDwq2BGiyc29k3omEl9UvegwI；2026-09-11 计划稿 → 2026-09-12 成片后原地覆盖为正式 Storyboard，9 节 9 图）
- 本地 Markdown：docs/ep1-basics-storyboard.md
