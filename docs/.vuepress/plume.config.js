import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar";

export default defineThemeConfig({
  profile: {
    name: "墨烟行",
    description:
      "“我们有两个方法来进行软件设计：一个是让其足够的简单以至于让BUG无法藏身；另一个就是让其足够的复杂，让人找不到BUG。前者更难一些” — C.A.R. Hoare",
    avatar: "/images/blogger.jpg",
    circle: true,
    organization: "重庆城市管理职业学院",
    location: "重庆",
  },
  social: [
    { icon: "github", link: "https://github.com/mrcchenfeng" },
    { icon: "bilibili", link: "https://space.bilibili.com/523613033" },
  ],
  navbarSocialIncludes: ["github"],
  logo: "/images/blogger.jpg",
  footer: {
    copyright: "Copyright © 2024-present mrcchenfeng",
  },
  navbar,
});
