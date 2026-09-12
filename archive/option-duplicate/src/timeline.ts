// timeline.ts — option-duplicate：按住 Option 拖动节点 = 原地复制。TL 帧（30fps 语义）。
export const S = {
  s01Title: { from: 0, dur: 75 },       // 0–2.5s  标题卡
  s02Drag: { from: 75, dur: 230 },      // 2.5–10.2s 走查：Option + 拖动 → 复制
  s03Recap: { from: 305, dur: 90 },     // 10.2–13.2s 结尾卡：⌥ + Drag = Duplicate in place
} as const;

export const TOTAL_TL = S.s03Recap.from + S.s03Recap.dur; // 395u = 13.2s

// S02 内部节拍（相对 S02 起点）
export const D = {
  cursorIn: 14,
  reachNode: 44,
  optionDown: 50,   // ⌥ 按下（键盘叠加层出现）
  mouseDown: 64,    // 按住节点开始拖
  dragEnd: 124,     // 光标目标到达落点（弹簧再落定 ~6f）
  mouseUp: 130,     // 松手：键帽/鼠标徽标释放
  cutAfter: 132,    // 切"拖动后"快照（此时光标已落定，克隆与新节点重合）
  zoomOut: 164,
} as const;
