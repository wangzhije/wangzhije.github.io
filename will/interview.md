# interview

## Vue

指令

> `v-if` 和 `v-show` 的区别(css 属性)
>
> - v-if
>
>   - 不会渲染出 dom 元素，相当于 `display: none;`
>   - 使用场景：切换 显示/隐藏 不频繁的
>
> - v-show
>   - 会渲染出 dom 元素，相当于 `visibility: hidden;`
>   - 使用场景：频繁切换 显示/隐藏 的

> `v-for` 中 `:key` 的作用

> `data`
>
> - 为什么组件中 data 是一个函数，返回一个 object 对象
>   - data() { return {} }
>     - 每次返回新的对象(JS 基础中函数的理解)

1. computed 和 watch 区别
2. prop 是单向数据流，只能父传子，那子组件怎么更新 prop
   【数据双向绑定】
3. v-model 和 value 区别
   <input v-model='something'>
   相当于
   <input v-bind:value="something" v-on:input="something = $event.target.value">

v-model 本质是 v-bind:value 的语法糖，是数据双向绑定
v-bind:value 是单向数据 2. 数据双向绑定原理，大致描述
【组件】相关

1. 组件传参
   props：单向数据流，只有父传子，只能子组件；子传父：this.$emit()
	provide/inject（也就依赖注入）：子/孙 组件都可以；父组件注册 provide，子/孙组件 注册 inject
	this.$refs/this.$parent：通过 Dom 的方式，获取组件及组件数据
   其他方式：

## 移动端

1. 1px 问题：使用 `transform: scale(0.5)`
2. 移动端适配方案：`视口、rem、flexible`
3. 布局：盒模型、flex 弹性布局、grid 网格布局
4. 页面滚动问题：保持滚动条位置
5. 事件穿透

## 兼容性问题

1. 时间问题

```JS
// 在 IE、IOS new Date() 不支持 “-”
new Date("2023-07-21 10:10:10"); // NaN
```
