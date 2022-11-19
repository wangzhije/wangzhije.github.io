# 一等公民 Function

## 创建

### 函数声明

- 函数声明提升

```JS
sayName('Jhon'); // 正常执行
function sayName(name){
  console.log('name', name)
}
```

### 函数表达式

```JS
sayName('Jhon'); // 报错
var sayName = function(name){
  console.log('name', name)
}
```

## 参数

### 形参 arguments

`arguments` 是伪数组

- 索引（可遍历）
- `length` 属性

常用伪数组转为数组

```JS
// 常用数组转伪数组的方法
function testArgs(){
  // 遍历
  let argsArray = [];
  for(let i = 0;i<arguments.length;i++){
    argsArray.push(arguments[i])
  }
  console.log(argsArray)
  // ES5 方法
  let argsArray1 = Array.prototype.slice.call(arguments)
  let argsArray1 = [].slice.call(arguments)
  console.log()
  // ES6+ 方法
  let argsArray2 = Array.from.call(arguments)
  let argsArray2 = [...arguments]
  console.log()
}
```

### 实参

## 返回值

`return` 返回值默认值 `undefined`

return 返回值类型

- 基本数据类型
- 引用数据类型
  - object 每次返回一个新的对象
  - array 每次返回一个新的数组
  - function

## 作用域

## 作用域链

## 闭包

## 递归
