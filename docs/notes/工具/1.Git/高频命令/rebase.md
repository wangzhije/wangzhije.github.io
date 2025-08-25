---
title: git rebase
createTime: 2025/08/25 11:04:22
permalink: /tools/git/lfpy5nsi/

draft: true
---

`git rebase` 命令主要是针对 commit 的，目的是令 commit 记录变得更加简洁清晰。

可以通过 `git rebase -i` 合并多次 commit 为一次

此操作会修改 commit-sha，因此只能在自己的分支上操作，不能在公共分支操作，不然会引起他人的合并冲突

```bash
# 进行 git rebase 可交互命令变基，end-commit-sha 可选，不填则默认为 HEAD
## start 和 end commit-sha 左开右闭原则
git rebase -i <start commit-sha> <end commit-sha>

# 若是中间毫无冲突，变基则一步到位，否则需要逐步调整

# 上次变基为完成，继续上一次的变基操作
git rebase --continue

# 变基有冲突时丢弃有冲突的 commit
git rebase --skip

# 若是变基中途操作错误但是未彻底完成，可以回滚到变基之前的状态
git rebase --abort
```