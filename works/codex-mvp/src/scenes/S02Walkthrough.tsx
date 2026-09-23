// S02 — 走查示例：光标到输入框 → 打字 → 点发送。相机由 planZooms 自动决策。
// 素材 slot 尚未采集时渲染占位面板（不会崩），采集后（npm run j snap <slot>）自动生效。
import React from 'react';
import { ScreenStage } from '@engine/stage/ScreenStage';
import { Shot } from '@engine/camera/choreo';
import { typeCE } from '@youart/drivesYouart';
import { MATERIALS } from '@engine/materials';
import { C, F } from '@engine/tokens';

// slot 命名约定：<slug>-<状态>；快照在 works/<slug>/captures/，用 npm run j snap <slug> <状态> 采集
const SLOT_A = 'codex-mvp-homeClean';
const SLOT_B = 'codex-mvp-homeTyped';

const PAGE = { w: 1920, h: 1080 }; // 采集后以 MATERIALS[SLOT_A].pageW/pageH 为准
const VIEW = { w: 2880, h: 1620 }; // 默认窗口 1280 宽 → s0=0.667 → 1920/0.667 × 1080/0.667
const PROMPT_BOX = { cx: 1070, cy: 380 };
const SEND_BTN = { cx: 1423, cy: 420 };

const shot = new Shot(SLOT_A, { cx: 960, cy: 512, z: 1.0 })
  .cur(14, { cx: 640, cy: 780 })
  .cur(34, PROMPT_BOX, 0, 26)
  .click(34, { cut: SLOT_B, cutDelay: 1, kind: 'text-field', drive: typeCE('div[contenteditable="true"]', 5, 0.52) })
  .curType(40, 'text')
  .interact(40, PROMPT_BOX, 'type', 110)
  .curType(114, 'arrow')
  .cur(124, SEND_BTN)
  .click(130, { kind: 'click' })
  .planZooms({ page: PAGE, view: VIEW });

const Placeholder: React.FC<{ slots: string[] }> = ({ slots }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 1280, height: 764, borderRadius: 16, background: C.surface, border: `1px dashed ${C.border2}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, color: C.dim, fontFamily: F.mono, fontSize: 20 }}>
      <div style={{ color: C.accent, fontSize: 24 }}>缺素材快照</div>
      {slots.map((s) => (
        <div key={s}>npm run j snap {s}</div>
      ))}
    </div>
  </div>
);

export const S02Walkthrough: React.FC<{ u: number }> = ({ u }) => {
  const missing = [SLOT_A, SLOT_B].filter((s) => !MATERIALS[s]);
  if (missing.length) return <Placeholder slots={missing} />;
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <ScreenStage
        frame={u}
        cuts={shot.cuts}
        camera={shot.camKeys}
        cursor={shot.curKeys}
        clicks={shot.clicks}
        cursorTypes={shot.curTypes}
        cursorAppearAt={8}
        url="youart.ai/home"
        enterAt={0}
      />
    </div>
  );
};
