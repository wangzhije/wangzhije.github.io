---
title: namespace 命名空间
createTime: 2025/08/19 13:52:28
permalink: /frontend/e84tdio5/
---
避免 全局变量 造成的污染

+ 通过 namespace 定义
+ 通过 export 暴露
+ 避免命名冲突
+ 命名空间内的类默认私有
+ 重名的命名空间会合并，不会覆盖



```typescript
// 基本使用
namespace A {
  // 必须使用 export 导出
  export interface B {
    isStr(s: string): boolean;
  }
}
// 嵌套命名空间
namespace a {
  export namespace b {
    export class Vue {
      parameters: string
      constructor(parameters: string) {
        this.parameters = parameters
      }
    }
  }
}

// 多文件命名空间引用
import {V} from '../xxx/xxx.ts'
console.log(V);
```

## 多文件
```typescript
// 把所有的输入文件编译为一个输出文件
tsc --outFile xx.js xx.ts xx.ts xx.ts xx.ts
// script 引用
<script src="xx.js" type="text/javascript" />
<script src="xx.js" type="text/javascript" />
<script src="xx.js" type="text/javascript" />
<script src="xx.js" type="text/javascript" />
```

## 别名
import  是为指定的符号创建一个别名

import 不是模块引用的

```typescript
// 简化命名空间
namespace A  {
    export namespace B {
        export const C = 1
    }
}
import X = A.B.C
```

## 外部命名空间
第三方库

```typescript
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }
  export interface Event {
    x: number;
    y: number;
  }
  export interface Base extends Selectors {
    event: Event;
  }
}
declare var d3: D3.Base;
```

