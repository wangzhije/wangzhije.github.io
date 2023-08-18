/**
 * 类型断言（相当于手动指定为某个类型，防止 ts 自动进行类型检查）
 */

let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length; // 方式一
let strLength2: number = (someValue as string).length; // 方式二，JSX 必须使用这种方式
