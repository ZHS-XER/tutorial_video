import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { HtmlSnap, type DriveFn } from '@engine/stage/HtmlSnap';
import { TL_SCALE } from '@engine/tokens';
import type { TutorialProps } from '../../registry';
import './materials.gen';
import { TOTAL_TL } from './timeline';
export { TOTAL_TL };
// SVG SMIL animations have their own clock. Seek them explicitly for each TL frame.
const drive: DriveFn = (doc, frame) => {
  doc.querySelectorAll('svg').forEach(svg => {
    if (!svg.querySelector('animateTransform')) return;
    svg.pauseAnimations();
    svg.setCurrentTime(Math.max(0, frame) / 30);
  });
};
// Imported HTML, with its original connector animation driven by the video timeline.
export const Main: React.FC<TutorialProps> = () => (
  <AbsoluteFill>
    <div style={{position:'absolute',width:1536,height:864,transform:'scale(1.25)',transformOrigin:'top left'}}>
      <HtmlSnap slot="codex-mvp-mcp" frame={useCurrentFrame() / TL_SCALE} drive={drive} visible />
    </div>
  </AbsoluteFill>
);
