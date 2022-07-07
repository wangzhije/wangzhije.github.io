# VuePress 搭建个人博客

## 快速上手

1. 创建目录  
  `mkdir vupress-start && cd vuepress-start`
2. 项目初始化
  `yarn init`
3. 将 VuePress 安装为本地以来  
  `yarn add -D vuepress`
4. 创建文档
  - 创建文档目录 `mkdir docs`
  - 创建文档 `README.md` 文件
5. 编辑 package.json 的 scripts
  ```json
  {
    "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
    }
  }
  ```
6. 本地启动服务器
  `yarn docs:dev`

## 目录结构

### 默认的页面路由

- 把 docs 目录作为 targetDir
- 文件的相对路径都是相对于 docs

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json
```

## 基本配置

- 配置文件 `/docs/.vuepress/config.js`
  - 配置文件类型 `config.js` `config.yml` `config.toml`
- 主题配置
  - 网站的布局和交互细节
  - vupress 自带一个默认的主题（vue 文档主题）
    - 可以自定义
      - 首页 homepage
      - 导航栏 navbar
      - 侧边栏 sidebar
- 应用级别配置
