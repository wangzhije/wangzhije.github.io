---
title: git restore
createTime: 2025/08/25 02:10:12
permalink: /tools/git/ewu7nxrr/
---

`git restore` 取消 add 操作，不改变文件内容

```bash
# 将 a.js 文件取消缓
git reset --staged a.js

# 将所有文件取消缓存
git reset --staged .
```