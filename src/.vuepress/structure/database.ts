export default [
  { text: "基本介绍", icon: "info", link: "intro" },
  { text: "历史发展", icon: "time", link: "history" },
  { text: "SQL", icon: "notes", link: "center" },
  {
    text: "MySQL",
    icon: "notes",
    prefix: "mysql/",
    children: [
      { text: "MySQL 介绍", link: "start" },
      { text: "本地环境搭建", link: "windows" },
    ],
  },
  {
    text: "数据库设计",
    icon: "notes",
    prefix: "design/",
    children: [{ text: "关系型数据库设计", link: "relation" }],
  },
  // {
  //   text: "标签元素",
  //   icon: "emmet",
  //   prefix: "Element/",
  //   children: [
  //     { text: "DTC", link: "DTD" },
  //     { text: "link", link: "link" },
  //     { text: "a", link: "a" },
  //     { text: "img", link: "img" },
  //     { text: "meta 常用总结", link: "metaAll" },
  //     { text: "link 常用总结", link: "linkAll" },
  //   ],
  // },
  // {
  //   text: "应用示例",
  //   icon: "android",
  //   prefix: "application/",
  //   children: [{ text: "网站换肤", link: "style" }],
  // },
  // {
  //   text: "其他",
  //   icon: "discover",
  //   children: [{ text: "微格式", link: "microformat" }],
  // },
];
