# 快速搭建

## 快速上手

1. 创建目录  
   `mkdir vupress-start && cd vuepress-start`
2. 项目初始化
   `npm init`
3. 将 VuePress 安装为本地以来  
   `npm i -D vuepress`
4. 创建文档

- 创建文档目录 `mkdir docs`
- 创建文档 `README.md` 文件

5. 编辑 package.json 的 scripts

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

6. 本地启动服务器
   `npm run docs:dev`

## 基本配置

### markdown 中使用 Vue

> `.vuepress/components` 中引用的 .vue 文件将会自动地被注册为全局的异步组件页面中直接使用

使用场景

- 创建一个[书本分页特效](!../../../../CSS/animation/book.md)，怎么展示出来呢？

```
.
└─ .vuepress
   └─ components
      └─ animation
         └─ book.vue

```

```
# CSS 书本翻页特效

<animation-book />
```

## 部署

### GitHub Pages

VuePress build 配置

```JavaScript
// .vuepresss/config.js
module.exports = {
  dest: './blog/', // build 打包目录; wangzhije.github.io/blog/
  base: '/blog/', // 部署站点的基础路径 https://wangzhije.github.io/blog/
}
```

自动部署 shell 脚本：deploy.sh

- 学习 [shell 脚本编程]()
- 其实就是要执行部署需要执行的命令操作
- 在 git bash 中执行 `sh deploy.sh`

```sh
# deploy.sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包
npm run docs:build

# git 命令
git add .
git commit -m "auto deploy"
git push https://github.com/wangzhije/wangzhije.github.io.git

```

Github Actions

- 创建 Github access token
- 在你 github 仓库下，创建一个 secrets (opens new window)，填入刚创建的 token
- 在项目根目录下的 .github/workflows 目录（没有的话，请手动创建一个）下创建一个 .yml 或者 .yaml 文件，如:vuepress-deploy.yml;
