import React from 'react';
import { Img, staticFile } from 'remotion';
import { C, E, F, TL } from '@engine/tokens';
import { cameraAt, type CamKey } from '@engine/camera/camera';
import { Cursor, type CursorIndicator, type CursorKey, type CursorType } from '@engine/cursor/Cursor';
import { HtmlSnap, type DriveFn } from '@engine/stage/HtmlSnap';
import { MATERIALS } from '@engine/materials';
import { drift, lerp, progress } from '@engine/motion/motion';
import { CAM_SPRING, springTrackN } from '@engine/motion/spring';

// ScreenStage — Recordly 式舞台（卡片缩放模型）：
// macOS 壁纸垫底 + 圆角阴影窗口 + chrome 地址栏 + 素材硬切 + 光标层。
// 页面内容始终整页适配窗口（不做内部平移）；相机 {cx, cy, z} 的语义是
// 「绕页面坐标 (cx,cy) 这个锚点，把整个窗口连壳带内容放大 z 倍」——
// z>1 时窗口越过画布边缘出血，与 Recordly 的 1.5x 缩放行为一致。
// 全部是帧号纯函数。

export type Cut = { from: number; slot: string; patchCss?: string; drive?: DriveFn };

const BrandGradient: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: `
        radial-gradient(1200px 800px at 18% 8%, rgba(255,71,4,0.05), transparent 60%),
        radial-gradient(1400px 900px at 85% 95%, rgba(21,54,43,0.07), transparent 55%),
        linear-gradient(160deg, ${C.paper} 0%, ${C.paper2} 58%, ${C.cream} 100%)
      `,
    }}
  />
);

const ChromeBar: React.FC<{ url: string; h: number }> = ({ url, h }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: h,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      backgroundColor: 'rgba(18,18,18,0.97)',
      borderBottom: `1px solid ${C.border}`,
      zIndex: 5,
    }}
  >
    {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
      <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c }} />
    ))}
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '5px 14px',
        borderRadius: 999,
        backgroundColor: '#0A0A0A',
        border: `1px solid ${C.border}`,
        fontFamily: F.mono,
        fontSize: 12.5,
        color: C.warmGray,
        minWidth: 320,
        justifyContent: 'center',
      }}
    >
      <svg width="10" height="12" viewBox="0 0 10 12" style={{ opacity: 0.55 }}>
        <rect x="1" y="5" width="8" height="6" rx="1.4" fill="none" stroke={C.warmGray} strokeWidth="1.3" />
        <path d="M2.8 5 V3.4 a2.2 2.2 0 0 1 4.4 0 V5" fill="none" stroke={C.warmGray} strokeWidth="1.3" />
      </svg>
      {url}
    </div>
  </div>
);

export const ScreenStage: React.FC<{
  frame: number;
  cuts: Cut[];
  camera: CamKey[];
  cursor?: CursorKey[];
  clicks?: number[];
  cursorAppearAt?: number;
  /** 光标形态段（arrow/text），透传给 Cursor */
  cursorTypes?: Array<{ f: number; type: CursorType }>;
  /** keyviz 式鼠标指示徽标（点击/滚动时在光标旁显示鼠标图标） */
  mouseIndicator?: CursorIndicator;
  /** 光标手腕摆动强度（默认 1；教程调性建议 0：无抖动、干净利落） */
  cursorSway?: number;
  /** 光标点击回弹幅度（默认 2） */
  cursorBounce?: number;
  url?: string;
  /** 壁纸：staticFile 路径；null = 无壁纸（2026-09-11 规定：走查画面直接铺满，不要桌面背景） */
  wallpaper?: string | null;
  /** 窗口盒（canvas 坐标，含 chrome 高度）。默认 Recordly 式大边距（内容 1280×720，
   * 画布宽的 67%）：z=1 是"桌面上的窗口"，z≈1.5 阅读时刻近满屏并留壁纸边，z≥1.75 出血 */
  rect?: { x: number; y: number; w: number; h: number };
  /** 相机平滑：'spring' = Recordly 双层平滑（默认）；'ease' = 旧版纯 keyframe 插值 */
  camSmoothing?: 'spring' | 'ease';
  /** 相机第一层目标曲线；缺省时 spring 模式用 E.zoom，ease 模式用 E.soft */
  camEase?: (v: number) => number;
  /** 运动模糊强度（Recordly 默认 0.35）：按相机速度施加方向性/缩放模糊，静止时零模糊。0 关闭 */
  motionBlur?: number;
  /** 手持呼吸幅度倍率。Recordly 语义下真实录屏静止时应完全静止，默认 0；传 1 恢复旧版 ±1.2px */
  breath?: number;
  fps?: number;
  enterAt?: number;
  exitAt?: number;
  chrome?: boolean;
  /** 页面坐标系叠加层（随相机缩放/平移，位于快照之上、光标之下）：目标提示环、节点内视频预览等 */
  overlay?: React.ReactNode;
  children?: React.ReactNode;
}> = ({
  frame,
  cuts,
  camera,
  cursor = [],
  clicks = [],
  cursorAppearAt = 0,
  cursorTypes = [],
  mouseIndicator,
  cursorSway = 1,
  cursorBounce = 2,
  url = 'youart.ai',
  wallpaper = null,
  rect = { x: 0, y: 0, w: 1920, h: 1080 },
  camSmoothing = 'spring',
  camEase,
  motionBlur = 0.35,
  breath = 0,
  fps = TL,
  enterAt,
  exitAt,
  chrome = false,
  overlay,
  children,
}) => {
  const blurId = React.useId();
  const chromeH = chrome ? 44 : 0;
  const stage = { w: rect.w, h: rect.h - chromeH };

  let active = 0;
  for (let i = 0; i < cuts.length; i++) if (cuts[i].from <= frame) active = i;
  const pageW = MATERIALS[cuts[active].slot].pageW;
  const s0 = stage.w / pageW; // 整页适配窗口宽度

  // 相机 = 卡片整体缩放（Recordly 双层平滑）：
  // 第一层 keyframes(E.zoom) 生成目标变换——锚点为页面坐标 (cx, cy)，
  // translate+scale 等价于「绕 (ax,ay) 缩放 z」，锚点在画布上保持不动；
  // 第二层弹簧在变换域 [tx, ty, z] 上逐帧追赶（缩放/平移共享同一套惯性，
  // 焦点阶跃与接力平移被转成 C¹ 连续运动）。全程帧号纯函数，seek 安全。
  const ease = camEase ?? (camSmoothing === 'spring' ? E.zoom : E.soft);
  const targetXf = (f: number): number[] => {
    const cam = cameraAt(camera, f, ease);
    let act = 0;
    for (let i = 0; i < cuts.length; i++) if (cuts[i].from <= f) act = i;
    const pw = MATERIALS[cuts[act].slot].pageW;
    const ph = MATERIALS[cuts[act].slot].pageH;
    const sc = stage.w / pw;
    const ax = Math.min(Math.max(cam.cx, 0), pw) * sc;
    const ay = chromeH + Math.min(Math.max(cam.cy, 0), ph) * sc;
    return [(1 - cam.z) * ax, (1 - cam.z) * ay, cam.z];
  };
  const smooth = (f: number): number[] =>
    camSmoothing === 'spring' ? springTrackN(targetXf, f, fps, CAM_SPRING) : targetXf(f);
  let [camTx, camTy, camZ] = smooth(frame);
  // 微动死区（Recordly：平移 1.25px / 缩放 0.002）：弹簧尾巴贴近目标后直接吸附，
  // 消除亚像素爬行，静止时刻真正静止、文字最锐。
  const [tgtTx, tgtTy, tgtZ] = targetXf(frame);
  if (Math.abs(camTx - tgtTx) < 1.25 && Math.abs(camTy - tgtTy) < 1.25 && Math.abs(camZ - tgtZ) < 0.002) {
    camTx = tgtTx;
    camTy = tgtTy;
    camZ = tgtZ;
  }
  const bx = drift(frame, 240, 1.2 * breath);
  const by = drift(frame + 60, 300, 1.0 * breath);
  const zoomTransform = `translate(${camTx + bx}px, ${camTy + by}px) scale(${camZ})`;

  // 运动模糊 —— Recordly zoomTransform.ts 保真移植（2026-08-27 按源码核验重写）：
  // 每帧比较相机四边形，平移/缩放两通道**互斥**（按位移大小裁决，不叠加）；
  // 通道系数 = amount × fps/60（默认 0.35，与其 DEFAULT_ZOOM_MOTION_BLUR 一致）。
  // - 平移（MotionBlurFilter 等效）：streak = |Δ中心| × 系数（30fps 下约 17.5% 帧间
  //   位移），13 taps 盒核 → 各向异性高斯 σ = streak/√12，轴向取 |Δx|/|Δy|。
  // - 缩放（ZoomBlurFilter 等效）：strength = |1 − 对角线比| × 系数；**缩放不动点处
  //   锐利、周边随距离拖尾**——用径向渐变蒙版 + backdrop-filter 近似，σ 取参考
  //   距离 700px 处的等效值。不动点由相邻两帧变换解析求出（对应其四角运动求交）。
  // - 静止/微动（σ < 0.3px）不挂滤镜：注视目标永远锐利，安全区微跟随不糊。
  type Blur =
    | { mode: 'move'; sx: number; sy: number }
    | { mode: 'zoom'; s: number; ax: number; ay: number };
  let blur: Blur | null = null;
  if (motionBlur > 0 && frame > 0) {
    const [pTx, pTy, pZ] = smooth(frame - 1);
    const dx = camTx - pTx + (rect.w / 2) * (camZ - pZ);
    const dy = camTy - pTy + (rect.h / 2) * (camZ - pZ);
    const moveDist = Math.hypot(dx, dy);
    const zoomDist = Math.hypot(rect.w * Math.abs(camZ - pZ), rect.h * Math.abs(camZ - pZ));
    const channel = motionBlur * (fps / 60);
    const SIGMA_MIN = 0.3;
    const SIGMA_MAX = 4;
    if (zoomDist > moveDist) {
      const strength = Math.abs(1 - camZ / Math.max(pZ, 1e-6)) * channel;
      const s = Math.min((strength * 700) / Math.sqrt(12), SIGMA_MAX);
      if (s >= SIGMA_MIN) {
        // 缩放不动点（canvas 坐标）：q·z1+t1 = q·z2+t2 的解；z 几乎不变时退化到窗口中心
        const dz = camZ - pZ;
        const q = Math.abs(dz) > 1e-4 ? { x: (pTx - camTx) / dz, y: (pTy - camTy) / dz } : { x: rect.w / 2, y: rect.h / 2 };
        blur = {
          mode: 'zoom',
          s,
          ax: rect.x + camTx + q.x * camZ,
          ay: rect.y + camTy + q.y * camZ,
        };
      }
    } else {
      const sx = Math.min((Math.abs(dx) * channel) / Math.sqrt(12), SIGMA_MAX);
      const sy = Math.min((Math.abs(dy) * channel) / Math.sqrt(12), SIGMA_MAX);
      if (Math.max(sx, sy) >= SIGMA_MIN) blur = { mode: 'move', sx, sy };
    }
  }
  const moveBlur = blur?.mode === 'move' ? blur : null;
  const zoomBlur = blur?.mode === 'zoom' ? blur : null;

  const enter = enterAt == null ? 1 : progress(frame, enterAt, 22);
  const exit = exitAt == null ? 0 : progress(frame, exitAt, 20);
  const screenOpacity = enter * (1 - exit);
  const screenY = lerp(46, 0, enter) + lerp(0, 34, exit);
  const screenScale = lerp(0.972, 1, enter) * lerp(1, 0.984, exit);

  return (
    <div style={{ position: 'absolute', inset: 0, fontFamily: F.sans, overflow: 'hidden' }}>
      {wallpaper ? (
        <Img
          src={staticFile(wallpaper)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <BrandGradient />
      )}
      {moveBlur ? (
        <svg width={0} height={0} style={{ position: 'absolute' }}>
          <filter id={blurId} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation={`${moveBlur.sx} ${moveBlur.sy}`} />
          </filter>
        </svg>
      ) : null}
      {/* 缩放层：绕锚点放大整个窗口（z>1 时出血画布边缘） */}
      <div
        style={{
          position: 'absolute',
          left: rect.x,
          top: rect.y,
          width: rect.w,
          height: rect.h,
          transform: zoomTransform,
          transformOrigin: '0 0',
          filter: moveBlur ? `url(#${blurId})` : undefined,
        }}
      >
        {/* 窗口本体（入退场动画在缩放层内部） */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.28)',
            boxShadow: '0 42px 110px rgba(0,0,0,0.5), 0 10px 32px rgba(0,0,0,0.3)',
            backgroundColor: '#000',
            overflow: 'hidden',
            opacity: screenOpacity,
            transform: `translateY(${screenY}px) scale(${screenScale})`,
            transformOrigin: '50% 60%',
          }}
        >
          {chrome ? <ChromeBar url={url} h={chromeH} /> : null}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: chromeH,
              width: stage.w,
              height: stage.h,
              overflow: 'hidden',
            }}
          >
            {/* 内容层：整页固定适配（scale s0），素材与光标同处页面坐标系 */}
            <div style={{ position: 'absolute', left: 0, top: 0, transform: `scale(${s0})`, transformOrigin: '0 0' }}>
              {cuts.map((cut, i) => (
                <HtmlSnap
                  key={`${cut.slot}-${i}`}
                  slot={cut.slot}
                  frame={frame - cut.from}
                  patchCss={cut.patchCss}
                  drive={cut.drive}
                  visible={i === active}
                />
              ))}
              {overlay}
              <Cursor frame={frame} keys={cursor} clicks={clicks} appearAt={cursorAppearAt} types={cursorTypes} indicator={mouseIndicator} sway={cursorSway} bounce={cursorBounce} />
            </div>
          </div>
        </div>
      </div>
      {zoomBlur
        ? (() => {
            // 径向模糊近似：锚点（缩放不动点）锐利，随距离渐入模糊。
            // ramp 区间 140→520px 对应 ZoomBlurFilter 随距离线性增强的观感。
            const m = `radial-gradient(circle at ${zoomBlur.ax}px ${zoomBlur.ay}px, transparent 140px, black 520px)`;
            return (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  pointerEvents: 'none',
                  backdropFilter: `blur(${zoomBlur.s}px)`,
                  WebkitBackdropFilter: `blur(${zoomBlur.s}px)`,
                  maskImage: m,
                  WebkitMaskImage: m,
                }}
              />
            );
          })()
        : null}
      {children}
    </div>
  );
};
