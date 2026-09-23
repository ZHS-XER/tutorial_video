# CAPTURE-LOG — ep1-basics（v3 重做，2026-09-11）

账号：用户本人（常驻无头 Chrome，profile 在 `.cache/chrome-profile`，英文界面 youart.ai）。视口 1536×864（125% 规则），右侧 Agent 聊天栏采集前收起。

## 舞台与素材
- **舞台项目 "EP1 Basics"** `d97e9e57-06c6-485c-b3f8-d9a54676dc85`：本次在 /workflows 页真点 New Workflow 新建（S1 的列表页快照就是这次点击前的页面）。
  采集期间标题保持产品默认 "Untitled Project"，采完后 MCP 改名为 "EP1 Basics"。旧的 v2.3 舞台 "EP1 Basics"（d933cf96-…）未动，现在账号里有两个同名项目。
- **素材项目 "ep1-素材"** `357a2788-6c79-47d9-a147-64b2e30152f1`（用户预先跑好：Image Loader → GPT Image 2 → Seedance 2.5，Text 汇入）。教程不重跑，结果节点全部来自这里。
  为了和舞台画面一致做了三处改动：① GPT Image 2 / Text 两个节点的 prompt 改成教程里的短句（原长提示词备份在 `out/plan/canvas-v67.json`，产物未受影响）；
  ② 四个节点多次 `move_nodes`（标准布局 LoadImage 470,100 / GPT 860,100 / Seedance 1230,100 / Text 470,560；S5 之后的整洁布局 490,153 / 850,-8 / 1210,85 / 850,777），采完停在整洁布局；
  ③ LoadImage 的 display_name "youart_watermark_black_bg_white" 清空（否则节点上方显示文件名标签）。S5 采集时按了 L / Horizontal / Vertical，都是产品真实排版结果。
  S6 拖入的两个 Image Loader（61dfc6cf / e1d5c794）已删除。S7 改过本项目的 Background Color / Pattern，采完恢复 Default + Dots（脚本内校验 `.react-flow` 底色 rgb(0,0,0) 与 dots pattern）。
- **VO 项目 "EP1 Basics · VO v3 (tutorial voiceover, 2026-09-11)"** `8bd93552-1bfa-4d34-b1de-744ed4b2eb58`：4 个声线测试节点 + 55 个 ElevenLabs v3 台词节点，跑了 1 次全量 + 5 次 scoped 重跑（service.busy 限流，每次 ≤16 节点较稳），合计约 190 积分。
- 上传：logo 文件经 `create_asset_upload` → PUT → `set_upload_node_asset` 写进舞台 Image Loader（系统文件选择框无法采集；`page.waitForFileChooser` 在该上传区不触发）。
- 生成：全程零生成运行。舞台 GPT 节点在侦察时被误触过一次 Run（Prompt 为空直接失败，0 积分）。

## 快照（64 个，works/ep1-basics/captures/，meta 在 captures/meta/）
- 舞台 `s1-*`：workflows（列表页，个人项目卡 DOM 移除只留 New Workflow）/ empty / menu / submenu / search / node1 / loaded / dbl / dblsearch / node2
- 舞台 `s2-*`：edge1 / edgehover / deleted / edge1b / prompt-focus / prompt / dbltext / dbltextsearch / textnode / text-focus / textfilled / dblvideo / dblvideosearch / videonode / edge2 / edge3 / built（sel2、prompt-typing 弃用）
- 素材 `m-*`：built / c1 / c2 / x2 / ctx1 / allcollapsed / ctx2 / allexpanded / ctx3 / autoc / zoomout / sel2 / fit2 / focus1 / zoommenu / fitall / selall / arranged / almenu / horizontal / vertical / default（弃用）/ tidy / infomenu / shortcuts / assets / assetshover / assetdropped / assetspage / settings / prefs / prefs-color / prefs-grid / result / fitall2（弃用）
- 素材快照后处理：标题 `ep1-素材` → `Untitled Project`，积分 `10,6xx` → `10,673`（与舞台快照一致；VO 生成花掉的积分导致数字不同）。
- 采集计划全部是 `plans/*.mjs`（单 puppeteer 会话），`node capture/run.mjs works/ep1-basics/plans/<plan>.mjs` 可重放：s1a / s1b / s1c / s2a–s2d / m1–m6（m4b 是 /assets 页面补采）。中间靠 MCP 补位（挪节点、清 prompt、删多余节点）。

## 数据口径
- 画面含用户头像 "E"、积分 10,673、项目名 Untitled Project；Settings 里邮箱由 mhtml 脱敏为 youart.demo@example.com，显示名 Enrong Xie 保留。
- /workflows 列表页个人项目卡采集时 DOM 移除；Media Assets 面板与 /assets 页在成片里用 patchCss 只留教程三项（视频 / 店招图 / logo）。
- S7 快照里多出的拖入节点（LoadImage-e1d5c794）用 patchCss 隐藏；s2-edgehover / s2-deleted 里残留的 Quality 下拉（radix popper）同样隐藏。

## 实测产品行为（写进教程的依据）
- 双击空白：光标处弹紧凑节点搜索框；双击节点**主体**（参数区）= Focus（视口以该节点 fit，约 0.94×）；双击标题栏无效（会碰到模型切换器）。
- F：有选中时 fit 到选中（上限 1×）；**无选中时按 F 视口不变**（快捷键面板写着 Fit to view F，但实测无效），全览用缩放菜单里的 Fit view。教程 s4-4 据此改词。
- 连线拖到目标节点主体任意位置即自动匹配端口（LoadImage→GPT 接 edge-in-1；GPT→Seedance 接 first_frame；Text→Seedance 接 text_input-1）。
- 多选后没有"共同输出接口"，从选中节点输出口拖出只连一条；教程改为逐条连接。
- 右键空白菜单含 Collapse/Expand All Nodes 与 Auto-collapse nodes（开关），Auto-collapse 开启时全部未选中节点立即收起。Expand/Collapse All 没有独立快捷键。
- L 自动排版同时 fit view；选区工具栏 Auto Layout 悬停出 Default / Horizontal / Vertical 三个图标按钮。
- 页面加载时产品会 fitView（0.83×），采集用 React Flow store 的 d3Zoom.transform 真·归零到 translate(0,0) scale(1)（见 `plans/_lib.mjs` setViewport），缩放标签因此一致。
- 结果预览渲染在节点卡片**上方**，节点 position = 预览顶部；Image Loader 上传后 position 上移 160，GPT/Seedance 结果预览 280 高。
- 节点左上/右上悬停工具栏（Grid Split / Upscale … / Play video）以 opacity 0 存在于快照 DOM，不影响画面。

## v3.1 补采（2026-09-12）
- `plans/m7.mjs` → 快照 **m-prefs-edit**：素材项目 Preferences 里把背景改成浅色 + Grid 后点 Download Filename 的 Edit，得到积木编辑态（Name / Timestamp / Index / YouArt 积木 + Add block + Connector，右上 Done）。采完点 Done、恢复默认色 + Dots（脚本内校验）。邮箱由 mhtml 脱敏、标题/积分由 patchMaterialHtml 回填。
- `plans/m8.mjs` → 快照 **m-horizontal-menu**（Horizontal 布局下悬停 Auto Layout 的菜单态）。实测产品 Auto Layout 的结果**不可复现**：同一组节点这次 Horizontal 排成 470/830/1190/1550、fit 后 118%，与 9-11 的 m-horizontal（490/850/1210/1570，85%）不同，Image Loader 还被排到画面左侧外；点 Default 也没回到 9-11 的整洁布局。该快照只取其菜单 DOM（`src/scenes/_almenu.ts`）注入到 m-horizontal 上用，本身不进成片。
- 采完用 MCP `move_nodes` 把素材项目四节点挪回整洁布局（490,153 / 850,-8 / 1210,85 / 850,777），与 HANDOFF 一致。
- VO 项目 8bd93552-…：55 个 ElevenLabs 节点的 dialogue 改为 voice Chris（iP95p4xoKVk53GoZ742B），新增 1 个节点（s7-5 "Click Edit…"，node-36a792a6…）；分 4 批 ×14 节点 + 2 批补跑（每批 14 里各有 1–3 个 `workflow_node_failed`，scoped 重跑即好），6 个 run id 记在 `out/vo/nodes.json`。约 60 积分。

## v3.2 补采（2026-09-12 下午）
- 舞台项目 d97e9e57：MCP `add_nodes` 3 枚 LoadImage（display_name = 文件名）→ `create_asset_upload` + PUT → `set_upload_node_asset`（black-tee / grey-hoodie / canvas-tote，Nano Banana Pro 生成的样图）。
  上传后产品把节点 position 上移 288（预览高 280 + 8），之后再 move_nodes 就按 position 原样摆——所以先上传再决定位置，或按"预览顶 = position"直接给 y=100。
  舞台项目的 **Auto-collapse 处于开启**（账号级偏好，S3 采集时开过没关？），未选中节点全部收起；`plans/s1d.mjs` 右键 → Auto-collapse nodes 关掉再采，采完开回去。快照 **s1-files**，标题 `EP1 Basics`→`Untitled Project`、积分 10,5xx→10,673 由脚本回填；toast "Auto-collapse turned off" 成片 patchCss 隐藏。采完 `delete_nodes` 删掉三枚节点。
- Finder 截图：`/tmp/Brand photos` 放三张样图，AppleScript 开 Finder 窗口（icon view、sidebar width 0、bounds 200,150→1000,650、icon size 96、按名排序），`screencapture -x -R 200,150,800,500` 三态各一张，PIL 抠圆角 26px 存 `captures/assets/finder/finder-{1,2,3}.png`（2x，1600×1000）。图标中心（窗口 pt）：tee (72,135)、tote (210,135)、hoodie (348,135)。
- VO 项目：新增 3 句（s1-7b/7c/7d，run 6fb02562），3 个 Nano Banana Pro 节点（run 38a3855f，1K 1:1 各 1 张）。

## v3.3 补采（2026-09-12 傍晚，舞台项目）
- `plans/s2e.mjs`：E3 状态下 ⌃+拖竖线 (1185,430)→(1185,780) 切断进 Seedance 的两条线 → 快照 **s2-cut**（Seedance 失去输入后 Frames 区与提示词芯片消失）。舞台 Auto-collapse 仍是开启态，脚本先关后开。
- `plans/s2f.mjs` / `s2g.mjs` / `s2h.mjs`：多选一起连线试验，全部只连一条（详见 SCRIPT.md v3.3）。s2-multisel / s2-multi 两张快照是失败试验产物，不进成片。
  实测顺带确认：点节点标题栏**右半**才会选中（x+205），点左半会碰到模型切换器；⇧框选可靠；⌘Z 撤销一步连线有效。
- 试验后舞台连线被撤销掉两条，用 MCP `add_edges` 补回 GPT→Seedance first_frame、Text→Seedance text_input-1；舞台现在与 E3 一致。
- VO：新增 s2-12b / s2-12c，s8-1 改词重生成（run abf2e5bb）。旧 s8-1 音频留在 out/vo/brian/s8-1-chris-thatsthebasics.mp3。

## v3.4（2026-09-13）
- `plans/s2i.mjs`：按用户截图找选区右侧的蓝色共用输出点——本机无头 Chrome 里的产品仍是旧版（GPT 节点是 "Sources" 布局，用户截图是 "参考图片 1/16" 新布局），选区矩形存在但没有该点。重采了 **s2-multisel**（切断态 + GPT/Text 多选 + 选区工具栏）供成片用；蓝点与连线为 overlay 复刻。试验后 MCP `add_edges` 补回两条线，舞台仍与 E3 一致。
- VO：s2-12c 重写重生成（run 2d75f718）。

## v3.5（2026-09-13 下午，素材项目）
- `plans/m9.mjs`（半途报错）+ `m9b.mjs`：Preferences → Edit → 点 Timestamp ✕ → 快照 **m-prefs-edit2** → 抓 YouArt 积木拖柄用真实鼠标拖到 Name 左侧 → 快照 **m-prefs-edit3**（预览 YouArt_Hero_shot_03.png）→ Done → 快照 **m-prefs-done**。积木编辑**即时保存**（m9 失败后重进仍是删掉 Timestamp 的状态），采完 Edit → Reset → Done 恢复默认文件名，并恢复默认色 + Dots（脚本校验）。
- YouArt 积木是自定义文本块，label 在 `<input>` 里，innerText 为空——按 class `rounded-md border bg-background p-1` 找块。三张快照积分 10,498 手动 sed 成 10,673（patchMaterialHtml 只认 10,6xx）。
- VO：s7-5 改词重生成，新增 s7-5b / s7-5c（run 1c6e6b80）。

## v3.6（2026-09-17，舞台项目）
- 采集浏览器 UA 改为普通 Chrome（`capture/browser-daemon.mjs`）后产品渲染新版节点 UI；`plans/s2j.mjs`：⌃拖切断两条进 Seedance 的线 → ⇧框选 GPT + Text → 快照 **s2-multisel-new**（含共用输出点 `button[data-group-output-handle]`，位置 (1164,595)）→ 拖圆点到 Seedance 主体 → 两条线同时接上（first_frame / text_input-1）→ 快照 **s2-multi-new** → 取消选中。圆点 DOM 与计算样式存 `out/plan/shared-dot.json`。
- 侦察阶段多次切线 / 试选，舞台连线用 MCP `add_edges` 补回两次（canvas v84、v97），最终由 s2j 真拖接回，舞台与 E3 一致（3 条边）。误点收起过 Text 节点，已 ⌘] 展开。
- 期间清过一次 youart.ai 的 localStorage / IndexedDB（排查 UI 差异），登录 cookie 未动；账号偏好未改。素材项目 357a2788 只做了只读侦察（选中 / 取消选中），未改动。
