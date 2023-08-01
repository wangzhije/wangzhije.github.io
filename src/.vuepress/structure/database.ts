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
];
