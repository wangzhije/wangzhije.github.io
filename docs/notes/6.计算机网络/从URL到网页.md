---
title: 从URL到网页
createTime: 2025/08/18 00:13:12
permalink: /network/b5tbbr5b/
tags:
  - 计算机网络
  - 浏览器
---

# 从 URL 到网页

整个过程的步骤：

1. 查看 DNS 缓存；命中缓存，则直接返回；没有缓存，往下进行

- 浏览器缓存
- 操作系统缓存
- 路由器缓存
- ISP 缓存

2. DNS 解析：将解析域名获取 IP 地址
3. 浏览器缓存：命中缓存，则直接返回，否则进行网络请求并渲染页面
4. TCP 连接：通过 IP 向服务器发起 TCP 连接，TCP 三次握手
5. 向目标服务器发送 HTTP 请求报文，分析 url，设置请求报文头，报文主体
6. 服务器处理请求，并返回 HTTP 报文
7. 浏览器开始解析渲染页面并显示
8. 断开 TCP 连接：TCP 四次挥手

## DNS

> 域名系统（英文：Domain Name System，缩写：DNS）是互联网的一项服务。
>
> 它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。
>
> DNS 使用 TCP 和 UDP 端口 53。
>
> 当前，对于每一级域名长度的限制是 63 个字符，域名总长度则不能超过 253 个字符。
>
> --维基百科

### <font style="color:rgb(33, 37, 41);">域名解析的过程是逐级查询的</font>

#### <font style="color:rgb(33, 37, 41);">浏览器缓存</font>

<font style="color:rgb(33, 37, 41);">首先会向浏览器的缓存中读取上一次访问的记录，</font>

<font style="color:rgb(33, 37, 41);">在 chrome 可以通过地址栏中输入 chrome://net-internals/#dns 查看 DNS 缓存的当前状态</font>

#### <font style="color:rgb(33, 37, 41);">操作系统缓存</font>

<font style="color:rgb(33, 37, 41);">查找存储在系统运行内存中的缓存。</font>

<font style="color:rgb(33, 37, 41);">过程：</font>

1. <font style="color:rgb(33, 37, 41);">在 host 文件中查找：如果在缓存中都查找不到的情况下，就会读取系统中预设的 host 文件中的设置。</font>
2. <font style="color:rgb(33, 37, 41);">路由器缓存：有些路由器也有 DNS 缓存的功能，访问过的域名会存在路由器上。</font>
3. <font style="color:rgb(33, 37, 41);">ISP DNS 缓存：互联网服务提供商（如中国电信）也会提供 DNS 服务，比如比较著名的 114.114.114.114，在本地查找不到的情况下，就会向 ISP 进行查询，ISP 会在当前服务器的缓存内查找是否有记录，如果有，则返回这个 IP，若没有，则会开始向根域名服务器请求查询。</font>
4. <font style="color:rgb(33, 37, 41);">顶级 DNS 服务器/根 DNS 服务器：根域名收到请求后，会判别这个域名(.com)是授权给哪台服务器管理,并返回这个顶级 DNS 服务器的 IP。请求者收到这台顶级 DNS 的服务器 IP 后，会向该服务器发起查询，如果该服务器无法解析，该服务器就会返回下一级的 DNS 服务器 IP（nicefilm.com），本机继续查找，直到服务器找到(www.nicefilm.com)的主机。</font>

<font style="color:rgb(33, 37, 41);">MacOS</font>

- `dscacheutil -flushcache`<font style="color:rgb(33, 37, 41);">清除系统中的 DNS 缓存</font>
- `dig 域名地址`查看域名解析的记录

## TCP 连接，三次握手

拿到了要请求的资源服务器 IP 后，浏览器通过操作 OS 的 socket 与服务器进行 TCP 连接。

### TCP 三次握手

本机主动打开连接：

- 第一次，本机将标识位 SYN 置为 1, seq = x(Sequence number)发送给服务端。此时本机状态为 SYN-SENT
- 第二次，服务器收到包之后，将状态切换为 SYN-RECEIVED，并将标识位 SYN 和 ACK 都置为 1, seq = y, ack = x + 1, 并发送给客户端。
- 第三次，客户端收到包后，将状态切换为 ESTABLISHED，并将标识位 ACK 置为 1，seq = x + 1, ack = y + 1, 并发送给服务端。服务端收到包之后，也将状态切换为 ESTABLISHED。

### 理解

- 标识位 ACK 置为 1 表示我已确认收到 seq 为 x 的包，并回复确认序号 ack = x + 1
- SYN 表示这是我第一次随机生成 seq 的序列 x，此后我每次发送的包都会在上一次发送的基础上增加 y（有数据的时候，y 是数据的长度，没有的时候 y = 1）。所以，当 seq 已初始化完成之后，没必要再把 SYN 置为 1

理解了这两点，也就不难理解为什么三次握手分别是 SYN、ACK/SYN、ACK 了。

**标识位（TCP FLAG）**

TCP 的头部固定有 20 个字节，其中分配了 6bits 给 TCP FLAG，组合起来用来表示当前包的类型。

分别是 URG ACK PSH RST SYN FIN

- URG：紧急指针，用于将要发送的包标识为“紧急”，这意味着不必等待前段数据被响应处理完即可发送给接收端。
- ACK：确认标识，用于表示对数据包的成功接收。
- PSH：推送标识，表示这个数据包应该被立即发送，不需要等待额外的数据。
- RST：reset 标识，用来异常关闭连接。
- SYN：同步标识，表示 TCP 连接已初始化。
- FIN：完成标识，用于拆除上一个 SYN 标识。一个完整的 TCP 连接过程一定会有 SYN 和 FIN 包。

至此我们了解了一个 TCP 连接的过程，通道通了，是时候利用这个通道送东西了。

我们从传输层再回到应用层。

## HTTP 请求与响应

> 超文本传输协议（英文：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议。
>
> HTTP 是万维网的数据通信的基础。
>
> 设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。
>
> 通过 HTTP 或者 HTTPS 协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。
>
> <font style="color:rgb(33, 37, 41);">--维基百科</font>

### http 请求

在应用层，浏览器会分析这个 url，并设置好请求报文发出。

https 默认请求端口 443， http 默认 80。

请求报文中包括请求行、请求头、空行、请求主体。

- 请求行：请求行中包括请求的方法，路径和协议版本。
- 请求头：请求头中包含了请求的一些附加的信息，一般是以键值的形式成对存在，比如设置请求文件的类型 accept-type，以及服务器对缓存的设置。
- 空行：协议中规定请求头和请求主体间必须用一个空行隔开
- 请求主体：对于 post 请求，所需要的参数都不会放在 url 中，这时候就需要一个载体了，这个载体就是请求主题。

### http 响应

服务端收到请求之后，会根据 url 匹配到的路径做相应的处理，最后返回浏览器需要的页面资源。

浏览器会收到一个响应报文，而所需要的资源就就在报文主体上。

与请求报文相同，响应报文也有与之对应的起始行、首部、空行、报文主体，不同的地方在于包含的东西不一样。

- 响应行：响应报文的起始行同样包含了协议版本，与请求的起始行不同的是其包含的还有状态码和状态码的原因短语。
- 响应头：对应请求报文中的请求头，格式一致，但是各自有不同的首部。也有一起用的通用首部。
- 空行
- 报文主体：请求所需要的资源。

## 浏览器渲染

<font style="color:rgb(33, 37, 41);">浏览器拿到了一个 HTML 文档，并为了呈现文档而开始解析。</font>

<font style="color:rgb(33, 37, 41);">呈现引擎开始工作，基本流程如下:</font>

- <font style="color:rgb(33, 37, 41);">通过 HTML 解析器解析 HTML 文档，</font>
  - <font style="color:rgb(33, 37, 41);">构建一个 DOM Tree</font>
  - <font style="color:rgb(33, 37, 41);">同时通过 CSS 解析器解析 HTML 中存在的 CSS，构建 Style Rules</font>
  - <font style="color:rgb(33, 37, 41);">两者结合形成一个 Attachment</font>
- <font style="color:rgb(33, 37, 41);">通过 Attachment 构造出一个呈现树（Render Tree）</font>
- <font style="color:rgb(33, 37, 41);">Render Tree 构建完毕，进入到布局阶段（layout/reflow），将会为每个阶段分配一个应出现在屏幕上的确切坐标。</font>
- <font style="color:rgb(33, 37, 41);">最后将全部的节点遍历绘制出来后，一个页面就展现出来了。</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">从构建 DOM 树到呈现的过程如下</font>

```bash
op=>operation: Parsing HTML to construct the DOM tree
op1=>operation: Render Tree construction
op2=>operation: Layout of the Render Tree
op3=>operation: Painting the Render Tree
op->op1->op2->op3
```

## TCP 断开连接，四次挥手

现在的页面为了优化请求的耗时，默认都会开启持久连接（keep-alive），那么一个 TCP 连接确切关闭的时机，是这个 tab 标签页关闭的时候。

这个关闭的过程就是著名的四次挥手。

### TCP 四次挥手

关闭是一个全双工的过程，发包的顺序的不一定的。

一般来说是客户端主动发起的关闭，过程如下。

假如最后一次客户端发出的数据 seq = x, ack = y;

- 客户端发送一个 FIN 置为 1 的包，ack = y， seq = x + 1，此时客户端的状态为 FIN_WAIT_1
- 服务端收到包后，状态切换为 CLOSE_WAIT 发送一个 ACK 为 1 的包， ack = x + 2。客户端收到包之后状态切换为 FNI_WAIT_2
- 服务端处理完任务后，向客户端发送一个 FIN 包，seq = y; 同时将自己的状态置为 LAST_ACK
- 客户端收到包后状态切换为 TIME_WAIT，并向服务端发送 ACK 包，ack = y + 1，等待 2MSL 后关闭连接。

### 为什么客户端等待 2MSL？

MSL: 全程 Maximum Segment Lifetime，中文可以翻译为报文最大生存时间。

等待是为了保证连接的可靠性，确保服务端收到 ACK 包，如果服务端没有收到这个 ACK 包，将会重发 FIN 包给客户端，而这个时间刚好是服务端等待超时重发的时间 + FIN 的传输时间。
