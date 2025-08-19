---
title: tokens
createTime: 2025/08/14 23:23:11
permalink: /article/jpchjzaf/
---
# Github Tokens：Personal access tokens

用于使用 Github API。

个人访问令牌的功能类似于普通 OAuth 访问令牌。

它们可以用来代替 HTTPS 上 Git 的密码，也可以用于通过基本身份验证对 API 进行身份验证。

## 作用

如果您有令牌，则可以在通过 HTTPS 执行 Git 操作时输入令牌，而不是密码。  
例如，在命令行中输入以下内容：

```sh
$ git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```

## 创建

1. Github 点击头像 --> Settings --> Developer settings --> Personal access tokens
2. 新建，点击 Gernerate new token

- `Note`：token 做什么用
- `Expiration`：token 有效期
- `Select scopes`：赋予 token 哪些权限
  - 不选：授予对公共信息的只读访问权限（包括用户个人资料信息、公共仓库信息和 gist）
  - repo：授予对仓库（包括私有仓库）的完全访问权限；对仓库和组织的代码、提交状态、仓库和组织项目、邀请、协作者、添加团队成员身份、部署状态以及仓库 web 挂钩的读取/写入权限
  - workflow：授予添加和更新 GitHub Actions 工作流程文件的权限

3. 点击 Generate token，生成 token，复制一下，备用
<!-- `githubio deploy: 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` -->
<!-- `IO_DEPLOY: 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` -->
4. **切记，务必复制一下这个 token，否则之后只能编辑权限，找不到 token 值了，只能重新创建；**
