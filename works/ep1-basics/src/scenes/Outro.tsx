// Outro — 结尾：快捷键总表（大字键帽、停够 5s，能截图当备忘）→ 成片视频铺满播放 + "That's the basics." → EP2 预告
import React from 'react';
import { Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { C, E, F, tl } from '@engine/tokens';
import { seg } from '@engine/ui/ux';
import { Kbd } from '@engine/ui/kbd';

export const OUTRO_RECAP = 190; // 总表段
export const OUTRO_VIDEO = 200; // 成片段（含预告）
export const OUTRO_DUR = OUTRO_RECAP + OUTRO_VIDEO;

const ROWS: Array<{ keys: string[]; label: string }> = [
  { keys: ['+'], label: 'Add a node (or double-click the canvas)' },
  { keys: ['⇧', 'Drag'], label: 'Select several nodes' },
  { keys: ['⌘', '['], label: 'Collapse a node   ·   ⌘ ] expands' },
  { keys: ['F'], label: 'Frame the selection' },
  { keys: ['⌘', 'A'], label: 'Select all, then L to auto-layout' },
  { keys: ['⌘', ','], label: 'Settings and Preferences' },
];

export const Outro: React.FC<{ u: number; videoSrc: string }> = ({ u, videoSrc }) => {
  const recapOut = seg(u, OUTRO_RECAP - 14, OUTRO_RECAP, E.inOut);
  const head = seg(u, 0, 14, E.zoom);
  const v0 = OUTRO_RECAP - 8;
  const vIn = seg(u, v0, v0 + 18, E.zoom);
  const textIn = seg(u, v0 + 30, v0 + 48, E.zoom);
  const nextIn = seg(u, v0 + 96, v0 + 114, E.zoom);
  const end = 1 - seg(u, OUTRO_DUR - 14, OUTRO_DUR, E.inOut);
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.ink, overflow: 'hidden' }}>
      {u < OUTRO_RECAP ? (
        <div style={{ position: 'absolute', inset: 0, opacity: 1 - recapOut }}>
          <div style={{ position: 'absolute', left: 240, top: 120, opacity: head, transform: `translateY(${(1 - head) * 14}px)` }}>
            <div style={{ fontFamily: F.mono, fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', color: C.accent, marginBottom: 14 }}>RECAP</div>
            <div style={{ fontFamily: F.sans, fontSize: 72, fontWeight: 700, letterSpacing: '-0.03em', color: C.paper }}>Shortcuts you learned</div>
          </div>
          <div style={{ position: 'absolute', left: 240, top: 300, display: 'flex', flexDirection: 'column', gap: 26 }}>
            {ROWS.map((r, i) => {
              const t = seg(u, 14 + i * 6, 30 + i * 6, E.zoom);
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 34, opacity: t, transform: `translateX(${(1 - t) * -24}px)` }}>
                  <div style={{ display: 'flex', gap: 10, width: 260 }}>
                    {r.keys.map((k, j) => <Kbd key={j} text={k} pressed={0} size={72} />)}
                  </div>
                  <div style={{ fontFamily: F.sans, fontSize: 40, fontWeight: 500, color: 'rgba(250,250,250,0.86)', letterSpacing: '-0.01em' }}>{r.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {u >= v0 ? (
        <div style={{ position: 'absolute', inset: 0, opacity: vIn * end }}>
          <Sequence from={tl(v0)} layout="none">
            <OffthreadVideo src={staticFile(videoSrc)} muted style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.04 - 0.04 * vIn})` }} />
          </Sequence>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.72) 100%)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, opacity: textIn, transform: `translateY(${(1 - textIn) * 16}px)` }}>
              <Img src={staticFile('shared/brand/youart-logo-dark.svg')} style={{ width: 54, height: 54 }} />
              <div style={{ fontFamily: F.sans, fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', color: C.paper }}>That's the basics.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 22px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.42)', opacity: nextIn, transform: `translateY(${(1 - nextIn) * 12}px)` }}>
              <span style={{ fontFamily: F.mono, fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', color: C.accent }}>NEXT · EP 02</span>
              <span style={{ fontFamily: F.sans, fontSize: 28, fontWeight: 600, color: C.paper }}>Generating images and video</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
