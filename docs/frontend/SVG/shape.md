# 基本形状

## rect 矩形

参数

- `x` 圆心横坐标
- `y` 圆心纵坐标
- `rx` 圆角的 x 方位的半径
- `ry` 圆角的 y 方位的半径
- `width` 宽度
- `height` 高度

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <rect x="10" y="10" width="50" height="50" style="fill: red; stroke:black" />
  <rect x="70" y="10" rx="15" ry="15" width="50" height="50" style="fill: red; stroke:black" />
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <rect x="10" y="10" width="50" height="50" style="fill: red; stroke:black" />
    <rect x="70" y="10" rx="15" ry="15" width="50" height="50" style="fill: red; stroke:black" />
  </svg>
</div>
</div>
</div>

## circle 圆形

参数

- `cx` 圆心横坐标
- `cy` 圆心纵坐标
- `r` 半径

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <circle cx="45" cy="75" r="20" style="fill: red; stroke:black" />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <circle cx="45" cy="75" r="30" style="fill: red; stroke:black" />
  </svg>
</div>
</div>
</div>

## ellipse 椭圆

参数

- `cx` 椭圆圆心的 x 位置
- `cy` 椭圆圆心的 y 位置
- `rx` 椭圆的 x 半径
- `ry` 椭圆的 y 半径

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <ellipse cx="75" cy="75" rx="30" ry="15" style="fill: red; stroke:black" />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <ellipse cx="75" cy="75" rx="30" ry="15" style="fill: red; stroke:black" />
  </svg>
</div>
</div>
</div>

## polygon 多边形

参数

- `points`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <polygon points='15,10 65,10 55,50 5,50'
    style='fill:red; stroke: black;'
  />
  <polygon points='115,0 86,90 163,35 67,35 144,90'
    style='fill: red; stroke: black;'
    />
  <polygon points='180 60, 200,80 220,60, 230,120 200,100 160,120'
    style="fill: red; stroke:black"
  />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <polygon points='15,10 65,10 55,50 5,50'
      style='fill:red; stroke: black;'
    />
    <polygon points='115,0 86,90 163,35 67,35 144,90'
      style='fill: red; stroke: black;'
      />
    <polygon points='180 60, 200,80 220,60, 230,120 200,100 160,120'
      style="fill: red; stroke:black"
    />
  </svg>
</div>
</div>
</div>

两种五角星区别

- 5 个点坐标
- 10 个点坐标

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <polygon points='55,0 26,90 103,35 7,35 84,90'
    style='fill: none; stroke: black;'
  />
  <polygon points='55,17.5 57.9,26.11 66.9,26.1 59.7,31.5
    62.3,40.1 55,35 47.7,40.1 50.3,31.5 43.1,26.1 52.1,26.1'
    stroke-width="0.4"
    style='fill: none; stroke: black;transform: scale(3);'
    />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <polygon points='55,0 26,90 103,35 7,35 84,90'
      style='fill: none; stroke: black;'
    />
    <polygon points='55,17.5 57.9,26.11 66.9,26.1 59.7,31.5
      62.3,40.1 55,35 47.7,40.1 50.3,31.5 43.1,26.1 52.1,26.1'
      stroke-width="0.4"
      style='fill: none; stroke: black;transform: scale(3);'
      />
  </svg>
</div>
</div>
</div>
