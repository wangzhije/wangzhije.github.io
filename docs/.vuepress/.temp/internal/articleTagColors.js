import './articleTagColors.css'
export const articleTagColors = {"计算机网络":"zubl","浏览器":"jx2n","webpack":"qyub","JavaScript":"8b7r","模块化":"h9ul","Node.js":"tegj","cnpm":"ozog","Koa2":"tegj","CSS":"tegj","实践":"8b7r","动画":"zxlo","设计模式":"zubl","ES6+":"ilg4","算法":"89lv","HTML":"tegj"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
