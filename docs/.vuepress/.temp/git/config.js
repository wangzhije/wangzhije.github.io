import { GitContributors } from "/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
