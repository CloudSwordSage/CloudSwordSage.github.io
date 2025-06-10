import comp from "D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"tintPlate\":{\"light\":200,\"dark\":150},\"hero\":{\"name\":\"墨烟行\",\"text\":\"一个简约的，功能丰富的 vuepress 文档&博客 主题\",\"actions\":[{\"theme\":\"brand\",\"text\":\"我的博客\",\"link\":\"/blog/\"},{\"theme\":\"alt\",\"text\":\"Github\",\"link\":\"https://github.com/mrcchenfeng\"}]}}],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.31,\"words\":92},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
