---
title: type 别名
createTime: 2025/08/19 13:52:11
permalink: /frontend/bxuw2f99/
---
作用：给已有类型取别名和定义一个新的类型，搭配联合类型使用

### 类型别名
```typescript
// 定义类型别名
type Str = string;

let str1: Str = "abc";
let str2: Str = "ABC";
```

### 自定义类型
```typescript
// 自定义新类型
type StrOrNum = string | number;

let username: StrOrNum = "David123";
let password: StrOrNum = "ABCabc123";
```

## type 和 interface
### 都可以描述一个对象或函数
```typescript
// interface
interface Person {
  name: string;
  age: number;
}
interface setPerson {
  (name: string, age: number): void;
}
```

```typescript
// type
type Person = {
  name: string;
  age: number;
}
type setPerson = (name: string, age: number): void;
```

### 都允许扩展（extends）
interface 和 type 都可以拓展，并且两者并不是相互独立的。

也就是说 interface 可以 extends type, type 也可以 extends interface。

```typescript
// interface extends interface
interface Person {
  name: string;
  age: number;
}
interface User extends Person {
  username: string;
  password: string;
}
```

```typescript
// type extends type
type Person = {
  name: string;
  age: number;
};
type User = Person & {
  username: string;
  password: string;
};
```

```typescript
// interface extends type
type Person = {
  name: string;
  age: number;
};
interface User extends Person {
  username: string;
  password: string;
}
```

```typescript
// type extends type
interface Person {
  name: string;
  age: number;
}
type User = Person & {
  username: string;
  password: string;
};
```

### interface 能够声明合并；type 不行
```typescript
interface Person {
  name: string;
  age: number;
}

interface Person {
  sex: string;
}

/*
Person 接口为 {
 name: string
 age: number
 sex: string 
}
*/
```

### type 可以声明基本类型别名，联合类型，元组等类型；interface 不行
```typescript
// 基本类型别名
type Name = string;

// 联合类型
interface Dog {
  wong();
}
interface Cat {
  miao();
}

type Pet = Dog | Cat;

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet];
```

### type 语句中可以使用 typeof 获取实例的 类型进行赋值；interface 不行
```typescript
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement("div");
type B = typeof div;
```

### 其他 type 操作
```typescript
type StringOrNumber = string | number;
type Text = string | { text: string };
type NameLookup = Dictionary<string, Person>;
type Callback<T> = (data: T) => void;
type Pair<T> = [T, T];
type Coordinates = Pair<number>;
type Tree<T> = T | { left: Tree<T>; right: Tree<T> };
```

