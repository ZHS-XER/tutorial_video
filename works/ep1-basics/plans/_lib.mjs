// _lib.mjs — EP1 采集计划共用：舞台 URL、布局坐标、面板收起、隐私清理
export const STAGE = 'https://youart.ai/workflow/d97e9e57-06c6-485c-b3f8-d9a54676dc85';
export const MATERIAL = 'https://youart.ai/workflow/357a2788-6c79-47d9-a147-64b2e30152f1';
export const WORK = 'ep1-basics';
/** 100% 缩放下四个节点的左上角（CSS px = flow 坐标，viewport translate(0,0) scale(1)） */
// 注意：+ 面板搜索态占 x 64–404、y 214–650，拖放落点必须在其外
export const POS = { loader: [470, 260], gpt: [830, 150], text: [470, 570], video: [1190, 200] };
export const UI = { plus: [35, 365], search: [174, 280], assets: [35, 418], chatToggle: [1504, 32], info: [192, 832], nodeOptions: [80, 832], fitView: null };

/** 真·重置视口到 translate(0,0) scale(1)：通过 React fiber 拿到 React Flow v11 store，d3Zoom.transform（内部状态与 DOM 一致，缩放标签显示 100%） */
export const setViewport = (h, x = 0, y = 0, k = 1) => h.eval((x, y, k) => {
  const el = document.querySelector('.react-flow'); if (!el) return 'no react-flow';
  const key = Object.keys(el).find((kk) => kk.startsWith('__reactFiber$'));
  let fiber = el[key], store = null;
  for (let i = 0; i < 80 && fiber; i++) { const p = fiber.memoizedProps; if (p && p.value && typeof p.value.getState === 'function' && p.value.getState().d3Zoom) { store = p.value; break; } fiber = fiber.return; }
  if (!store) return 'no store';
  const st = store.getState();
  const z = [...document.querySelectorAll('.react-flow *')].find((e) => e.__zoom); if (!z || !st.d3Selection) return 'no zoom el';
  const T = z.__zoom.constructor; st.d3Zoom.transform(st.d3Selection, new T(k, x, y));
  return 'ok';
}, x, y, k);
/** 聊天栏若展开则收起（右上按钮），并把视口真·归零 */
export const prep = async (h) => {
  const chatOpen = await h.eval(() => /New Chat|Start a conversation/.test(document.body.innerText || ''));
  if (chatOpen) { await h.human(...UI.chatToggle); await h.click(null, null, { settle: 1.2 }); h.log('chat collapsed'); }
  const r = await setViewport(h, 0, 0, 1); if (r !== 'ok') h.log('setViewport:', r);
  await h.sleep(0.5);
};
/** 隐私：/workflows 页只保留 New Workflow 卡；编辑器里通知红点等不动 */
export const hideProjectCards = (h) => h.eval(() => {
  const label = [...document.querySelectorAll('div,span,p,h3,button,a')].find((e) => e.children.length === 0 && (e.textContent || '').trim() === 'New Workflow');
  if (!label) return 'no New Workflow label';
  // 向上找到"卡片行"：某祖先的子元素 ≥3 且各子元素高度相近（项目卡）
  let card = label, row = null;
  for (let i = 0; i < 10 && card.parentElement; i++) {
    const p = card.parentElement;
    if (p.children.length >= 3 && [...p.children].every((c) => c.getBoundingClientRect().height > 120)) { row = p; break; }
    card = p;
  }
  if (!row) return 'no row found';
  let n = 0; for (const sib of [...row.children]) if (sib !== card) { sib.style.display = 'none'; n++; }
  return `hid ${n} cards (row ${row.tagName}.${String(row.className).slice(0, 40)})`;
});

/** 素材项目快照后处理：标题 ep1-素材 → Untitled Project；积分数字回填成舞台快照的 10,673 */
export const patchMaterialHtml = (fs, ROOT, slot) => {
  const p = `${ROOT}/works/${WORK}/captures/${slot}.html`; let html = fs.readFileSync(p, 'utf8');
  html = html.split('ep1-素材').join('Untitled Project').replace(/>10,6\d\d</g, '>10,673<');
  fs.writeFileSync(p, html);
};
