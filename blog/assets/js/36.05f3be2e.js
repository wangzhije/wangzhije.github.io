(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{307:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建"}},[s._v("#")]),s._v(" 快速搭建")]),s._v(" "),t("h2",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),t("ol",[t("li",[s._v("创建目录"),t("br"),s._v(" "),t("code",[s._v("mkdir vupress-start && cd vuepress-start")])]),s._v(" "),t("li",[s._v("项目初始化\n"),t("code",[s._v("npm init")])]),s._v(" "),t("li",[s._v("将 VuePress 安装为本地以来"),t("br"),s._v(" "),t("code",[s._v("npm i -D vuepress")])]),s._v(" "),t("li",[s._v("创建文档")])]),s._v(" "),t("ul",[t("li",[s._v("创建文档目录 "),t("code",[s._v("mkdir docs")])]),s._v(" "),t("li",[s._v("创建文档 "),t("code",[s._v("README.md")]),s._v(" 文件")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("编辑 package.json 的 scripts")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("本地启动服务器\n"),t("code",[s._v("npm run docs:dev")])])]),s._v(" "),t("h2",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),t("h3",{attrs:{id:"markdown-中使用-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-中使用-vue"}},[s._v("#")]),s._v(" markdown 中使用 Vue")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v(".vuepress/components")]),s._v(" 中引用的 .vue 文件将会自动地被注册为全局的异步组件页面中直接使用")])]),s._v(" "),t("p",[s._v("使用场景")]),s._v(" "),t("ul",[t("li",[s._v("创建一个"),t("RouterLink",{attrs:{to:"/frontend/CSS/animation/book.html"}},[s._v("书本分页特效")]),s._v("，怎么展示出来呢？")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n└─ .vuepress\n   └─ components\n      └─ animation\n         └─ book.vue\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# CSS 书本翻页特效\n\n<animation-book />\n")])])]),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("h3",{attrs:{id:"github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[s._v("#")]),s._v(" GitHub Pages")]),s._v(" "),t("p",[s._v("VuePress build 配置")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepresss/config.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("dest")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./blog/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// build 打包目录; wangzhije.github.io/blog/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("base")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 部署站点的基础路径 https://wangzhije.github.io/blog/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("自动部署 shell 脚本：deploy.sh")]),s._v(" "),t("ul",[t("li",[s._v("学习 "),t("a",{attrs:{href:""}},[s._v("shell 脚本编程")])]),s._v(" "),t("li",[s._v("其实就是要执行部署需要执行的命令操作")]),s._v(" "),t("li",[s._v("在 git bash 中执行 "),t("code",[s._v("sh deploy.sh")])])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto deploy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push https://github.com/wangzhije/wangzhije.github.io.git\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);