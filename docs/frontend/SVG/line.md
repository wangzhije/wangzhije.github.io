# 1.4 线段元素

## 线段 line

参数

- `x1` 起点的 x 位置
- `y1` 起点的 y 位置
- `x2` 终点的 x 位置
- `y2` 终点的 y 位置

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <line x1='0' y1='0' x2='100' y2='100' style='stroke:black'/>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <line x1='0' y1='0' x2='100' y2='100' style='stroke:black'/>
  </svg>
</div>
</div>
</div>

## 折线 polyline

参数

- `x1` 起点的 x 位置
- `y1` 起点的 y 位置
- `x2` 终点的 x 位置
- `y2` 终点的 y 位置

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <polyline points="5,20 20,20 25,10 35,30 45,10
    55,30 65,10 74,30 80,20 95,20"
    style="stroke:black; stroke-width:3; fill:none"
  />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <polyline points="5,20 20,20 25,10 35,30 45,10
    55,30 65,10 74,30 80,20 95,20"
    style="stroke:black; stroke-width:3; fill:none"
  />
  </svg>
</div>
</div>
</div>
