# package 包管理工具

## 常用 package 包管理器

- npm
  - [npm 官方文档](https://docs.npmjs.com/)
  - [npm 生命周期](https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-operation-order)
- cnpm
- yarn
  - [yarn 官方文档](https://classic.yarnpkg.com/en/docs)
- pnpm
  - [pnpm 官方文档](https://www.pnpm.cn/)
- Lerna 多包管理
  - [Lerna 官方文档](https://github.com/lerna/lerna)

## 限制 package 管理器

包管理器太多，项目成员可能习惯使用的包管理器不同  
规范化，则需要项目中限制使用  
主要是为了避免项目依赖安装出错，保证项目能够正常运行

> 原理【包管理器】执行 `install` 时调用 `preinstall` hooks  
> 注意：【npm | yarn | cnpm | pnpm】 hooks 调用时机可能不同

### only-allow：一句代码，统一项目包管理工具

```json
// package.json
{
  "script": {
    "preinstall": "npx only-allow yarn"
  }
}
```

问题

1. yarn 和 npm 的 preinstall hook 调用时机不同
   - `npm` 只会在 `npm install` 安装整个项目依赖时调用
   - `npm install <package>`安装单个 package 时不调用；所以不会执行，也就无法限制使用 npm 安装

### 自定义

Vue3 源码

```json
// package.json
{
  "script": {
    "preinstall": "node ./scripts/preinstall.js"
  }
}
```

```JavaScript
// preinstall.js
const isPnpm = /pnpm/.test(process.env.npm_execpath || '')
if (!isPnpm) {
  console.warn('当前包管理器不是 pnpm'); // 命令行打印信息
  process.exit(1); // 错误退出 node 命令行
}
```
