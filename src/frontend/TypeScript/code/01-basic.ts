// ts 文件可以正常些 js 代码
let bln1 = true;
let str1 = "abc";
let num1 = 1223;
console.log("bln1", bln1);
console.log("str1", str1);
console.log("num1", num1);

// ts 代码

// 布尔
let bln2: boolean = true;
// 字符串
let str2: string = "abc";
// 数值
let num2: number = 1223;
console.log("bln2", bln2);
console.log("str2", str2);
console.log("num2", num2);
// 数组：单个类型
let arr1: number[] = [0, 1, 2, 3]; //
let arr2: Array<number> = [0, 1, 2, 3]; // 数组泛型
// 元祖：多个类型
let tup1: [string, number, boolean] = ["abc", 123, true];
let tup2: [string | number, boolean] = ["abc", true];
let tup3: [string | number, boolean] = [123, true];
// 枚举
enum Color1 {
  Red,
  Green,
  Blue,
}
enum Color2 {
  Red = "#f00",
  Green = "#0f0",
  Blue = "#00f",
}
let red1: Color1 = Color1.Red;
// void
let udf: void = undefined; // undefined
let nl: null = null; // null
// undefined
let udfd: undefined = undefined;
// null
let nul: null = null;
// never: 异常、无返回值 的函数
function error(msg: string): never {
  throw new Error(msg);
}
function fail(): void {
  return error("failed");
}
