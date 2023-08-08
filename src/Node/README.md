# Node.js 知识汇总

## 版本

V16 +

```js
// Node.js Version < 16
const fs = require("fs");
// Node.js Version >= 16
const fs = require("node:fs");
```

## 模块

- Node 内部模块
- 第三方模块，包管理
  - npm
    - npm 包开发
      - 开发
        - MultiRepo
        - MonoRepo
      - 部署
      - 私服
  - cnpm
  - yarn
  - pnpm

## 包管理

- [package.json 常用记录](!./../package/json.md)
- [package 包管理工具](!./package/README.md)
  - 常用包管理器: npm cnpm yarn pnpm lerna
  - 限制 package 管理器
    - only-allow
    - vue3 源码判断是否为 `pnpm`
- [cnpm](!./../package/cnpm.md)
- [pnpm](!./../package/pnpm.md)
- [node_modules 结构演变](!./../package/nodeModules.md)
