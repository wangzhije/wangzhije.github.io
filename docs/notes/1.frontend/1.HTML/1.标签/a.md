---
title: a 超链接
permalink: /frontend/HTML/yq3az295/
createTime: 2025/08/14 23:23:11
tags:
  - HTML
---

# a 超链接

被点击访问过的超链接样式不在具有 hover 和 active 了

解决方法是改变 CSS 属性的

排列顺序: L-V-H-A（link,visited,hover,active）

```CSS
a:link{}
a:visited{}
a:hover{}
a:active{}
```
