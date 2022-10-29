# SVG 基本了解

> 可缩放矢量图形，是 W3C XML 的分支语言之一，用于标记可缩放的矢量图形

2003 年成为 W3C 推荐标准

SVG 是一种 XML 语言，类似 XHTML

SVG 诞生于 1999 年

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

## 基本要素组成

根元素`<svg>` + 基本形状元素 + 编组`<g>`

## 基本语法

```SVG
<svg xmlns="http://www.w3.org/2000/svg"
  width="300"
  height="200">
  <title>svg</title>
  <desc>svg start</desc>
  // 绘制图形
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

## HTML 嵌入 SVG

- DTD 为 XHTML，且声明类型为 `application/xhtml+xml`
  - 直接把 SVG 嵌入到 XML 源码中
- DTD 为 HTML5，且浏览器支持 HTML5；为了符合标准，做一些语法调整

  - 通过 `object` 元素引用 SVG 文件

  ```HTML
    <object data="image.svg" type="image/svg+xml" />
  ```

  - 使用 `iframe` 元素引用 SVG 文件

  ```HTML
    <iframe src="image.svg"></iframe>
  ```

  - 使用 `img` 元素

  ```HTML
    <img src="test.svg" />
  ```

  ```CSS
  div.background {
    background-image: url('test.svg');
    background-size: 100% 100%;
  }
  ```

  - 使用 `svg` 元素

  ```HTML
    <svg width="400" heihgt="300" id="testSvg">
      <circle cx="100" cy="100" r="50" fill="red" stroke="black" strock-width="2" id="testCircle"></circle>
    </svg>
  ```

  - 通过 `JavaScript` 动态创建并注入到 HTML DOM 中

  ```JS
    // html2canvas 源码
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width.toString());
    svg.setAttributeNS(null, 'height', height.toString());

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x.toString());
    foreignObject.setAttributeNS(null, 'y', y.toString());
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);
  ```

## SVG 兼容性

[Can I Use SVG](https://caniuse.com/svg)
