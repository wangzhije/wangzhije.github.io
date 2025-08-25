---
title: 项目创建
createTime: 2025/08/25 17:27:40
permalink: /frontend/vue3/start/
---

## create-vue

```bash
npm create vue@latest
```

1. 输入项目名称
2. 选择项目配置

- TypeScript
- JSX
- Vue Router
- Pinia
- Vitest（单元测试）
- 端到端测试（E2E）
  - Playwright
  - Cypress
  - Nightwatch
- ESlint
- Prettier（代码格式化）
3. 进入项目目录，安装依赖，运行、开发

## Vue CLI

### 命令行

安装 vue cli

```bash
# 安装 vue-cli
npm install -g @vue/cli
# 或者
yarn global add @vue/cli
```

升级全局 Vue CLI 包

```bash
npm update -g @vue/cli

# 或者
yarn global upgrade --latest @vue/cli
```

1. 创建项目

```bash
vue create <project-name>
```
2. 选择项目配置

- Babel
- TypeScript
- PWA
- Vue Router
- Vuex
- CSS 预处理器
    - Sass/SCSS
    - Less
    - Stylus
- Vitest（单元测试）
- 端到端测试（E2E）
  - Playwright
  - Cypress
  - Nightwatch
- ESlint
    - ESLint with error prevention only
    - ESLint + Airbnb
    - ESLint + Standard
    - ESLint + Prettier
3. 进入项目目录，安装依赖，运行、开发

### Vue UI

Vue CLI 的可视化面板

```bash
vue ui
```

## Vite

Vite 是新一代项目构建工具，不只支持 Vue 项目创建，也支持 React 项目创建

```bash
# npm 7+，需要添加额外的 --：
npm create vite@latest my-vue-app -- --template vue
```

可依据[社区模板](https://github.com/vitejs/awesome-vite#templates)创建项目

查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节
- vanilla
- vanilla-ts
- vue
- vue-ts
- react
- react-ts
- react-swc
- react-swc-ts
- preact
- preact-ts
- lit
- lit-ts
- svelte
- svelte-ts
- solid
- solid-ts
- qwik
- qwik-ts