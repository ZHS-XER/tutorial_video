// spring.ts — Recordly 式双层平滑的第二层：阻尼谐振子弹簧追踪。
//
// 设计与参数来自 Recordly 自动运镜机制分析（相机弹簧 k=100/c=21/m=1 → ζ≈1.05
// 略过阻尼 + 过冲钳制；贝塞尔曲线只生成目标，画面由弹簧驱动）。本文件是按
// 物理公式的独立实现——Recordly 为 AGPL-3.0，只借鉴参数与设计思路，不引入其源码。
//
// 确定性约定：springTrackN 从场景第 0 帧起以固定步长 dt=1/fps 重放到目标帧，
// 结果只取决于目标轨迹函数与帧号——纯函数、双向 seek 安全、渲染间零抖动。
// 弹簧作用于最终变换域（如 zoom 层的 tx/ty/scale），缩放与平移共享同一套惯性；
// 目标阶跃、接力平移、中途改向都被转成 C¹ 连续的带惯性运动。

export type SpringParams = { stiffness: number; damping: number; mass: number };

/** 相机弹簧（Recordly 默认档）：ζ≈1.05 略过阻尼，快速响应且无回摆 */
export const CAM_SPRING: SpringParams = { stiffness: 100, damping: 21, mass: 1 };

/** 光标弹簧：比相机硬一档（跟手、去抖），ζ≈0.94 自然过冲可忽略 */
export const CURSOR_SPRING: SpringParams = { stiffness: 550, damping: 46, mass: 1.1 };

// —— 道具弹簧档（v5.1 MG 升级）：欠阻尼、不钳制过冲——道具带着速度**穿过**目标
// 再弧线回摆，才是真弹簧观感；钳制吸附只留给相机（文字锐度优先）。
/** 弹跳登场/落地响铃：ζ≈0.59，一次明显过冲 + 一次微回摆（~0.45s 收敛） */
export const POP_SPRING: SpringParams = { stiffness: 210, damping: 17, mass: 1 };
/** 轻过冲落位：ζ≈0.72，单次 2–5% 过冲（元素归位/抬升） */
export const LAND_SPRING: SpringParams = { stiffness: 130, damping: 16.5, mass: 1 };
/** 长尾巡航：ζ≈0.73，大行程 morph/整页运动（~0.65s 收敛，过冲 ~3.5%——
 * v5.3 调低阻尼加弹性动感，分发落位有可见的一下回弹） */
export const GLIDE_SPRING: SpringParams = { stiffness: 64, damping: 11.7, mass: 1 };
/** 飞行捕获：ζ≈0.78，配合大初速度（v0≈4.2×行程/s）——疾驰后刹进槽位，
 * 过冲 ≈2.3% 行程（1400px → 32px）@13.75u，9.5u 进入 2% 行程（数值仿真定档） */
export const CATCH_SPRING: SpringParams = { stiffness: 92, damping: 15, mass: 1 };

/** 闭式解单步：从 (x0, v0) 向常值目标 target 演进 dt 秒，按三种阻尼状态解析求解 */
const springStep = (
  x0: number,
  v0: number,
  target: number,
  dt: number,
  w0: number,
  zeta: number,
): [number, number] => {
  const d0 = x0 - target;
  if (zeta < 1) {
    // 欠阻尼
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    const env = Math.exp(-zeta * w0 * dt);
    const b = (v0 + zeta * w0 * d0) / wd;
    const cos = Math.cos(wd * dt);
    const sin = Math.sin(wd * dt);
    return [
      target + env * (d0 * cos + b * sin),
      env * ((b * wd - d0 * zeta * w0) * cos - (d0 * wd + b * zeta * w0) * sin),
    ];
  }
  if (zeta === 1) {
    // 临界阻尼
    const env = Math.exp(-w0 * dt);
    const b = v0 + w0 * d0;
    return [target + env * (d0 + b * dt), env * (b - w0 * (d0 + b * dt))];
  }
  // 过阻尼
  const wd = w0 * Math.sqrt(zeta * zeta - 1);
  const env = Math.exp(-zeta * w0 * dt);
  const b = (v0 + zeta * w0 * d0) / wd;
  const cosh = Math.cosh(wd * dt);
  const sinh = Math.sinh(wd * dt);
  return [
    target + env * (d0 * cosh + b * sinh),
    env * ((b * wd - d0 * zeta * w0) * cosh + (d0 * wd - b * zeta * w0) * sinh),
  ];
};

/**
 * 多分量弹簧追踪：target(f) 给出每帧的目标向量，返回弹簧在 frame 处追到的位置。
 * ζ≥1 时启用过冲钳制：值穿越目标即吸附并清零速度（消果冻回摆、保快速响应）。
 * frame 可为分数（60fps 渲染 30 单位时间线）：整数步重放后按余量走一步 dt·frac，
 * 闭式解下即精确连续轨迹——整点处与旧版逐帧结果完全一致。
 */
export const springTrackN = (
  target: (f: number) => number[],
  frame: number,
  fps: number,
  p: SpringParams = CAM_SPRING,
): number[] => {
  const w0 = Math.sqrt(p.stiffness / p.mass);
  const zeta = p.damping / (2 * Math.sqrt(p.stiffness * p.mass));
  const clampOvershoot = zeta >= 1;
  const dt = 1 / fps;
  const x = target(0).slice();
  const v = new Array(x.length).fill(0);
  const end = Math.max(0, Math.floor(frame));
  const frac = Math.max(0, frame - end);
  const advance = (f: number, stepDt: number) => {
    const tf = target(f);
    for (let i = 0; i < x.length; i++) {
      const before = x[i] - tf[i];
      const [nx, nv] = springStep(x[i], v[i], tf[i], stepDt, w0, zeta);
      if (clampOvershoot && before !== 0 && (nx - tf[i]) * before < 0) {
        x[i] = tf[i];
        v[i] = 0;
      } else {
        x[i] = nx;
        v[i] = nv;
      }
    }
  };
  for (let f = 1; f <= end; f++) advance(f, dt);
  if (frac > 1e-6) advance(end + 1, dt * frac);
  return x;
};

/**
 * 常值目标闭式解（道具弹簧的首选原语）：从 (x0, v0) 出发、目标恒为 target，
 * tSec 秒后的 [位置, 速度]。O(1) 精确解、分数时间原生支持、不钳制过冲。
 * t≤0 返回初始状态。发牌/落章给大 |v0| 即"疾驰后被弹簧刹进槽位"。
 */
export const springAt = (
  x0: number,
  v0: number,
  target: number,
  tSec: number,
  p: SpringParams = LAND_SPRING,
): [number, number] => {
  if (tSec <= 0) return [x0, v0];
  const w0 = Math.sqrt(p.stiffness / p.mass);
  const zeta = p.damping / (2 * Math.sqrt(p.stiffness * p.mass));
  return springStep(x0, v0, target, tSec, w0, zeta);
};

/** 单值便捷封装 */
export const springTrack = (
  target: (f: number) => number,
  frame: number,
  fps: number,
  p: SpringParams = CAM_SPRING,
): number => springTrackN((f) => [target(f)], frame, fps, p)[0];
