// materials.ts — 快照元数据注册表。各 work 的 src/materials.gen.ts（capture/journey.mjs snap 生成）在模块加载时
// 调用 registerMaterials 把自己的快照注入；引擎（HtmlSnap / camera / ScreenStage / flowMeta）只从这里读。
export type MatEl = { tag: string; text: string; testid?: string; x: number; y: number; w: number; h: number };
export type FlowHandle = { id: string | null; type: 'source' | 'target'; cx: number; cy: number };
export type FlowNode = { id: string | null; transform: string; x: number; y: number; w: number; h: number; selected: boolean; handles: FlowHandle[] };
export type FlowMeta = { viewport: string; nodes: FlowNode[]; edges: Array<{ id: string | null; d: string | null }> };
/** src：相对 public/ 的快照 html 路径（如 works/<slug>/captures/<slot>.html） */
export type MatMeta = { src: string; pageW: number; pageH: number; els: MatEl[]; flow?: FlowMeta };

export const MATERIALS: Record<string, MatMeta> = {};
export const registerMaterials = (m: Record<string, MatMeta>) => { Object.assign(MATERIALS, m); };
