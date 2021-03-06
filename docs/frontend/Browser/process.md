# 浏览器进程和线程

> 浏览器是多进程的；每一个 Tab 页就是一个进程

<!-- 关于进程和线程的理解

- 一个进程下的线程
- 多个进程就是 copy
- 多个进程间的协调，看主进程 -->

浏览器有哪些进程

- 主进程：只有一个。多个 Tab 页由主进程进行协调
- 第三方插件进程：每个的插件对应一个进程，仅当使用该插件时才创建
- GPU 进程：最多一个，用于 3D 绘制等
- 渲染进程：页面渲染，脚本执行，事件处理等
  - 多线程的
    - GUI 渲染线程
    - JS 引擎线程
    - 事件触发线程
    - 定时触发器线程
    - 异步 http 请求线程

## 主进程

- 负责浏览器界面显示，与用户交互。如前进，后退等
- 负责各个页面的管理，创建和销毁其他进程
- 将 Renderer 进程得到的内存中的 Bitmap，绘制到用户界面上
- 网络资源的管理，下载等

## 第三方插件进程

- 例如使用 PDF 阅读器插件，可以显示 PDF 格式页面

## GPU 进程

CSS3：3D加速/硬件加速 就是开始 GPU 加速。单独写吧

## 渲染进程

### GUI 渲染线程

> - 注意
> - GUI 渲染线程与 JS 引擎线程是互斥的。
> - 当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中。
> - 等到 JS 引擎空闲时立即被执行。

- 负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。
- 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行

### JS 引擎线程

> - GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

- 也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）
- JS 引擎线程负责解析 Javascript 脚本，运行代码。
- JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序

### 事件触发线程

> - 由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）

- 归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）
- 当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中
- 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理

### 定时触发器线程

> - 注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）

- 归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）
- 当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中
- 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理

### 异步 http 请求线程

- 在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求
- 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。
