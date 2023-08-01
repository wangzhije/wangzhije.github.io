import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as l,f as e}from"./app-a98e131c.js";const a="/blog/assets/structure-65ce3f32.png",r={},d=e('<h1 id="浏览器基本知识" tabindex="-1"><a class="header-anchor" href="#浏览器基本知识" aria-hidden="true">#</a> 浏览器基本知识</h1><p>常用浏览器</p><ul><li>IE</li><li>Edge</li><li>Chrome</li><li>Firefox</li><li>Safari</li><li>Opera</li></ul><h2 id="主要构成" tabindex="-1"><a class="header-anchor" href="#主要构成" aria-hidden="true">#</a> 主要构成</h2><p><img src="'+a+'" alt="浏览器主要组件"></p><ol><li>用户界面 － 包括地址栏、后退/前进按钮、书签目录等，也就是你所看到的除了用来显示你所请求页面的主窗口之外的其他部分。</li><li>浏览器引擎 － 用来查询及操作渲染引擎的接口。</li><li>渲染引擎 － 用来显示请求的内容，例如，如果请求内容为 html，它负责解析 html 及 css，并将解析后的结果显示出来。</li><li>网络 － 用来完成网络调用，例如 http 请求，它具有平台无关的接口，可以在不同平台上工作。</li><li>UI 后端 － 用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口。</li><li>JS 解释器 － 用来解释执行 JS 代码。</li><li>数据存储 － 属于持久层，浏览器需要在硬盘中保存类似 cookie 的各种数据。 HTML5 定义了 web database 技术，这是一种轻量级完整的客户端存储技术</li></ol><h2 id="浏览器内核" tabindex="-1"><a class="header-anchor" href="#浏览器内核" aria-hidden="true">#</a> 浏览器内核</h2><p>浏览器的主要区别，在于浏览器内核</p><p>通常说的浏览器内核，大部分是指浏览器的渲染引擎</p><p>由于 JS 引擎越来越独立通常称为 JS 解释器或者 JS 运行时环境</p><table><thead><tr><th>浏览器</th><th>渲染引擎/排版引擎</th><th>JS 引擎</th></tr></thead><tbody><tr><td>IE</td><td>Trident</td><td>Chakra</td></tr><tr><td>Edge</td><td>EdgeHTML</td><td>Chakra</td></tr><tr><td>Chrome</td><td>Webkit -&gt; Blink</td><td>V8(著名的)</td></tr><tr><td>Firefox</td><td>Gecko</td><td>SpiderMonkey</td></tr><tr><td>Safari</td><td>Webkit</td><td>Javascriptcore</td></tr><tr><td>Opera</td><td>Presto -&gt; Blink</td><td>Carakan</td></tr></tbody></table><p>Blink 渲染引擎</p><p>Blink 是由谷歌团队从 Webkit 衍生开发出来的引擎，主要应用到 Chrome 和 Opera 浏览器。</p><h2 id="从输入-url-到页面展示" tabindex="-1"><a class="header-anchor" href="#从输入-url-到页面展示" aria-hidden="true">#</a> 从输入 URL 到页面展示</h2><ul><li>查看 DNS 缓存；命中缓存，则直接返回；没有缓存，往下进行 <ul><li>浏览器缓存</li><li>操作系统缓存</li><li>路由器缓存</li><li>ISP 缓存</li></ul></li><li>DNS 解析：将解析域名获取 IP 地址</li><li>浏览器缓存：命中缓存，则直接返回，否则进行网络请求并渲染页面</li><li>建立 TCP 连接：TCP 三次握手</li><li>发送 HTTP 请求报文，分析 url，设置请求报文(头，主体)</li><li>服务器处理请求，并返回 HTTP 报文</li><li>浏览器渲染</li><li>断开 TCP 连接：TCP 四次挥手</li></ul><h3 id="这个主要过程中学到什么" tabindex="-1"><a class="header-anchor" href="#这个主要过程中学到什么" aria-hidden="true">#</a> 这个主要过程中学到什么</h3><ol><li>浏览器的功能：网络请求，页面渲染，网络请求，数据存储等；</li><li>性能优化：也是根据每个步骤进行优化</li></ol><h3 id="接下来学习" tabindex="-1"><a class="header-anchor" href="#接下来学习" aria-hidden="true">#</a> 接下来学习</h3><ul><li>浏览器工作原理 <ul><li>浏览器进程</li><li>浏览器内核运行</li><li>JS 引擎单线程</li><li>再到 JS 事件循环机制</li></ul></li><li>浏览器工具</li><li>性能优化</li></ul>',19),h=[d];function o(n,s){return t(),l("div",null,h)}const u=i(r,[["render",o],["__file","start.html.vue"]]);export{u as default};
