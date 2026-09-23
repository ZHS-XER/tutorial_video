# PITFALLS — 本工程实测过的坑与经验

按主题归类，全部来自 EP1 v1–v3.6 与中文版的实际制作（2026-09）。AGENTS.md 只留规范，出问题时来这里查。
每条尽量写成"现象 → 原因 → 做法"。涉及具体 work 的文件路径以 `works/ep1-basics/` 为例。

## 1. 渲染（Remotion）

- **iframe 白屏**：Remotion 4.0.520 自带 Chrome 用 `angle` / `swiftshader` / `egl` 渲染器时，HtmlSnap 的 iframe 内容整块白（只有 backdrop-filter 运动模糊层盖着时才显示）。`remotion.config.ts` 固定 `swangle`，勿改回。
- **快照字体**：MHTML 不含 woff2，快照里 `<link rel=preload>` 与 @font-face 指向产品域名，渲染时被 CORS 拦截回退系统字体。`snap` 自动跑 `capture/localize-fonts.mjs` 下载到 `works/<slug>/captures/fonts/` 并改写为相对路径；老快照手动跑一次。
- **延后起播视频要包 `<Sequence from>`**，`OffthreadVideo startFrom` 是裁掉片头不是延时（片头 / 节点内视频 / 结尾都踩过）。Seedance（首帧模式）成片的前 3 帧是参考图本身，铺满播放时会闪一帧"完整结果"，用 `startFrom={5}` 跳过。
- **局部重渲**：改局部后用 `remotion render --frames=a-b` 只渲该段再 ffmpeg concat 重编，不必全片重渲。拼接范式 `works/ep1-basics/out/plan/splice-outro.sh`（trim/atrim + concat filter 一次重编，头部从原片取避免多代重编；关键帧不在切点上时不能 `-c copy`）。
- **渲染进行中别改源文件**：另一会话覆盖 `engine/ui/kbd/index.ts` 让 render 在第 1 帧报 React #130，只能重渲。
- **抽帧比重渲便宜**：每次 `still` 约 60–100s，4 张并行；改编排后先抽 8–10 张关键帧再渲全片。
- **ScreenStage 是"绕锚点缩放"模型，不是居中**：目标在画面边缘时要用 `focus(cx,cy,z)` 反推锚点（work 的 `_shared.tsx`），否则推近后目标被推出画面。底部工具栏（Run All、缩放菜单、(i) 菜单、选区工具栏）永远压在字幕底下，这些镜头把字幕放顶部（`Cap.y = 120`）。
- **舞台 `overlay` 槽里的绝对定位层按 min-content 收缩**，CJK 每个字都是断行点，会一字一行竖排——CJK 文字的叠加层加 `whiteSpace: 'nowrap'`。

## 2. 采集（puppeteer / 无头 Chrome）

- **采集浏览器 UA 决定产品 UI 版本（重要）**：youart.ai 对 UA 含 "HeadlessChrome" 的客户端渲染旧版节点 UI（无"参考图片 1/16"、多选无共用输出点、选区工具栏少项）。`capture/browser-daemon.mjs` 启动加 `--user-agent=…Chrome/141…` 伪装成普通 Chrome；计划里可用 `navigator.userAgent` 自检。EP1 v3 的 67 张快照（2026-09-11～13）都是旧 UI 采的。
- **单会话计划优于串 CLI**：用 `capture/run.mjs <plan.mjs>`（`h.move/human/click/dbl/right/type/keys/drag/dnd/snap/find/nodes/eval`）。每次新连 puppeteer 鼠标位置从 (0,0) 重置，路径穿出悬停面板（节点菜单、素材面板）就把它关了。
- **点击事件**：产品新版对分离的 down/up 单击不再触发 click → 单击用 `page.mouse.click`；双击要两对 down/up 紧接；右键仍需 down/up。`mouse.mjs` 已同步改。悬停面板必须 `--direct` 直线进入。
- **视口归零**：页面加载时产品会 fitView（0.83×），直接改 `.react-flow__viewport` 的 transform 只改 DOM 不改内部状态（缩放标签、后续 F/L 会跳）。用 React fiber 找到 React Flow v11 store，`d3Zoom.transform(d3Selection, new ZoomTransform(k,x,y))` 真·归零（`works/ep1-basics/plans/_lib.mjs` setViewport）。成片侧再用 `fixZoomLabel()` 按当前 viewport scale 回填标签。
- **快照里图片全是 data URL**，`img[src*=...]` 选不到，用结构选择器（`.grid.gap-2 > *:nth-child(2) img`）。面板列表会被 React 重渲染补回，DOM 删除不可靠，隐私清理用成片 patchCss（`:nth-child(n+4){display:none}`）。
- **判断聊天栏是否展开要查整页 innerText**，`h.text()` 只有前 600 字。取消选中的空白点要避开节点下缘（点到 "Balanced" 会弹 Quality 下拉进快照）。
- **上传**：`page.waitForFileChooser` 在 Image Loader 上传区不触发；改 MCP `create_asset_upload` → PUT → `set_upload_node_asset`。`set_upload_node_asset` 之后产品把 LoadImage 的 position 上移 288，之后 `move_nodes` 不再偏移；补节点时先上传再摆位。
- **双击**：双击节点标题栏会碰到模型切换器，双击节点**主体**才是 Focus。点节点标题栏要点右半（x+205），左半是模型切换器。无选中按 F 视口不变，全览走缩放菜单 Fit view。多选态下双击节点不会聚焦，先点空白。
- **快捷键前先 blur**（否则字母会打进选中的 Text 节点）；Fit View 用工具栏按钮兜底。改动账号偏好后必须恢复。
- **多选**：新 UI 下 ⇧+点节点标题栏不能加选（会取消全部选中，点到右端会顺带收起节点），多选一律用 ⇧ 框选（部分覆盖即选中，起点避开不想选的节点）；收起了就选中后 ⌘] 展开。产品 fitSelection 上限 zoom=1，演示"F 框选中"必须从缩小视图起步。
- **Auto-collapse 是账号级偏好**，开着时所有未选中节点收起——补采前查 `.react-flow__node` 高度，关掉再采、采完开回。
- **产品 Auto Layout 结果不可复现**：同一组节点两次采集排出不同坐标和缩放，补采"某布局下的悬停态"不能指望和旧快照对齐——只取菜单 DOM 注入旧快照（`_almenu.ts` + `injectAlMenu`）。补采后记得 `move_nodes` 挪回。
- **Download Filename 的 Edit 是行内积木编辑器**（Name/Timestamp/Index/自定义块 + Connector，右上 Done），不是弹窗；Esc 会关整个 Settings。积木可真实鼠标拖拽重排、✕ 删除，**编辑即时保存**（采完必须 Reset）；自定义块的文字在 input 里，innerText 为空。
- **产品 UI 会漂移**（节点布局、聊天栏芯片、积分数字），补采只能整节一致，跨节差异要在 CAPTURE-LOG 里标注；积分数字可在快照 HTML 里 sed 回填（`patchMaterialHtml` 只认特定位数，掉位后手动 sed）。
- **`page.setCookie` 设 NEXT_LOCALE**（about:blank 页上 document.cookie 会报 SecurityError）。
- **browser-daemon 的 Chrome 几天后会失联**，`npm run browser` 重启即可（登录态保留）。
- **需要 macOS 系统 UI（Finder 窗口）进画面时**：真实截图叠加最省事——AppleScript 建 Finder 窗口（`set sidebar width of w to 0`、icon view、固定 bounds、icon size），`screencapture -x -R x,y,w,h` 取区域，PIL 抠 26px 圆角；每个选中态各截一张，在同一脚本里连拍保证布局一致。侧栏含个人文件夹名，必须隐藏。
- **样图**用 Nano Banana Pro 1K 1:1 单张最省（3 张约 30 积分），提示词写 "no text, no logo, no people" 得到干净的产品图。

## 3. 编排（光标 / 相机 / 节拍）

- **光标**：讲话时光标原地不动，话快说完再直达目标点下去；"边讲边慢慢挪"是大忌。一律用 `Shot.go(f, aim)`（`engine/camera/choreo.ts`：f−dur 前补停顿桩，dur 帧到达，默认按距离 12–24 帧），只有拖拽才写 `.click(f).cur(f+N, target)`。两个相隔很久的 `.cur()` 之间会整段插值——那就是漂移的来源。手腕摆动 / 大回弹被否，Stage 传 `cursorSway={0} cursorBounce={1.2}`。
- **节拍写法**：`V(id,k)` = 配音结束后 k 帧、`P(id,frac)` = 配音进行到 frac；"Click X" 在句首的句子动作落在 15–40%，其余落在 voEnd −4…−10；句间 gap 14。配音时长变了节拍自动跟着走。
- **缩放**：125% 采集下多数镜头全屏就看得清——只有右键菜单、✕ 删除按钮、缩放菜单、(i) 菜单这类小目标才推近，Settings 面板、+ 菜单、拖拽落点都不推。
- **产品反馈复刻**：连线拖到目标节点要亮淡蓝氛围光（`nodeGlow`）；点选节点要立刻出选中框（`nodeSelected`：`.selected` + inset −6px 层描边）；产品选中态 DOM = node 加 `.selected`、外沿层加 `border-blue-500` 且 opacity 1、上方出 "Untitled Node" 标签。
- **选区工具栏**是 `div[style*="z-index: 40"][style*="translateX(-50%)"]`（fixed，随选区下缘），⌘A 全选大节点时会被排到画面底边外；底部中央 Run 胶囊是 `[data-feedback-recorder-avoid="bottom"]`，与工具栏贴在一起时成片隐藏胶囊。Auto Layout 悬停菜单是 `[role=group][aria-label="Default / Horizontal / Vertical"]`（absolute top-full），贴底边时改 `bottom:100%` 向上弹。
- **Radix 右键菜单**是 `[data-radix-popper-content-wrapper]` 的 transform，用 patchCss 可挪到画面中部再推近。双击弹出的节点搜索框是 `div.min-w-48.p-0.text-popover-foreground`（fixed，left/top = 双击点），可 patchCss 挪位；创建的节点位置与双击点不严格一致，挪 90px 内没人看得出。
- **隐藏节点**（patchCss display:none）时连线不会跟着消失，`.react-flow__edge` 要一起藏。
- **结果预览**渲染在卡片上方（节点 position = 预览顶部），舞台快照上用 `injectNodePreview` 注入真图即可无缝切到素材项目快照；"运行中"用 `nodeRunning`（Run 文案在 `<span>` 里，改文字要遍历文本节点；中英文都要认）。
- **多选共用输出点**（新 UI）：body 级 `button[data-group-output-handle]`（fixed，24px，深底，2px conic-gradient 彩环按选中节点输出类型分段：图像蓝 `--handle-image-plus-border`、文本绿 `--handle-text-plus-border`，数字 = 可连出输出数），位置 = 选区包围盒右缘 +24px、垂直居中；拖到目标节点主体一次接上全部。拖拽中两条源输出蓝线汇入圆点，圆点引一条蓝线到光标，光标旁有 "Connect…" 蓝色芯片。旧快照上用 `_shareddot.ts` 的 `injectSharedDot` 注入等价 DOM。
- ⌃+拖切线可用（切断后目标节点的输入区会收起）；⌘Z 撤销一步连线有效。

## 4. 配音（ElevenLabs v3 via YouArt MCP）

- 每句一个 `ElevenLabsTextToDialogueV3Generate` 节点（无输入口，输出 audio），display_name 写 `VO sN-i`。params：`dialogue` 是 JSON 字串 `[{"text":"...","voice":"<voice_id>"}]`，`stability` 0.4–0.5，`language_code` "en" / "zh"。每句 1–3 积分。节点无 speed 参数。
- 声线：Sarah（EXAVITQu4vr4xnSDxMaL）被否为太机械；Brian（nPczCjzI2devNBz1zQrb）用于 v3.0；**Chris**（iP95p4xoKVk53GoZ742B）为当前指定，自然语速约 185 wpm，不用再 atempo；中文可懂、约每秒 5 字，与英文版同声线。
- **并发限流**：`run_project_workflow scope=all` 并发 >16 节点会 `service.busy` / 随机 `workflow_node_failed` 并连带取消若干节点；每批 14 节点仍有 1–3 个失败，用 `scope=node_ids` 补跑即可。失败 run 里已完成节点的 credit_status 显示 RELEASED 但音频正常可下。
- `list_workflow_run_results media_types=[AUDIO]` 拿 URL（可直接 curl），按 node_id↔台词映射（`out/vo/nodes.json`）存成 `audio/vo/sN-i.mp3`；ffprobe 时长 +2 帧写成 `src/vo.gen.ts`，`dur` 必须用真实时长（用字幕窗口会截尾）。
- 对齐：写脚本检查相邻两句不重叠、不溢出小节；配音长于字幕就顺延后续拍位。
- 无配音版：只渲音轨（`--codec=mp3 --props='{"vo":false}'`）再 ffmpeg 合成，省一次全片渲染。
- **中文配音**：dialogue 文本至少 10 个字符，否则 run 直接校验失败。顿号 / 逗号列举句会插 0.4–0.7s 停顿，塞进固定拍位的做法：先压句内停顿（`out/vo-zh/fit.py`：silencedetect 区间 + atrim/concat，>0.25s 静音留 0.18s），再 atempo ≤1.15，仍超就改词（列举句去 "是"、英文词别放句尾）。
- 校对：`whisper-cli` 对成片整段听写会漏词、错切，按句切片段再听写才准。英文用 base.en；中文用多语言 small 模型（`-l zh`），繁简 / 同音字混写是模型问题。

## 5. 语言变体（EP1 zh 范式）

- **不新建 work、不动编排与时间线**：work 内 `src/lang.ts` 读 `REMOTION_LANG` 切 `lines.<lang>.gen.ts` / `audio/vo-<lang>/` / 卡片文案字典 `UI`；节拍仍按英文 `vo.gen.ts`，`vo.<lang>.gen.ts` 只给播放长度。渲染 `node tools/render.mjs <slug> --lang=zh`。
- **产品界面中文化不重采快照**：YouArt 有官方中文界面（`NEXT_LOCALE=zh` cookie / `/zh/` 路径）。文案包在页面 HTML 的 `self.__next_f.push` 内联 RSC 里（`"messages":{...}` 约 20k 条），用 puppeteer 在已登录页 `fetch(location.href)` 抓 en/zh 两版 HTML 抠出来即得词表（`plans/dump-i18n.mjs` + `out/i18n/extract.py`）；`journey evalf` 输出截 6000 字，大结果要走 puppeteer 脚本写文件。
  同一英文值多译法很常见，按 key 命名空间选：画布用 workflow.editor.context_menu > selection_toolbar > sidebar > node_params，设置面板内用 settings.*，列表页用 navigation.*。
  替换在渲染时做：`scenes/_i18n.ts` `localizeUi(slot)` 逐帧走文本节点 + placeholder/aria-label/aria-placeholder/data-placeholder，叠在每个 cut 驱动链最后；凡是运行时按英文文本找元素的驱动要中英都认。
- **字体**：Inter 无 CJK。产品中文栈是 Inter + MiSans（jsdelivr misans@4.1.0 按 unicode-range 拆的 woff2），下载后把 @font-face 改挂在 **Inter** 名下注入快照，CJK 字形自动落到 MiSans，英文外观不变。非快照区域根节点加 `lang="zh-Hans"` 让 Chrome 回退 PingFang SC。
- **字幕**：Caption 词与词之间固定 0.3em 词距，中文里 `*高亮*` 前后会出现"空格"——`engine/ui/ux.tsx` words 的 `glue` 字段（与前一词不留词距），work 内 `capL()` 按"源文本里有没有空格"打 glue。中文字幕 46px 全句不换行，长句仍用 " | " 拆段。

## 6. 协作

- 工程虽是 git 仓库，但多个会话并行时覆盖即丢失：写文件前 `ls` 目标目录，不用 `cat >` 盲写已存在的文件。曾有两个会话同时做 keyviz→kbd 迁移，`kbd/index.ts` 被互相覆盖。
- 动共享目录（`engine/`、`youart/`、`capture/`、AGENTS.md、`works/_template/`、`works/registry.ts`）前先 `ListAgents`；有 busy 的同伴先分工，明确各自拥有的路径。
