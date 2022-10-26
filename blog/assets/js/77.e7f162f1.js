(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{365:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"package-包管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-包管理工具"}},[t._v("#")]),t._v(" package 包管理工具")]),t._v(" "),a("h2",{attrs:{id:"常用-package-包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-package-包管理器"}},[t._v("#")]),t._v(" 常用 package 包管理器")]),t._v(" "),a("ul",[a("li",[t._v("npm\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-operation-order",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 生命周期"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("cnpm")]),t._v(" "),a("li",[t._v("yarn\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn 官方文档"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("pnpm\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.pnpm.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm 官方文档"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("Lerna 多包管理\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lerna 官方文档"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"限制-package-管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制-package-管理器"}},[t._v("#")]),t._v(" 限制 package 管理器")]),t._v(" "),a("p",[t._v("包管理器太多，项目成员可能习惯使用的包管理器不同"),a("br"),t._v("\n规范化，则需要项目中限制使用"),a("br"),t._v("\n主要是为了避免项目依赖安装出错，保证项目能够正常运行")]),t._v(" "),a("blockquote",[a("p",[t._v("原理【包管理器】执行 "),a("code",[t._v("install")]),t._v(" 时调用 "),a("code",[t._v("preinstall")]),t._v(" hooks"),a("br"),t._v("\n注意：【npm | yarn | cnpm | pnpm】 hooks 调用时机可能不同")])]),t._v(" "),a("h3",{attrs:{id:"only-allow-一句代码-统一项目包管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#only-allow-一句代码-统一项目包管理工具"}},[t._v("#")]),t._v(" only-allow：一句代码，统一项目包管理工具")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preinstall"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx only-allow yarn"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("问题")]),t._v(" "),a("ol",[a("li",[t._v("yarn 和 npm 的 preinstall hook 调用时机不同\n"),a("ul",[a("li",[a("code",[t._v("npm")]),t._v(" 只会在 "),a("code",[t._v("npm install")]),t._v(" 安装整个项目依赖时调用")]),t._v(" "),a("li",[a("code",[t._v("npm install <package>")]),t._v("安装单个 package 时不调用；所以不会执行，也就无法限制使用 npm 安装")])])])]),t._v(" "),a("h3",{attrs:{id:"自定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[t._v("#")]),t._v(" 自定义")]),t._v(" "),a("p",[t._v("Vue3 源码")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preinstall"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./scripts/preinstall.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// preinstall.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isPnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("pnpm")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm_execpath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isPnpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前包管理器不是 pnpm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命令行打印信息")]),t._v("\n  process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误退出 node 命令行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);