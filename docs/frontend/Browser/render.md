# 浏览器渲染

## 渲染引擎的主流程

浏览器内核不同，前端关注的主要是渲染引擎的不同

主流程基本一致

- 解析 HTML 以构建 DOM 树
- 解析 CSS 以构建 StyleRules
- 构建 render 树
- 排版布局 render 树
- 绘制 render 树
- 显示内容

Webkit
![Webkit 渲染](./imgs/webkit.png)

Gecko
![Gecko 渲染](./imgs/gecko.jpg)

加入 JavaScript 后
![渲染总流程](./imgs/all.jpg)

## HTML 解析

### 遇到 `<script>` 标签

- 当遇到（同步）脚本（标签中不含 `async` 或 `defer`）则停止 HTML 解析，先去加载脚本，然后执行，执行结束后继续解析 HTML 文档
- 当遇到 `defer` 脚本，则在后台加载脚本。文档解析过程不中断，而等文档解析结束之后，defer 脚本执行
- 当遇到 `async` 脚本，则在后台加载脚本。文档解析过程不中断，脚本加载完成后，文档停止解析，脚本执行，执行结束后文档继续解析

### DOMContentLoaded 和 load 事件

> - DOMContentLoaded：当 HTML 文档解析完成 DOM Tree 就会触发，不受 CSS 解析影响；
> - load：当所有资源加载完成之后触发

在 body 中第一个 script 资源下载完成之前，浏览器会进行**首次渲染**。

将该 script 标签前面的 DOM 树和 CSSOM 合并成一棵 Render 树，渲染到页面中。

这是页面从**白屏**到首次渲染的时间节点，比较关键。

- 同步脚本
- `defer` 脚本
  - 顺序
    - HTML 还没解析完成时，defer 脚本已经加载完毕，那么 defer 脚本将等待 HTML 解析完成后再执行。defer 脚本执行完毕后触发 DOMContentLoaded 事件
    - HTML解析完成时，defer脚本还没加载完毕，那么defer脚本继续加载，加载完成后直接执行，执行完毕后触发DOMContentLoaded事件
- `async` 脚本：
  - 带 async 的脚本一定会在 load 事件之前执行
  - 可能会在 DOMContentLoaded 之前或之后执行
  - 顺序
    - HTML 还没有被解析完的时候，async 脚本已经加载完了，那么 HTML 停止解析，去执行脚本，脚本执行完毕后触发 DOMContentLoaded 事件
    - HTML 解析完了之后，async 脚本才加载完，然后再执行脚本，那么在 HTML 解析完毕、async 脚本还没加载完的时候就触发 DOMContentLoaded 事件
