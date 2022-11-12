# 外边距重叠 和 BFC

## 外边距重叠

> - 在 CSS 当中
> - 相邻的两个盒子（兄弟元素或是祖先元素）的外边距可以结合成一个单独的外边距
> - 这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距

### 外边距重叠条件

- 只有块级元素会发生外边距重叠
- 相邻的父子元素间
- 相邻的同级元素间

### 解决方案：开启 BFC

## BFC

BFC（块级格式化上下文）

一个创建了新的 BFC 的盒子是独立布局的

盒子内元素的布局不会影响盒子外面的元素

### 触发 BFC

```CSS
#parent{
  /* display */
  display: "table-cell";
  display: "table-caption";
  display: "inline-block";
  display: "flex";
  display: "inline-flex";
  /* overflow */
  overflow: "hidden";
  overflow: "auto"; 
  overflow: "scroll";
  /* 浮动 */
  float: "left";
  float: "right";
  /* position */
  position: "absolute";
  position: "fixed";
}
```
