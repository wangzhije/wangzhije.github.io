---
title: Function 函数
createTime: 2025/08/19 13:51:39
permalink: /frontend/ugfmlk7k/
---
## 函数类型
```typescript
// 参数不能多传，也不能少传 必须按照约定的类型来
function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (baseValue: number, increment: number) => number
  = function(x: number, y: number): number { return x + y; };

```

## 函数可选参数
```typescript
// 可选参数 放到必须参数后面
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

## 函数函数默认参数
```typescript
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

## 剩余参数
```typescript
// 也可在带有剩余参数的函数类型定义上使用
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```

## this
+ JS 中，this 在函数调用中才会确定，TS 中默认为 any 类型。
+ 解决办法，函数第一个参数显示传入 this 可指定 this 对象类型。

```typescript
function f(this: void) {
    // make sure `this` is unusable in this standalone function
}
```

this 在回调函数中

```typescript
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}
let h = new Handler();
uiElement.addClickListener(h.onClickGood);
```

## 函数的重载
+ 定义不同参数的函数
+ 如一个查询方法，利用函数的重载，可以实现条件查询和全部查询的全部功能

```typescript
function fn(params: number): void
function fn(params: string, params2: number): void
function fn(params: any, params2?: any): void {
  console.log(params)
  console.log(params2)
}
```

