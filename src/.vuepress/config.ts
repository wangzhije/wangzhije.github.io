import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  title: "路漫",
  description: "",

  base: "/blog/",
  // dest: './dist',

  lang: "zh-CN",
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "博客演示",
  //     description: "vuepress-theme-hope 的博客演示",
  //   },
  //   "/en/": {
  //     lang: "en-US",
  //     title: "Blog Demo",
  //     description: "A blog demo for vuepress-theme-hope",
  //   },
  // },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});