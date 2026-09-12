# CAPTURE-LOG — option-duplicate（2026-09-03）

账号：用户本人登录（headed Chrome，profile 在 out/chrome-profile）。页面：youart.ai/workflow/7eb07389-…（用户自建 Untitled Project，一个 LoadImage 节点，图片由用户上传）。

## 服务端影响
- 一次 Option+拖动（scripts/drag.mjs 330,464→730,464 --alt）：项目里真实新增一个复制节点 LoadImage-fb514608（位于原节点右侧 400px）。项目已自动保存。无 credits 消耗。

## 快照
| slot | 状态 | 备注 |
|---|---|---|
| option-duplicate-before | 单节点，弹层已关闭 | 采前按 Esc 关掉 "User Manual / Keyboard shortcuts" 弹层 |
| option-duplicate-after | 双节点，新节点选中；聊天框出现缩略图、底部按钮变 Run Selected | 真实反馈，保留 |

两张均断网回放通过（out/qa/replay 对照 out/qa/htmlmat）。

## 数据口径
用户名首字母头像 "E"、credits 3,608、项目名 Untitled Project 出现在画面中；图片为用户提供的示例图。
