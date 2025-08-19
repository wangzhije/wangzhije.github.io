---
title: iframe 内联框架
permalink: /frontend/HTML/r7xtnt27/
createTime: 2025/08/14 23:23:11
tags:
  - HTML
---

# iframe

## 常用属性

| 属性        |                                               说明 |
| ----------- | -------------------------------------------------: | --- | ------- |
| name        |                                       frame 的名称 |
| width       |                                  设置 frame 的宽度 |
| height      |                                  设置 frame 的高度 |
| src         |                          设置在 frame 中显示的页面 |
| frameborder | 是否显示 frame 的边框（0：不显示边框 1：显示边框） |
| scrolling   |                    是否显示 frame 中的滚动条（ yes | no  | auto ） |

## iframe 使用方式

### HTML 中嵌入 iframe

```HTML
<iframe id="iframeId" name="iframeName" src="http://wangzhije.github.io/xxl/"></iframe>
```

<iframe id="iframeId" name="iframeName" src="http://wangzhije.github.io/xxl/" width="100%" height="700px"></iframe>

### JavaScript 动态插入

## 父子页面通信

## iframe 缺点

- iframe 会阻塞主⻚⾯的 Onload 事件
- 搜索引擎的检索程序⽆法解读这种⻚⾯，不利于 SEO
- iframe 和主⻚⾯共享连接池，⽽浏览器对相同域的连接有限制，所以会影响⻚⾯的并⾏加载

使⽤ iframe 之前需要考虑这两个缺点。如果需要使⽤ iframe ，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题
