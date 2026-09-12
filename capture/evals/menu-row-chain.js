(() => {
  const want = 'Image Loader';
  const p = [...document.querySelectorAll('[class*=popover]')].find((e) => e.getBoundingClientRect().width > 0);
  if (!p) return { err: 'no popover' };
  const it = [...p.querySelectorAll('*')].filter((x) => x.children.length === 0 && (x.innerText || '').trim() === want).pop();
  if (!it) return { err: 'no item' };
  const chain = []; let el = it;
  for (let i = 0; i < 8 && el && el !== p; i++) { const r = el.getBoundingClientRect(); chain.push({ tag: el.tagName, role: el.getAttribute('role'), draggable: el.getAttribute('draggable'), onclick: !!el.onclick, cls: String(el.className).slice(0, 60), r: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)], attrs: [...el.attributes].map(a => a.name).filter(n => n.startsWith('data-')).join(',') }); el = el.parentElement; }
  return chain;
})()
