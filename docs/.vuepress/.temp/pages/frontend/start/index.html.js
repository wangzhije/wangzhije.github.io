import comp from "/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/docs/.vuepress/.temp/pages/frontend/start/index.html.vue"
const data = JSON.parse("{\"path\":\"/frontend/start/\",\"title\":\"概览\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"概览\",\"createTime\":\"2025/08/14 23:23:11\",\"permalink\":\"/frontend/start/\",\"tags\":null},\"readingTime\":{\"minutes\":0.21,\"words\":63},\"git\":{},\"filePathRelative\":\"notes/1.frontend/README.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
