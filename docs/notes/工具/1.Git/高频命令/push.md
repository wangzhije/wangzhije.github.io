---
title: git push
createTime: 2025/08/25 02:01:40
permalink: /tools/git/kh5u4z07/
---

```bash
# 将当前本地分支 branch1 内容推送到远程分支 origin/branch1
git push

# 若当前本地分支 branch1，没有对应的远程分支 origin/branch1，需要为推送当前分支并建立与远程上游的跟踪
git push --set-upstream origin branch1

# 强制提交
## 例如用在代码回滚后内容
git push -f
```