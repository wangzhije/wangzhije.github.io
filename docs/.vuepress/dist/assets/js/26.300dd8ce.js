(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{295:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"package-包管理工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-包管理工具"}},[t._v("#")]),t._v(" package 包管理工具")]),t._v(" "),s("p",[t._v("常用 package 包管理器")]),t._v(" "),s("ul",[s("li",[t._v("npm\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.npmjs.com/",targe:"_blank"}},[t._v("npm 官方文档")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-operation-order",targe:"_blank"}},[t._v("npm 生命周期")])])])]),t._v(" "),s("li",[t._v("cnpm")]),t._v(" "),s("li",[t._v("yarn\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs",targe:"_blank"}},[t._v("yarn 官方文档")])])])]),t._v(" "),s("li",[t._v("pnpm")])]),t._v(" "),s("h2",{attrs:{id:"限制-package-管理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制-package-管理器"}},[t._v("#")]),t._v(" 限制 package 管理器")]),t._v(" "),s("p",[t._v("包管理器太多，项目成员可能习惯使用的包管理器不同"),s("br"),t._v("\n规范化，则需要项目中限制使用"),s("br"),t._v("\n主要是为了避免项目依赖安装出错，保证项目能够正常运行")]),t._v(" "),s("blockquote",[s("p",[t._v("原理【包管理器】执行 "),s("code",[t._v("install")]),t._v(" 时调用 "),s("code",[t._v("preinstall")]),t._v(" hooks"),s("br"),t._v("\n注意：【npm | yarn | cnpm | pnpm】 hooks 调用时机可能不同")])]),t._v(" "),s("h3",{attrs:{id:"only-allow-一句代码-统一项目包管理工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#only-allow-一句代码-统一项目包管理工具"}},[t._v("#")]),t._v(" only-allow：一句代码，统一项目包管理工具")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preinstall"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx only-allow yarn"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("问题")]),t._v(" "),s("ol",[s("li",[t._v("yarn 和 npm 的 preinstall hook 调用时机不同\n"),s("ul",[s("li",[s("code",[t._v("npm")]),t._v(" 只会在 "),s("code",[t._v("npm install")]),t._v(" 安装整个项目依赖时调用")]),t._v(" "),s("li",[s("code",[t._v("npm install <package>")]),t._v("安装单个 package 时不调用；所以不会执行，也就无法限制使用 npm 安装")])])])]),t._v(" "),s("h3",{attrs:{id:"自定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[t._v("#")]),t._v(" 自定义")]),t._v(" "),s("p",[t._v("Vue3 源码")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preinstall"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./scripts/preinstall.js"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// preinstall.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isPnpm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("pnpm")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm_execpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isPnpm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前包管理器不是 pnpm'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命令行打印信息")]),t._v("\n  process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误退出 node 命令行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);