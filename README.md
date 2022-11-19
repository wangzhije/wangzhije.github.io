# 个人网站搭建

预览

- [Github Pages 地址](https://wangzhije.github.io/blog/)
- [域名地址](http://wangzhijie.top/blog/)

目的

> - 明确学习路线和计划
> - 记录学习内容以及平常遇到的问题
> - 丰富自己的技术栈和知识图谱

### 常用的静态网站建站工具

- <a href="https://hexo.io/zh-cn/" target="_blank">Hexo</a> 之前用过，根据官网教程能很快上手
- <a href="https://docsify.js.org/" target="_blank">Docsify</a> 说到快速上手，我觉得 Docsify 是最轻量、最简单、最快速的了
- <a href="https://vuepress.vuejs.org/zh/" target="_blank">VuePress</a> 现在因为想深入学习 Vue 和 VuePress 源码，现在换成了 VuePress
- <a href="https://github.com/GitbookIO/gitbook" target="_blank">Gitbook</a> Github 配套工具，用来制作知识库文档以及精美电子书网站的工具框架

他们的主要特点

- Gitbook  
  这个估计更不用介绍，不少技术电子书文档都是用它来做的
- Docsify  
  我觉得是最轻量、最简单、最快速的了，为什么这么说呢？
- Hexo  
  内容比较丰富，插件、主题、自动部署等功能也很齐全  
  因为诞生的比较早，所以像有很多个人开发的主题，自己可以选择更符合自己风格和功能的主题进行搭建  
  但相对与其他来说，功能、主题更丰富，当然配置也就更繁琐
- VuePress  
  见名知意，看名字就知道和 Vue 有关  
  如果是使用过 Vue 的人来说，那更熟悉不过了; Vue 文档风格，看过的都知道  
  主要就是 Vue + VueRouter + Webpack 构建的一个脚手架  
  因为想深入学习下源码所以选用的这个

总的来说，这几个我都简单用过，具体选哪个呢？看自己需求吧。

### 项目搭建

VuePress 快速上手

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
// package.json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

7. 本地启动服务器 `npm run docs:dev`

到这里，本地开发环境就搭建好了  
然后自己丰富下内容吧

### 项目部署

### 项目打包配置

```JS
// .vuepresss/config.js
module.exports = {
  dest: './blog/', // build 打包目录; ./dist/blog/
  base: '/blog/', // 部署站点后的基础路径; https://wangzhije.github.io/blog/
}
```

如果有自己的云服务器，可以部署到自己的云服务器上。  
如果没有云服务器，可以到 VMWare 或者 GithubPages

### 部署 Github Pages

### 服务器


### 提交

