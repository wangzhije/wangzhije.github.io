/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs);

// custom
import { path } from "vuepress/utils";
import theme from "./theme-options";

export default defineUserConfig({
  // vuepress config
  // base: "/blog/",
  dest: "./blog",
  lang: "zh-CN",
  theme,
  locales: {
    "/": {
      title: "王志杰",
      description: "个人知识库网站",
    },
  },
  define: {
    __VUEPRESS_GAODE_MAP_KEY__: process.env.VUEPRESS_GAODE_MAP_KEY,
    // debug hydration mismatch
    // __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
  alias: {
    "~theme": resolve("./theme"),
  },
  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
  plugins: [],
});
