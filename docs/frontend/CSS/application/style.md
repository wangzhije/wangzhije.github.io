# 网站换肤实现

常用几种方式

1. 全局的 class 控制样式切换

- 问题：代码繁琐、样式优先级较高，所以优先级可能出现混乱，不好维护

2. 加载不同的 css 文件，改变 link 元素的 href 地址

- 问题：加载有延迟，样式切换不流畅，体验不佳

## 利用原生的 HTML 的 link 属性

优点
- 兼容性好：兼容 IE8+；
- 语义性好：用户、开发者、搜索引擎、辅助阅读设备，能准确识别
- 用户体验好：秒渲染，切换无感知，无延迟

代码实现

```HTML
<link id="normalize" type="text/css" href="normalize.css" rel="stylesheet">
<link id="default" type="text/css" href="default.css" title="默认皮肤" rel="stylesheet">
<link id="light" type="text/css" href="light.css" title="白天模式" rel="alternate stylesheet">
<link id="dark" type="text/css" href="dark.css" title="夜间模式" rel="alternate stylesheet">
```
link 元素的加载和渲染
- 无 `title` 无 `rel.alternate`：必加载，必渲染
- 有 `title` 无 `rel.alternate`：会加载，会渲染
- 有 `title` 有 `rel.alternate`：只加载，不渲染
如何切换渲染不同的 link 加载样式  
```JavaScript
document.querySelector('link#lght').disabled = false;
```
