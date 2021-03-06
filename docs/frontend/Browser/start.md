# 浏览器基本知识

常用浏览器

- IE
- Edge
- Chrome
- Firefox
- Safari
- Opera

## 主要构成

![浏览器主要组件](./imgs/structure.png)

1. 用户界面 － 包括地址栏、后退/前进按钮、书签目录等，也就是你所看到的除了用来显示你所请求页面的主窗口之外的其他部分。
2. 浏览器引擎 － 用来查询及操作渲染引擎的接口。
3. 渲染引擎 － 用来显示请求的内容，例如，如果请求内容为 html，它负责解析 html 及 css，并将解析后的结果显示出来。
4. 网络 － 用来完成网络调用，例如 http 请求，它具有平台无关的接口，可以在不同平台上工作。
5. UI 后端 － 用来绘制类似组合选择框及对话框等基本组件，具有不特定于某个平台的通用接口，底层使用操作系统的用户接口。
6. JS 解释器 － 用来解释执行 JS 代码。
7. 数据存储 － 属于持久层，浏览器需要在硬盘中保存类似 cookie 的各种数据。
   HTML5 定义了 web database 技术，这是一种轻量级完整的客户端存储技术

## 浏览器内核

浏览器的主要区别，在于浏览器内核

通常说的浏览器内核，大部分是指浏览器的渲染引擎

由于 JS 引擎越来越独立通常称为 JS 解释器或者 JS 运行时环境

| 浏览器  | 渲染引擎/排版引擎 | JS 引擎        |
| ------- | ----------------- | -------------- |
| IE      | Trident           | Chakra         |
| Edge    | EdgeHTML          | Chakra         |
| Chrome  | Webkit -> Blink   | V8(著名的)     |
| Firefox | Gecko             | SpiderMonkey   |
| Safari  | Webkit            | Javascriptcore |
| Opera   | Presto -> Blink   | Carakan        |

Blink 渲染引擎

Blink 是由谷歌团队从 Webkit 衍生开发出来的引擎，主要应用到 Chrome 和 Opera 浏览器。

## 从输入 URL 到页面展示

- 查看 DNS 缓存；命中缓存，则直接返回；没有缓存，往下进行
  - 浏览器缓存
  - 操作系统缓存
  - 路由器缓存
  - ISP 缓存
- DNS 解析：将解析域名获取 IP 地址
- 浏览器缓存：命中缓存，则直接返回，否则进行网络请求并渲染页面
- 建立 TCP 连接：TCP 三次握手
- 发送 HTTP 请求报文，分析 url，设置请求报文(头，主体)
- 服务器处理请求，并返回 HTTP 报文
- 浏览器渲染
- 断开 TCP 连接：TCP 四次挥手

### 这个主要过程中学到什么

1. 浏览器的功能：网络请求，页面渲染，网络请求，数据存储等；
2. 性能优化：也是根据每个步骤进行优化

### 接下来学习

- 浏览器工作原理
  - 浏览器进程
  - 浏览器内核运行
  - JS 引擎单线程
  - 再到 JS 事件循环机制
- 浏览器工具
- 性能优化
