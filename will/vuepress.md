# VuePress

过程管理

- 学习记录
- 知识体系

## VuePress 搭建

创建工作目录

`mkdir vuepress-starter && cd vuepress-starter`

初始化项目

`npm init -y`

安装 vuepress

`npm install -D vuepress`

创建文档

`mkdir docs && echo '# Hello VuePress' > docs/README.md`

package.json 添加 scripts 命令

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

运行本地项目，看看效果

`npm run docs:dev`

## 基本了解

### 目录结构

### 路由

### 静态资源

## 配置

```
目录结构
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

### 主题

#### 文档主题

#### 博客主题

安装对应主题

`npm install @vuepress/theme-blog -D`

配置主题

```js
// .vuepress/config.js
module.exports = {
  theme: "@vuepress/blog",
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
  },
};
```
