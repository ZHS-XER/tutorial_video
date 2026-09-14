# EP1 Workflow basics｜Storyboard

版本：v3.3 · 2026-09-12 · 约 5 分 53 秒 · 1920×1080 · 英文字幕 + 英文配音（另有无配音版）

## 这一集教什么

EP1 讲 YouArt 工作流画布的基础操作。整集有一条主线：把 YouArt 的 logo 做成一段"店招 logo 浮现"的短视频。观众跟着做完七节，画布上就搭出一条完整的"参考图 → 图像模型 → 文字提示 → 视频模型"工作流，并在节点里看到成片。大纲的八个知识点合成七节，全部挂在这条主线上。

教学上的六条原则贯穿全片：每一步先说清位置和目的，光标在话快说完时才直达目标点下去，讲话期间原地不动，动作完成后停一下；只有右键菜单、✕、缩放菜单这类小目标才推近镜头；字幕都是带位置的祈使句；每个快捷键先演菜单路径再演快捷键；点击目标前先亮一圈品牌黄提示环；每节结尾一句小结；片尾一张快捷键总表。

## 教学覆盖

对照飞书大纲 EP1 的八条：1 创建节点与媒体类型（含文件拖入、⌘V 粘贴多文件、删除节点）、2 连接接口（颜色、自动匹配、断开重连、⌃拖切线、多选一起连线）、3 展开收起（箭头、⌘[ ⌘]、全部、自动收起）、4 Focus view（多选 F、双击）、5 Layout（横向纵向）、6 查看快捷键（并入第 5 节）、7 复用素材（面板拖拽、Assets 页）、8 自定义画布背景与下载文件名，全部覆盖。

## 逐节

### 片头（0:00–0:15）

![](../out/storyboard/s0.png)

产品同款点阵画布上，迷你工作流自己长出来（Image → Image model，Text 汇入 → Video model），随后徽标 "YouArt Tutorial · EP 01" 与标题 "Workflow basics" 显影；切到第二屏，七步内容以竖排清单从上到下点亮。迷你 workflow 与大标题各停约 3 秒。片头和结尾的配音句也有字幕，全片字幕统一 46px、不换行，长句拆成两三段先后显示。最后 5 秒插入成片视频卡片，配音说明这一集要做出来的东西。

### 第 1 节 · Create a node（0:17–1:19）

![](../out/storyboard/s1.png)

教了什么：打开 Workflows 页点 New Workflow 新建工作流；左侧 + 打开节点菜单，节点按媒体类型分组，悬停分组看子菜单；菜单支持搜索；把 Image Loader 拖到画布并上传 logo；另外两种加图方式：直接把图片文件从 Finder 拖到画布，或在 Finder 里复制文件回画布 ⌘V（一次多个也行）；不需要的节点选中后按 Delete 删除；双击画布空白处也能在光标处开菜单，搜索并创建 GPT Image 2。小结：两种加节点的方式，+ 菜单或双击画布。

画面：列表页 → 空画布 → + 菜单（全屏不推近）→ Image models 子菜单 → 搜索 image loader → 结果行拖到画布（拖影跟随）→ 点上传区、logo 淡入 → Finder 窗口滑入，把 black-tee.jpg 拖到画布，落下即成新的 Image Loader → Finder 里点选 canvas-tote、⇧ 加选 grey-hoodie，⌘C，回到画布 ⌘V，两枚节点同时出现 → ⇧ 点选三枚新节点，Delete 删掉 → 双击空白弹出紧凑搜索框 → 搜 gpt image → GPT Image 2 节点出现。

### 第 2 节 · Connect nodes（1:22–2:51）

![](../out/storyboard/s2.png)

教了什么：端口颜色对应媒体类型（绿文字、蓝图片、紫视频、粉音频）；连线从输出口拖到目标节点任意位置就会自动接到匹配的输入，不必对准小圆点；悬停连线点 ✕ 断开，再连一次；在提示词框写提示词；点 Run，结果直接出现在节点上方；再加 Text 节点和 Seedance 2.5 视频模型，图片接首帧、文字接提示词；按住 Control 拖一条线划过连线就能切断；选中两个源节点后选区右侧出现共用输出点，拖它到 Seedance 一次把两条线都接上；点底部 Run All，视频在节点里播放。小结：一条完整工作流 = 参考图、图像模型、文字提示、视频模型。

画面：右上大号图例卡（PORT COLORS：Text 绿 / Image 蓝 / Video 紫 / Audio 粉）说明四种颜色 → 拖线到 GPT 主体，节点外沿亮起淡蓝氛围光、落点后目标端口亮环→ 镜头推近，悬停连线出现 ✕ → 断开、重连（全节唯一一次推近） → 逐字输入提示词 → Run 按钮变 Running → 店招图从模糊显影到节点上方 → 双击建 Text 并输入运动提示词 → 双击建 Seedance 2.5 → 两条连线各接到匹配端口 → ⌃ 拖一条红色虚线划过两条连线，连线断开、Seedance 的输入区收起 → 点选 GPT Image 2、⇧ 加选 Text，选区右侧弹出蓝色共用输出点 → 拖它到 Seedance，两条线同时接回 → Run All → 切到跑完的画布，Seedance 节点里视频开始播放。

### 第 3 节 · Expand & collapse（2:53–3:32）

![](../out/storyboard/s3.png)

教了什么：点节点右上角箭头收起；选中节点后 ⌘[ 收起、⌘] 展开，与箭头效果相同；右键画布 Collapse All Nodes 一次收起全部，再右键 Expand All Nodes 展开；右键菜单里的 Auto-collapse 开关会自动收起没在用的节点。小结：箭头、快捷键、右键菜单三种方式做同一件事。

画面（全程不推近，只在右键菜单推近一次）：四个带结果的节点占满画布 → 点 Image Loader 箭头收起 → 点选 GPT Image 2（立刻出现蓝色选中框），键帽 ⌘[ 压下、节点收起，⌘] 展开 → 右键空白，菜单推近，点 Collapse All Nodes，四个节点全部收成一行 → 右键 Expand All Nodes 恢复 → 右键点 Auto-collapse nodes，未选中的节点自动收起。

### 第 4 节 · Focus view（3:35–4:01）

![](../out/storyboard/s4.png)

教了什么：缩小视图看不清时，拖选框多选几个节点，按 F 只把它们框进画面；双击单个节点主体聚焦到它；没有选中时用左下角缩放菜单里的 Fit view 看全图。小结：F 框住你选中的，Fit view 把全图带回来。

画面：画布缩到 60% → ⇧ 拖选框圈住 Image Loader 与 Text（键帽 ⇧ Drag）→ 按 F，视口平滑放大到两节点填满 → 取消选择，双击 GPT Image 2 主体，视口再聚焦到它 → 点左下 100% 打开缩放菜单，点 Fit view，全图回到画面。

### 第 5 节 · Auto layout（4:04–4:46）

![](../out/storyboard/s5.png)

教了什么：⌘A 全选，按 L 自动排版（节点平滑滑到新位置、视口同时适配）；选区工具栏的 Auto Layout 提供横向、纵向两种方向；相连的节点排版后仍靠在一起；忘了快捷键就点左下角 (i) 按钮，选 Keyboard shortcuts，面板列出全部快捷键。

画面：⌘A 键帽、四个节点选中 → L，节点滑动到整齐位置 → 点空白取消选中，再 ⌘A，选区工具栏浮出 → 悬停 Auto Layout，菜单向上弹出，点 Horizontal，四个节点排成一行 → 再悬停 Auto Layout，点 Vertical 排成一列 → 回到 Default，取消选中 → 点 (i)，点 Keyboard shortcuts，面板推近停留 → Esc 关闭。字幕在顶部，选中态期间底部中央 Run 胶囊隐藏。

### 第 6 节 · Reuse your assets（4:48–5:04）

![](../out/storyboard/s6.png)

教了什么：生成过的图片和视频都在左侧 Media Assets 面板；把素材拖到画布，就得到一个装好素材的新 Image Loader；同一素材库也在 /assets 页面。

画面：点左侧 Media Assets，面板滑出，里面是本集的视频、店招图和 logo → 悬停店招图 → 拖到 Seedance 右侧空位，拖影跟随，落点生成新的 Image Loader 节点（不与已有节点重叠，全节不推近） → 切到 /assets 页面，Today 分组里同样三项。

### 第 7 节 · Preferences（5:06–5:40）

![](../out/storyboard/s7.png)

教了什么：⌘, 打开 Settings，Preferences 里改画布背景色和图案；同一页可以设置下载文件的命名方式，点 Edit 进入积木编辑器，文件名由 Name / Timestamp / Index / YouArt 等积木拼成：删掉 Timestamp，把 YouArt 拖到最前，预览立刻变成 YouArt_Hero_shot_03.png，Done 保存；Esc 回到画布看效果。

画面：⌘, 键帽，Settings 弹出 → 点 Preferences → Background Color 选浅一档，画布立刻变浅 → Pattern 选 Grid，点阵变网格 → 光标指向 Download Filename 预览卡 → 点 Edit 展开积木编辑器 → 点 Timestamp 的 ✕ → 拖 YouArt 积木到最前，预览文件名同步改变 → 点 Done 收起 → Esc，画布以新背景铺满。全节不推近。

### 结尾（5:40–5:53）

![](../out/storyboard/s8.png)

快捷键总表：+ 加节点、⇧ Drag 多选、⌘[ 收起（⌘] 展开）、F 框住选中、⌘A 后 L 排版、⌘, 设置，停留 6 秒。然后成片视频铺满播放，配音收尾 "That's all for EP1: the basics of the workflow canvas."（画面只留 logo），预告 EP2 讲生成图片与视频。

## 与大纲和计划稿的出入

- 大纲第 6 条"查看快捷键"只是一个小点，并进第 5 节末尾，全片仍是 7 节，与片头 7 步轨道、章节卡 7 段进度条一致。
- 实测无选中时按 F 视口不变，只有有选中时 F 才 fit。第 4 节全览改成缩放菜单里的 Fit view，台词相应改写。
- 实测多选后没有"共同输出接口"，第 2 节改为图片、文字各连一次，并顺带讲了"每条连线自动找到匹配端口"。
- 双击节点标题栏不会聚焦（会碰到模型切换器），双击节点主体才聚焦，第 4 节按此演示。
- 第 5 节 ⌘A 全选大节点时产品把选区工具栏排到画面底边外，L 之后才有位置；成片在 L 之后取消选中再 ⌘A 让工具栏"出现"，并在选中态隐藏与它贴在一起的底部 Run 胶囊、把 Auto Layout 菜单改成向上弹出。Horizontal 布局下"再次悬停"的菜单是把产品菜单 DOM 注入到旧快照上（产品 Auto Layout 结果不可复现，补采对不上）。
- 第 6 节拖入的 Image Loader 实际落在 Seedance 上方重叠，成片用样式挪到右侧空位。
- "选中多个节点一起连线"的蓝色共用输出点在新版产品里才有，采集用的无头浏览器拿到的还是旧版没有这个点：多选态是真实快照，蓝点和拖出的连线是合成叠加。
- 第 1 节的 Finder 窗口是本机真实截图叠加（文件夹 Brand photos，三张 Nano Banana Pro 生成的样图），落下的节点是提前在舞台项目里建好并上传同名文件的快照；拖拽与粘贴本身没有在无头浏览器里真做。
- 第 1 节双击点比采集时右移 90px，让弹出的搜索框离 Image Loader 远一点；GPT 节点出现位置与双击点不严格一致（产品行为）。
- 教程不重新生成。Run 之后的"运行中"是假运行约两秒，随后切到用户预先跑好的项目里的真实结果；配音明说"生成需要一两分钟，我们跳过等待"。生成细节留给 EP2。
- 两段提示词都改成了一两句的短版本（长版本备份在留档），画面里只打前半句，后半段一次出现，配音说"我们准备好了一段提示词"。

## 工程与留档

- 工程目录 `works/ep1-basics/`：`src/`（Main、timeline、7 个场景、vo.gen、lines.gen）、`captures/`（67 张快照 + meta，另有 Finder 三态截图与三张样图）、`audio/vo/`（63 句配音）、`plans/`（可重放采集计划）、`docs/`（本文档、SCRIPT.md、CAPTURE-LOG.md）、`out/`（成片、QA 静帧、storyboard 帧）。
- 素材来自用户跑好的项目 "ep1-素材"（357a2788），舞台是新建的 "EP1 Basics"（d97e9e57）；两个项目节点位置对齐后无缝切换。服务端改动见 CAPTURE-LOG.md。
- 配音 ElevenLabs v3，声线 Chris（用户指定；v3.0 用 Brian，v2.3 用 Sarah），专用项目 8bd93552，两轮共约 250 积分。语速约 185 wpm，动作都落在每句话快说完的时候。
- 新增引擎能力：点击提示环、舞台叠加层、节点内结果预览与假运行驱动、缩放标签回填、光标直达移动 go()、连线目标氛围光与节点选中态驱动；采集新增单会话计划运行器 `capture/run.mjs`。

---
飞书文档：https://f3vaq8z51vv.sg.larksuite.com/wiki/DFZhwKC3Ii29sqkdUn1lG0zug4d （父节点 C1uDwq2BGiyc29k3omEl9UvegwI，2026-09-13 v3.5 修改版）
