# CAPTURE-LOG — ep1-basics（2026-09-03）

账号：用户本人（headed Chrome，profile 在 out/chrome-profile）。为不动用户原项目，新建项目 **"EP1 Basics"**
（youart.ai/workflow/d933cf96-fe7e-4660-9189-3720611bdf8f）作为舞台。

## 服务端影响
- 新建项目 EP1 Basics（≡ → New Project）。探索期反复增删节点/连线、Auto Layout、撤销；采集期最终保留 4 个节点：
  Image Loader（空）、Text（空）、Seedance 2.5 Omni Reference、Image Loader（从 Media Assets 拖入的 yanami 图）+ 2 条连线。
- 无任何生成运行，credits 不变（3,608）。
- 账号偏好 Settings → Preferences 的 Background Color / Pattern 在采集 §7 时改为 Lighter + Grid，随后**已恢复为 Default + Dots**（脚本内校验 `.react-flow` 底色）。
- 用户原项目 "Untitled Project" 在探索早期被双击展开过 Image Loader（显示态），未改数据；后续未再触碰。

## 快照（49 个，public/captures-html/ep1-*.html）
§1 empty/menu/submenu/search/node1/dbl/search2/node2/ctx/ctxmenu/search3/node3 ·
§2 start/edge1/edge2/edgehover/edgesel(弃用)/deleted/edge2b ·
§3 collapsed1/collapsed2/expanded2/allcollapsed/ctx/allexpanded/autocollapse ·
§4 start/focus1/fitall/sel2/fit2/fitall2 · §5 messy/arranged/submenu/vertical/horizontal/fit ·
§6 panel/panelhover/dropped/fit/assetspage · §7 settings/prefs/lighter/grid/result/restored。
每个快照的 meta 含 React Flow 真值（viewport / 节点 transform / handle 位置 / 连线），见 `docs/ep1-basics/capture-data.json`。
字体已本地化（`scripts/localize-fonts.mjs`）。采集脚本：`scripts/plans/ep1-s1.sh`、`ep1-s2s3.sh`、`ep1-s4s5.sh`、`ep1-s6s7.sh`（可重放）。

## 数据口径
- 画面含用户名首字母头像 "E"、credits 3,608、项目名 EP1 Basics；Settings 快照里邮箱已由 mhtml 脱敏为 youart.demo@example.com，显示名 Enrong Xie 保留（用户本人账号）。
- Media Assets / /assets 页面展示用户自己的素材（yanami 图、UGC 视频缩略图）。
- 采集失误留档：§4 首轮把 "F" 打进了 Text 节点（"f"/"ff"），已清空并重采；§6 首次拖放落在面板上/压住节点，已重采。

## 实测产品行为（写进教程的依据）
- "+" 面板是悬停面板（鼠标离开即关），结果行 `button[draggable=true]`：点击 = 在光标处建节点，拖到画布 = 在落点建节点；Expand Menu 可固定。
- 双击空白 / 右键 New Node 打开同一节点菜单（出现在光标处）。
- 连线：handle 到 handle 拖拽；悬停连线中点出现 "Delete connection" 按钮。
- 双击节点 = Focus（viewport 缩放 1.2 居中）；F = Fit to view（有选中则只框选中）；⌘F 无效。
- ⌘[ / ⌘] 收起/展开选中节点；右键画布 Expand/Collapse All Nodes 按当前状态切换文案。
- ⌘A + L 自动排版（toast "Nodes arranged"）；右键 Auto Layout ▸ Default / Align Horizontally / Align Vertically。
- Media Assets 缩略图支持 HTML5 拖放（puppeteer 需 setDragInterception）。
- ⌘, 打开 Settings；Preferences → Background Color 改 `.react-flow` 底色（黑 → oklch(0.205)），Pattern 切 dots/grid/none。


## 2026-09-09 补采（§4 v2）
- 服务端影响：项目 EP1 Basics 里把 3 个节点移回采集初始位（Image Loader 480,160 / Text 480,520 / Seedance 920,200，MCP move_nodes），
  **删除**了 §6 拖入的第 4 个节点 Image Loader-4c36e1ad（yanami 图，素材本身仍在 Media Assets）。无生成运行。当前项目：3 节点 + 2 连线，
  视口停在 fit-all（scale 1.79）。账号偏好未动。
- 新快照 5 个：`ep1-s4b-start`（Fit View 后按 4 次缩小，scale 0.862）→ `ep1-s4b-sel2`（Shift 框选 Image Loader + Text）→ `ep1-s4b-fit2`（F，scale 1，
  与 9-03 的 fit2 完全一致）→ `ep1-s4b-focus1`（双击聚焦，scale 1.2，与旧 focus1 一致）→ `ep1-s4b-fitall`（按钮，scale 1.79；Seedance 节点变矮所以比旧 1.61 更大）。
  脚本 `scripts/plans/ep1-s4b.sh`。旧 `ep1-s4-*` 快照保留未删。
- 实测：多选状态下双击节点**不会**聚焦，必须先点空白取消选择再双击（编排里保留这次空白点击）。
- 数据口径：账号积分已从 3,608 变为 1,078，5 个新快照 HTML 里的 `>1,078<` 已替换为 `>3,608<` 与旧快照一致；QA png（out/qa/htmlmat）仍是 1,078。
- 产品 UI 变化（与 9-03 快照不同）：Seedance 2.5 节点改为 Prompt → Sources（Image1 槽）布局，高度 570 → 493；聊天输入栏出现 "Multi-Shot Video Sequence" 技能芯片；
  框选后选区工具栏下方会弹出 Default/Horizontal/Vertical 悬停子工具栏（编排里 patchCss 隐藏）。其余章节沿用旧快照。
- 环境：browser-daemon 5 天前的 Chrome 已失联，重启后登录态仍有效。

## 2026-09-10 配音（服务端影响）
- 新建项目 "EP1 Basics · VO (tutorial voiceover)"（c3ae2a81-2778-4de5-8908-e5e4a61254c8），34 个 ElevenLabs v3 节点，无连线。跑了 2 次（全量 + 8 节点 scoped），
  合计约 40 积分。EP1 Basics 舞台项目未动。
