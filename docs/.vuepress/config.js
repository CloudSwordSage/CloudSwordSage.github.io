import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { revealJsPlugin } from "@vuepress/plugin-revealjs";
import { searchPlugin } from "@vuepress/plugin-search";
import mediumZoomPlugin from "vuepress-plugin-medium-zoom";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { readingTimePlugin } from "@vuepress/plugin-reading-time";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { commentPlugin } from "@vuepress/plugin-comment";
import { baiduAnalyticsPlugin } from "@vuepress/plugin-baidu-analytics";

export default defineUserConfig({
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
      },
    },
  }),
  plugins: [
    markdownMathPlugin({
      provider: "katex",
      katexOptions: {
        throwOnError: false,
        strict: "ignore",
      },
    }),

    revealJsPlugin({
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      config: {
        transition: "slide",
        backgroundTransition: "fade",
      },
    }),

    searchPlugin({
      maxSuggestions: 10,
      isFuzzySearch: true,
      isTitleSearchable: true,
      isContentSearchable: true,
    }),

    mediumZoomPlugin({
      selector: "img",
      options: {
        background: "rgba(0, 0, 0, 0.8)",
      },
    }),

    backToTopPlugin(),

    readingTimePlugin(),

    copyCodePlugin({
      showInMobile: true,
      duration: 2000,
    }),

    sitemapPlugin({
      hostname: "https://www.cloudswordsage.top/",
    }),

    prismjsPlugin({
      collapsedLines: 12,
      preloadLanguages: [
        "markdown",
        "js",
        "ts",
        "html",
        "css",
        "java",
        "python",
      ],
    }),

    commentPlugin({
      provider: "Giscus",
      repo: "CloudSwordSage/comments",
      repoId: "R_kgDOO4pqVw",
      category: "General",
      categoryId: "DIC_kwDOO4pqV84CrPTA",
      mapping: "pathname",
      reactionsEnabled: true,
      emitMetadata: true,
      inputPosition: "bottom",
      lang: "zh-CN",
    }),

    baiduAnalyticsPlugin({
      id: "727d308aeb06a324aa7111f7276a320b",
    }),
  ],
  bundler: viteBundler(),
});
