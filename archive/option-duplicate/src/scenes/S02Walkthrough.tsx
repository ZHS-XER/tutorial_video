// S02 — 走查：光标到节点 → 按住 ⌥ → 按下拖动（克隆节点跟随）→ 松手切"拖动后"快照。
// 相机手排：拖动前推近到两节点区域（z=2，页面 1:1.33），落定后焦点冻结收回。
import React from 'react';
import { ScreenStage } from '../../../film/ScreenStage';
import { Shot } from '../../../film/choreo';
import { cursorPosAt } from '../../../film/Cursor';
import { at } from '../../../film/camera';
import { dragClone } from '../../../film/drivesWorkflow';
import { MATERIALS } from '../../../film/materials.gen';
import { C, F } from '../../../film/tokens';
import { D } from '../timeline';

const BEFORE = 'option-duplicate-before';
const AFTER = 'option-duplicate-after';

// 采集时真实数据（public/captures-html/meta）：节点 rect (240,136,280,347)，
// 拖动 (330,464)→(730,464)，复制节点落在 translate(640,69)，即 dx=+400。
const NODE_GRAB = { cx: 330, cy: 464 }; // 节点底栏 "Image Loader" 左侧
const DROP = { cx: 730, cy: 464 };
const DX = 400;
const NODE_SEL = '.react-flow__node[data-id="LoadImage-95ee4cd5"]';

const shot = new Shot(BEFORE, { cx: 960, cy: 512, z: 1.0 })
  .cur(D.cursorIn, { cx: 900, cy: 720 })
  .cur(D.reachNode, NODE_GRAB)
  .curHold(D.mouseDown)
  .click(D.mouseDown, { kind: 'click' }) // 按下（涟漪 + 光标 squash）
  .cur(D.dragEnd, DROP) // 拖到落点（光标目标；弹簧在 mouseUp 前落定）
  .curHold(D.mouseUp)
  .cut(D.cutAfter, AFTER) // 松手：切到真实"复制后"状态（两节点，新节点选中）
  .curHold(D.zoomOut + 60)
  // 相机：拖动前预备推近到两节点之间（z=2 → 画布可见 1440×810 页面 px），焦点夹在页面内
  .zoomIn(D.mouseDown, at(720, 405), 2.0)
  .camHold(D.zoomOut)
  .zoomOut(D.zoomOut);

// 拖动复刻：克隆节点按光标"实际位置"（含弹簧平滑）位移，与光标零滞后；
// DX 用于校验：光标落定于 DROP 时克隆位移正好 = DROP − NODE_GRAB = DX。
shot.cuts[0].drive = dragClone(NODE_SEL, D.mouseDown, { x: NODE_GRAB.cx, y: NODE_GRAB.cy }, (f) => cursorPosAt(shot.curKeys, f));
if (DROP.cx - NODE_GRAB.cx !== DX) throw new Error('DROP/NODE_GRAB 与真实拖动位移不一致');

const Placeholder: React.FC<{ slots: string[] }> = ({ slots }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 1280, height: 764, borderRadius: 16, background: C.surface, border: `1px dashed ${C.border2}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, color: C.dim, fontFamily: F.mono, fontSize: 20 }}>
      <div style={{ color: C.accent, fontSize: 24 }}>缺素材快照</div>
      {slots.map((s) => <div key={s}>npm run j snap {s}</div>)}
    </div>
  </div>
);

export const S02Walkthrough: React.FC<{ u: number }> = ({ u }) => {
  const missing = [BEFORE, AFTER].filter((s) => !MATERIALS[s]);
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
        url="youart.ai/workflow"
        enterAt={0}
      />
    </div>
  );
};
