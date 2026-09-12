#!/bin/zsh
# EP1 §4 重采（2026-09-09，v2 顺序）：缩小视图起步 → Shift 框选两节点 → F 只框选中（放大）→ 双击聚焦 → Fit View 全览。
# 三次都是"放大"，观感单调递进；旧顺序里 F 框选中反而缩小（fitSelection 上限 zoom=1）。
set -e; cd "$(dirname "$0")/../.."
j() { node scripts/journey.mjs "$@"; }; m() { node scripts/mouse.mjs "$@" >/dev/null 2>&1; }; k() { node scripts/keys.mjs "$@" >/dev/null 2>&1; }; d() { node scripts/drag.mjs "$@" >/dev/null 2>&1; }
S() { j snap "$1" | tail -1; }
VP() { j eval "document.querySelector('.react-flow__viewport').style.transform"; }
RECT() { j evalf scripts/evals/node-rects.js | python3 -c "import sys,json; r=json.load(sys.stdin); k=[x for x in r if x.startswith('$1')][0]; print(' '.join(map(str,r[k])))"; }
SEL() { j eval "document.querySelectorAll('.react-flow__node.selected').length"; }
BLUR() { j eval "(()=>{const a=document.activeElement; if(a&&a!==document.body) a.blur(); return document.activeElement.tagName})()" >/dev/null; }
j goto "https://youart.ai/workflow/d933cf96-fe7e-4660-9189-3720611bdf8f" 8 >/dev/null
echo "nodes: $(j evalf scripts/evals/nodes.js | tr -d '\n ')"
m 700 950 0.5; BLUR
# 缩小视图：Fit View 后按 4 次缩小（1.61 → ~0.78）
m 96 1048 1.0; for i in 1 2 3 4; do m 32 1048 0.6; done; echo "start vp: $(VP) sel=$(SEL)"
m 700 950 0.5; BLUR; S ep1-s4b-start
read X1 Y1 W1 H1 <<< $(RECT LoadImage); read X2 Y2 W2 H2 <<< $(RECT Text)
MX=$(( X1 < X2 ? X1 : X2 )); MY=$(( Y1 < Y2 ? Y1 : Y2 )); BX=$(( (X1+W1) > (X2+W2) ? (X1+W1) : (X2+W2) )); BY=$(( (Y1+H1) > (Y2+H2) ? (Y1+H1) : (Y2+H2) ))
echo "marquee from $((MX-40)),$((MY-40)) to $((BX+30)),$((BY+30))"
d $((MX - 40)) $((MY - 40)) $((BX + 30)) $((BY + 30)) --shift --steps=25 --settle=1; echo "marquee selected: $(SEL)"; S ep1-s4b-sel2
BLUR; k "f" 1.2; echo "fit 2 (F): $(VP) sel=$(SEL)"; S ep1-s4b-fit2
read X Y W H <<< $(RECT LoadImage); m $((X + 140)) $((Y + 20)) 1.5 --dbl; echo "focus: vp=$(VP) sel=$(SEL)"; S ep1-s4b-focus1
BLUR; m 700 950 0.6; BLUR; m 96 1048 1.2; echo "fit all (button): $(VP) sel=$(SEL)"; S ep1-s4b-fitall
