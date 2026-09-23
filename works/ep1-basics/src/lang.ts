// lang.ts — EP1 语言开关（2026-09-17 中文版）：REMOTION_LANG=zh 时切中文字幕 / 中文配音 / 卡片文案；时间线与编排完全不变（节拍仍按英文 VO_DUR）。
// 用法：REMOTION_LANG=zh npm run render ep1-basics（tools/render.mjs 支持 --lang=zh，出 ep1-basics-zh.mp4）。
import { CAPS } from './lines.gen';
import { CAPS_ZH } from './lines.zh.gen';
import { VO_DUR } from './vo.gen';
import { VO_DUR_ZH } from './vo.zh.gen';

// Remotion 打包时用 DefinePlugin 注入 REMOTION_* 环境变量；浏览器侧没有 node 类型，这里只声明用到的形状
declare const process: { env: Record<string, string | undefined> };
export type Lang = 'en' | 'zh';
export const LANG: Lang = (process.env.REMOTION_LANG === 'zh' ? 'zh' : 'en');
export const IS_ZH = LANG === 'zh';

/** 当前语言的字幕表（id 与英文版一致） */
export const CAPS_L: Record<string, string> = IS_ZH ? CAPS_ZH : CAPS;
/** 配音文件路径 */
export const voSrc = (id: string) => `works/ep1-basics/audio/${IS_ZH ? 'vo-zh' : 'vo'}/${id}.mp3`;
/** 配音片段真实时长（只用于 AudioLayer 播放长度；节拍/拍位一律仍用英文 VO_DUR） */
export const VO_PLAY: Record<string, number> = IS_ZH ? { ...VO_DUR, ...VO_DUR_ZH } : VO_DUR;

export type CapWord = { t: string; hi?: boolean; glue?: boolean };
const PUNCT_TAIL = /^[，。：；！？、.,:;!?…)）]+/;
/** 中英通用 tokenizer：*词* 品牌黄（后随标点并入同色）；空格 = 词距；没有空格相接的词标 glue（不留词距）。英文句子结果与 engine 的 cap() 一致。 */
export const capL = (s: string): CapWord[] => {
  const out: CapWord[] = [];
  const re = /\*([^*]+)\*|(\s+)|([^*\s]+)/g;
  let m: RegExpExecArray | null;
  let sawSpace = true; // 句首不算 glue
  while ((m = re.exec(s))) {
    if (m[2] != null) { sawSpace = true; continue; }
    if (m[1] != null) {
      const tail = PUNCT_TAIL.exec(s.slice(re.lastIndex))?.[0] ?? '';
      re.lastIndex += tail.length;
      const ws = m[1].split(' ').filter(Boolean);
      ws.forEach((w, i) => out.push({ t: i === ws.length - 1 ? w + tail : w, hi: true, glue: i === 0 && !sawSpace ? true : undefined }));
      sawSpace = false;
      continue;
    }
    out.push({ t: m[3], glue: !sawSpace ? true : undefined });
    sawSpace = false;
  }
  return out;
};

/** 卡片 / 叠加层文案 */
export const UI = IS_ZH
  ? {
      title: '工作流基础',
      chapters: [
        { title: '创建节点', sub: '+ 菜单 · 搜索 · 双击画布' },
        { title: '连接节点', sub: '接口按颜色区分 · 放到节点任意位置' },
        { title: '展开与收起', sub: '箭头 · ⌘[ ⌘] · 收起全部节点 · 节点自动收起' },
        { title: '聚焦视图', sub: '选中 + F · 双击节点 · 适应视图' },
        { title: '自动布局', sub: '⌘A 再 L · 水平 / 垂直 · 快捷键面板' },
        { title: '复用素材', sub: '媒体资产面板 · 素材库页面' },
        { title: '偏好设置', sub: '⌘, · 画布背景 · 下载文件命名' },
      ],
      recapTag: 'RECAP',
      recapTitle: '本集学到的快捷键',
      recapRows: ['添加节点（或双击画布）', '多选节点', '收起节点   ·   ⌘ ] 展开', '框住选中的节点', '全选，再按 L 自动布局', '设置与偏好'],
      nextTag: 'NEXT · EP 02',
      nextTitle: '生成图片和视频',
      legendTitle: '接口颜色',
      connectChip: '连接 2', // 拖共用输出点时光标旁的芯片；产品中文词表里没有这条（新功能），按 "Connect input {n}"→"连接输入 $1" 的模式推断
      legend: ['文本', '图像', '视频', '音频'],
      /** 键帽鼠标虚拟键键面（KbdOverlay faces） */
      kbdFaces: { Right: '右键', Left: '点击', Drag: '拖拽' } as Record<string, string> | undefined,
      dragFace: '拖拽',
      /** 片头迷你 workflow 节点标签 */
      mini: { Image: '图像', 'Image model': '图像模型', Text: '文本', 'Video model': '视频模型' } as Record<string, string>,
    }
  : {
      title: 'Workflow basics',
      chapters: [
        { title: 'Create a node', sub: 'the + menu · search · double-click the canvas' },
        { title: 'Connect nodes', sub: 'ports are color-coded · drop anywhere on the node' },
        { title: 'Expand & collapse', sub: 'arrow · ⌘[ ⌘] · Collapse All · Auto-collapse' },
        { title: 'Focus view', sub: 'select + F · double-click a node · Fit view' },
        { title: 'Auto layout', sub: '⌘A then L · horizontal / vertical · shortcuts panel' },
        { title: 'Reuse your assets', sub: 'Media Assets panel · the Assets page' },
        { title: 'Preferences', sub: '⌘, · canvas background · download filename' },
      ],
      recapTag: 'RECAP',
      recapTitle: 'Shortcuts you learned',
      recapRows: ['Add a node (or double-click the canvas)', 'Select several nodes', 'Collapse a node   ·   ⌘ ] expands', 'Frame the selection', 'Select all, then L to auto-layout', 'Settings and Preferences'],
      nextTag: 'NEXT · EP 02',
      nextTitle: 'Generating images and video',
      legendTitle: 'PORT COLORS',
      connectChip: 'Connect 2',
      legend: ['Text', 'Image', 'Video', 'Audio'],
      kbdFaces: undefined as Record<string, string> | undefined,
      dragFace: 'Drag',
      mini: {} as Record<string, string>,
    };
