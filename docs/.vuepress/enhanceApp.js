/*
 * @Time    : 2025/6/9 22:54:13
 * @Author  : 墨烟行(GitHub UserName: CloudSwordSage)
 * @File    : enhanceApp.js
 * @Desc    :
 */

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (typeof _hmt != "undefined" && to.path) {
      _hmt.push(["_trackPageview", to.fullPath]);
    }
    next();
  });
};
