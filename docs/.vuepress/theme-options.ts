import { plumeTheme } from "vuepress-theme-plume";
import navbar from "./navbar.ts";
import notes from "./notes.ts";

export default plumeTheme({
  logo: "./images/logo_nobg.png",
  // docsDir: "src",
  navbar,
  notes,
  outline: "deep",

  /* 博客文章页面链接前缀 */
  // article: "/frontend",
  blog: {
    link: "/notes",
    include: ["**/*.md"],
    exclude: [],
  },

  profile: {
    name: "王志杰",
    avatar: "./images/avatar.jpeg",
    description: "冰冻三尺，非一日之寒···",
    circle: true,
    location: "北京，中国",
    // organization: 'xxx公司',
    layout: "right",
  },

  social: [
    { icon: "github", link: "https://github.com/wangzhije" },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M0 3.121V15h16V3.121l-8 8z"/><path fill="currentColor" d="M16 1H0l8 8z"/></svg>',
        name: "email",
      },
      link: "mailto:1662285571@qq.com",
    },
    // {
    //   icon: {
    //     svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm10.206 7.777q.12 0 .241.004c-.653-1.998-2.926-3.473-5.629-3.473C6.605 5.308 4 7.392 4 9.963c0 1.467.848 2.775 2.174 3.629L5.94 15.78l2.562-1.284q.636.12 1.317.12h.02q-.152-.534-.153-1.118c0-2.727 2.602-4.723 5.521-4.723Zm-7.335.357a.727.727 0 1 0 0-1.455a.727.727 0 0 0 0 1.455m4.597-.728a.727.727 0 1 1-1.454 0a.727.727 0 0 1 1.454 0m2.738 9.088c-2.2 0-4.053-1.235-4.617-2.917a3.4 3.4 0 0 1-.177-1.078c0-2.207 2.146-3.995 4.794-3.995q.203 0 .404.014c2.459.17 4.39 1.888 4.39 3.98c0 1.184-.617 2.247-1.598 2.978l.4 2.216l-2.797-1.254q-.39.056-.799.056m-1.577-4.725a.546.546 0 1 0 0-1.09a.546.546 0 0 0 0 1.09m3.703-.545a.545.545 0 1 1-1.09 0a.545.545 0 0 1 1.09 0" clip-rule="evenodd"/></svg>',
    //     name: "wechat",
    //   },
    //   link: "",
    // },
  ],
  navbarSocialInclude: ["github"],
  // navbarSocialInclude: ["github", "email", "wechat"],
  editLinkText: "在 GitHub 上编辑此页",
  /**
   * 编译缓存，加快编译速度
   * @see https://theme-plume.vuejs.press/config/basic/#cache
   */
  cache: "filesystem",
  footer: { copyright: "Copyright © wangzhijie" },
  //   copyright: {
  //       license: {
  //         name: 'MIT', // 许可证名称
  //         url: 'https://your-license-url' // 许可证地址
  //       },
  //     author: {
  //       name: "wangzhijie", // 版权所有者名称
  //       url: "https://github.com/wangzhije", // 版权所有者地址
  //     },
  //       creation: 'reprint' // 创作方式
  //   },

  /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
  // hostname: "http://wangzhijie.top",

  /* 文档仓库配置，用于 editLink */
  // docsRepo: 'https://github.com/wangzhije/wangzhije.github.io/',
  // docsDir: "docs",
  // docsBranch: '',

  /* 页内信息 */
  // editLink: true,
  // lastUpdated: true,
  // contributors: true,
  // changelog: false,

  /**
   * 博客
   * @see https://theme-plume.vuejs.press/config/basic/#blog
   */
  // blog: false, // 禁用博客
  // blog: {
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
  //   archives: true, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
  // },

  /**
   * 为 markdown 文件自动添加 frontmatter 配置
   * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
   */
  // autoFrontmatter: {
  //   permalink: true,  // 是否生成永久链接
  //   createTime: true, // 是否生成创建时间
  //   title: true,      // 是否生成标题
  // },

  /* 本地搜索, 默认启用 */
  search: { provider: "local" },
  // search: false,

  /**
   * Algolia DocSearch
   * 启用此搜索需要将 本地搜索 search 设置为 false
   * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
   */
  // search: {
  //   provider: 'algolia',
  //   appId: '',
  //   apiKey: '',
  //   indexName: '',
  // },

  /**
   * Shiki 代码高亮
   * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
   */
  codeHighlighter: {
    twoslash: true, // 启用 twoslash
    whitespace: true, // 启用 空格/Tab 高亮
    lineNumbers: true, // 启用行号
  },

  /* 文章字数统计、阅读时间，设置为 false 则禁用 */
  // readingTime: true,

  /**
   * markdown
   * @see https://theme-plume.vuejs.press/config/markdown/
   */
  markdown: {
    // abbr: true, // 启用 abbr 语法  *[label]: content
    // annotation: true, // 启用 annotation 语法  [+label]: content
    // pdf: true, // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    // caniuse: true, // 启用 caniuse 语法  @[caniuse](feature_name)
    // plot: true, // 启用隐秘文本语法 !!xxxx!!
    // bilibili: true, // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    // youtube: true, // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    // // artPlayer: true, // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    // audioReader: true, // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    // icon: { provider: "iconify" }, // 启用内置图标语法  ::icon-name::
    // table: true, // 启用表格增强容器语法 ::: table
    codepen: true, // 启用嵌入 codepen 语法 @[codepen](user/slash)
    // replit: true, // 启用嵌入 replit 语法 @[replit](user/repl-name)
    // codeSandbox: true, // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    // jsfiddle: true, // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    // npmTo: true, // 启用 npm-to 容器  ::: npm-to
    demo: true, // 启用 demo 容器  ::: demo
    // repl: {
    //   // 启用 代码演示容器
    //   go: true, // ::: go-repl
    //   rust: true, // ::: rust-repl
    //   kotlin: true, // ::: kotlin-repl
    //   python: true, // ::: python-repl
    // },
    // math: {
    //   // 启用数学公式
    //   type: "katex",
    // },
    // chartjs: true, // 启用 chart.js
    // echarts: true, // 启用 ECharts
    // mermaid: true, // 启用 mermaid
    // flowchart: true, // 启用 flowchart
    // image: {
    //   figure: true, // 启用 figure
    //   lazyload: true, // 启用图片懒加载
    //   mark: true, // 启用图片标记
    //   size: true, // 启用图片大小
    // },
    // include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    // imageSize: "local", // 启用 自动填充 图片宽高属性，避免页面抖动
  },

  /**
   * 水印
   * @see https://theme-plume.vuejs.press/guide/features/watermark/
   */
  watermark: true,

  /**
   * 评论 comments
   * @see https://theme-plume.vuejs.press/guide/features/comments/
   */
  // comment: {
  //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
  //   comment: true,
  //   repo: '',
  //   repoId: '',
  //   category: '',
  //   categoryId: '',
  //   mapping: 'pathname',
  //   reactionsEnabled: true,
  //   inputPosition: 'top',
  // },

  /**
   * 资源链接替换
   * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
   */
  // replaceAssets: 'https://cdn.example.com',

  /**
   * 加密功能
   * @see https://theme-plume.vuejs.press/guide/features/encryption/
   */
  // encrypt: {},
});
