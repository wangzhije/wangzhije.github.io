import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as t,b as l,d as r,f as h}from"./app-a98e131c.js";const d={},u=l("h1",{id:"浏览器进程和线程",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#浏览器进程和线程","aria-hidden":"true"},"#"),r(" 浏览器进程和线程")],-1),c=l("blockquote",null,[l("p",null,"浏览器是多进程的；每一个 Tab 页就是一个进程")],-1),n=h('<p>浏览器有哪些进程</p><ul><li>主进程：只有一个。多个 Tab 页由主进程进行协调</li><li>第三方插件进程：每个的插件对应一个进程，仅当使用该插件时才创建</li><li>GPU 进程：最多一个，用于 3D 绘制等</li><li>渲染进程：页面渲染，脚本执行，事件处理等 <ul><li>多线程的 <ul><li>GUI 渲染线程</li><li>JS 引擎线程</li><li>事件触发线程</li><li>定时触发器线程</li><li>异步 http 请求线程</li></ul></li></ul></li></ul><h2 id="主进程" tabindex="-1"><a class="header-anchor" href="#主进程" aria-hidden="true">#</a> 主进程</h2><ul><li>负责浏览器界面显示，与用户交互。如前进，后退等</li><li>负责各个页面的管理，创建和销毁其他进程</li><li>将 Renderer 进程得到的内存中的 Bitmap，绘制到用户界面上</li><li>网络资源的管理，下载等</li></ul><h2 id="第三方插件进程" tabindex="-1"><a class="header-anchor" href="#第三方插件进程" aria-hidden="true">#</a> 第三方插件进程</h2><ul><li>例如使用 PDF 阅读器插件，可以显示 PDF 格式页面</li></ul><h2 id="gpu-进程" tabindex="-1"><a class="header-anchor" href="#gpu-进程" aria-hidden="true">#</a> GPU 进程</h2><p>CSS3：3D加速/硬件加速 就是开始 GPU 加速。单独写吧</p><h2 id="渲染进程" tabindex="-1"><a class="header-anchor" href="#渲染进程" aria-hidden="true">#</a> 渲染进程</h2><h3 id="gui-渲染线程" tabindex="-1"><a class="header-anchor" href="#gui-渲染线程" aria-hidden="true">#</a> GUI 渲染线程</h3><blockquote><ul><li>注意</li><li>GUI 渲染线程与 JS 引擎线程是互斥的。</li><li>当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中。</li><li>等到 JS 引擎空闲时立即被执行。</li></ul></blockquote><ul><li>负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。</li><li>当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行</li></ul><h3 id="js-引擎线程" tabindex="-1"><a class="header-anchor" href="#js-引擎线程" aria-hidden="true">#</a> JS 引擎线程</h3><blockquote><ul><li>GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</li></ul></blockquote><ul><li>也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）</li><li>JS 引擎线程负责解析 Javascript 脚本，运行代码。</li><li>JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序</li></ul><h3 id="事件触发线程" tabindex="-1"><a class="header-anchor" href="#事件触发线程" aria-hidden="true">#</a> 事件触发线程</h3><blockquote><ul><li>由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）</li></ul></blockquote><ul><li>归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）</li><li>当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理</li></ul><h3 id="定时触发器线程" tabindex="-1"><a class="header-anchor" href="#定时触发器线程" aria-hidden="true">#</a> 定时触发器线程</h3><blockquote><ul><li>注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）</li></ul></blockquote><ul><li>归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）</li><li>当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理</li></ul><h3 id="异步-http-请求线程" tabindex="-1"><a class="header-anchor" href="#异步-http-请求线程" aria-hidden="true">#</a> 异步 http 请求线程</h3><ul><li>在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求</li><li>将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。</li></ul>',23);function o(s,S){return e(),a("div",null,[u,c,t(` 关于进程和线程的理解

- 一个进程下的线程
- 多个进程就是 copy
- 多个进程间的协调，看主进程 `),n])}const p=i(d,[["render",o],["__file","thread.html.vue"]]);export{p as default};
