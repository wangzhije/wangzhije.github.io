import { navbar } from "vuepress-theme-hope";
import html from "../structure/html";
import css from "../structure/css";
import javascript from "../structure/javascript";

import browser from "../structure/browser";
import nodejs from "../structure/nodejs";
import java from "../structure/java";

import database from "../structure/database";

export const zhNavbar = navbar([
  {
    text: "HTML",
    icon: "html",
    prefix: "/frontend/HTML/",
    children: [...html],
  },
  {
    text: "CSS",
    icon: "css",
    prefix: "/frontend/CSS/",
    children: [...css],
  },
  {
    text: "JavaScript",
    icon: "javascript",
    prefix: "/frontend/JavaScript/",
    children: [...javascript],
  },
  {
    text: "浏览器",
    icon: "chrome",
    prefix: "/frontend/Browser/",
    children: [...browser],
  },
  {
    text: "Node.js",
    icon: "nodeJS",
    prefix: "/Node/",
    children: [...nodejs],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "/Database/",
    children: [...java],
  },
  {
    text: "数据库",
    icon: "storage",
    prefix: "/Database/",
    children: [...database],
  },
  {
    text: "Linux",
    icon: "linux",
    prefix: "/Database/",
    children: [...database],
  },
  {
    text: "C/C++",
    icon: "language",
    prefix: "/Database/",
    children: [...database],
  },
]);
