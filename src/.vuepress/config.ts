import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "文档演示",
    description: "vuepress-theme-hope 的文档演示",

    // 多语言设置
    locales: {
        '/': {
            title: 'Microsbug',
            description: 'A ship in harbor is safe, but that is not what ships are built for.',
            // 设置favicon
            head: [['link', {rel: 'icon', href: '/site_logo.svg'}]],
        },
    },

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
