import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "前端",
    icon: "page",
    prefix: "/frontend/",
    children: [
      {
        text: "HTML",
        icon: "html",
        prefix: "HTML/",
        children: [
          { text: "介绍", icon: "info", link: "start" },
          { text: "历史发展", icon: "time", link: "start" },
          {
            text: "DTD",
            icon: "emmet",
            link: "DTD",
          },
          { text: "style 标签", icon: "style", link: "application/style" },
          { text: "meta 常用总结", icon: "list", link: "metaAll" },
          { text: "link 常用总结", icon: "list", link: "linkAll" },
        ],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "CSS/",
        children: [],
      },
      {
        text: "JavaScript",
        icon: "javascript",
        prefix: "JavaScript/",
        children: [],
      },
    ],
  },
  {
    text: "Node.js",
    icon: "nodeJS",
    prefix: "/Node/",
    children: [],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "/Java/",
    children: [],
  },
  // {
  //   text: "JavaScript",
  //   icon: "edit",
  //   prefix: "/frontend/JavaScript/",
  //   children: [
  //     // "",
  //     "start",
  //     {
  //       text: "ECMAScript",
  //       icon: "edit",
  //       prefix: "ECMAScript/",
  //       children: [
  //         { text: "介绍", icon: "edit", link: "start" },
  //         { text: "语法", icon: "edit", link: "syntax" },
  //         { text: "对象", icon: "edit", link: "object" },
  //         { text: "函数", icon: "edit", link: "function" },
  //         { text: "面向对象", icon: "edit", link: "oop" },
  //       ],
  //     },
  //     {
  //       text: "DOM",
  //       icon: "edit",
  //       prefix: "dom/",
  //       children: [
  //       ],
  //     },
  //     {
  //       text: "JS数据结构与算法",
  //       icon: "edit",
  //       prefix: "Algorithm/",
  //       children: [
  //       ],
  //     },
  //     {
  //       text: "JS设计模式",
  //       icon: "edit",
  //       prefix: "designPatterns/",
  //       children: [
  //       ],
  //     },
  //     {
  //       text: "JS函数式编程",
  //       icon: "edit",
  //       prefix: "FuntionalProgramming/",
  //       children: [
  //       ],
  //     },
  //   ],
  // },
]);
