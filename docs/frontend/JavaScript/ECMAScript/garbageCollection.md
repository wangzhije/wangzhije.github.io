# 内存管理

## JS 内存分配

```JavaScript
var n = 123; // 给数值变量分配内存
var s = "azerty"; // 给字符串分配内存
 
var o = {
  a: 1,
  b: null
}; // 给对象及其包含的值分配内存
 
// 给数组及其包含的值分配内存（就像对象一样）
var a = [1, null, "abra"];
 
function f(a){
  return a + 2;
} // 给函数（可调用的对象）分配内存
 
// 函数表达式也能分配一个对象
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
```

- 有些函数调用结果是分配对象内存
  ```JavaScript
  var d = new Date(); // 分配一个 Date 对象
  var e = document.createElement('div'); // 分配一个 DOM 元素
  ```
- 有些方法分配新变量或者新对象
  ```JavaScript
  var s = "azerty";
  var s2 = s.substr(0, 3); // s2 是一个新的字符串
  // 因为字符串是不变量，
  // JavaScript 可能决定不分配内存，
  // 只是存储了 [0-3] 的范围。
   
  var a = ["ouais ouais", "nan nan"];
  var a2 = ["generation", "nan nan"];
  var a3 = a.concat(a2);
  // 新数组有四个元素，是 a 连接 a2 的结果
  ```

## 垃圾回收机制算法

### 引用计数法

- 致命问题：循环引用
  ```JS
    var o = {
      a: {
        b:2
      }
    };
    // 两个对象被创建，一个作为另一个的属性被引用，另一个被分配给变量o
    // 很显然，没有一个可以被垃圾收集 
    var o2 = o;
    // o2变量是第二个对“这个对象”的引用 o = 1;
    // 现在，“这个对象”的原始引用o被o2替换了 var oa = o2.a;
    // 引用“这个对象”的a属性
    // 现在，“这个对象”有两个引用了，一个是o2，一个是oa o2 = "yo";
    // 最初的对象现在已经是零引用了
    // 他可以被垃圾回收了
    // 然而它的属性a的对象还在被oa引用，所以还不能回收 oa = null;
    // a属性的那个对象现在也是零引用了
    // 它可以被垃圾回收了
  function f(){
    var o = {};
    var o2 = {};
    o.a = o2;
    // o 引用 o2 o2.a = o;
    // o2 引用 o 这里 return "azerty";
  }
  f();
  ```

### 标记清除法

## 常见的内存泄漏

- 意外的全局变量
  ```JavaScript
  function foo() {
  	bar1 = 'some text'; // 没有声明变量 实际上是全局变量 => window.bar1
  	this.bar2 = 'some text' // 全局变量 => window.bar2
  }
  foo();
  ```
- 被遗忘的定时器和回调函数
  - 在很多库中, 如果使用了观察者模式, 都会提供回调方法, 来调用一些回调函数
  - 要记得回收这些回调函数。举一个 setInterval 的例子：
  ```JavaScript
  var serverData = loadData();
  setInterval(function() {
    var renderer = document.getElementById('renderer');
    if(renderer) {
      renderer.innerHTML = JSON.stringify(serverData);
    }
  }, 5000); // 每 5 秒调用一次
  ```
- 闭包

  ```JavaScript
  // 这段代码，每次调用 replaceThing 时，theThing 获得了包含一个巨大的数组和一个对于新闭包 someMethod 的对象。
  // 同时 unused 是一个引用了 originalThing 的闭包。

  // 这个范例的关键在于，闭包之间是共享作用域的，尽管 unused 可能一直没有被调用，但是 someMethod 可能会被调用，就会导致无法对其内存进行回收。
  // 当这段代码被反复执行时，内存会持续增长。
  var theThing = null;
  var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
  	if (originalThing) // 对于 'originalThing'的引用
  	console.log("hi");
  };
  theThing = {
  	longStr: new Array(1000000).join('*'),
  	someMethod: function () {
  	console.log("message");
  	}
  };
  };
  setInterval(replaceThing, 1000);
  ```

- DOM 引用

```JavaScript
var elements = {
  image: document.getElementById('image')
};
function doStuff() {
  elements.image.src = 'http://example.com/image_name.png';
}
function removeImage() {
  document.body.removeChild(document.getElementById('image'));
  // 这个时候我们对于 #image 仍然有一个引用, Image 元素, 仍然无法被内存回收.
}
```
