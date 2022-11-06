# 文本元素

<!-- 属性

- `x` 起始点 x 坐标
- `y` 起始点 y 坐标
- `dx` 在 x 轴方向上的偏移
- `dy` 在 y 轴方向上的偏移
- `text-anchor` 对齐方式
  - `start`
  - `mid`
  - `end`
  - `inherit`
- `font-size` 默认 20px -->

## `x` `y` `dx` `dy`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text x="0" y="0" font-family="Verdana" font-size="14">Hello, out there</text>
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="40" y="20">Hello, out there</text>
  <text x="40" y="40" font-size="20">font-size="20"</text>
</svg>
</div>
</div>
</div>

## `text-anchor`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />
  
  <path d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110" stroke="grey" />
</svg> 
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="60" y="40" text-anchor="start">A</text>
  <text x="60" y="75" text-anchor="middle">A</text>
  <text x="60" y="110" text-anchor="end">A</text>

  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />
  
  <path d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110" stroke="grey" />
</svg>
</div>
</div>
</div>
