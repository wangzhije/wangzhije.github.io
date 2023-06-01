---
# 这是文章的标题
# title: 页面配置
# 这是页面的图标
# icon: page
# 这是侧边栏的顺序
order: 11
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

# a

被点击访问过的超链接样式不在具有 hover 和 active 了

解决方法是改变 CSS 属性的

排列顺序: L-V-H-A（link,visited,hover,active）

```CSS
a:link{}
a:visited{}
a:hover{}
a:active{}
```
