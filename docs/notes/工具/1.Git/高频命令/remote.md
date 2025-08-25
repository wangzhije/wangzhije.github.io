---
title: git remote
createTime: 2025/08/25 11:11:16
permalink: /tools/git/1l11u1ge/
---
`git remote` 用于将本地仓库与远程仓库关联

```bash
# 关联本地 git init 到远程仓库
git remote add origin <git url>

# 新增其他上游仓库
git remote add <git url>

# 移除与远程仓库的管理
git remote remove  <git url>

# 修改推送源
git remote set-url origin <git url>

```