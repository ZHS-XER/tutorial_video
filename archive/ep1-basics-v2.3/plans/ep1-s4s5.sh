#!/bin/zsh
# EP1 §4 Focus view + §5 Auto layout（v2：先清 Text 节点残留文字；每次快捷键前 blur；Fit View 用按钮兜底）
set -e; cd "$(dirname "$0")/../.."
j() { node scripts/journey.mjs "$@"; }; m() { node scripts/mouse.mjs "$@" >/dev/null 2>&1; }; k() { node scripts/keys.mjs "$@" >/dev/null 2>&1; }; d() { node scripts/drag.mjs "$@" >/dev/null 2>&1; }
S() { j snap "$1" | tail -1; }
VP() { j eval "document.querySelector('.react-flow__viewport').style.transform"; }
N() { j evalf scripts/evals/nodes.js | tr -d '\n '; echo; }
RECT() { j evalf scripts/evals/node-rects.js | python3 -c "import sys,json; r=json.load(sys.stdin); k=[x for x in r if x.startswith('$1')][0]; print(' '.join(map(str,r[k])))"; }
SEL() { j eval "document.querySelectorAll('.react-flow__node.selected').length"; }
BLUR() { j eval "(()=>{const a=document.activeElement; if(a&&a!==document.body) a.blur(); return document.activeElement.tagName})()" >/dev/null; }
TXT() { j eval "(n=>{const t=n.querySelector('textarea,[contenteditable=true]'); return t?(t.value??t.textContent).trim():'?'})(document.querySelector('.react-flow__node[data-id^=Text]'))"; }
# 0. 清掉 Text 节点里的残留文字
read X Y W H <<< $(RECT Text); echo "Text content before: $(TXT)"
m $((X + 140)) $((Y + 90)) 0.6; k "Meta+a" 0.3; j press Backspace 0.6 >/dev/null; echo "Text content after clear: $(TXT)"; BLUR; m 700 950 0.5
[ "$(TXT)" = '""' ] || { echo "!! Text not empty"; exit 1; }
# 0b. viewport 平移到 identity（拖空白画布）
read TX TY <<< $(j eval "(v=>{const m=/translate\((-?[\d.]+)px, (-?[\d.]+)px\)/.exec(v.style.transform); return m?[Math.round(m[1]),Math.round(m[2])].join(' '):'0 0'})(document.querySelector('.react-flow__viewport'))" | tr -d '"')
if [ "$TX" != "0" ] || [ "$TY" != "0" ]; then d 300 900 $((300 - TX)) $((900 - TY)) --steps=15 --settle=0.8; fi; echo "vp: $(VP)"
# §4
m 700 950 0.4; BLUR; S ep1-s4-start
read X Y W H <<< $(RECT LoadImage); m $((X + 140)) $((Y + 20)) 1.5 --dbl; echo "focus: vp=$(VP) sel=$(SEL)"; S ep1-s4-focus1
BLUR; m 700 950 0.6; BLUR; m 96 1048 1.2; echo "fit all (button): $(VP)"; S ep1-s4-fitall
read X1 Y1 W1 H1 <<< $(RECT LoadImage); read X2 Y2 W2 H2 <<< $(RECT Text)
MX=$(( X1 < X2 ? X1 : X2 )); MY=$(( Y1 < Y2 ? Y1 : Y2 )); BX=$(( (X1+W1) > (X2+W2) ? (X1+W1) : (X2+W2) )); BY=$(( (Y1+H1) > (Y2+H2) ? (Y1+H1) : (Y2+H2) ))
d $((MX - 40)) $((MY - 40)) $((BX + 30)) $((BY + 30)) --shift --steps=25 --settle=1; echo "marquee selected: $(SEL)"; S ep1-s4-sel2
BLUR; k "f" 1.2; echo "fit 2 (F): $(VP) text=$(TXT)"; S ep1-s4-fit2
m 700 950 0.6; BLUR; m 96 1048 1.2; echo "fit all again: $(VP)"; S ep1-s4-fitall2
# §5
read X Y W H <<< $(RECT Text); d $((X + 100)) $((Y + 18)) $((X - 160)) $((Y + 200)) --steps=20 --settle=0.8
m 700 950 0.4; BLUR; echo "messy: $(N)"; S ep1-s5-messy
k "Meta+a" 0.5; BLUR; k "l" 0.6; S ep1-s5-arranged; echo "arranged: $(N) text=$(TXT)"
read X Y W H <<< $(RECT Seedance); m $((X + W/2)) $((Y + 30)) 0.8 --right
AL=$(j eval "(()=>{const it=[...document.querySelectorAll('[role=menuitem]')].find(x=>/Auto Layout/.test(x.innerText)); if(!it) return '0,0'; const r=it.getBoundingClientRect(); return [Math.round(r.x+r.width/2),Math.round(r.y+r.height/2)].join(',');})()" | tr -d '"'); echo "Auto Layout item at $AL"; m ${AL%,*} ${AL#*,} 1.0 --direct; S ep1-s5-submenu
j click "Align Vertically" 1.5 >/dev/null; m 700 950 0.4; S ep1-s5-vertical; echo "vertical: $(N)"
k "Meta+a" 0.5; read X Y W H <<< $(RECT Seedance); m $((X + W/2)) $((Y + 30)) 0.8 --right; AL=$(j eval "(()=>{const it=[...document.querySelectorAll('[role=menuitem]')].find(x=>/Auto Layout/.test(x.innerText)); if(!it) return '0,0'; const r=it.getBoundingClientRect(); return [Math.round(r.x+r.width/2),Math.round(r.y+r.height/2)].join(',');})()" | tr -d '"'); m ${AL%,*} ${AL#*,} 1.0 --direct; j click "Align Horizontally" 1.5 >/dev/null; m 700 950 0.4; S ep1-s5-horizontal; echo "horizontal: $(N)"
BLUR; m 96 1048 1.2; S ep1-s5-fit; echo "end vp: $(VP) text=$(TXT)"
