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

## 重绘和重排