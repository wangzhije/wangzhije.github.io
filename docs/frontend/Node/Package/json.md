# package.json

> package.json 是项目的清单记录

`[npm | cnpm | yarn | pnpm] init` 初始化项目，则生成 `package.json` 文件

- 文件结构
- 属性分类
  - npm 属性：包管理使用
  - 命令特有属性：npm 具体插件使用
    - eslint 的 eslintConfig
    - babel
- 软件包版本：Semver 语义化规范

> 内容过多，尽量使用 Ctrl+F

## 基本信息：npm 搜索、install 等

```json
// package.json
{
  "name": "wzjcli-test", // 名称：小写
  "version": "1.0.0", // 版本：遵循 Semver 语义化规范
  "scripts": {
    // 可执行命令 [npm | cnpm | yarn | pnpm]
    // 自定义命令
    "dev": "node scripts/dev.js",
    // hooks 包管理器生命周期钩子函数
    "preinstall": "node scripts/preinstall.js"
  },
  "packageManager": "pnpm@7.1.0", // Node 16新增，使用的包管理器
  // 环境版本约束
  "engines": {
    "node": ">=12.18.3",
    "npm": ">7.0.0"
  },
  // 业务依赖/生产环境依赖，发布后仍需使用
  "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  }
  // 开发依赖，只在开发环境中使用，生产环境不会将其打包
  "devDependencies": {
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"
  },
  // 宿主环境去安装的包
  // 示例为 ant-design UI 组件库要求宿主环境安装指定的 React 版本
  "peerDependencies": {
    "react": ">=16.9.0",
    "react-dom": ">=16.9.0"
  }
}
```

## 模块化

> main 属性设置：模块加载的入口文件

未设置 main 属性 `require('dist/myModule.js')`  
设置 main 属性 `require('myModule.js')`

```json
// package.json
{
  "main": "./dist/myModule.js"
}
```

## CLI 脚手架开发

> bin 执行命令时调用的文件  
> 命令行运行 `webpack` 时，执行` webpack/bin/index.js` 文件

- `key(webpack)`: 定义的可执行命令，不能重名

```json
// package.json
{
  "bin": {
    "webpack": "bin/index.js"
  }
}
```

## webpack 的 sideEffects 和 tree-shaking

声明该模块是否包含 sideEffects（副作用）
从而可以为 tree-shaking 提供更大的优化空间

```json
// package.json
{
  "sideEffects": ["dist/*", "es/**/style/*", "lib/**/style/*", "*.less"]
}
```

## 其他

```json
// package.json
{
  /*
   * npm 发布相关
   */
  //
  "private": true,
  //
  "publishConfig": {
    // 发布到 npm 注册表时, 要使用的程序包访问级别
    "access": "public",
  },
  // 工作区是 monorepos 用来将一个大型项目拆分为半独立子项目的一项可选功能，每个子项目都列出了自己的一组依赖关系。
  // 工作区字段是全局模式列表，这些模式与应成为应用程序工作区的所有目录匹配
  "workspaces": ["packages/*"],
}
```

## package-lock.json

`package.json`
- 指定依赖的版本**范围**，可以使用很多版本  

`-lock.json`  
- 项目安装的**具体版本号**
