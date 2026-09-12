#!/bin/zsh
# EP1 §1 创建节点：12 个状态。前提：EP1 Basics 项目已打开、画布为空、viewport 为 identity。
set -e; cd "$(dirname "$0")/../.."
j() { node scripts/journey.mjs "$@"; }; m() { node scripts/mouse.mjs "$@" >/dev/null 2>&1; }; k() { node scripts/keys.mjs "$@" >/dev/null 2>&1; }
S() { j snap "$1" | tail -1; }
NCOUNT() { j eval "document.querySelectorAll('.react-flow__node').length"; }
NODES() { j evalf scripts/evals/nodes.js | tr -d '\n' ; echo; }
EXPECT() { local n=$(NCOUNT); [ "$n" = "$1" ] || { echo "!! expected $1 nodes, got $n"; exit 1; }; }
PICK() { sed "s/__PICK__/$1/" scripts/evals/menu-row.js > /tmp/pick.js; j evalf /tmp/pick.js | python3 -c "import sys,json; a=json.load(sys.stdin); print(f\"{a['cx']},{a['cy']}\" if 'cx' in a else '0,0')"; }
echo "viewport: $(j eval "document.querySelector('.react-flow__viewport').style.transform")"; EXPECT 0
S ep1-s1-empty
# 1a. + 按钮（悬停面板，鼠标必须直线进入并停留）
m 35 474 1.0 --direct; S ep1-s1-menu
# 1b. 悬停 Image models → 子菜单（子菜单打开时点搜索框会关闭整个面板，所以先拍完再重开）
m 160 547 1.0 --move --direct; S ep1-s1-submenu
j press Escape 0.4 >/dev/null; m 700 900 0.5; [ "$(j evalf scripts/evals/popover-open.js)" = "true" ] && j press Escape 0.4 >/dev/null
# 1c. 重开面板 → 搜索 image loader → 结果 → 拖到画布 (480,160)
m 35 474 1.0 --direct; m 173 388 0.4 --direct; j type 'input[placeholder="Search nodes..."]' "image loader" >/dev/null; sleep 0.8; S ep1-s1-search
P=$(PICK "Image Loader"); echo "row at $P"; m ${P%,*} ${P#*,} 0.4 --move --direct; node scripts/dnd.mjs ${P%,*} ${P#*,} 480 160 1.5 | tail -1; EXPECT 1; S ep1-s1-node1; echo "after node1: $(NODES)"
# 1d. 双击空白 (480,520) → 菜单在光标处 → 搜索 text → Text
m 480 520 1.0 --dbl; S ep1-s1-dbl
j type 'input[placeholder="Search nodes..."]' "text" >/dev/null; sleep 0.8; S ep1-s1-search2
P=$(PICK "Text"); echo "Text item at $P"; m ${P%,*} ${P#*,} 1.5 --direct; EXPECT 2; S ep1-s1-node2; echo "after node2: $(NODES)"
# 1e. 右键空白 (920,200) → New Node → 搜索 seedance → Seedance 2.5 Omni Reference
m 920 200 1.0 --right; S ep1-s1-ctx
j click "New Node" 1.2 >/dev/null; S ep1-s1-ctxmenu
j type 'input[placeholder="Search nodes..."]' "seedance" >/dev/null; sleep 0.8; S ep1-s1-search3
P=$(PICK "Seedance 2.5 Omni Reference"); echo "Seedance item at $P"; m ${P%,*} ${P#*,} 1.5 --direct; EXPECT 3; j press Escape 0.3 >/dev/null; S ep1-s1-node3; echo "after node3: $(NODES)"
echo "viewport end: $(j eval "document.querySelector('.react-flow__viewport').style.transform")"
