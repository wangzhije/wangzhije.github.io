---
title: Interface 接口
createTime: 2025/08/19 13:51:51
permalink: /frontend/nmdwmn9w/
---
Interface 可以定义 Object 类型 、 Function 类型、Array 类型

+ 核心原则：是对值所具有的结构进行类型检查。
+ 作用：为这些类型命名和为你的代码或第三方代码定义契约。

## Object 类型
### 基本使用
```typescript
interface LabelledValue {
  // 属性类型
  label: string;
  // 可选属性
  color?: string;
  width?: number;
  // 只读属性
  readonly x: number;
  readonly y: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

### 可选属性
+ <font style="color:rgb(36, 36, 36);">对可能存在的属性进行预定义</font>
+ <font style="color:rgb(36, 36, 36);">捕获引用了不存在的属性时的错误</font>

### 只读属性
<font style="color:rgb(36, 36, 36);">可以用类型断言重写</font>

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}
// 不可修改
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

// 不可修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
// 
a = ro; // error!

// 通过类型断言重写
a = ro as number[];
```

### 额外的属性检查
未指定的额外属性，会报错；即额外的属性检查。

解决方式

+ <font style="color:rgb(36, 36, 36);">类型断言</font>
+ <font style="color:rgb(36, 36, 36);">索引签名</font>
+ <font style="color:rgb(36, 36, 36);">赋值给一个另一个变量</font>

```typescript
interface SquareConfig {
    color?: string; // 可选属性
    width?: number; // 可选属性
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

// 额外的类型检查
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });

// 解决：类型断言
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 解决：索引签名
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
// 赋值给一个另一个变量
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

## Functiion 类型
<font style="color:rgb(36, 36, 36);">接口也可以描述函数类型。</font>

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 完全一致
let mySearch1: SearchFunc;
mySearch1 = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
// 函数的参数名不需要与接口里定义的名字相匹配
let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
// 入参可以不指定类型，会进行类型推断
let mySearch3: SearchFunc;
mySearch3 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```

## <font style="color:rgb(36, 36, 36);">Array 可索引的类型</font>
可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型，如数组类型。

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

## 索引签名
### 支持两种索引签名
+ string 类型
+ number 类型	

### 可以同时使用两种类型的索引
+ 但是数字索引的返回值必须是字符串索引返回值类型的子类型。
+ 因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。

```typescript
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

### 索引签名可以设为只读属性
```typescript
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

## Class 类型
```typescript
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

### 静态部分和实例部分
+ <font style="color:rgb(36, 36, 36);">当一个类实现了一个接口时，只对其实例部分进行类型检查。</font>
+ <font style="color:rgb(36, 36, 36);">constructor存在于类的静态部分，所以不在检查的范围内</font>

```typescript
// 实例方法接口
interface ClockInterface {
    tick();
}
// 构造函数接口
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// 类接口
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
// 构造函数
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
// 实例对象
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

## 继承接口
```typescript
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
// 继承多个接口
interface Square extends Shape, PenStroke {
    sideLength: number;
}
// 创建多个接口的合成接口
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 混合类型
一个对象可以同时做为函数和对象使用，并带有额外的属性。

在使用JavaScript第三方库的时候，你可能需要像这样去完整地定义类型。

```typescript
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

## 接口继承类
接口继承类，只会<font style="color:rgb(36, 36, 36);">继承类的成员但不包括其实现。</font>

```typescript
class Control {
    private state: any;
}
// 接口继承类
interface SelectableControl extends Control {
    select(): void;
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}
```

