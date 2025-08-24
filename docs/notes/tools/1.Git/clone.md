---
title: git clone
createTime: 2025/08/18 17:41:24
permalink: /tools/git/qs4vyxbe/
---

# Git

## Git clone

### `git clone` 下载慢的解决方式

`git clone --depth 1 <repository>`

- 为什么快？下载的内容少了。
- 代码是全的吗？是的。完全可以正常开发、拉取、提交
- 下载内容少了什么？ 历史 commit
- 问题 1：历史 commit
  - `git reset` 不能切换到历史 commit
  - `git pull` 不能拉取历史 commit
  - 解决：`git pull --unshallow` 需要的时候再下载历史 commit 就行了
- 问题 2：分支 branch
  - 拉取到本地的代码库只有一个主分支，不能查看到所有分支，不能切换分支
  - 直接 fetch 不行，fetch 用于拉取新的 commit 到本地
  - 解决：修改 fetch 配置
    - 单个分支 `git config remote.origin.fetch "+refs/heads/<branchName>:refs/remotes/origin/<branchName>"`
    - 所有分支 `git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`
- Git 底层
  - glob 对象: 存储文件内容
  - tree 对象: 存储文件路径
  - commit 对象: 存储 commit，关联多个 tree
