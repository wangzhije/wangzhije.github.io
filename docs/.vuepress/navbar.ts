/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

const navbar = [
  { text: "首页", link: "/", icon: "material-symbols:home" },
  // {
  //   text: "博客",
  //   link: "/blog/",
  //   activeMatch: "^/blog",
  //   icon: "material-symbols:menu-book",
  // },
  {
    text: "计算机网络",
    icon: "picon:network",
    items: [
      {
        text: "从URL到网页",
        link: "/network/b5tbbr5b/",
        activeMatch: "^/network/",
        icon: "mdi:network-pos",
      },
    ],
  },
  {
    text: "前端",
    icon: "bi:credit-card-2-front-fill",
    items: [
      {
        text: "HTML",
        link: "/frontend/HTML/start/",
        activeMatch: "^/frontend/HTML/",
        icon: "dashicons:html",
      },
      {
        text: "CSS",
        link: "/frontend/CSS/start/",
        activeMatch: "^/frontend/CSS/",
        icon: "streamline-freehand:programming-language-browser-css",
      },
      {
        text: "JavaScript",
        link: "/frontend/javascript/start/",
        activeMatch: "^/frontend/javascript/",
        icon: "ri:javascript-fill",
      },
      {
        text: "浏览器",
        link: "/frontend/browser/start/",
        activeMatch: "^/frontend/browser/",
        icon: "streamline-ultimate:browser-com-bold",
      },
      {
        text: "TypeScript",
        link: "/frontend/typescript/start/",
        activeMatch: "^/frontend/typescript/",
        icon: "bi:typescript",
      },
    ],
  },
  {
    text: "Node.js",
    icon: "lineicons:nodejs-alt",
    items: [
      {
        text: "基础",
        link: "/nodejs/base/intro/",
        activeMatch: "^/nodejs/base/",
        // icon: "dashicons:html",
      },
      {
        text: "包管理",
        link: "/nodejs/package/start/",
        activeMatch: "^/nodejs/package/",
        // icon: "dashicons:html",
      },
      // {
      //   text: "Express",
      //   link: "/nodejs/HTML/start/",
      //   activeMatch: "^/frontend/HTML/",
      //   icon: "dashicons:html",
      // },
      {
        text: "Koa2",
        link: "/nodejs/koa2/start/",
        activeMatch: "^/nodejs/koa2/",
        // icon: "dashicons:html",
      },
      // {
      //   text: "Nuxtjs",
      //   link: "/nodejs/HTML/start/",
      //   activeMatch: "^/frontend/HTML/",
      //   icon: "dashicons:html",
      // },
    ],
  },
  // {
  //   text: "更多",
  //   icon: "mingcute:more-3-fill",
  //   items: [
  //     {
  //       text: "书籍推荐",
  //       link: "/ebooks/",
  //       icon: "material-symbols:recommend",
  //       activeMatch: "^/ebooks/",
  //     },
  //     {
  //       text: "站点导航",
  //       link: "/sites-collect/",
  //       icon: "mdi:roadmap",
  //       activeMatch: "^/sites-collect",
  //     },
  //     {
  //       text: "AI 模型导航",
  //       link: "/ai/",
  //       icon: "eos-icons:ai",
  //       activeMatch: "^/ai/",
  //     },
  //     {
  //       text: "Command-Line Interface",
  //       link: "/cli/",
  //       icon: "grommet-icons:cli",
  //       activeMatch: "^/cli",
  //     },
  //   ],
  // },
];

export default defineNavbarConfig(navbar);
