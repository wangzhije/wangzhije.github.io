---
title: Decorator 装饰器
createTime: 2025/08/19 13:52:43
permalink: /frontend/k3e6nw9n/
---
对类的额外的特性来支持标注或修改类及其成员。

在类的声明及成员上通过元编程语法添加标注提供了一种方式。

## 理解
基于结构型设计模式-装饰者模式

在不改变原数据的基础上，对原数据进行扩展

## 使用
### 命令行
`tsc --target ES5 --experimentalDecorators`

### tsconfig.ts
```javascript
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

## 范围
类、方法、访问符、属性、参数

不能用在声明文件( .d.ts)

+ 类装饰器 `ClassDecorator`
+ 方法装饰器 `MethodDecorator`
+ 访问器装饰器 `configurable`
+ 属性装饰器 `PropertyDecorator`

### 类装饰器
```typescript
// 装饰器
const Base: ClassDecorator = (target) =>{
  target.prototype.test = 'test'
  target.prototype.sayTest = ()=>{}
}
@Base
class Http{
  // ...
}
const http = new Http() as any;
http.sayTest();
```

```typescript
// 装饰器工厂 + 函数柯里化
const Base = (name) => {
  const fn: ClassDecorator = (target) =>{
    target.prototype.test = name
    target.prototype.sayTest = ()=>{}
  }
  return fn;// 供装饰器在运行时调用
}

@Base
class Http{
  // ...
}
const http = new Http() as any;
http.sayTest();
```

```typescript
// 类装饰器
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
console.log(new Greeter("world"));
```

#### 装饰器组合
执行顺序

1. 由上至下依次对装饰器表达式求值（从上至下执行）。
2. 求值的结果会被当作函数，由下至上依次调用（返回的函数从下往上执行）。

```typescript
function f() {
    console.log("f()");
    return function (target) {
        console.log("f");
    }
}

function g() {
    console.log("g()");
    return function (target) {
        console.log("g");
    }
}

class C {
    @f()
    @g()
    method() {}
}
// 控制台打印
// f() 
// g()
// g
// f
```

### 方法装饰器
入参

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
2. 成员的名字
3. 成员的属性描述符

```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
// 方法装饰器
function enumerable(value: boolean) {
    return function (
          target: any,
          propertyKey: string,
          descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}
```

### 访问器装饰器
```typescript
class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }
  @configurable(false)
  get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```

### 属性选择器
```typescript
class Greeter {
  @format("Hello, %s")
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      let formatString = getFormat(this, "greeting");
      return formatString.replace("%s", this.greeting);
  }
}

import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
```

### 参数装饰器
```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
      this.greeting = message;
  }

  @validate
  greet(@required name: string) {
      return "Hello " + name + ", " + this.greeting;
  }
}

import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }

        return method.apply(this, arguments);
    }
}
```

