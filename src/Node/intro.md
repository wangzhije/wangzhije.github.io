# Node.js 介绍

> Node.js 是一个免费的、开源的、跨平台的 JavaScript 运行时环境，允许开发人员在浏览器之外编写命令行工具和服务器端脚本.

- Node.js 是一个服务器端 JavaScript 解释器，解释运行 JavaScript
  - 浏览器
  - Node.js
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
- Node.js 的包管理器 npm，是全球最大的开源库生态系统
- Node.js 是一门动态语言，运行在服务端的 Javascript

## 浏览器 和 Node.js 的区别

> 《JavaScript 高级程序设计》一书中，有关于 JavaScript 宿主环境的介绍
>
> JavaScript 的宿主环境
>
> - 不仅提供基本的 ECMAScript 实现
> - 同时也提供该语言的扩展，以便语言与环境之间对接交互

JavaScript 宿主环境

- Web 浏览器
  - ECMAScript 核心语法
  - Web API
    - DOM
    - BOM
    - Ajax
    - Storage
    - Console
    - 定时器
    - ...
- Node.js
  - ECMAScript 核心语法
  - Node API
    - fs
    - url
    - http
    - Console
    - 定时器
    - ...

所以，注意 API 的使用，都不能在 Node.js 中使用

- DOM 不能使用
- BOM 不能使用
  - location
  - navigation
- Ajax 不能使用
  - 使用 Fetch

全局对象

- Web 浏览器：window
- Node.js：global

## 应用

### 服务器应用

### 工具类应用

CLI
Babel
Webpack
Vite

### 桌面端应用

Electron

- VSCode
  - VSCode Extension 扩展开发
- Figma
- Postman

## Node.js 和浏览器的不同

## 环境变量

## 模块系统

- 内置模块
- 第三方模块
  - npm
  - yarn
  - pnpm
- Semver 语义化规范
  - 语义版本控制标准 `主版本.次版本.补丁版本`
    - 主版本：当进行不兼容的 API 更改时，则升级主版本
    - 次版本：当以向后兼容的方式添加功能时
    - 补丁版本：当进行向后兼容的缺陷修复时
  - 符号
    - `^`：只会执行不更改最左边非零数字的更新
    - `~`：更新到补丁版本
    - `>`：接受高于指定版本的任何版本
    - `>=`: 接受等于或高于指定版本的任何版本
    - `<=`: 接受等于或低于指定版本的任何版本
    - `<`: 接受低于指定版本的任何版本
    - `=`: 接受确切的版本
    - `-`: 接受一定范围的版本
    - `||`: 组合集合
    - `无符号`: 仅接受指定的特定版本
    - `latest`: 使用可用的最新版本
