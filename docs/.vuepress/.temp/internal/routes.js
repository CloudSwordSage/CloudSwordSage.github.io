export const redirects = JSON.parse("{\"/%E6%B5%8B%E8%AF%95%E5%88%86%E7%B1%BB/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6.html\":\"/article/fe7qhm08/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/fe7qhm08/", { loader: () => import(/* webpackChunkName: "article_fe7qhm08_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/fe7qhm08/index.html.js"), meta: {"title":"测试文件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
