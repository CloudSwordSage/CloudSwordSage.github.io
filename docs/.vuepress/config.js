import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { revealJsPlugin } from "@vuepress/plugin-revealjs";
import mediumZoomPlugin from "vuepress-plugin-medium-zoom";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";

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
  head: [
    ["link", { rel: "icon", href: "/images/logo.jpg" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?727d308aeb06a324aa7111f7276a320b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  theme: plumeTheme({
    markdown: {
      mermaid: true,
      chartjs: true,
      echarts: true,
      flowchart: true,
      markmap: true,
      plantuml: true,
      timeline: true,
      plot: true,
      codeTree: true,
      field: true,
      codeTabs: {
        icon: true,
      },
      math: {
        type: "katex",
      },
    },
    copyCode: {},
    codeHighlighter: {
      lineNumbers: true,
      collapsedLines: true,
    },
    readingTime: {
      wordPerMinute: 300,
    },
    plugins: {
      markdownEnhance: {
        flowchart: true,
        playground: true,
      },
    },
    comment: {
      provider: "Giscus",
      comment: true,
      repo: "CloudSwordSage/comments",
      repoId: "R_kgDOO4pqVw",
      category: "General",
      categoryId: "DIC_kwDOO4pqV84CrPTA",
      mapping: "pathname",
      reactionsEnabled: true,
      emitMetadata: true,
      inputPosition: "bottom",
      lang: "zh-CN",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          "/": {
            placeholder: "搜索文章",
          },
        },
      },
    },
    copyright: "CC-BY-NC-4.0",
    hostname: "https://www.cloudswordsage.top/",
  }),
  plugins: [
    revealJsPlugin({
      plugins: ["highlight", "math", "search", "notes", "zoom"],
      config: {
        transition: "slide",
        backgroundTransition: "fade",
      },
    }),

    mediumZoomPlugin({
      selector: "img",
      options: {
        background: "rgba(0, 0, 0, 0.8)",
      },
    }),

    markdownExtPlugin({
      gfm: true,
      footnote: true,
      tasklist: true,
      component: true,
      vPre: true,
    }),
  ],
  bundler: viteBundler(),
});
