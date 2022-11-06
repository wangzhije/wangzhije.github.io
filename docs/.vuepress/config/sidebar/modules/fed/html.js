module.exports = {
  title: "HTML",
  sidebarDepth: 3,
  collapsable: true,
  children: [
    "HTML/start.md",
    {
      title: "文档结构",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        "HTML/element/DTD",
        "HTML/element/link",
        "HTML/element/script",
        "HTML/element/iframe.md",
      ],
    },
    "HTML/metaAll.md",
    "HTML/linkAll.md",
    "HTML/",
  ],
};
