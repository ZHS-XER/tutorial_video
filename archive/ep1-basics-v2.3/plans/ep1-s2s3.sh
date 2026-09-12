#!/bin/zsh
# EP1 §2 连线/断线 + §3 展开/收起（接 §1 末状态：3 节点，viewport identity）
set -e; cd "$(dirname "$0")/../.."
j() { node scripts/journey.mjs "$@"; }; m() { node scripts/mouse.mjs "$@" >/dev/null 2>&1; }; k() { node scripts/keys.mjs "$@" >/dev/null 2>&1; }; d() { node scripts/drag.mjs "$@" >/dev/null 2>&1; }
S() { j snap "$1" | tail -1; }
H() { j evalf scripts/evals/handles.js | python3 -c "import sys,json; h=json.load(sys.stdin); n=[k for k in h if k.startswith('$1')][0]; print(','.join(map(str,h[n]['$2'])))"; }
EC() { j eval "document.querySelectorAll('.react-flow__edge').length"; }
NH() { j eval "Math.round(document.querySelector('.react-flow__node[data-id^=$1]').getBoundingClientRect().height)"; }
# §2
m 700 950 0.5; S ep1-s2-start
A=$(H LoadImage edge-out); B=$(H Seedance edge-in-image_1); echo "image: $A → $B"; d ${A%,*} ${A#*,} ${B%,*} ${B#*,} --steps=25 --settle=1.2; [ "$(EC)" = "1" ] || { echo "!! edge1 failed"; exit 1; }; S ep1-s2-edge1
A=$(H Text edge-out); B=$(H Seedance edge-in-text_input-1); echo "text: $A → $B"; d ${A%,*} ${A#*,} ${B%,*} ${B#*,} --steps=25 --settle=1.2; [ "$(EC)" = "2" ] || { echo "!! edge2 failed"; exit 1; }; S ep1-s2-edge2
P=$(j evalf scripts/evals/edge-mid.js | tr -d '"'); echo "text edge mid $P"; m ${P%,*} ${P#*,} 0.8; echo "selected edges: $(j eval "document.querySelectorAll('.react-flow__edge.selected').length")"; S ep1-s2-edgesel
j press Backspace 1 >/dev/null; [ "$(EC)" = "1" ] || { echo "!! delete failed"; exit 1; }; S ep1-s2-deleted
A=$(H Text edge-out); B=$(H Seedance edge-in-text_input-1); d ${A%,*} ${A#*,} ${B%,*} ${B#*,} --steps=25 --settle=1.2; [ "$(EC)" = "2" ] || { echo "!! reconnect failed"; exit 1; }; m 700 950 0.4; S ep1-s2-edge2b
# §3
read SX SY SW SH <<< $(j eval "(n=>{const r=n.getBoundingClientRect();return [r.x,r.y,r.width,r.height].map(Math.round).join(' ')})(document.querySelector('.react-flow__node[data-id^=Seedance]'))" | tr -d '"')
echo "seedance rect $SX $SY $SW $SH; height before: $(NH Seedance)"
m $((SX + SW - 20)) $((SY + 20)) 1.0; echo "after chevron click: $(NH Seedance)"; S ep1-s3-collapsed1
read TX TY TW TH <<< $(j eval "(n=>{const r=n.getBoundingClientRect();return [r.x,r.y,r.width,r.height].map(Math.round).join(' ')})(document.querySelector('.react-flow__node[data-id^=Text]'))" | tr -d '"')
m $((TX + 60)) $((TY + 18)) 0.6; echo "Text h: $(NH Text)"; k "Meta+[" 1; echo "after ⌘[: $(NH Text)"; S ep1-s3-collapsed2
k "Meta+]" 1; echo "after ⌘]: $(NH Text)"; S ep1-s3-expanded2
m 700 950 0.5 --right; S ep1-s3-ctx
j click "Expand All Nodes" 1.2 >/dev/null; echo "Seedance h after expand all: $(NH Seedance)"; S ep1-s3-allexpanded
m 128 1048 1.0; echo "auto-collapse pressed: $(j eval "document.querySelector('button[aria-label=\"Auto-collapse\"]').getAttribute('aria-pressed')") heights: $(j eval "[...document.querySelectorAll('.react-flow__node')].map(n=>Math.round(n.getBoundingClientRect().height)).join(',')")"; m 700 950 0.6; echo "after click empty: $(j eval "[...document.querySelectorAll('.react-flow__node')].map(n=>Math.round(n.getBoundingClientRect().height)).join(',')")"; S ep1-s3-autocollapse
m 128 1048 0.8; echo "auto-collapse pressed: $(j eval "document.querySelector('button[aria-label=\"Auto-collapse\"]').getAttribute('aria-pressed')")"; m 700 950 0.5
echo "end heights: $(j eval "[...document.querySelectorAll('.react-flow__node')].map(n=>Math.round(n.getBoundingClientRect().height)).join(',')") edges: $(EC) vp: $(j eval "document.querySelector('.react-flow__viewport').style.transform")"
