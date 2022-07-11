module.exports = [
  '',
  {
    title: "HTML",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      'HTML/start.md',
      {
        title: "文档结构",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "HTML/element/DTD",
          "HTML/element/link",
          "HTML/element/script",
        ],
      },
      "HTML/metaAll.md",
      "HTML/linkAll.md",
      "HTML/",
    ],
  },
  {
    title: "CSS",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      {
        title: "基础",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "CSS3+",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "特效",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "CSS/animation/book.md",
          // 'CSS/animation/book1.html',
        ],
      },
    ],
  },
  {
    title: "JavaScript",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      "JavaScript/start.md",
      {
        title: "ECMAScript",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "JavaScript/ecmascript/syntax.md",
          "JavaScript/ecmascript/object.md",
          "JavaScript/ecmascript/function.md",
          "JavaScript/ecmascript/oop.md",
        ],
      },
      {
        title: "BOM",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "DOM",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          // 'JavaScript/DOM/event'
        ],
      },
      {
        title: "ES6 +",
        sidebarDepth: 1,
        collapsable: true,
        children: [
          // 'syntax',
          // 'oop',
          // 'ES6'
          'JavaScript/ecmascript/es2022'
        ],
      },
      {
        title: "模块化",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "数据结构与算法",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "设计模式",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "函数式编程",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      "JavaScript/comment.md",
      "JavaScript/",
    ],
  },
  {
    title: "浏览器",
    sidebarDepth: 2,
    collapsable: true,
    children: [
      'Browser/'
    ],
  },
  {
    title: "Webpack",
    sidebarDepth: 2,
    collapsable: true,
    children: [
      'Webpack/'
    ],
  },
  {
    title: "Vue",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      {
        title: "框架使用",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "Vue",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "VueRouter",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "Vuex",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "VueLoader",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "VueCLI",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "VuePress",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/vuePress/start.md"],
      },
    ],
  },
  {
    title: "React",
    sidebarDepth: 2,
    collapsable: true,
    children: [
      'React/'
    ],
  },
  {
    title: "Node.js",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      {
        title: "基础",
        sidebarDepth: 2,
        collapsable: true,
        children: [],
      },
      {
        title: "包管理",
        sidebarDepth: 1,
        collapsable: true,
        children: [
          "Node/package/",
          "Node/package/json.md",
          "Node/package/cnpm.md",
          "Node/package/yarn.md",
          "Node/package/pnpm.md",
          "Node/package/nodeModules.md",
        ],
      },
    ],
  },
  {
    title: "前端工程化",
    sidebarDepth: 2,
    collapsable: true,
    children: [
      "Project/workflow.md",
    ],
  },
  {
    title: "前端性能优化",
    sidebarDepth: 2,
    collapsable: true,
    children: [
    ]
  },
];
