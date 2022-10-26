# 从面向过程到面向对象

> 工作场景：定义全局的表单校验，名称、邮箱等

## 最开始的我们

函数的两种创建方式对比

- 函数声明
- 函数表达式

```JS
// 函数声明：有函数提升
function checkName (){};
function checkEmail (){};
```

```JS
// 函数表达式：无函数提升，使用前需提前声明
var checkName = function(){};
var checkEmail = function(){};
```

问题：污染全局空间  
定义全局变量，很可能导致命名冲突

> 小明定义了一个 checkName，小辉在不知情的情况下也定义了一个 checkName  
> 造成冲突，checkName 覆盖了之前的方法

## 对象收编变量

```JS
// 使用对象，收集相关的变量
// 减少了全局变量的定义
var globalCheck = {
  checkName: function(){},
  checkEmail: function(){},
};
```

## 函数也是对象

```JS
// 函数也是对象
var globalCheck = function (){}
globalCheck.checkName = function(){};
globalCheck.checkEmail = function(){}
```

问题：不便于复用  
工作场景：个人信息模块也需要校验用户名、邮箱时，还需要一个校验密码功能

- 复制一份这个对象
- 不影响原有这个对象

```JS
// 只能手动复制代码，重新创建一个对象
var infoCheck = function (){}
infoCheck.checkName = function(){};
infoCheck.checkEmail = function(){};
infoCheck.checkPassword = function(){};
```

## 真假对象

```JS
// 真假对象
var coreCheck = function (){
  return {
    checkName: function(){},
    checkEmail: function(){},
  }
}

// 每次调用，都返回一个全新的对象
// 每个人之间互不影响

// 全局方法
var globalCheck = coreCheck();
// 个人信息模块方法
var infoCheck = coreCheck();
infoCheck.checkPassword = function(){};

```

问题：关系模糊  
本质：infoCheck 是继承自 globalCheck，并且扩展了 checkPassword，但代码中看不出来

## 类

### this 定义的属性和方法

```JS
// ES5
// 构造函数
var CoreCheck = function(){
  this.checkName = function(){};
  this.checkEmail = function(){};
}
```

```JS
// ES6
class CoreCheck {
  constructor(){
    this.checkName = function(){};
    this.checkEmail = function(){};
  }
}
```

```JS
// 实例对象-全局方法
var globalCheck = new CoreCheck();
// 实例对象-个人信息模块
var infoCheck = new CoreCheck();
infoCheck.checkPassword = function(){};
```

问题：造成不必要的开销  
this 上的方法，每次执行 new 创建实例时，都会复制 this 上的属性和方法

### prototype 定义的属性和方法

```JS
// ES5
// 构造函数
var CoreCheck = function(){};
CoreCheck.prototype = {
  checkName: function(){},
  checkEmail: function(){},
};
var InfoCheck = function(){};
InfoCheck.prototype = CoreCheck.prototype;
```

```JS
// ES6
// 构造函数
class CoreCheck {
  constructor(){}
  checkName = function(){};
  checkEmail = function(){};
}
class InfoCheck extends CoreCheck{
  constructor(){
    super()
  }
  checkPassword: function(){};
}
```

```JS
// 实例对象-全局方法
var globalCheck = new CoreCheck();
// 实例对象-个人信息模块
var infoCheck = new InfoCheck();
```

- **通过 this 定义的属性和方法**
  - 每次使用 new 创建实例时，都会对新对象复制 this 上的属性和方法
- **通过 prototype 定义的属性和方法**

  - prototype 是原型对象，当实例对象没有查找的属性和方法， 会进行**原型链**查找

- **new 的执行过程**
  - 创建一个新的空对象`{}`
  - 将空对象`{}`的 `__proto__` 属性指向构造函数的 `prototype` 属性
  - 将空对象作为构造函数的 `this` 的上下文，执行构造函数
  - 返回新对象

```JS
// new 的执行过程
function myNew(args){
  var obj = {}
  obj.__proto__ = Fn.prototype
  Fn.call(obj, args)
  return obj
}(args)
```

## 链式调用

本质：方法 return this

```JS
// ES5
// 构造函数
var CoreCheck = function(){};
CoreCheck.prototype = {
  checkName: function(){
    return this
  },
  checkEmail: function(){
    return this
  },
};
var InfoCheck = function(){};
InfoCheck.prototype = CoreCheck.prototype;
```

```JS
// ES6
// 构造函数
class CoreCheck {
  constructor(){}
  checkName = function(){
    return this
  };
  checkEmail = function(){
    return this
  };
}
class InfoCheck extends CoreCheck{
  constructor(){
    super()
  }
  checkPassword = function(){
    return this
  };
}
```