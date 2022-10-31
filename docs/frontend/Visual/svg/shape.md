# 基本形状

## 矩形 react

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
  <rect x="10" y="10" width="50" height="50"/>
  <rect x="70" y="10" rx="10" ry="10" width="50" height="50"/>
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <rect x="10" y="10" width="50" height="50"/>
    <rect x="70" y="10" rx="10" ry="10" width="50" height="50"/>
  </svg>
</div>
</div>
</div>

## 圆形 circle

参数
- `cx` 圆心横坐标
- `cy` 圆心纵坐标
- `r` 半径

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
  <circle cx="45" cy="75" r="20" />
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <circle cx="45" cy="75" r="30" />
  </svg>
</div>
</div>
</div>

## 椭圆 ellipse

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
  <ellipse cx="75" cy="75" rx="30" ry="15"/>
</svg>
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
  <svg width='300' height='150' xmlns='http://wwww.w3.org/2000/svg' style="background: aquamarine;">
    <ellipse cx="75" cy="75" rx="30" ry="15"/>
  </svg>
</div>
</div>
</div>