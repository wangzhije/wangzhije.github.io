# Nuxt2

> Nuxt2: version 2.15.8

- `npx create-nuxt-app nuxt2-start`
- `cd nuxt2-start && npm run dev`

- scss 配置

  - `npm i -D node-sass sass-loader`
  - `npm run dev` 报错
  - 版本问题 WARNING 提示版本
    - `npm i -D node-sass@8.0.0`
    - `npm i -D sass-loader@10.1.1`
  - 全局变量
    - `npm i -D @nuxtjs/style-resources`
    ```js
    // nuxt.config.js
    buildModules: [
      '@nuxtjs/style-resources',
    ],
    styleResources: {
      scss: ['~/style/vars/*.scss'],
    },
    ```

- 修改 loading
- 修改 errorPage
- 配置 tailwindcss

- Vuex 刷新问题

- Github 参考案例
  - Nuxt2
    - nuxt2 PC `https://github.com/Sandop/NuxtPC.git`
    - 高仿掘金 `https://github.com/xuqiang521/nuxt-ssr-demo.git`
  - Nuxt3
    - nuxt3 `https://github.com/viandwi24/nuxt3-awesome-starter.git`

# 源码

- vue
- vue-ssr
- node-server
