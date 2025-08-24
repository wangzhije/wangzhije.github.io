import comp from "/Users/wangzhijie/Desktop/myspace/wangzhije.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"王志杰\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"pageClass\":\"home-page\",\"title\":\"王志杰\",\"navbar\":false,\"config\":[{\"type\":\"Landing\",\"name\":\"王志杰\",\"tagline\":\"路漫漫其修远兮，吾将上下而求索···'\",\"avatar\":\"./images/avatar.jpeg\",\"nav\":[{\"text\":\"前端\",\"link\":\"/frontend/start/\",\"icon\":\"bi:credit-card-2-front-fill\"},{\"text\":\"AI\",\"link\":\"/ai/gpt/\",\"icon\":\"tabler:ai\"},{\"text\":\"站点导航\",\"link\":\"/sites-map/\",\"icon\":\"mdi:roadmap\"}]}]},\"readingTime\":{\"minutes\":0.98,\"words\":295},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
