---
title: electron-vite 脚手架
createTime: 2025/08/25 19:08:41
permalink: /frontend/electron/bfvlegpn/
---

> electron-vite [electron-vite | 下一代 Electron 开发构建工具](https://cn.electron-vite.org/)

## 环境

- **Node.js** 版本 20.19+, 22.12+
- **Vite** 版本 5.0+

## 项目创建

```bash
npm create @quick-start/electron@latest
```

```bash

✔ Project name: … <electron-app>
✔ Select a framework: › vue
✔ Add TypeScript? … No / Yes
✔ Add Electron updater plugin? … No / Yes
✔ Enable Electron download mirror proxy? … No / Yes

Scaffolding project in ./<electron-app>...
Done.
```

```bash
# npm 7+，需要添加额外的 --：
npm create @quick-start/electron@latest my-app -- --template vue
```

目前支持的模板预设如下：

| JavaScript                                                                                                 | TypeScript                                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [vanilla](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla) | [vanilla-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla-ts) |
| [vue](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue)         | [vue-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue-ts)         |
| [react](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react)     | [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)     |
| [svelte](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte)   | [svelte-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte-ts)   |
| [solid](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid)     | [solid-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid-ts)     |

还可以用如 [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit alex8088/electron-vite-boilerplate electron-app

cd electron-app

npm install
npm run dev
```

## 项目结构

├──main  
│ ├──...  
│ └──vite.config.js  
├──preload  
│ ├──...  
│ └──vite.config.js  
└──renderer  
 ├──...  
 └──vite.config.js

## 项目配置

## 项目打包
