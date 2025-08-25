---
title: branch
createTime: 2025/08/25 11:13:47
permalink: /tools/b0uzb9vq/
---

`git branch` 常用于删除、重命名分支等分支管理

```bash
# 删除分支
git branch -D <分支名>

# 重命名分支
git branch -M <老分支名> <新分支名>

# 将本地分支与远程分支关联
git branch --set-upstream-to=origin/xxx

# 取消本地分支与远程分支的关联
git branch --unset-upstream-to=origin/xxx
```