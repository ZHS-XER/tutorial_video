# HANDOFF — ep1-basics v3.1 接手说明（2026-09-12 修改轮之后）

v3.2 成片：`out/ep1-basics.mp4` 5:29 带配音（Chris；v3.1 为 5:14，多了 Finder 拖拽/粘贴一段），`out/ep1-basics-novo.mp4` 无配音；v3.0（Brian，5:52）留在 `out/ep1-basics-v3.0-brian.mp4`。修改内容见 SCRIPT.md「v3.1 修改轮」。这份文档给下一轮"按用户反馈修改"用：先读本文，再读 `SCRIPT.md`（台词 + 制作说明）与 `CAPTURE-LOG.md`（服务端痕迹 + 实测产品行为），工程通用规范与坑在根目录 `AGENTS.md`（"EP1 v3 采集经验"一节是本轮新增）。

## 1. 结构一句话
`src/Main.tsx` 把 片头(S0Title) + 7×[章节卡(Chapter) + 场景 S1…S7] + 结尾(Outro) 串起来；`src/timeline.ts` 从各场景导出的 `Sx_DUR` 推段位；每个场景文件自带 台词节拍 / 光标编排 / 相机 / DOM 驱动 / 提示环 / 键帽，Main 只做平移与叠加。

## 2. 改哪类东西去哪个文件
| 用户反馈 | 改哪里 | 要不要重采 / 重配音 |
|---|---|---|
| 台词措辞 | `out/vo/lines.json`（caption + vo）→ `python` 重生成 `src/lines.gen.ts`；MCP `update_node_params` 改 VO 项目对应节点的 dialogue → `run_project_workflow scope=node_ids` → 下载 mp3 到 `audio/vo/<id>.mp3` → 重生成 `src/vo.gen.ts`（时长 ffprobe×30+2）。节点 id 映射在 `out/vo/nodes.json` | 重配音该句 |
| 某一步太快/太慢 | 场景文件里 `B` 节拍表：`V(id, k)` = 这句配音结束后 k 帧，`P(id, frac)` = 这句配音进行到 frac；动作要落在配音里/末尾就调这两个；`seqLines` 的 `extra[id]` 是这句配音结束后额外留的帧数（要 ≥ 动作结束 + 落定） | 否 |
| 光标路线 | 一律 `.go(f, aim)`（f−dur 前原地不动，dur 帧直达，默认按距离 12–24 帧）；只有拖拽用 `.click(f).cur(f+N, target)`。**不要**写相隔很久的两个 `.cur()`，那会整段慢慢漂移 | 否 |
| 连线目标节点氛围光 / 点选选中框 | `nodeGlow(nodeId, from, to)`（可传多个窗口）/ `nodeSelected(nodeId, from)`，见 `youart/drivesFlow.ts` | 否 |
| 相机推得不够近/偏 | 场景末尾 `.zoomIn/.panTo/.cam(...)`，锚点一律用 `focus(cx, cy, z)`（`_shared.tsx`，ScreenStage 是绕锚点缩放模型） | 否 |
| 字幕挡住底部工具栏 | `capsOf(t, IDS, 10, ['s5-3', ...])` 第四参数列出要放顶部的句 id | 否 |
| 提示环位置/时长 | 场景里 `rings: RingCue[]`（`at` 一般 = 点击帧−10，`dur` 14 点击后即消失） | 否 |
| 键帽 | 场景里 `keys: KeyCue[]`（K 帧压下，产品状态在 K+6 切） | 否 |
| 换 / 补一个产品状态 | 写或改 `plans/*.mjs`，`node capture/run.mjs works/ep1-basics/plans/<plan>.mjs`；素材项目快照后要 `patchMaterialHtml`（标题、积分） | 重采该快照 |
| 片头 / 章节卡 / 结尾样式 | `scenes/S0Title.tsx` / `Chapter.tsx` / `Outro.tsx` | 否 |
| 章节标题、副标题 | `src/timeline.ts` 的 `CHAPTERS` | 否 |

## 3. 场景 ↔ 快照 slot（前缀 `ep1-basics-`）
- **S1Create**（舞台）：s1-workflows → s1-empty → s1-menu → s1-submenu → s1-search → s1-node1（patchCss 隐藏面板）→ s1-loaded → s1-files（拖入 1 枚，hoodie/tote 隐藏）→ s1-files（粘贴后 3 枚）→ s1-loaded（Delete 之后）→ s1-dbl → s1-dblsearch → s1-node2。Finder 窗口/文件影子是 S1Create.tsx 里的 overlay 组件，截图在 captures/assets/finder/
- **S2Connect**（舞台→素材）：s1-node2 → s2-edge1 → s2-edgehover → s2-deleted → s2-edge1 → s2-prompt-focus → s2-prompt（假运行 nodeRunning + injectNodePreview 注入店招图）→ s2-dbltext → s2-dbltextsearch → s2-textnode → s2-text-focus → s2-textfilled → s2-dblvideo → s2-dblvideosearch → s2-videonode → s2-edge2 → s2-edge3 → s2-built（Run All 假运行）→ **m-built**（素材项目，视频用 OffthreadVideo 叠在 1230,100,280×280）。Text/Seedance 尚未"创建"的阶段用 patchCss HIDE_TV / HIDE_V 隐藏。
- **S3Collapse**（素材）：m-built → m-c1 → m-c2 → m-x2 → m-ctx1 → m-allcollapsed → m-ctx2 → m-allexpanded → m-ctx3 → m-autoc
- **S4Focus**（素材）：m-zoomout → m-sel2 → m-fit2 → m-focus1 → m-zoommenu → m-fitall（viewportLerp 复刻视口变化）
- **S5Layout**（素材）：m-fitall → m-selall（工具栏隐藏）→ m-arranged → m-tidy（取消选中）→ m-arranged（再 ⌘A）→ m-almenu → m-horizontal（+ injectAlMenu 注入菜单）→ m-vertical → m-arranged（HIDE_TOAST）→ m-tidy → m-infomenu → m-shortcuts → m-tidy。选中态 cut 统一 patch `SEL_CSS`（隐藏底部 Run 胶囊 + 菜单向上弹）
- **S6Assets**（素材）：m-tidy → m-assets（HIDE_GRID 只留 3 格）→ m-assetshover → m-assetdropped（MOVE_DROPPED 把新节点挪到 Seedance 右侧）→ m-assetspage（HIDE_PAGE 只留 Today 前三）
- **S7Prefs**（素材）：m-tidy → m-settings → m-prefs → m-prefs-color → m-prefs-grid → m-prefs-edit（Edit 积木编辑态）→ m-prefs-grid（Done）→ m-result（全部 HIDE_EXTRA 隐藏多出的 LoadImage-e1d5c794）
- 舞台节点 id：LoadImage-170c7710 / GptImage2Generate-d73a6f20 / Text-ecfad1d4 / SeedancePro25VideoGenerate-a934527d；素材节点 id 见 CAPTURE-LOG。
- 快照页面坐标 = 1536×864 CSS px，viewport translate(0,0) scale(1)（素材 S4–S7 的视口各不相同，看 `captures/meta/<slot>.json` 的 `flow.viewport`）。

## 4. 时间线（TL 帧，30fps；改动后会变，用 `python3 out/plan/tl.py` 重算，它复刻了各场景的 extra/gap，改场景后要同步改它）
title 0–343 · ch1 343 · s1 418–2282 · ch2 · s2 2357–4597 · ch3 · s3 4672–5846 · ch4 · s4 5921–6713 · ch5 · s5 6788–8048 · ch6 · s6 8123–8598 · ch7 · s7 8673–9473 · outro 9473–9863（≈5:29）。
各句起点：`out/plan/tl.py` 输出的 `Sx lines`。

## 5. 看效果与出片
- 单帧：`npm run still ep1-basics <frame>` → `out/qa/f<frame>.png`（约 60–100s/张，可 4 张并行）。
- 全片：`(nohup npm run -s render ep1-basics > out/render.log 2>&1 &)`，约 45–60 min（v3.1 实测起步估算）（后台命令有 10 分钟上限会被杀，必须 nohup），每 10 分钟 `tail out/render.log` 看进度；渲染期间不要改 src。
- 出片后：`zsh out/plan/post.sh`（抽 9 张 storyboard 帧到 `out/storyboard/`，只渲音轨合成 novo 版）。
- 飞书：v3.2 文档已于 2026-09-12 16:2x 推上（revision 18；期间遇过一次 lark-cli "keychain access blocked"，钥匙串解锁后重跑即成功）。改 `out/plan/storyboard-final.xml` 后 `lark-cli docs +update --doc HTOldVhKaoMf0SxdOnOlZ0oigvb --command overwrite --doc-format xml --content "@./works/ep1-basics/out/plan/storyboard-final.xml" --as user`（wiki 节点 DFZhwKC3Ii29sqkdUn1lG0zug4d）。

## 6. 采集补拍要点
- 常驻 Chrome：`.cache/browser-ws.txt`，死了就 `npm run browser`。计划文件见 `plans/`，共用助手 `plans/_lib.mjs`（STAGE / MATERIAL URL、`prep()` 收聊天栏并真·归零视口、`setViewport`、`patchMaterialHtml`）。
- 素材项目当前停在"整洁排版"位置（490,153 / 850,-8 / 1210,85 / 850,777）；采 S3–S4 状态前先 MCP `move_nodes` 回标准布局（470,100 / 860,100 / 1230,100 / 470,560）。
- 取消选中点 (250,780)；双击要点节点主体；右键用 `h.right`；HTML5 拖放用 `h.dnd` 且落点必须在面板外。

## 7. v3.1 已按用户 17 条反馈改过的点（复查时对照）
片头示例视频多停 0.75s；s1-1 不念网址；光标全片 go() 直达不漂移、无摆动；S1/S6/S7 不推近、S2 只推 ✕；双击点离节点更远；连线目标节点蓝色氛围光；S3 点选立刻出选中框；S5 字幕顶部 + 隐藏底部胶囊 + 重新选中再点 Auto Layout + 菜单向上弹 + Horizontal 下再次悬停有菜单；S6 拖入节点不重叠、不缩放；S7 ⌘, 与 Preferences 分开、新增 Edit 演示；配音 Chris。

## 8. 已知可再打磨的点（未被用户提出，仅备忘）
- S2 结尾 "That's a complete workflow" 时镜头收回 z=1，四节点底部略被字幕压住。
- m-focus1 快照里 GPT 节点上方带着图片工具悬浮条（产品真实 UI）。
- 片头 7 步轨道文字 27px，在 1080p 偏小。
- 结尾视频从头播（空招牌起），"That's the basics." 出现时 logo 还没完全长出来；可把 Outro 的 OffthreadVideo `startFrom` 调到 ~120 帧。
- S5 Vertical 排版后产品 fit 到 36%，节点很小（产品行为），只作方向示意。
- m-horizontal-menu 快照布局与 m-horizontal 不一致（产品 Auto Layout 不可复现），只借了菜单 DOM。
