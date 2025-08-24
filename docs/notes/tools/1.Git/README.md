---
title: Git
createTime: 2025/08/18 17:27:09
permalink: /tools/git/start/
---
# Git

[Git 官方文档](https://git-scm.com/doc)

[Git 中文文档](https://www.php.cn/manual/view/34943.html)

[Git 简明指南](https://www.runoob.com/manual/git-guide/)

[Git 完整命令手册](https://www.runoob.com/manual/github-git-cheat-sheet.pdf)

## 介绍

> 分布式版本控制系统

## 下载安装

## 工作流程

![Git工作流程](./img/git-process.png)

## 工作区、暂存区、版本库

![工作区、暂存区、版本库](./img/area.jpg)

## GitFlow 分支管理模型

![Git工作流程](./img/git-flow.png)

## 配置

- 三个级别：优先级从高到低
  - 项目配置：项目根目录下的 `./git/config` 文件
  - 用户配置：home directory 中的 `~/.gitconfig` 文件
    - home directory
      - Windows：一般都是 `C:\用户\<用户名>`
  - 系统配置：所用用户 `~/gitconfig/`
- 命令
  - 设置用户名/邮箱
    - `git config --[local/global/system] user.name "wangzhijie"`
    - `git config --[local/global/system] user.email 1662285571@qq.com`
  - 记住密码
    - `git config --[local/global/system] credential.helper store`

## 初始化仓库

- 已有仓库
  - `git clone <projectName>`
- 本地仓库
  - 创建远程仓库
    - 一般会选择创建 `.gitignore` `LICENSE` 文件
  - 初始化本地仓库 `git init`
  - 关联远程库 `git remote add origin <gitRepoUrl>`
    - 修改关联仓库
      - 删除 remote `git remote rm origin`
      - 重新设置 remote `git remote add origin <gitRepoUrl>`
  - 获取远程库，并与本地同步合并
    - `git pull --rebase origin <branchName>`
      > git pull = git fetch + git merge；区别在于是否合并
      > merge 与 rebase 的使用
  - 添加到暂存区 `git add .`
  - 将暂存区内容添加到本地版本库 `git commit -m "commit message"`
  - 提交当前分支到远端仓库，并切换到此分支 `git push -u origin master`

## 分支

- 创建本地分支 `git branch <branchName>`
- 推送到远程分支 `git push -u origin <branchName>`
- 切换分支 `git checkout <branchName>`
- 从某个 commit 新建本地分支 `git checkout <commitId> -b <branchName>`
