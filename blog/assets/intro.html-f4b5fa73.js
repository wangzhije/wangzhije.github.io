import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as a}from"./app-a98e131c.js";const d={},o=a('<h1 id="node-js-介绍" tabindex="-1"><a class="header-anchor" href="#node-js-介绍" aria-hidden="true">#</a> Node.js 介绍</h1><blockquote><p>Node.js 是一个免费的、开源的、跨平台的 JavaScript 运行时环境，允许开发人员在浏览器之外编写命令行工具和服务器端脚本.</p></blockquote><ul><li>Node.js 是一个服务器端 JavaScript 解释器，解释运行 JavaScript <ul><li>浏览器</li><li>Node.js</li></ul></li><li>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境</li><li>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效</li><li>Node.js 的包管理器 npm，是全球最大的开源库生态系统</li><li>Node.js 是一门动态语言，运行在服务端的 Javascript</li></ul><h2 id="浏览器-和-node-js-的区别" tabindex="-1"><a class="header-anchor" href="#浏览器-和-node-js-的区别" aria-hidden="true">#</a> 浏览器 和 Node.js 的区别</h2><blockquote><p>《JavaScript 高级程序设计》一书中，有关于 JavaScript 宿主环境的介绍</p><p>JavaScript 的宿主环境</p><ul><li>不仅提供基本的 ECMAScript 实现</li><li>同时也提供该语言的扩展，以便语言与环境之间对接交互</li></ul></blockquote><p>JavaScript 宿主环境</p><ul><li>Web 浏览器 <ul><li>ECMAScript 核心语法</li><li>Web API <ul><li>DOM</li><li>BOM</li><li>Ajax</li><li>Storage</li><li>Console</li><li>定时器</li><li>...</li></ul></li></ul></li><li>Node.js <ul><li>ECMAScript 核心语法</li><li>Node API <ul><li>fs</li><li>url</li><li>http</li><li>Console</li><li>定时器</li><li>...</li></ul></li></ul></li></ul><p>所以，注意 API 的使用，都不能在 Node.js 中使用</p><ul><li>DOM 不能使用</li><li>BOM 不能使用 <ul><li>location</li><li>navigation</li></ul></li><li>Ajax 不能使用 <ul><li>使用 Fetch</li></ul></li></ul><p>全局对象</p><ul><li>Web 浏览器：window</li><li>Node.js：global</li></ul><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="服务器应用" tabindex="-1"><a class="header-anchor" href="#服务器应用" aria-hidden="true">#</a> 服务器应用</h3><h3 id="工具类应用" tabindex="-1"><a class="header-anchor" href="#工具类应用" aria-hidden="true">#</a> 工具类应用</h3><p>CLI Babel Webpack Vite</p><h3 id="桌面端应用" tabindex="-1"><a class="header-anchor" href="#桌面端应用" aria-hidden="true">#</a> 桌面端应用</h3><p>Electron</p><ul><li>VSCode <ul><li>VSCode Extension 扩展开发</li></ul></li><li>Figma</li><li>Postman</li></ul><h2 id="node-js-和浏览器的不同" tabindex="-1"><a class="header-anchor" href="#node-js-和浏览器的不同" aria-hidden="true">#</a> Node.js 和浏览器的不同</h2><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><h2 id="模块系统" tabindex="-1"><a class="header-anchor" href="#模块系统" aria-hidden="true">#</a> 模块系统</h2><ul><li>内置模块</li><li>第三方模块 <ul><li>npm</li><li>yarn</li><li>pnpm</li></ul></li><li>Semver 语义化规范 <ul><li>语义版本控制标准 <code>主版本.次版本.补丁版本</code><ul><li>主版本：当进行不兼容的 API 更改时，则升级主版本</li><li>次版本：当以向后兼容的方式添加功能时</li><li>补丁版本：当进行向后兼容的缺陷修复时</li></ul></li><li>符号 <ul><li><code>^</code>：只会执行不更改最左边非零数字的更新</li><li><code>~</code>：更新到补丁版本</li><li><code>&gt;</code>：接受高于指定版本的任何版本</li><li><code>&gt;=</code>: 接受等于或高于指定版本的任何版本</li><li><code>&lt;=</code>: 接受等于或低于指定版本的任何版本</li><li><code>&lt;</code>: 接受低于指定版本的任何版本</li><li><code>=</code>: 接受确切的版本</li><li><code>-</code>: 接受一定范围的版本</li><li><code>||</code>: 组合集合</li><li><code>无符号</code>: 仅接受指定的特定版本</li><li><code>latest</code>: 使用可用的最新版本</li></ul></li></ul></li></ul>',22),c=[o];function r(t,h){return i(),e("div",null,c)}const u=l(d,[["render",r],["__file","intro.html.vue"]]);export{u as default};
