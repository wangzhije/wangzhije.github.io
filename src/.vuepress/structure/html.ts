export default [
  { text: "基本介绍", link: "intro" },
  { text: "历史发展", link: "history" },
  { text: "文档结构", link: "structure" },
  { text: "网站信息架构", link: "website" },
  {
    text: "标签元素",
    prefix: "Element/",
    children: [
      { text: "DTC", link: "DTD" },
      { text: "link", link: "link" },
      { text: "a", link: "a" },
      { text: "img", link: "img" },
      { text: "meta 常用总结", link: "metaAll" },
      { text: "link 常用总结", link: "linkAll" },
    ],
  },
  {
    text: "应用示例",
    prefix: "application/",
    children: [{ text: "网站换肤", link: "style" }],
  },
  {
    text: "其他",
    children: [{ text: "微格式", link: "microformat" }],
  },
];
