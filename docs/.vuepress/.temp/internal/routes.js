export const redirects = JSON.parse("{\"/%E7%AE%97%E6%B3%95/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.html\":\"/article/5072dy3i/\",\"/%E7%AE%97%E6%B3%95/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.html\":\"/article/jbadeaso/\",\"/%E7%AE%97%E6%B3%95/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.html\":\"/article/4we28dl1/\",\"/%E7%AE%97%E6%B3%95/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F.html\":\"/article/fslzy69j/\",\"/%E7%AE%97%E6%B3%95/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html\":\"/article/su2chqg1/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/5072dy3i/", { loader: () => import(/* webpackChunkName: "article_5072dy3i_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/5072dy3i/index.html.js"), meta: {"title":"冒泡排序"} }],
  ["/article/jbadeaso/", { loader: () => import(/* webpackChunkName: "article_jbadeaso_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/jbadeaso/index.html.js"), meta: {"title":"插入排序"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/article/4we28dl1/", { loader: () => import(/* webpackChunkName: "article_4we28dl1_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/4we28dl1/index.html.js"), meta: {"title":"选择排序"} }],
  ["/article/fslzy69j/", { loader: () => import(/* webpackChunkName: "article_fslzy69j_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/fslzy69j/index.html.js"), meta: {"title":"归并排序"} }],
  ["/article/su2chqg1/", { loader: () => import(/* webpackChunkName: "article_su2chqg1_index.html" */"D:/UserData/mrcchenfeng.github.io/docs/.vuepress/.temp/pages/article/su2chqg1/index.html.js"), meta: {"title":"快速排序"} }],
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
