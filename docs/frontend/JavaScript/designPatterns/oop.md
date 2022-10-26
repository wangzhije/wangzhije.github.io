# JavaScript 面向对象

> 面向过程和面向对象
>
> - 还记得上一篇的基础知识巩固吗？
> - 面向过程编程：就是最开始的我们，定义了全局方法
> - 面向对象编程：类 的出现，则演变成了面向对象，定义类，使用继承

面向对象特点：分析对象的属性（特征）和方法（动作）

- 封装
- 继承
- 多态

## 封装

- 私有属性/方法：函数作用域
  - 函数内部的变量和方法，函数外部无法访问
- 共有属性/方法：this
  - 每个实例都需要的属性和方法
- 公有属性/方法: prototype
- 类的静态属性/方法：构造函数

>

```JS
// ES5
var personId = 0;
var Person = function(username){
  // 类的私有属性（单纯的函数作用域变量）
  var info = "this is a person"; // 私有属性（单纯的函数作用域变量）
  var printInfo = function(){ // 私有方法
    console.log(info);
  }
  this.username = username; // 共有属性
  this.printName = function(){ // 共有方法
    console.log(username);
  }
  this.printInfo = function(){ // 特权方法，能访问私有属性和方法，权力特殊
    console.log(info);
  }
}
Person.id = personId++; // 类的静态属性
Person.printId = function(){ // 类的静态方法
  console.log(person.id)
};
Person.prototype = {
  msg: 'prototype msg', // 公有属性
  checkName: function(){}, // 共有方法
  checkEmail: function(){},
}
```

```JS
// ES6+
let personId = 0;
class Person {
  // #变量名
  #info = "this is a person"; // 私有属性
  #printInfo = function(){ // 私有方法
    console.log(info);
  }
  constructor(username){
    this.username = username; // 共有属性
    this.printName = function(){ // 共有方法
      console.log(username);
    };
    this.printInfo = function(){ // 特权方法，能访问私有属性和方法，权力特殊
      console.log(info);
    };
  }
  // 相当于 prototype
  msg = 'prototype msg'; // 公有属性
  checkName = function(){}, // 共有方法
  checkEmail = function(){}, // 共有方法
  // 相当于构造函数 Person.id
  static id = personId++;
  static printId = function(){ // 类的静态方法
    console.log(person.id)
  };
}

```

## 继承

- 面向对象分析
  - person 父类，共有相同属性/方法
    - 姓名 name 属性
    - getName 方法
    - 爱好 hobbies 属性
  - student 子类，子类特有属性/方法
    - 分数 score 属性
    - getScore 方法
  - 几个维度去看继承
    - student 是否具有父类 person 的相同共有属性/方法 name 和 getName
    - student 是否具有子类 student 的子类特有属性/方法 name 和 getName
    - student 是否是 person 的实例

### 类式继承

子类的原型对象 = 父类的实例

```JS
// ES5
// 人的构造函数（name 姓名）
function Person(name){
  this.name = name || '';
  this.hobbies = [];
}
Person.prototype = {
  getName: function(){
    console.log('name',this.name)
    return this.name;
  }
}
// 学生的构造函数（score 分数）
function Student(name, score) {
  this.score = score;
}
Student.prototype = new Person();
Student.prototype.getScore = function(){
  console.log('score',this.score)
  return this.score;
}
```

缺点

- 不能向父类传递参数
  - `Student.prototype = new Person();` 只会执行一次
- 父类的共有属性是引用类型时，引用类型的值被共用，相互影响

```JS
// 使用 --> 创建实例
// 缺点一：不能向父类传递参数，无法传递 name 属性
var jay = new Person(100)
console.log('jay', jay)
jay.getName();
jay.getScore();
var john = new Student(90)
console.log('john', john)
john.getName();
john.getScore();
// 缺点二：父类共有属性为引用类型
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log('jay.hobbies',jay.hobbies) // ['game']
console.log('john.hobbies',john.hobbies) // ['game', 'reading']

// student 是否是 person 的实例
console.log(jay instanceof Person); // true
```

### 构造函数继承

创建即继承，构造函数内的继承

```JS
// ES5
// 人的构造函数（name 姓名）
function Person(name){
  this.name = name;
  this.hobbies = [];
}
Person.prototype = {
  getName: function(){
    console.log('name',this.name)
    return this.name;
  }
};
// 学生的构造函数（score 分数）
function Student(name, score){
  // call 更改函数的作用环境
  // 本质就是每次实例化时重新执行函数调用
  Person.call(this, name);
  this.score = score;
}
Student.prototype= {
  getName: function(){
    console.log('nameNew',this.name)
    return this.name;
  },
  getScore: function(){
    console.log('score',this.score)
    return this.score;
  }
}
// 使用-->创建实例，并验证缺点
var jay = new Student('jay', 100);
console.log('jay', jay)
jay.getName();
jay.getScore();
var john = new Student('john', 90);
console.log('john', john)
john.getName();
john.getScore();

// 父类共有属性为引用类型，验证是否相互影响
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log('jay.hobbies',jay.hobbies) // ['game']
console.log('john.hobbies',john.hobbies) // ['reading']
// student 是否是 person 的实例
console.log(jay instanceof Person); // false
```

缺点

- 未涉及到 prototype，所以 getName 没有复用
- student 不是 person 的实例
- 每次实例化，都要执行一遍 `Person.call(this, name);`

### 组合式继承

类式继承 + 构造函数继承

```JS
// ES5
// 人的构造函数（name 姓名）
function Person(name){
  this.name = name;
  this.hobbies = [];
}
Person.prototype = {
  getName: function(){
    console.log('name',this.name)
    return this.name;
  }
}
// 学生的构造函数（score 分数）
function Student(name, score){
  Person.call(this, name); // 构造函数继承
  this.score = score;
}
Student.prototype = new Person();
Student.prototype.getScore = function(){
  console.log('score',this.score)
  return this.score;
}
// 使用-->创建实例，并验证缺点
var jay = new Student('jay', 100);
console.log('jay', jay)
jay.getName();
jay.getScore();
var john = new Student('john', 90);
console.log('john', john)
john.getName();
john.getScore();

// 父类共有属性为引用类型，验证是否相互影响
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log('jay.hobbies',jay.hobbies) // ['game']
console.log('john.hobbies',john.hobbies) // ['reading']

// student 是否是 person 的实例
console.log(jay instanceof Person); // true
```

缺点

- 未解决的问题
  - 每次实例化，都要执行一遍 `Person.call(this, name);`
  - 所以每次都要对 this 上的属性进行更新，开销较大

### 原型式继承

类式继承的封装  
2006 年，道格拉斯·克罗克福德《JavaScript 中原型式继承》

```JS
// ES5
function inheritObject(subInterface){
  // 声明一个过渡函数对象：相当于子类
  // 构造函数 F 内无内容，开销小
  function SubClass (){};
  SubClass.prototype = obj;
  // 返回实例
  return new SubClass();
}
var subInterface = {
  name: '',
  hobbies: [],
  getName: function(){
    console.log('name',this.name)
    return this.name;
  },
  score: '',
  getScore: function(){
    console.log('score',this.score)
    return this.score;
  }
}
// 使用-->创建实例，并验证缺点
var jay = inheritObject(subInterface);
console.log('jay', jay)
jay.name = 'jay';
jay.score = 100;
jay.getName();
jay.getScore();
var john = inheritObject(studentInterface);
console.log('john', john)
john.name = 'john';
john.score = 99;
john.getName();
john.getScore();

// 父类共有属性为引用类型，验证是否相互影响
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log(jay.hobbies)
console.log(john.hobbies)
// student 是否是 person 的实例
// 没有 person 类
```

缺点：

- 父类共有属性为引用类型，会相互影响
- 没有体现 person，student 是否是 person 的实例无从谈起

### 寄生式继承

原型继承的二次封装，本质也是类式继承

道格拉斯·克罗克福德 在《JavaScript 中原型式继承》发现了这些问题  
所以，也推出了新的继承实现方式

```JS
// ES5
// 原型继承（上述）
function inheritObject(obj){
  function F (){};
  F.prototype = obj;
  return new F();
}
var studentInterface = {
  name: '',
  score: '',
  // hobbies: [],
  getName: function(){
    console.log('name',this.name)
    return this.name;
  },
  getScore: function(){
    console.log('score',this.score)
    return this.score;
  }
}
// 二次封装
function createStudents(studentInterface){
  var student = new inheritObject(studentInterface);
  student.hobbies = [];
  return student;
}
// 使用-->创建实例，并验证缺点
var jay = createStudents(studentInterface);
console.log('jay', jay)
jay.name = 'jay';
jay.score = 100;
jay.getName();
jay.getScore();
var john = createStudents(studentInterface);
console.log('john', john)
john.name = 'john';
john.score = 99;
john.getName();
john.getScore();

// 父类共有属性为引用类型，验证是否相互影响
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log(jay.hobbies)
console.log(john.hobbies)
// student 是否是 person 的实例
// 没有 person 类
```

缺点

- 未解决子类和父类的关系

### 寄生组合式继承

```JS
// ES5
// 原型继承（上述）
function inheritObject(obj){
  function F (){};
  F.prototype = obj;
  return new F();
}
// 二次封装
function inheritPrototype(SubClass, SuperClass){
  var sub = new inheritObject(SuperClass.prototype);
  sub.constructor = SubClass;
  SubClass.prototype = sub;
}
// 人的构造函数（name 姓名）
function Person(name){
  this.name = name;
  this.hobbies = [];
}
Person.prototype = {
  getName: function(){
    console.log('name',this.name)
    return this.name;
  }
}
// 学生的构造函数（score 分数）
function Student(name, score){
  Person.call(this, name);
  this.score = score;
}
// 这里不同
// Student.prototype = new Person();
inheritPrototype(Student, Person)

Student.prototype.getScore = function(){
  console.log('score',this.score)
  return this.score;
}
// 使用-->创建实例，并验证缺点
var jay = new Student('jay', 100);
console.log('jay', jay)
jay.getName();
jay.getScore();
var john = new Student('john', 90);
console.log('john', john)
john.getName();
john.getScore();

// 父类共有属性为引用类型，验证是否相互影响
jay.hobbies.push('game');
john.hobbies.push('reading');
console.log('jay.hobbies',jay.hobbies) // ['game']
console.log('john.hobbies',john.hobbies) // ['reading']

// student 是否是 person 的实例
console.log(jay instanceof Person); // true
```

### 终极继承

到这一步，还记不记得我们其实最初只有一个未解决的问题  
就是，组合式继承中，每次实例化，都要执行一遍 `Person.call(this, name);`  
每次都要对 this 上的属性进行更新，开销较大  
其实，上面原型式继承和寄生式继承，都是为了这一步，这是整个演变过程
所以，其实问题还没有完全解决，后面的自己还没想明白，后续继续...

```JS
// ES5

```

### 单继承：属性复制

```JS
// ES5
var extend = function(target, source){
  for(var property in source){
    target[property] = source[property]
  }
  return target;
}
```

### 多继承：将多个对象的属性，复制到源对象中

```JS
// ES5
var mix = function(){
  var i = 1,
    length = arguments.length,
    target = arguments[0],
    arg;
  for(; i < length; i++){
    arg = arguments[i];
    for(var property in arg){
      target[prototype] = arg[prototype];
    }
  }
  return target;
}
```

```JS
// ES6+
const a = {
  a: 'a'
};
const b = {
  b: 'b'
};
// 扩展运算符
const c = {...a, ...b}; // {a: 'a', b: 'b'}
// assgin
const d = Object.assign({},a,b)
// 底层实现
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
```

## 多态

同一个方法，有多种调用方式

```JS
// ES5

```

```JS
// ES6+

```