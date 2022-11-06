# 介绍

> 可缩放矢量图形，是 W3C XML 的分支语言之一，用于标记可缩放的矢量图形

2003 年成为 W3C 推荐标准

SVG 是一种 XML 语言，类似 XHTML

SVG 诞生于 1999 年

## 文档

- [MDN SVG](!https://developer.mozilla.org/zh-CN/docs/Web/SVG)
- [MDN SVG 元素](!https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element)
- [MDN SVG 属性](!https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute)

## SVG 的应用

- 图表视图(echart)、地图视图(WEB-GIS)
- 形象(AI)的全网应用
- UI 产品的设计
- SVG 动画

## SVG 优缺点

- SVG 缺点
  - 加载慢
- SVG 优点
  - 实现了 DOM 接口（比 Canvas 方便）
  - 不需要安装第三方扩展

## SVG 版本

- `V1.1` 最接近完整版，2011 年成为推荐标准
- `V2.0` 采用了类似 CSS3 的制定方法，通过若干松散耦合的组件形成一套标准。
- `SVG Tiny` 和 `SVG Basic`
  - 这两个配置文件主要瞄准移动设备
  - `SVG Tiny1.2` 2008 年，成为 W3C 推荐标准

## SVG 文件类型

- `.svg`：普通 SVG 文件

```
// HTTP 头
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

- `.svgz`：gzip 压缩的 SVG 文件

```
// HTTP 头
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

## SVG 元素分类

- 动画元素
  - animate
  - animateMotion
  - animateTransform
  - discard
  - mpath
  - set
- 容器元素
  - svg
  - a
  - defs
  - g
  - marker
  - mask
  - pattern
  - switch
  - symbol
- 结构元素
  - svg
  - g
  - symbol
  - defs
  - use
- 描述性元素
  - desc
  - metadata
  - title
- 基本形状元素
  - circle
  - ellipse
  - line
  - polygon
  - polyline
  - rect
- 图形元素
  - 基本形状元素
  - image
  - text
  - path
  - use
- 图形渲染元素
  - use
- 文本内容元素
  - text
  - textPath
  - tspan
- 文本子内容元素
  - textPath
  - tspan
- 光源元素
  - feDistantLight
  - fePointLight
  - feSpotLight
- 渐变元素
  - linearGradient
  - radialGradient
  - stop
- 绘制服务器元素
  - linearGradient
  - radialGradient
  - pattern
- 未分类元素
  - style
  - script
  - view
  - clipPath
  - filter
  - foreignObject
- 是否会渲染（关注一下）
  - 非渲染元素
    - 绘制服务器元素
    - 描述性元素
      - metadata
      - title
    - 容器元素
      - defs
      - marker
      - mask
      - pattern
    - script
    - style
    - symbol
    - clipPath
  - 可渲染元素(除非渲染元素)
