---
title: git pull
createTime: 2025/08/25 01:52:15
permalink: /tools/git/o8zy7flx/
---

git pull 会拉取远程仓库并合并到本地仓库，相当于执行 git fetch + git merge

```bash
# 若拉取并合并的远程分支和当前本地分支名称一致
## 例如当前本地分支为 branch1，要拉取并合并 origin/branch1，则直接执行：
git pull

# 若拉取并合并的远程分支和当前本地分支名称不一致
git pull <远程主机名> <分支名>
## 例如当前本地分支为 branch2，要拉取并合并 origin/branch1，则执行：
git pull git@github.com:zh-lx/git-practice.git branch1

# 使用 rebase 模式进行合并
git pull --rebase
```