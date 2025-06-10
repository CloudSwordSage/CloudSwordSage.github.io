import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar";

export default defineThemeConfig({
  // 在这里配置主题
  profile: {
    name: "墨烟行",
    description: "描述文字",
    avatar: "/images/blogger.jpg",
    circle: true, // 是否为圆形头像
    organization: "重庆城市管理职业学院",
    location: "重庆",
  },
  social: [
    { icon: "github", link: "https://github.com/mrcchenfeng" },
    { icon: "bilibili", link: "https://space.bilibili.com/523613033" },
  ],
  navbarSocialIncludes: ["github"],
  logo: "/images/blogger.jpg",

  navbar,
});
