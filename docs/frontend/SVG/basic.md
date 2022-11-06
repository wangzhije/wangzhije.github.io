# 基本使用

先大概有个了解，后面一一实践

## 基本要素组成

根元素`<svg>` + 基本形状元素 + 编组`<g>`

## 基本语法

```SVG
<svg xmlns="http://www.w3.org/2000/svg">
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
