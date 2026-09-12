// _shared — 各节共用：ScreenStage 包装、光标位置函数、占位面板
import React from 'react';
import { ScreenStage } from '../../../film/ScreenStage';
import { type Shot } from '../../../film/choreo';
import { cursorPosAt, type CursorIndicator } from '../../../film/Cursor';
import { MATERIALS } from '../../../film/materials.gen';
import { C, F } from '../../../film/tokens';
import type { KeyCue } from '../../../film/kbd';
import type { Cue } from '../../../film/AudioLayer';

export type Cap = { from: number; until: number; text: string };
export type SceneMeta = { captions: Cap[]; keys: KeyCue[]; sfx: Cue[] };

/** 某 cut 内相对帧 → 光标页面坐标（含弹簧平滑，与 <Cursor> 一致） */
export const curAtFrom = (shot: Shot, cutFrom: number) => (f: number): [number, number] => cursorPosAt(shot.curKeys, f + cutFrom);

export const Missing: React.FC<{ slots: string[] }> = ({ slots }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ padding: 40, borderRadius: 16, background: C.surface, border: `1px dashed ${C.border2}`, color: C.dim, fontFamily: F.mono, fontSize: 18 }}>
      <div style={{ color: C.accent, marginBottom: 10 }}>缺素材快照</div>
      {slots.map((s) => <div key={s}>{s}</div>)}
    </div>
  </div>
);

/** indicator：keyviz 鼠标徽标，2026-09-10 起默认不显示（右键用 KEYS 里的 'right click' 芯片表达） */
export const Stage: React.FC<{ u: number; shot: Shot; url: string; slots: string[]; indicator?: CursorIndicator; appearAt?: number; enterAt?: number }> = ({ u, shot, url, slots, indicator, appearAt = 6, enterAt }) => {
  const missing = slots.filter((s) => !MATERIALS[s]);
  if (missing.length) return <Missing slots={missing} />;
  return (
    <ScreenStage
      frame={u}
      cuts={shot.cuts}
      camera={shot.camKeys}
      cursor={shot.curKeys}
      clicks={shot.clicks}
      cursorTypes={shot.curTypes}
      cursorAppearAt={appearAt}
      url={url}
      mouseIndicator={indicator}
      enterAt={enterAt}
    />
  );
};
/** 全片唯一音效：柔和点击（合成 tick，峰值 -7.7 dB）。只挂在编排里的每一次 .click()，
 * 按键/落点/章节切换一律无声（2026-09-09 用户要求去掉显眼音效）。 */
export const clickSfx = (at: number, vol = 0.3): Cue => ({ at, src: 'audio/sfx/click-soft.mp3', vol });
/** 从编排自动派生点击音效表（双击 = 两声 tick） */
export const clicksOf = (clicks: number[]): Cue[] => clicks.map((f) => clickSfx(f));
