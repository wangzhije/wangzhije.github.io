# 1.7 基本属性

> 基本元素，共有的属性
>
> - 线段元素（只有 stroke 描边没有 fill 填充）
> - 形状元素（只有 stroke 描边也有 fill 填充）
> - 文本元素（只有 stroke 描边也有 fill 填充）

## 画笔属性

### `stroke`

画笔颜色

- 默认为 none;既不是白，也不是黑，是空，即不渲染
- 属性值
  - 基本颜色关键字： aqua、black、blue、fuchsia、gray、green 等
  - 十六进制色值： `#000000` `#000`
  - RGB 色值: `RGB(0,0,0)`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20'/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black'/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='#ff0000'/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='rgb(0,0,255)'/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" />
  <text x="10" y="120" font-family="Verdana" font-size="14">Hello, World!!!</text>
  <text x="10" y="140" font-family="Verdana" font-size="14" stroke='red'>Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20'/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black'/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='#ff0000'/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='rgb(0,0,255)'/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" />
  <text x="10" y="120" font-family="Verdana" font-size="14">Hello, World!!!</text>
  <text x="10" y="140" font-family="Verdana" font-size="14" stroke='red'>Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### `stroke-dasharray`

虚线和间隙的长度

- 属性值为，值数组
  - 个数应该为偶数
  - 但如果是奇数，则这个值的数列重复一次，成为为偶数(5,3,2 等同于 5,3,2,5,3,2)
- 属性值为，百分比数组

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='110' y2='20' stroke='black' stroke-width="6" stroke-dasharray="10, 5" />
  <line x1='10' y1='40' x2='110' y2='40' stroke='red' stroke-width="6" stroke-dasharray="20, 5, 10" />
  <line x1='10' y1='60' x2='110' y2='60' stroke='blue' stroke-width="6" stroke-dasharray="20, 10, 5, 10" />
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-dasharray="10, 5" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-dasharray="10, 5" />
  <text x="10" y="120" font-size="14" stroke-dasharray="10, 5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-dasharray="10, 5">Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='110' y2='20' stroke='black' stroke-width="6" stroke-dasharray="10, 5" />
  <line x1='10' y1='40' x2='110' y2='40' stroke='red' stroke-width="6" stroke-dasharray="20, 5, 10" />
  <line x1='10' y1='60' x2='110' y2='60' stroke='blue' stroke-width="6" stroke-dasharray="20, 10, 5, 10" />
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-dasharray="10, 5" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-dasharray="10, 5" />
  <text x="10" y="120" font-size="14" stroke-dasharray="10, 5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-dasharray="10, 5">Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### `stroke-width`

画笔宽度

- 默认为 1px;

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' />
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' stroke-width="1"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' stroke-width="6"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' stroke-width="12"/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-width="1" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-width="1" />
  <text x="10" y="120" font-size="14" stroke-width="1">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-width="1">Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' />
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' stroke-width="1"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' stroke-width="6"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' stroke-width="12"/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-width="4" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-width="4" />
  <text x="10" y="120" font-size="14" stroke-width="2">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-width="2">Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### `stroke-opacity`

画笔透明度

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' stroke-width="6" stroke-opacity="0.1"/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='#ff0000' stroke-width="6" stroke-opacity="0.5" />
  <line x1='10' y1='60' x2='100' y2='60' stroke='rgb(255,0,0)' stroke-width="6" stroke-opacity="1"/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-opacity="0.5" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-opacity="0.5" />
  <text x="10" y="120" font-size="14" stroke-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-opacity="0.5">Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' stroke-width="6" stroke-opacity="0.1"/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='#ff0000' stroke-width="6" stroke-opacity="0.5" />
  <line x1='10' y1='60' x2='100' y2='60' stroke='rgb(255,0,0)' stroke-width="6" stroke-opacity="1"/>
  <rect x="110" y="10" rx="15" ry="15" width="50" height="50" fill="white" stroke-opacity="0.5" />
  <rect x="170" y="10" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" stroke-opacity="0.5" />
  <text x="10" y="120" font-size="14" stroke-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' stroke-opacity="0.5">Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### `stroke-linecap`

线帽（线段端点）的形状

- `butt`：默认值，没有线帽
- `round`：半圆形的线帽
- `square`：矩形线帽

> `butt` 和 `squre` 的区别，见下面效果图

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' stroke-width="16" stroke-linecap="butt" />
  <line x1='10' y1='40' x2='100' y2='40' stroke='red' stroke-width="16" stroke-linecap="round" />
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' stroke-width="16" stroke-linecap="square" />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' stroke='red' stroke-width="16" stroke-linecap="butt" />
  <line x1='10' y1='40' x2='100' y2='40' stroke='red' stroke-width="16" stroke-linecap="round" />
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' stroke-width="16" stroke-linecap="square" />
</svg>
</div>
</div>
</div>

## 填充属性

> `线段` 只有`stroke` 没有`fill`

### fill

填充颜色

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20'/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' fill="red"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' fill="blue"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' fill="black"/>
  <line x1='110' y1='20' x2='200' y2='20' stroke-width="6"/>
  <line x1='110' y1='40' x2='200' y2='40' stroke='black' fill="red" stroke-width="6"/>
  <line x1='110' y1='60' x2='200' y2='60' fill="blue" stroke='red' stroke-width="6"/>
  <line x1='110' y1='80' x2='200' y2='80' stroke='blue' fill="black" stroke-width="6"/>
  <rect x="110" y="120" rx="15" ry="15" width="50" height="50"/>
  <rect x="170" y="120" rx="15" ry="15" width="50" height="50" stroke='red' fill="white"/>
  <text x="10" y="100" font-size="14">Hello, World!!!</text>
  <text x="10" y="120" font-size="14" stroke="blue" fill="red">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' fill="blue">Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20'/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' fill="red"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' fill="blue"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' fill="black"/>
  <line x1='110' y1='20' x2='200' y2='20' stroke-width="6"/>
  <line x1='110' y1='40' x2='200' y2='40' stroke='black' fill="red" stroke-width="6"/>
  <line x1='110' y1='60' x2='200' y2='60' fill="blue" stroke='red' stroke-width="6"/>
  <line x1='110' y1='80' x2='200' y2='80' stroke='blue' fill="black" stroke-width="6"/>
  <rect x="110" y="90" rx="15" ry="15" width="50" height="50"/>
  <rect x="170" y="90" rx="15" ry="15" width="50" height="50" stroke='red' fill="white"/>
  <text x="10" y="100" font-size="14">Hello, World!!!</text>
  <text x="10" y="120" font-size="14" stroke="blue" fill="red">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' fill="blue">Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### fill-opacity

填充透明度

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' fill-opacity="0.5"/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' fill="red" fill-opacity="0.5"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' fill="blue" fill-opacity="0.5"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' fill="black" fill-opacity="0.5"/>
  <line x1='110' y1='20' x2='200' y2='20' stroke-width="6"/>
  <line x1='110' y1='40' x2='200' y2='40' stroke='black' fill="red" stroke-width="6" fill-opacity="0.5"/>
  <line x1='110' y1='60' x2='200' y2='60' fill="blue" stroke='red' stroke-width="6" fill-opacity="0.5"/>
  <line x1='110' y1='80' x2='200' y2='80' stroke='blue' fill="black" stroke-width="6" fill-opacity="0.5"/>
  <rect x="110" y="90" rx="15" ry="15" width="50" height="50" fill-opacity="0.5"/>
  <rect x="170" y="90" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" fill-opacity="0.5"/>
  <text x="10" y="100" font-size="14" fill-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="120" font-size="14" stroke="blue" fill="red" fill-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' fill="blue" fill-opacity="0.5">Hello, World!!!</text>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='10' y1='20' x2='100' y2='20' fill-opacity="0.5"/>
  <line x1='10' y1='40' x2='100' y2='40' stroke='black' fill="red" fill-opacity="0.5"/>
  <line x1='10' y1='60' x2='100' y2='60' stroke='red' fill="blue" fill-opacity="0.5"/>
  <line x1='10' y1='80' x2='100' y2='80' stroke='blue' fill="black" fill-opacity="0.5"/>
  <line x1='110' y1='20' x2='200' y2='20' stroke-width="6"/>
  <line x1='110' y1='40' x2='200' y2='40' stroke='black' fill="red" stroke-width="6" fill-opacity="0.5"/>
  <line x1='110' y1='60' x2='200' y2='60' fill="blue" stroke='red' stroke-width="6" fill-opacity="0.5"/>
  <line x1='110' y1='80' x2='200' y2='80' stroke='blue' fill="black" stroke-width="6" fill-opacity="0.5"/>
  <rect x="110" y="90" rx="15" ry="15" width="50" height="50" fill-opacity="0.5"/>
  <rect x="170" y="90" rx="15" ry="15" width="50" height="50" stroke='red' fill="white" fill-opacity="0.5"/>
  <text x="10" y="100" font-size="14" fill-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="120" font-size="14" stroke="blue" fill="red" fill-opacity="0.5">Hello, World!!!</text>
  <text x="10" y="140" font-size="14" stroke='red' fill="blue" fill-opacity="0.5">Hello, World!!!</text>
</svg>
</div>
</div>
</div>

### fill-rule

多边形内部区域的算法

- `nonzero` 默认值
- `evenodd`

> - 为什么区分内部和外部？因为涉及到填充
> - 填充，很容易理解，其实就是内部填充
> - 当多边形有交叉时，怎样区分内部和外部呢？

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <polygon fill-rule="nonzero"
   points="50,0 21,90 98,35 2,35 79,90"/>
  <polygon fill-rule="evenodd"
   points="150,0 121,90 198,35 102,35 179,90" />
  <polygon fill-rule="nonzero" points='55,117.5 57.9,126.11 66.9,126.1 59.7,131.5
    62.3,140.1 55,135 47.7,140.1 50.3,131.5 43.1,126.1 52.1,126.1'
    style='transform: scale(1);'
  />
  <polygon fill-rule="evenodd" points='155,117.5 157.9,126.11 166.9,126.1 159.7,131.5
    162.3,140.1 155,135 147.7,140.1 150.3,131.5 143.1,126.1 152.1,126.1'
    style='transform: scale(1);'
  />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <polygon stroke="red" fill-rule="nonzero"
   points="50,0 21,90 98,35 2,35 79,90"/>
  <polygon stroke="red" fill-rule="evenodd"
   points="150,0 121,90 198,35 102,35 179,90" />
  <polygon stroke="red" fill-rule="nonzero" points='55,117.5 57.9,126.11 66.9,126.1 59.7,131.5
    62.3,140.1 55,135 47.7,140.1 50.3,131.5 43.1,126.1 52.1,126.1'
    style='transform: scale(1);'
  />
  <polygon stroke="red" fill-rule="evenodd" points='155,117.5 157.9,126.11 166.9,126.1 159.7,131.5
    162.3,140.1 155,135 147.7,140.1 150.3,131.5 143.1,126.1 152.1,126.1'
    style='transform: scale(1);'
  />
</svg>
</div>
</div>
</div>
