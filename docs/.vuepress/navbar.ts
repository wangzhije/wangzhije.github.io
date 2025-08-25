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
    text: "操作系统",
    icon: "ix:operating-system",
    items: [
      {
        text: "Linux",
        link: "/os/linux/start/",
        activeMatch: "^/os/linux/",
        icon: "mingcute:linux-fill",
      },
      {
        text: "阿里云",
        link: "/os/aliyun/start/",
        activeMatch: "^/os/aliyun/",
        icon: "ant-design:aliyun-outlined",
      },
    ],
  },
  // {
  //   text: "计算机网络",
  //   icon: "picon:network",
  //   items: [
  //     {
  //       text: "从URL到网页",
  //       link: "/network/b5tbbr5b/",
  //       activeMatch: "^/network/",
  //       icon: "mdi:network-pos",
  //     },
  //     {
  //       text: "Socket",
  //       link: "/network/3gj9ggzn/",
  //       activeMatch: "^/network/",
  //       icon: "mdi:network-pos",
  //     },
  //   ],
  // },
  {
    text: "开发工具",
    icon: "clarity:tools-solid",
    items: [
      {
        text: "Git",
        link: "/tools/git/start/",
        activeMatch: "^/tools/git/",
        icon: "teenyicons:git-solid",
      },
      {
        text: "Github",
        link: "/tools/github/start/",
        activeMatch: "^/tools/github/",
        icon: "teenyicons:git-solid",
      },
      {
        text: "VSCode",
        link: "/tools/vscode/start/",
        activeMatch: "^/tools/vscode/",
        icon: "file-icons:vscode",
      },
      {
        text: "IDEA",
        link: "/tools/idea/start/",
        activeMatch: "^/tools/vscode/",
        icon: "simple-icons:intellijidea",
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
      {
        text: "Vue2",
        link: "/frontend/vue2/start/",
        activeMatch: "^/frontend/vue2/",
        icon: "teenyicons:vue-solid",
      },
      {
        text: "Vue3",
        link: "/frontend/vue3/start/",
        activeMatch: "^/frontend/vue3/",
        icon: "teenyicons:vue-solid",
      },
      {
        text: "React",
        link: "/frontend/react/start/",
        activeMatch: "^/frontend/react/",
        icon: "mdi:react",
      },
      {
        text: "Electron",
        link: "/frontend/electron/start/",
        activeMatch: "^/frontend/electron/",
        icon: "file-icons:electron",
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
  //   text: "AI",
  //   icon: "tabler:ai",
  //   items: [
  //     {
  //       text: "GPT",
  //       link: "/ai/gpt/",
  //       activeMatch: "^/ai/",
  //       // icon: "dashicons:html",
  //     },
  //   ],
  // },
  // {
  //   text: "专题",
  //   icon: "material-symbols:topic",
  //   items: [
  //     {
  //       text: "设计模式",
  //       link: "/frontend/javascript/620w0rmd/",
  //       // activeMatch: "^/frontend/javascript/",
  //       icon: "streamline-freehand:design-process-draw-pen",
  //     },
  //   ],
  // },
];

export default defineNavbarConfig(navbar);
