import comp from "/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/docs/.vuepress/.temp/pages/notes/Webpack/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/Webpack/\",\"title\":\"README\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"README\"},\"readingTime\":{\"minutes\":0.02,\"words\":6},\"git\":{},\"filePathRelative\":\"notes/Webpack/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10000,\"name\":\"notes\"},{\"id\":\"78c4fc\",\"sort\":10001,\"name\":\"Webpack\"}]}")
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
