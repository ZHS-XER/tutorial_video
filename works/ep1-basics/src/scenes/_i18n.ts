// _i18n.ts — 中文版把快照里的产品界面英文替换成官方中文（词表 ui.zh.gen.ts，来自产品 next-intl 文案包）。
// localizeUi 作为每个 cut 的最后一个驱动逐帧跑（幂等：中文文本不再匹配英文键）；设置面板内用 settings.* 译法，列表页 slot 用导航译法。
import type { DriveFn } from '@engine/stage/HtmlSnap';
import { UI_ZH_EXACT, UI_ZH_PAGES, UI_ZH_REGEX, UI_ZH_SETTINGS, UI_ZH_UNITS } from '../ui.zh.gen';

const RE = UI_ZH_REGEX.map(([r, t]) => [new RegExp(r), t] as const);
const PAGE_SLOTS = /-(s1-workflows|m-assetspage)$/;
const hasLatin = (s: string) => /[A-Za-z]{2,}/.test(s);

export const translateUi = (t: string, inSettings: boolean, pageSlot: boolean): string | null => {
  if (inSettings && UI_ZH_SETTINGS[t]) return UI_ZH_SETTINGS[t];
  if (pageSlot && UI_ZH_PAGES[t]) return UI_ZH_PAGES[t];
  if (UI_ZH_EXACT[t]) return UI_ZH_EXACT[t];
  for (const [re, tpl] of RE) {
    const m = re.exec(t);
    if (m) return tpl.replace(/\$(\d)/g, (_, i) => { const g = m[Number(i)] ?? ''; return UI_ZH_UNITS[g] ?? g; });
  }
  return null;
};

/** 逐文本节点替换（保留首尾空白）+ placeholder / aria-label / title 属性 */
export const localizeUi = (slot: string): DriveFn => {
  const pageSlot = PAGE_SLOTS.test(slot);
  return (doc) => {
    const body = doc.body;
    if (!body) return;
    const walker = doc.createTreeWalker(body, 4 /* SHOW_TEXT */);
    for (let tn = walker.nextNode() as Text | null; tn; tn = walker.nextNode() as Text | null) {
      const raw = tn.nodeValue || '';
      if (!hasLatin(raw)) continue;
      const p = tn.parentElement;
      if (!p || p.tagName === 'SCRIPT' || p.tagName === 'STYLE' || p.tagName === 'TEXTAREA') continue;
      const t = raw.replace(/\s+/g, ' ').trim();
      const z = translateUi(t, !!p.closest('[data-slot="dialog-content"]'), pageSlot);
      if (z && z !== t) {
        const lead = /^\s*/.exec(raw)?.[0] ?? '', tail = /\s*$/.exec(raw)?.[0] ?? '';
        tn.nodeValue = lead + z + tail;
      }
    }
    // tiptap 编辑器的占位符走 aria-placeholder / data-placeholder（CSS content: attr()）
    for (const el of Array.from(body.querySelectorAll('[placeholder],[aria-label],[title],[aria-placeholder],[data-placeholder]')) as HTMLElement[]) {
      for (const a of ['placeholder', 'aria-label', 'title', 'aria-placeholder', 'data-placeholder']) {
        const v = el.getAttribute(a);
        if (v && hasLatin(v)) { const z = translateUi(v.trim(), !!el.closest('[data-slot="dialog-content"]'), pageSlot); if (z && z !== v) el.setAttribute(a, z); }
      }
    }
  };
};
