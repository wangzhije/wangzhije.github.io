---
title: git diff
createTime: 2025/08/25 11:14:28
permalink: /tools/diff/da72u74z/
---

git diff 用于对比工作区、缓存区、本地仓库以及分支之间的代码差异

```bash
# 当工作区有变动，暂存区无变动，对比工作区和本地仓库间的代码差异
#  当工作区有变动和暂存区都有变动，对比工作区和暂存区的代码差异
git diff

# 显示暂存区和本地仓库间的代码差异
git diff --cached
# or
git diff --staged

# 显示两个分支之间代码差异
git diff <分支名1> <分支名2>

```