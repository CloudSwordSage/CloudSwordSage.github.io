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
      description: "热爱生活",
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
