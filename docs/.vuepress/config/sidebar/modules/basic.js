module.exports = [
  {
    title: "Linux",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      'Linux/',
      {
        title: "环境准备",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "Linux/env/vmware",
          "Linux/env/cloudserver",
          "Linux/env/connection",
        ],
      },
    ],
  },
  {
    title: "计算机网络",
    sidebarDepth: 3,
    collapsable: true,
    children: [
    ],
  },
  {
    title: "数据结构和算法",
    sidebarDepth: 3,
    collapsable: true,
    children: [
    ],
  },
  {
    title: "数据库",
    sidebarDepth: 3,
    collapsable: true,
    children: [
      'Database/start.md',
      {
        title: "数据库设计",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "Database/design/relation",
        ],
      },
      {
        title: "MySQL",
        sidebarDepth: 2,
        collapsable: true,
        children: [
          "Database/mysql/start",
          "Database/mysql/windows",
        ],
      },
      "Database/",
    ],
  },
];
