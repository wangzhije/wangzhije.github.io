# Array

- `1` 个属性 `length`
- `37` 个方法

```js
// Array 方法整理

/**
 * // 共有
 * toString() // toString 等同于 字符串拼接 join(",")
 * toLocaleString() //
 */

/**
 * 判断是否是 Array 类型
 * arg instanceof Array
 * arg constructor === Array
 * Object.prototype.toString.call(arg) === '[object Array]';
 * Array.isArray(arg)
 */
// 兼容方法
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}

/**
 * 转为数组: 字符串、伪数组、Set、Map
 * 伪数组
 *  常见伪数组/类数组：DOMList、arguments（形参）
 * Set
 * Map
 *
 * Array.from() 创建一个新的，浅拷贝的数组
 */

/**
 * 创建数组
 * let arr1 = []
 * let arr2 = new Array()
 * let arr3 = Array.of()
 */

/**
 * index-value 键值对
 *
 * let item = arr[index]
 * // index 可以是负值
 * let item = arr.at(index)
 * // 最常用的就是替代 length-1
 * let last = arr[arr.length-1]
 * let last = arr[-1]
 */

/**
 * 遍历
 * for: 最原始的遍历方法；可以中断
 * for of:
 * forEach: 单纯遍历数组；不可中断
 * map: **返回新数组**
 * flatMap: map 处理，并将结果压缩成一个新数组
 * reduce(fun, initValue)
 * reduceRight(fun, initValue)
 */

/**
 * 增
 *  前增 unshift(): 方法返回最新数组长度，改变原数组
 *  后增 push(): 方法返回最新数组长度，改变原数组
 *  中间增
 *    splice(start, deleteCount, item1, item2, itemN)
 *    result = [...arr.slice(start, end), newItems, ...arr.slice(start, end)]
 */

/**
 * 删
 *  前删 shift(): 方法返回最新数组长度，改变原数组
 *  后删 pop(): 方法返回最新数组长度，改变原数组
 *  中间删
 *    splice(start, deleteCount)
 *
 */

/**
 * 改
 *  arr[index] = item
 *  splice(start, 1, item1)
 *  // 浅拷贝
 *  copyWithin(target, start, end)
 *  arr.fill(value, start, end)
 */

/**
 * 查
 *  基本数据类型
 *    是否 包含: includes()
 *    包含的 index: indexOf()/lastIndexOf()
 *  引用数据类型
 *    是否 符合条件: some()
 *    是否 全部符合条件: every()
 *    符合条件的 index: findIndex()/findLastIndex()
 *    符合条件的 item: find()/findLast()
 */

/**
 * iterator 迭代器
 * let arr = ['a', 'b', 'c', 4, 5]
 * let entries = arr.entries()
 * let keys = arr.keys()
 * let values = arr.values()
 */

/**
 * 功能
 *
 * 拼接
 *  join(separator)
 * 截取
 *  slice(start, end): 不改变原数组，浅拷贝的, [start, end)
 * 排序
 *  sort(compareFn(a, b))
 *    compareFn < 0, a 在 b 前
 *    compareFn > 0, b 在 a 前
 * 倒序
 *  reverse()
 * 过滤
 *  filter()
 * 合并
 *  arr = concat([], arr1, arr2)
 *  arr = [...arr1, ...arr2]
 * 去重
 *  arr = [... new Set(arr)]
 */

/**
 * 拷贝
 * 浅拷贝
 *
 * 深拷贝
 *
 * 一维数组
 *
 * 多维数组
 * 扁平化
 * let newArr = arr.flat(depth=1)
 * flatMap: map 处理，并将结果压缩成一个新数组
 */

/**
 * 交集：2个集合，共同包含的部分
 */
/**
 * 差集：1个集合相对于1个集合中，不包含的部分
 */
/**
 * 并集：2个集合，合并去重
 */
/**
 * 子集：1个集合，截取出子集
 */
```
