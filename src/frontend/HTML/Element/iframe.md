---
# 这是文章的标题
# title: 页面配置
# 这是页面的图标
# icon: page
# 这是侧边栏的顺序
order: 13
# 设置作者
# author: wangzhijie
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - HTML
# 一个页面可以有多个标签
tag:
  - HTML
  - link
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
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

<iframe id="iframeId" name="iframeName" src="http://wangzhije.github.io/xxl/" width="100%" height="500px"></iframe>

### JavaScript 动态插入

## 父子页面通信

## iframe 缺点

- iframe 会阻塞主⻚⾯的 Onload 事件
- 搜索引擎的检索程序⽆法解读这种⻚⾯，不利于 SEO
- iframe 和主⻚⾯共享连接池，⽽浏览器对相同域的连接有限制，所以会影响⻚⾯的并⾏加载

使⽤ iframe 之前需要考虑这两个缺点。如果需要使⽤ iframe ，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题
