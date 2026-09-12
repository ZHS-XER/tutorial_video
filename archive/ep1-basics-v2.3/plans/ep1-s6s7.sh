#!/bin/zsh
# EP1 §6 素材面板复用 + §7 画布背景（v2：落点避开节点；背景改动后验证 .react-flow 底色；结束恢复偏好）
set -e; cd "$(dirname "$0")/../.."
j() { node scripts/journey.mjs "$@"; }; m() { node scripts/mouse.mjs "$@" >/dev/null 2>&1; }; k() { node scripts/keys.mjs "$@" >/dev/null 2>&1; }
S() { j snap "$1" | tail -1; }
VP() { j eval "document.querySelector('.react-flow__viewport').style.transform"; }
N() { j evalf scripts/evals/nodes.js | tr -d '\n '; echo; }
BLUR() { j eval "(()=>{const a=document.activeElement; if(a&&a!==document.body) a.blur(); return 1})()" >/dev/null; }
ARIA() { j eval "(b=>{if(!b) return '0,0'; const r=b.getBoundingClientRect(); return [Math.round(r.x+r.width/2),Math.round(r.y+r.height/2)].join(',')})([...document.querySelectorAll('button[aria-label=\"$1\"],button[title=\"$1\"]')].find(b=>b.getBoundingClientRect().width>0))" | tr -d '"'; }
RFBG() { j eval "getComputedStyle(document.querySelector('.react-flow')).backgroundColor + ' / ' + document.querySelectorAll('.react-flow__background circle').length + 'c ' + document.querySelectorAll('.react-flow__background path').length + 'p'"; }
PREFS() { k "Meta+," 1.2; j click "Preferences" 1.0 >/dev/null; P=$(ARIA $1); m ${P%,*} ${P#*,} 0.8 --direct; P=$(ARIA $2); m ${P%,*} ${P#*,} 0.8 --direct; j press Escape 0.8 >/dev/null; m 700 950 0.4; }
echo "--- restore prefs first ---"; PREFS Default Dots; echo "bg: $(RFBG)"
echo "=== §6 ==="; BLUR; m 96 1048 1.0; echo "vp: $(VP) nodes: $(j eval "document.querySelectorAll('.react-flow__node').length")"
m 35 527 1.2 --direct; S ep1-s6-panel
IMG=$(j eval "(()=>{const p=[...document.querySelectorAll('[class*=popover]')].find(e=>e.getBoundingClientRect().width>0); const img=p.querySelector('img'); const r=img.getBoundingClientRect(); return [Math.round(r.x+r.width/2),Math.round(r.y+r.height/2)].join(',');})()" | tr -d '"'); echo "thumb at $IMG"; m ${IMG%,*} ${IMG#*,} 0.8 --move --direct; S ep1-s6-panelhover
node scripts/dnd.mjs ${IMG%,*} ${IMG#*,} 560 830 1.8 | tail -1; echo "nodes: $(N)"; m 700 950 0.4; BLUR; S ep1-s6-dropped
m 96 1048 1.2; echo "fit: $(VP)"; S ep1-s6-fit
echo "=== §7 ==="; k "Meta+," 1.2; S ep1-s7-settings; j click "Preferences" 1.0 >/dev/null; S ep1-s7-prefs
P=$(ARIA Lighter); m ${P%,*} ${P#*,} 1.0 --direct; echo "after Lighter: $(RFBG)"; S ep1-s7-lighter
P=$(ARIA Grid); m ${P%,*} ${P#*,} 1.0 --direct; echo "after Grid: $(RFBG)"; S ep1-s7-grid
j press Escape 0.8 >/dev/null; m 700 950 0.4; echo "result bg: $(RFBG)"; S ep1-s7-result
PREFS Default Dots; echo "restored bg: $(RFBG)"; S ep1-s7-restored
echo "done nodes=$(j eval "document.querySelectorAll('.react-flow__node').length") vp=$(VP)"
