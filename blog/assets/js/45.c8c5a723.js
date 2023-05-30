(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{333:function(v,t,_){"use strict";_.r(t);var a=_(13),l=Object(a.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程和线程"}},[v._v("#")]),v._v(" 浏览器进程和线程")]),v._v(" "),t("blockquote",[t("p",[v._v("浏览器是多进程的；每一个 Tab 页就是一个进程")])]),v._v(" "),t("p",[v._v("浏览器有哪些进程")]),v._v(" "),t("ul",[t("li",[v._v("主进程：只有一个。多个 Tab 页由主进程进行协调")]),v._v(" "),t("li",[v._v("第三方插件进程：每个的插件对应一个进程，仅当使用该插件时才创建")]),v._v(" "),t("li",[v._v("GPU 进程：最多一个，用于 3D 绘制等")]),v._v(" "),t("li",[v._v("渲染进程：页面渲染，脚本执行，事件处理等\n"),t("ul",[t("li",[v._v("多线程的\n"),t("ul",[t("li",[v._v("GUI 渲染线程")]),v._v(" "),t("li",[v._v("JS 引擎线程")]),v._v(" "),t("li",[v._v("事件触发线程")]),v._v(" "),t("li",[v._v("定时触发器线程")]),v._v(" "),t("li",[v._v("异步 http 请求线程")])])])])])]),v._v(" "),t("h2",{attrs:{id:"主进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主进程"}},[v._v("#")]),v._v(" 主进程")]),v._v(" "),t("ul",[t("li",[v._v("负责浏览器界面显示，与用户交互。如前进，后退等")]),v._v(" "),t("li",[v._v("负责各个页面的管理，创建和销毁其他进程")]),v._v(" "),t("li",[v._v("将 Renderer 进程得到的内存中的 Bitmap，绘制到用户界面上")]),v._v(" "),t("li",[v._v("网络资源的管理，下载等")])]),v._v(" "),t("h2",{attrs:{id:"第三方插件进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方插件进程"}},[v._v("#")]),v._v(" 第三方插件进程")]),v._v(" "),t("ul",[t("li",[v._v("例如使用 PDF 阅读器插件，可以显示 PDF 格式页面")])]),v._v(" "),t("h2",{attrs:{id:"gpu-进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-进程"}},[v._v("#")]),v._v(" GPU 进程")]),v._v(" "),t("p",[v._v("CSS3：3D加速/硬件加速 就是开始 GPU 加速。单独写吧")]),v._v(" "),t("h2",{attrs:{id:"渲染进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程"}},[v._v("#")]),v._v(" 渲染进程")]),v._v(" "),t("h3",{attrs:{id:"gui-渲染线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染线程"}},[v._v("#")]),v._v(" GUI 渲染线程")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("注意")]),v._v(" "),t("li",[v._v("GUI 渲染线程与 JS 引擎线程是互斥的。")]),v._v(" "),t("li",[v._v("当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中。")]),v._v(" "),t("li",[v._v("等到 JS 引擎空闲时立即被执行。")])])]),v._v(" "),t("ul",[t("li",[v._v("负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。")]),v._v(" "),t("li",[v._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行")])]),v._v(" "),t("h3",{attrs:{id:"js-引擎线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-引擎线程"}},[v._v("#")]),v._v(" JS 引擎线程")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。")])])]),v._v(" "),t("ul",[t("li",[v._v("也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）")]),v._v(" "),t("li",[v._v("JS 引擎线程负责解析 Javascript 脚本，运行代码。")]),v._v(" "),t("li",[v._v("JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序")])]),v._v(" "),t("h3",{attrs:{id:"事件触发线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件触发线程"}},[v._v("#")]),v._v(" 事件触发线程")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）")])])]),v._v(" "),t("ul",[t("li",[v._v("归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）")]),v._v(" "),t("li",[v._v("当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中")]),v._v(" "),t("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理")])]),v._v(" "),t("h3",{attrs:{id:"定时触发器线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时触发器线程"}},[v._v("#")]),v._v(" 定时触发器线程")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）")])])]),v._v(" "),t("ul",[t("li",[v._v("归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）")]),v._v(" "),t("li",[v._v("当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中")]),v._v(" "),t("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理")])]),v._v(" "),t("h3",{attrs:{id:"异步-http-请求线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步-http-请求线程"}},[v._v("#")]),v._v(" 异步 http 请求线程")]),v._v(" "),t("ul",[t("li",[v._v("在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求")]),v._v(" "),t("li",[v._v("将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。")])])])}),[],!1,null,null,null);t.default=l.exports}}]);