# 教程数字人（talking head）· 首轮实测记录

日期：2026-09-04。目标：给教程配一位口播主持人（年轻金发美国女性，自然现代客厅，真实摄影风格，柔光），
先验证"参考图 → 配音 → 音频驱动口型视频"这条链路在 YouArt MCP 上能否跑通、效果如何。

## 一、参考图（`out/avatar/refs/r1/`）

同一份提示词三个图像模型各出一批，2K、16:9。

- Nano Banana Pro：4 张，最像纪实照片，四张几乎同一人；米色毛衣与沙发同色，分离度低。
- GPT Image 2：4 张，杂志感，肤色更暖、皮肤细节多，四张人脸差异较大，背景更杂。**用户选定 gpt-1、gpt-2 进入视频测试。**
- Seedream 5.0 Pro：2 张，偏白偏平、图库感，淘汰。

积分：Nano Banana Pro 40 / GPT Image 2 80 / Seedream Pro 18×2。

## 二、口型视频（`out/avatar/talkinghead/option-duplicate/`）

台词取 option-duplicate 三句字幕连读，ElevenLabs v3 配音约 6.5s。两种驱动模型：

- **LTX-2.5 Pro（1080p）**：first_frame 接参考图、audio 接配音。输入音频原样透传进成片，口型按输入音频对齐，
  因此成片可与 Remotion 里同一个 VO 文件精确同步。约 45 秒出片，272 积分/条。
- **Seedance 2.0 Omni Stable（1080p，8s）**：image_1 + audio_1，提示词用 @Image1/@Audio1。模型按参考声线重新演绎台词并重排时间，
  成片音轨与输入 VO 不对齐，只能采用它自带音轨。全程睁眼、表演最稳。约 6.5 分钟出片，520 积分/条。

- **Seedance 2.5 Omni（1080p，8s）**：两条对照，都用 gpt-1。接 @Audio1 参考的一条，声线学 ElevenLabs 但仍重新演绎、重排时间，
  不是透传；不接音频、台词写进提示词的一条，模型自己配音，声线不同但台词逐字正确（whisper-cli 听写核对）。
  两条都全程睁眼、表演自然，与 2.0 相当。输出为 HEVC，进 Remotion 前需转 H.264。约 5 分钟出片，800 积分/条。

结果 5 条：faceA-gpt1-ltx25、faceB-gpt2-ltx25、faceA-gpt1-seedance20、faceA-gpt1-seedance25-audioref、
faceA-gpt1-seedance25-nativevoice。详见该目录 README。

**模型取舍**：要和 Remotion 里的 VO 文件精确对齐、快、便宜 → LTX-2.5（272）；要最稳的表演 → Seedance 2.5（800）或 2.0（520），
但音轨只能用成片自带的，且 2.0 听写疑似多说了一个 "the"，2.5 两条都逐字正确。

## 二·五、写实度实验（下午，积分耗尽后暂停）

要让 talking head 更像真人，可控的变量有四个：参考图里脸的大小（嘴部像素）、提示词里的摄影与表演约束、模型、以及后期（颗粒/调色）。
本轮设计：

1. **写实提示词**：机身与镜头（mirrorless、50mm f/2.0）、真实皮肤纹理与雀斑、细颗粒、无美颜；微表情（眉毛随重音、句尾微笑、每几秒眨眼、
   小幅点头与倾头、呼吸）；"说话而不是朗读"的语速与停顿；只保留安静房间底噪。
2. **紧景别参考图**：Nano Banana Pro 编辑模式以 gpt-1 为参考重构头肩特写（`out/avatar/refs/r2/tight-1.jpg`，2752×1536），脸更大、嘴部细节更多；
   另一张 tight-2 脸占满画面，头一动就出框，弃用。20 积分。
3. **Kling v3.0**（first_frame + `sound: true`，Pro 1080p，192 积分/条，约 3 分钟）：已跑宽景别一条，台词逐字正确，身份与背景稳定，
   口型幅度比 Seedance 大、露齿多，第二条提示词已加"口型小而自然"。输出 H.264，可直接进 Remotion。

充值后三条全部跑完（Seedance 2.5 写实提示词版 800、Seedance 2.5 紧景别版 800、Kling v3.0 紧景别版 192），五条 whisper 听写逐字正确。
人脸 1:1 裁切并排见 `out/avatar/talkinghead/option-duplicate/frames/cmp/face-crops-t3.jpg`。

**结论（决定后续做法）**
1. **紧景别参考图是最大的真实感来源**。脸占画面约 1/2 高时，皮肤雀斑、毛孔、眼睫、牙齿都有真实细节；宽景别的脸只有约 250px 高，放大就是平滑一团。
   同模型同提示词只换紧景别，差距远大于换模型。**但用户决定保持原来的宽景别（gpt-1 胸像中景），不采用紧景别**，
   理由是整体效果仍"一般般"，问题不在景别；后续提升方向转向真人驱动（Kling Motion Control）与真人声音。
2. **写实提示词单独作用很小**，画质上与基线几乎无差；它的价值是约束表演（眨眼频率、句尾微笑、语速停顿、无手部动作），保留使用。
3. **Seedance 2.5 与 Kling v3.0 都可用**：Seedance 皮肤更柔、表情连贯、口型略夸张；Kling 反差更高、细节更锐、口型经"understated"提示后更收敛、停顿略碎。
   Kling 便宜四倍（192 vs 800）、快一倍、直接 H.264；Seedance 输出 HEVC 需转码。
4. **后期**：轻锐化 + 细颗粒（ffmpeg unsharp 0.35 + noise alls=6）+ 微调对比度，去掉"太干净"的 AI 感，颗粒要小。
5. 成片 24fps，进 30fps 时间线时注意帧重复带来的轻微卡顿，必要时 Remotion 里按 24→30 插值或整体用 24 的倍数。

## 三、踩到的坑

1. Seedance 节点引用 @Image1/@Audio1 时 `use_assets` 必须为 true，否则启动 5 秒即 `workflow_node_failed`（两张脸同时复现）。
2. LTX 接音频后，视频长度按音频向下取整（6.64s 音频 → 6.04s 视频），最后一个词被切。**配音前补 0.4s、后补 0.8s 静音**再喂。
3. scope=node_ids 运行时 ElevenLabs 节点每次都会重跑（音频没有 virtual loader），take 不同、时长不同。
   固定配音必须上传成 LoadAudio 文件，这样也保证成片与 Remotion 用的是同一条音频。
4. 本地文件上传：create_asset_upload → 按返回 headers 用 curl PUT → set_upload_node_asset。
5. 此 MCP 连接查不到账号与积分余额（capability unavailable），大批量前先小样。

## 四、下一步建议

- 定脸：在 gpt-1 / gpt-2 中选一个，再用图像模型编辑模式做一致性参考组（正脸中性、四分之三侧脸、手势各一张 + 紧一点的中近景供小窗裁切）。
- 模型与配音（2026-09-04 用户定）：**默认 Seedance 2.5 Omni，台词直接写进提示词由模型自配音，不先生成 ElevenLabs 语音。**
  只有要指定声线或要与 Remotion 里的 VO 文件精确对齐时，才做 TTS 并改用 LTX-2.5 透传。Remotion 侧直接用 Seedance 成片自带音轨。
- 定出场方式：主持卡（片头/章节开头/片尾）优先，走查段只留旁白。
- 接入 Remotion：新建主持人组件（全屏卡 + 角落小窗），视频音轨静音，配音走 AudioLayer voCues。
