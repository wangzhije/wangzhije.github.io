# JavaScript 注释规范

- 注释在代码编写过程中的重要性
- 没有注释的代码都不是好代码
- 为了别人学习，同时为了自己以后对代码进行‘升级’，看看 js/javascript 代码注释规范与示例。来自：http://www.56.com/style/-doc-/v1/tpl/js_dev_spec/spec-comment.html

## 普通注释

普通注释是为了帮助开发者和阅读者更好地理解程序，不会出现在 API 文档中

- 单行注释

```JavaScript
// this is comment
```

- 多行注释

```JavaScript
/*
  here is line 1
  here is line 2
*/
```

### 错误注释

- 要把注释写在多行注释的开始符、结束符所在行

```JavaScript
/* start

end */
```

- 不要编写无意义的注释

```JavaScript
// 初始化变量
var variable = '';
```

```JavaScript
/*
  这是一个方法
*/
```

- 如果某段代码有功能未实现，或者有待完善，必须添加**TODO**标记，**TODO**前后应留一个空格

```JavaScript

// TODO 未处理IE6-8的兼容性

function setOpacity(node, val) {
  node.style.opacity = val;
}
```

## 文档注释

文档注释将会以预定格式出现在 API 文档中

- 文档注释必须包含一个或多个注释标签

```JavaScript
/**
 * 模块说明
 * @module 模块名
 */
```

- 类

```JavaScript
/**
 * 类说明
 * @class 类名
 * @constructor
 */
```

@class 必须搭配 @constructor 或 @static 使用，分别标记非静态类与静态类。

```JavaScript
/**
 * 节点集合类
 * @class NodeList
 * @constructor
 * @param {ArrayLike<Element>} nodes 初始化节点
 */
```

- 函数/方法

```JavaScript
/**
 * 方法说明
 * @method 方法名
 * @for 所属类名
 * @param {参数类型} 参数名 参数说明
 * @param {参数类型} 参数名2 参数说明
 * @return {返回值类型} 返回值说明
 */
```

没有指定@for 时，表示此函数为全局或模块顶层函数。当函数为静态函数时，必须添加@static；当函数有参数时，必须使用@param；当函数有返回值时，必须使用@return。

```JavaScript
/**
 * 返回当前集合中指定位置的元素
 * @method
 * @for NodeList
 * @param {Number} [i=0] 位置下标。如果为负数，则从集合的最后一个元素开始倒数
 * @return {Element} 指定元素
 */
```

@property。声明类属性，用法

```JavaScript
/**
 * 属性说明
 * @property {属性类型} 属性名
 */
```

## 文件注释

文件注释位于文件的最前面，应包括文件的以下信息：

- 概要说明及版本（必须）
- 项目地址（开源组件必须）
- 版权声明（必须）
- 开源协议（开源组件必须）
- 版本号（必须）
- 修改时间（必须）
  - 以 ISO 格式表示，文件注释必须全部以英文字符表示，并存在于文件的开发版本与生产版本中
- 示例(待更新)

```JavaScript
/*!
 * jRaiser 2 Javascript Library
 * waterfall - v1.0.0 (2013-03-15T14:55:51+0800)
 * http://jraiser.org/ | Released under MIT license
 */
```

```JavaScript
/*!
 * kan.56.com - v1.1 (2013-03-08T15:30:32+0800)
 * Copyright 2005-2013 56.com
 */
```

如果文件内包含了一些开源组件，则必须在文件注释中进行说明

```JavaScript
/*!
 * jRaiser 2 Javascript Library
 * sizzle - v1.9.1 (2013-03-15T10:07:24+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include sizzle (http://sizzlejs.com/)
 */
```
