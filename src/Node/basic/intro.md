# Node.js 介绍

> Node.js 是一个免费的、开源的、跨平台的 JavaScript 运行时环境，允许开发人员在浏览器之外编写命令行工具和服务器端脚本.

- Node 是一个服务器端 JavaScript 解释器
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
- Node.js 的包管理器 npm，是全球最大的开源库生态系统
- Node.js 是一门动态语言，运行在服务端的 Javascript

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