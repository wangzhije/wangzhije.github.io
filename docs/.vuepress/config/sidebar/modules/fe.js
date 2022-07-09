module.exports = [
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
          "HTML/Element/DTD",
          "HTML/Element/link",
          "HTML/Element/script",
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
          "JavaScript/ECMAScript/syntax.md",
          "JavaScript/ECMAScript/object.md",
          "JavaScript/ECMAScript/function.md",
          "JavaScript/ECMAScript/oop.md",
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
        title: "ES6",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          // 'syntax',
          // 'oop',
          // 'ES6'
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
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "Vue",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "VueRouter",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "Vuex",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "VueLoader",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "VueCLI",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
      },
      {
        title: "VuePress",
        sidebarDepth: 2,
        collapsable: true,
        children: ["Vue/VuePress/start.md"],
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
          "Node/Package/",
          "Node/Package/json.md",
          "Node/Package/cnpm.md",
          "Node/Package/yarn.md",
          "Node/Package/pnpm.md",
        ],
      },
    ],
  },
];
