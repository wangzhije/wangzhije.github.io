import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPDemoBasic from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'

import '/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
  },
  setup() {
    
  }
})
