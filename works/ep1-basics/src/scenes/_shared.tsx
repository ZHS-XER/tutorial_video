// _shared — EP1 各节共用：Stage 包装（铺满、光标、叠加层、缩放标签回填）、台词节拍器、点击音效、光标位置函数
import React from 'react';
import { ScreenStage } from '@engine/stage/ScreenStage';
import { type Shot } from '@engine/camera/choreo';
import { cursorPosAt } from '@engine/cursor/Cursor';
import { MATERIALS } from '@engine/materials';
import { C, F } from '@engine/tokens';
import type { KeyCue } from '@engine/ui/kbd';
import type { Cue } from '@engine/audio/AudioLayer';
import type { DriveFn } from '@engine/stage/HtmlSnap';
import { compose } from '@engine/stage/drives';
import { fixZoomLabel } from '@youart/drivesFlow';
import { VO_DUR } from '../vo.gen';
import { CAPS } from '../lines.gen';

export type Cap = { from: number; until: number; text: string; y?: number };
/** 底部工具栏镜头时字幕改放顶部（页面 y 120） */
export const CAP_TOP = 120;
export const PAGE = { w: 1536, h: 864 };
/** ScreenStage 是"绕锚点缩放"模型：返回让页面点 (cx,cy) 在 z 倍下位于画面中心的锚点（夹在页面内，避免露黑边） */
export const focus = (cx: number, cy: number, z: number) => {
  if (z <= 1.0001) return { cx, cy };
  const k = 1 - 1 / z;
  return { cx: Math.min(PAGE.w, Math.max(0, (cx - PAGE.w / (2 * z)) / k)), cy: Math.min(PAGE.h, Math.max(0, (cy - PAGE.h / (2 * z)) / k)) };
};

/** 台词节拍器：按 VO 真实时长顺排各句起点（gap 为句间停顿；extra 给某句多留动作时间） */
export const seqLines = (ids: string[], opts: { start?: number; gap?: number; extra?: Record<string, number>; before?: Record<string, number> } = {}) => {
  const gap = opts.gap ?? 18;
  const t: Record<string, { from: number; voEnd: number; until: number; dur: number }> = {};
  let cur = opts.start ?? 0;
  ids.forEach((id, i) => {
    cur += opts.before?.[id] ?? 0;
    const vo = VO_DUR[id] ?? 60;
    const dur = vo + (opts.extra?.[id] ?? 0);
    t[id] = { from: cur, voEnd: cur + vo, until: cur + dur, dur };
    cur += dur + (i < ids.length - 1 ? gap : 0);
  });
  return { t, end: cur };
};
/** 字幕表：每句从起点显示到下一句起点前 4 帧（或本句 until + 10） */
export const capsOf = (t: Record<string, { from: number; until: number }>, ids: string[], tail = 10, top: string[] = []): Cap[] =>
  ids.map((id, i) => ({ from: t[id].from, until: i < ids.length - 1 ? t[ids[i + 1]].from - 4 : t[id].until + tail, text: CAPS[id], ...(top.includes(id) ? { y: CAP_TOP } : {}) }));

/** 某 cut 内相对帧 → 光标页面坐标（含弹簧平滑，与 <Cursor> 一致） */
export const curAtFrom = (shot: Shot, cutFrom: number) => (f: number): [number, number] => cursorPosAt(shot.curKeys, f + cutFrom);
/** 给 shot 里某个 slot 的第 nth 个 cut 挂驱动（叠加到已有驱动之上） */
export const addDrive = (shot: Shot, slot: string, drive: DriveFn, nth = 0) => {
  const c = shot.cuts.filter((x) => x.slot === slot)[nth];
  if (!c) throw new Error(`addDrive: no cut ${slot}#${nth}`);
  c.drive = c.drive ? compose(c.drive, drive) : drive;
  return c.from;
};
export const cutFrom = (shot: Shot, slot: string, nth = 0) => {
  const c = shot.cuts.filter((x) => x.slot === slot)[nth];
  if (!c) throw new Error(`cutFrom: no cut ${slot}#${nth}`);
  return c.from;
};
/** 全片唯一音效：柔和点击，自动挂在每一次 .click()（双击 = 两声） */
export const clicksOf = (clicks: number[]): Cue[] => clicks.map((f) => ({ at: f, src: 'shared/sfx/click-soft.mp3', vol: 0.3 }));

export const Missing: React.FC<{ slots: string[] }> = ({ slots }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ padding: 40, borderRadius: 16, background: C.surface, border: `1px dashed ${C.border2}`, color: C.dim, fontFamily: F.mono, fontSize: 18 }}>
      <div style={{ color: C.accent, marginBottom: 10 }}>缺素材快照</div>
      {slots.map((s) => <div key={s}>{s}</div>)}
    </div>
  </div>
);

/** 舞台：铺满 1920×1080、无壁纸无 chrome；每个 cut 自动叠加缩放标签回填 */
export const Stage: React.FC<{ u: number; shot: Shot; slots: string[]; overlay?: React.ReactNode; appearAt?: number; enterAt?: number }> = ({ u, shot, slots, overlay, appearAt = 6, enterAt }) => {
  const missing = slots.filter((s) => !MATERIALS[s]);
  if (missing.length) return <Missing slots={missing} />;
  const cuts = React.useMemo(() => shot.cuts.map((c) => ({ ...c, drive: c.drive ? compose(c.drive, fixZoomLabel()) : fixZoomLabel() })), [shot]);
  return (
    <ScreenStage frame={u} cuts={cuts} camera={shot.camKeys} cursor={shot.curKeys} clicks={shot.clicks} cursorTypes={shot.curTypes} cursorAppearAt={appearAt} enterAt={enterAt} overlay={overlay} cursorSway={0} cursorBounce={1.2} />
  );
};
export type SceneExports = { DUR: number; CAPTIONS: Cap[]; KEYS: KeyCue[]; SFX: Cue[]; VO: Array<{ id: string; at: number }> };
/** 由节拍表派生本节 VO 起点表 */
export const voOf = (t: Record<string, { from: number }>, ids: string[]) => ids.map((id) => ({ id, at: t[id].from }));
