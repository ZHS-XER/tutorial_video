// 在打开的节点菜单里找文本等于 window.__pick 的结果行，返回行中心与属性
(() => {
  const want = '__PICK__';
  const p = [...document.querySelectorAll('[class*=popover]')].find((e) => e.getBoundingClientRect().width > 0);
  if (!p) return { err: 'no popover' };
  const it = [...p.querySelectorAll('*')].filter((x) => x.children.length === 0 && (x.innerText || '').trim() === want).pop();
  if (!it) return { err: 'no item', text: (p.innerText || '').slice(0, 200) };
  let row = it;
  for (let i = 0; i < 3; i++) if (row.parentElement && row.parentElement.getBoundingClientRect().height < 60) row = row.parentElement;
  const r = row.getBoundingClientRect();
  return { cx: Math.round(r.x + r.width / 2), cy: Math.round(r.y + r.height / 2), draggable: row.getAttribute('draggable'), tag: row.tagName, cls: String(row.className).slice(0, 80), html: row.outerHTML.slice(0, 300) };
})()
