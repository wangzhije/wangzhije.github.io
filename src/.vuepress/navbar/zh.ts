import { navbar } from "vuepress-theme-hope";

import databaseStructure from "../structure/database";

export const zhNavbar = navbar([
  {
    text: "常用网站",
    icon: "list",
    prefix: "/",
    link: "websitelist",
  },
  {
    text: "前端",
    icon: "computer",
    prefix: "/frontend/",
    children: [
      {
        text: "基础",
        children: [
          { text: "HTML", icon: "html", link: "HTML/" },
          { text: "CSS", icon: "css", link: "CSS/" },
          { text: "JavaScript", icon: "javascript", link: "JavaScript/" },
        ],
      },
      {
        text: "ES6+",
        children: [
          { text: "ES6+", icon: "es6", link: "JavaScript/" },
          { text: "Babel", icon: "babel", link: "JavaScript/" },
          { text: "模块化规范", icon: "module", link: "JavaScript/" },
        ],
      },
      {
        text: "网络",
        children: [
          { text: "Ajax", icon: "ajax", link: "JavaScript/" },
          { text: "Axios/Fetch", icon: "ajax", link: "JavaScript/" },
        ],
      },
      {
        text: "框架",
        children: [
          {
            text: "React 生态",
            icon: "react",
            link: "JavaScript/",
          },
          {
            text: "Vue 生态",
            icon: "vue",
            link: "JavaScript/",
          },
          {
            text: "Webpack 生态",
            icon: "webpack",
            link: "JavaScript/",
          },
          {
            text: "Vite 生态",
            icon: "vue",
            link: "JavaScript/",
          },
        ],
      },
      {
        text: "进阶",
        children: [
          { text: "JS 数据结构与算法", icon: "calculate", link: "JavaScript/" },
          { text: "JS 设计模式", icon: "structure", link: "JavaScript/" },
          { text: "JS 函数式编程", icon: "function", link: "JavaScript/" },
          { text: "TypeScript", icon: "typescript", link: "JavaScript/" },
        ],
      },
    ],
  },
  {
    text: "浏览器",
    icon: "chrome",
    prefix: "/Node/",
    children: [],
  },
  {
    text: "Node.js",
    icon: "nodeJS",
    prefix: "/Node/",
    children: [
      {
        text: "模块化",
        icon: "module",
        link: "JavaScript/",
      },
      {
        text: "内置模块",
        children: [
          // { text: "内置模块", icon: "module", link: "JavaScript/" },
        ],
      },
      {
        text: "工具链",
        children: [],
      },
      {
        text: "Web 开发",
        children: [],
      },
    ],
  },
  {
    text: "工程化",
    icon: "engine",
    prefix: "/Node/",
    children: [
      {
        text: "VSCode 开发规范",
        icon: "vscode",
        link: "Node/",
      },
      {
        text: "Eslint 代码规范",
        icon: "eslint",
        link: "Node/",
      },
      {
        text: "Git 代码规范",
        icon: "git",
        link: "Node/",
      },
    ],
  },
  {
    text: "后端",
    icon: "api",
    prefix: "/backend/",
    children: [
      // { text: "Node.js", icon: "nodeJS", link: "Node/" }
      { text: "Java", icon: "java", link: "Java/" },
      // { text: "Python", icon: "python", link: "Python/" },
    ],
  },
  {
    text: "数据库",
    icon: "storage",
    prefix: "/Database/",
    children: [...databaseStructure],
  },
  {
    text: "计算机网络",
    icon: "network",
    prefix: "/Node/",
    children: [],
  },
  {
    text: "数据结构与算法",
    icon: "storage",
    prefix: "/Node/",
    children: [],
  },
  {
    text: "操作系统",
    icon: "OS",
    prefix: "/Node/",
    children: [],
  },
]);
