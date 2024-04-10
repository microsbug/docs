import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Anthony KK",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/site_logo.svg",

  repo: "https://github.com/microsbug",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // 页面显示信息
  pageInfo: ['Category', 'Tag', 'ReadingTime', 'Author', 'Date'],

  // 路径导航
  breadcrumb: true,

  // 路径导航的图标显示
  breadcrumbIcon: true,

  // 用户可以自定义的多主题色
  // themeColor: {
  //     yellow: '#FEC201',
  //     pink: '#EF699F',
  //     purple: '#684CCE',
  //     orange: '#FF8C3D',
  //     green: '#4CAF50',
  //     blue: '#2196F3',
  // },
  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: 'toggle',
  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  // backToTop: true,
  // 纯净模式-禁用
  pure: false,

  // 文章的最后更新时间
  lastUpdated: true,

  // 显示页面的贡献者
  contributors: false,

  themeColor: true,

  // 用户可以自定义的多主题色
  //    themeColor: {
  //     yellow: '#FEC201',
  //     pink: '#EF699F',
  //     purple: '#684CCE',
  //     orange: '#FF8C3D',
  //     green: '#4CAF50',
  //     blue: '#2196F3',
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 博客配置
  blog: {
    // 头像
    avatar: '/head_logo.png',
    // 名称
    name: 'Microsbug',
    // 是否是圆形头像
    roundAvatar: false,
    // 个人描述
    description: 'A ship in harbor is safe, but that is not what ships are built for.',
    // 社交媒体
    medias: {
      Gitee: 'https://gitee.com/bugstacks',
      GitHub: 'https://github.com/microsbug',
      Wechat: 'https://example.com',
      // Juejin: 'https://juejin.cn/user/40059617411767',
      Zhihu: 'https://www.zhihu.com/people/52-36-12-20',
    },
    // 博客的侧边栏设置
    sidebarDisplay: 'mobile',
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: 'Microsbugの时光轴🍃',
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      components: ["Badge", "VPCard", 'BiliBili', 'PDF'],
    },
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
      // 纯净模式
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // 打开博客功能
    blog: {
      // 在文章列表页面自动提取文章的摘要进行显示
      excerptLength: 10,
    },
    // 开启git实现编辑此页面-最后更新时间-贡献者功能
    git: true,
    // 关闭sitemap插件
    sitemap: false,
  },
});
