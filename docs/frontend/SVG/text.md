# 1.6 文本元素

由文字组成的图形

## `x` `y` `dx` `dy`

- `x` `y` 文本的起始坐标
- `dx` `dy` 文本的偏移量

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text x="0" y="20">Hello, out there</text>
  <text x="0" y="40" font-size="20" >font-size="20"</text>
  <text x="150" y="20" dx="20" dy="0" >Hello, out there</text>
  <text x="150" y="40" dx="0" dy="20" font-size="20" >font-size="20"</text>
</svg>
</textarea>

</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="0" y="20">Hello, out there</text>
  <text x="0" y="40" font-size="20" >font-size="20"</text>
  <text x="150" y="20" dx="20" dy="0" >Hello, out there</text>
  <text x="150" y="40" dx="0" dy="20" font-size="20" >font-size="20"</text>
</svg>
</div>
</div>
</div>

## `text-anchor`

文本字符对齐方式

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

## `textLength`

文本长度

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text x="0" y="20">不设置textLength</text>
  <text x="0" y="50" textLength="120">小于文本实际长度时</text>
  <text x="0" y="80" textLength="200">大于文本实际长度时</text>
</svg> 
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="0" y="20">不设置textLength</text>
  <text x="0" y="50" textLength="120">小于文本实际长度时</text>
  <text x="0" y="80" textLength="200">大于文本实际长度时</text>
</svg>
</div>
</div>
</div>

## `lengthAdjust`

设置 `textLength` 后，文本适应 textLength 的方式

- `spacing`
- `spacingAndGlyphs`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text x="0" y="20" lengthAdjust="spacingAndGlyphs">不设置textLength不生效</text>
  <text x="0" y="50" textLength="120" lengthAdjust="spacing">适应文本长度spacing</text>
  <text x="0" y="80" textLength="120" lengthAdjust="spacingAndGlyphs">适应文本长度spacingAndGlyphs</text>
  <text x="0" y="110" textLength="300" lengthAdjust="spacing">适应文本长度spacing</text>
  <text x="0" y="140" textLength="260" lengthAdjust="spacingAndGlyphs">适应文本长度spacingAndGlyphs</text>
</svg> 
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="0" y="20" lengthAdjust="spacingAndGlyphs">不设置textLength不生效</text>
  <text x="0" y="50" textLength="120" lengthAdjust="spacing">适应文本长度spacing</text>
  <text x="0" y="80" textLength="120" lengthAdjust="spacingAndGlyphs">适应文本长度spacingAndGlyphs</text>
  <text x="0" y="110" textLength="300" lengthAdjust="spacing">适应文本长度spacing</text>
  <text x="0" y="140" textLength="260" lengthAdjust="spacingAndGlyphs">适应文本长度spacingAndGlyphs</text>
</svg>
</div>
</div>
</div>

## `rotate`

旋转

`transform="rotate(degree x, y)`

<div style="display: flex; flex-flow: row nowrap;">
<div style="font-size: 20px;text-align: center;">
<div>SVG 代码</div>
<textarea cols="60" rows="10">
<svg style="background: aquamarine;">
  <text x="10" y="20" >transform-rotate</text>
  <text x="150" y="20" transform="rotate(45 150, 20)" >45度</text>
  <text x="10" y="20" transform="rotate(90 10, 20)" >90度</text>
</svg> 
</textarea>
</div>
<div style="font-size: 20px;text-align: center;">
<div>SVG 效果</div>
<div>
<svg style="background: aquamarine;">
  <text x="10" y="20" >transform-rotate</text>
  <text x="50" y="30" transform="rotate(45 50, 30)" >rotate</text>
  <text x="100" y="50" transform="rotate(90 80, 50)" >rotate</text>
</svg>
</div>
</div>
</div>
