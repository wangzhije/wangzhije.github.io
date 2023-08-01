# Buffer

> 源代码：`lib/buffer.js`，是 JavaScript `Unit8Array` 的子类

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像 `TCP 流` 或 `文件流` 时，必须使用到 `二进制数据`。因此在 Node.js 中，定义了一个 Buffer 类，该类用来创建一个专门`存放二进制数据的缓存区`。

## 介绍

概念

- Buffer 是一个`类似于数组`的`对象`，用于表示固定长度的字节序列
- Buffer 本质是一段内存空间，专门用来处理二进制数据

特点

- Buffer 大小固定且无法调整；每个元素的大小为 1 字节（byte），8bit
- Buffer 性能较好，可以直接对计算机内存进行操作

## Buffer 与字符串

> 编码: 将 字符串 转换为 Buffer
>
> 解码: 将 Buffer 转换为 字符串

Node.js 支持的字符编码

- 编码
  - `utf8`: 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
  - `utf16le`: 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
  - `latin1`: 一种把 Buffer 编码成一字节编码的字符串的方式。
- 编码
  - `base64`
  - `base64url`
  - `hex`: 将每个字节编码为两个十六进制字符。
- 编码: 旧版字符
  - `ascii`: 仅支持 7 位 ASCII 数据。将字符串编码为 Buffer 时,等效于使用 `latin1`
  - `ucs2`: utf16le 的别名。
  - `binary`: latin1 的别名

## 引入

```js
// cjs
const Buffer = require("node:buffer").Buffer;
// esm
// package.json 中 设置 "type": "module"; 以.js结尾或没有任何扩展名的文件,将作为ES模块进行加载
import { Buffer } from "node:buffer";
```

## 创建

`Buffer.alloc(size[, fill[, encoding]])`

- size:
- fill: 填充，默认使用
- encoding: 字符编码，默认使用 `utf8`

```js
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10); // 输出 <Buffer 00 00 00 00 00 00 00 00 00 00>
// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1); // 输出 <Buffer 01 01 01 01 01 01 01 01 01 01>
```

## 写入

## 读取

## 源码-伪代码，便于理解/记忆

全局对象 Buffer

引入 Buffer(推荐使用)

```js
// 属性/方法
class Buffer extend Unit8Array {
  // extends class
  Blog,
  resolveObjectURL,
  // other
  SlowBuffer,
  transcode,
  // Buffer
  Buffer(){
    poolSize: 8192,

    from(){},
    of(){},
    alloc(){},
    allocUnsafe(){},
    allocUnsafeSlow(){},
    isBuffer(){}
    // extends
    byteLength,
    isEncoding,
    Symbol(kIsEncodingSymbol),
    concat,
    compare,
  }
}
```
