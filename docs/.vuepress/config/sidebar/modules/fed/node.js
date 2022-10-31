module.exports = {
  title: "Node.js",
  sidebarDepth: 3,
  collapsable: true,
  children: [
    {
      title: "基础",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        "Node/basic/intro.md",
        "Node/basic/version.md",
        "Node/basic/start.md",
      ],
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
    {
      title: "Koa2",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        "Node/koa2/start.md",
      ],
    },
  ],
};
