# 网站搭建快速（个人博客/知识库文档 ）

> 目的
>
> - 明确学习路线和计划
> - 记录学习内容以及平常遇到的问题
> - 丰富自己的技术栈和知识图谱

常用的静态网站建站工具

- WordPress
- <a href="https://hexo.io/zh-cn/" target="_blank">Hexo</a> 之前用过，根据官网教程能很快上手
- <a href="https://docsify.js.org/" target="_blank">Docsify</a> 说到快速上手，我觉得 Docsify 是最轻量、最简单、最快速的了
- <a href="https://vuepress.vuejs.org/zh/" target="_blank">VuePress</a> 现在因为想深入学习 Vue 和 VuePress 源码，现在换成了 VuePress
- <a href="https://github.com/GitbookIO/gitbook" target="_blank">Gitbook</a> Github 配套工具，用来制作知识库文档以及精美电子书网站的工具框架

他们的主要特点

- Hexo  
  内容比较丰富，插件、主题、自动部署等功能也很齐全  
  因为诞生的比较早，所以像有很多个人开发的主题，自己可以选择更符合自己风格和功能的主题进行搭建  
  但相对与其他来说，功能、主题更丰富，当然配置也就更繁琐
- Docsify  
  我觉得是最轻量、最简单、最快速的了，为什么这么说呢？  
  因为简单，下面我会介绍下使用过程
- VuePress  
  见名知意，看名字就知道和 Vue 有关  
  如果是使用过 Vue 的人来说，那更熟悉不过了; Vue 文档风格，看过的都知道  
  主要就是 Vue + VueRouter + Webpack 构建的一个脚手架  
  因为深入学习下源码和脚手架搭建，所以用这个练练手先
- Gitbook  
  这个估计更不用介绍，不少技术电子书文档都是用它来做的

总的来说，这几个我都简单用过，具体选哪个呢？看自己需求吧。

## VuePress

请看 [VuePress 静态网站搭建](!https://wangzhije.github.io/blog/frontend/Vue/VuePress/start.html)

## Docsify

为了不想使用 VuePress 的人不白白浪费事件点进来看看，也记录下 Docsify 的使用，也许看完你立马就想搭建一个自己的博客网站呢 ^^

- 前置条件
  - Node 环境和 npm 工具
  - 如果没有，<a href="https://nodejs.org/" target="_blank">Node.js 官网</a>直接下载安装 Node.js 环境即可，包含 npm 工具
- 安装 Docsify `npm install -g docsify-cli`
- 新建项目文件夹 `mkdir repository`
- 进入项目目录，进行初始化 `docsify init`
- 本地预览 `docsify serve`，浏览器打开 `http://localhost:3000` 即可