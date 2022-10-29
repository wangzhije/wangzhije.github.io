# SVG 入门实操

## 视窗/视口/容器

浏览器会默认给定视口的大小 `300px * 150px`

SVG 的属性 `width` 和 `height` 来控制视窗的大小

## 坐标系统/网格系统

单位：像素 px

原点：左上角为 (0,0) 坐标点

X 轴正方向是向右

y 轴正方向是向下

## 基本元素

<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg'>

  <title>SVG</title>
  <desc>SVG Start</desc>

  <line x1="30" y1="30" x2="140" y2="30" style="stroke: black; stroke-width: 1;"></line>
  <path d="M 140 28 L140 32 144 30 z" fill="#000" stroke="black" stroke-width="1" />
  <text x="70" y="20" font-size="14">X轴</text>

  <line x1="30" y1="30" x2="30" y2="72" style="stroke: black; stroke-width: 1;"></line>
  <path d="M 28 68 L32 68 30 72 z" fill="#000" stroke="black" stroke-width="1" />
  <text x="4" y="56" font-size="14" style="writing-mode: sideways-rl;">Y轴</text>

</svg>