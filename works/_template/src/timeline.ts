// timeline.ts — 本教程的单一事实源：段位表（TL 帧 = 30fps 语义）。
// 改分镜只改这里；字幕/音效表用 S.xxx.from 相对定位，不写绝对帧。
export const S = {
  s01Title: { from: 0, dur: 90 },        // 0–3s   标题卡
  s02Walkthrough: { from: 90, dur: 240 }, // 3–11s  第一段走查（示例）
} as const;

export const TOTAL_TL = S.s02Walkthrough.from + S.s02Walkthrough.dur;
