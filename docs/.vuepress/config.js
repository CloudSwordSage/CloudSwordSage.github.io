import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "墨烟行",
      description:
        "“我们有两个方法来进行软件设计：一个是让其足够的简单以至于让BUG无法藏身；另一个就是让其足够的复杂，让人找不到BUG。前者更难一些” — C.A.R. Hoare",
    },
  },
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  theme: plumeTheme({
    plugins: {
      markdownEnhance: {
        flowchart: true,
        playground: true,
        mathjax: true,
        revealJs: true,
      },
    },
  }),
  bundler: viteBundler(),
});
