# 坐标系统

## 视窗/视口/容器

浏览器会默认给定视口的大小 `300px * 150px`

SVG 的属性 `width` 和 `height` 来控制视窗的大小

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
</svg> 
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
</svg>
</div>
</div>
</div>

## 坐标系统/网格系统

单位：像素 px

原点：左上角为 (0,0) 坐标点

X 轴正方向是向右

y 轴正方向是向下

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="16">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg'>
  <title>SVG</title>
  <desc>SVG Start</desc>

<line x1="30" y1="30" x2="140" y2="30" style="stroke: black; stroke-width: 1;"></line>
<path d="M 140 28 L140 32 144 30 z" fill="#000" stroke="black" stroke-width="1" />
<text x="70" y="20" font-size="14">X 轴</text>

<line x1="30" y1="30" x2="30" y2="72" style="stroke: black; stroke-width: 1;"></line>
<path d="M 28 68 L32 68 30 72 z" fill="#000" stroke="black" stroke-width="1" />
<text x="4" y="56" font-size="14" style="writing-mode: sideways-rl;">Y 轴</text>
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<svg-start />
</div>
</div>

## 缩放

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="16">
<svg width='300' height='150' viewBox="0 0 150 75" xmlns='http://wwww.w3.org/2000/svg'>
  <title>SVG</title>
  <desc>SVG Start</desc>

<line x1="30" y1="30" x2="140" y2="30" style="stroke: black; stroke-width: 1;"></line>
<path d="M 140 28 L140 32 144 30 z" fill="#000" stroke="black" stroke-width="1" />
<text x="70" y="20" font-size="14">X 轴</text>

<line x1="30" y1="30" x2="30" y2="72" style="stroke: black; stroke-width: 1;"></line>
<path d="M 28 68 L32 68 30 72 z" fill="#000" stroke="black" stroke-width="1" />
<text x="4" y="56" font-size="14" style="writing-mode: sideways-rl;">Y 轴</text>
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' viewBox="0 0 150 75" xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <line x1="30" y1="30" x2="140" y2="30" style="stroke: black; stroke-width: 1;"></line>
    <path d="M 140 28 L140 32 144 30 z" fill="#000" stroke="black" stroke-width="1" />
    <text x="70" y="20" font-size="14">X轴</text>
    <line x1="30" y1="30" x2="30" y2="72" style="stroke: black; stroke-width: 1;"></line>
    <path d="M 28 68 L32 68 30 72 z" fill="#000" stroke="black" stroke-width="1" />
    <text x="4" y="56" font-size="14" style="writing-mode: sideways-rl;">Y轴</text>
  </svg>
</div>
</div>
</div>

- `viewBox="0 0 150 75"` 视窗位置和大小
  - `min-x`
  - `min-y`
  - `width`
  - `height`
- 可以使用 `viewBox` 的元素
  - `<svg>`
  - `<marker>`
  - `<pattern>`
  - `<symbol>`
  - `<view>`
- `prespreserveAspectRatio=<align> [meetOrSlice]` 是否强制进行统一缩放(该元素必须有 `viewBox` 属性)
  - `align`：将 SVG 元素的 viewbox 和 容器的 X 和 Y 的对齐方式
  - `meetOrSlice`：将 SVG 元素的 viewbox 和 容器拼接和切割

| align 值         |                                                                                                                                             对齐方式 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------: |
| xMidYMid(默认值) |              将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。<br/> 将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。 |
| xMinYMin         |              将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。<br/> 将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。 |
| xMidYMin         |              将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。<br/> 将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。 |
| xMaxYMin         | 将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。<br/> 将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。 |
| xMinYMid         |              将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。<br/> 将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。 |
| xMaxYMid         | 将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。<br/>将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。 |
| xMidYMax         | 将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。 <br/>将 SVG 元素的 viewbox 属性的 Y 的最小值 + 元素的高度与视图的 Y 的最大值对齐。 |
| xMaxYMax         | 将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。<br/>将 SVG 元素的 viewbox 属性的 Y 的最小值 + 元素的高度与视图的 Y 的最大值对齐。 |

| meetOrSlice 值 |                                                                                                                        说明 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------: |
| meet           | 宽高比将会被保留 <br/> 整个 SVG 的 viewbox 在视图范围内是可见的 <br/> 尽可能的放大 SVG 的 viewbox，同时仍然满足其他的条件。 |
| slice          |       宽高比将会被保留 <br/> 整个视图窗口将覆盖 viewbox <br/> SVG 的 viewbox 属性将会被尽可能的缩小，但是仍然符合其他标准。 |

