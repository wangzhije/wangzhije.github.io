# TailwindCSS

# Nuxt 中安装配置

- Nuxt 版本 `^2.15.8`
- `npm i -D @nuxtjs/tailwindcss@4.2.2`
- `npx tailwindcss init` 生成 `tailwind.config.js`
- 配置

```js
// nuxt.config.js
{
  buildModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/style/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
}
```

```js
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## 响应式

默认值 `1rem = 16px`

## media

| 断点前缀 | 最小宽度 |            CSS             |
| :------- | :------- | :------------------------: |
| sm       | 640px    | @media (min-width: 640px)  |
| md       | 768px    | @media (min-width: 768px)  |
| lg       | 1024px   | @media (min-width: 1024px) |
| xl       | 1280px   | @media (min-width: 1280px) |
| 2xl      | 1536px   | @media (min-width: 1536px) |

### 自定义断点

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      '2k': '1920px',
    },
  },
}
```

### 布局

### 移动端

- 本质：px2rem
  - px 单位属性
    - width
    - height
    - font-size
    - line-height
- Tips
  - 移动优先
  - 不要使用 `sm` 来定义移动设备
  - 定位移动设备：使用**无前缀**的**功能类**

### PC 端
