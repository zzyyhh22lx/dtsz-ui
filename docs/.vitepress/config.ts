export default {
  themeConfig: {
    siteTitle: "Dtsz-ui🤣",
    footer: {
      message: "快来加入Dtsz吧🤩<a>https://github.com/zzyyhh22lx/dtsz-ui</a>",
    },
    sidebar: [
      {
        text: "基本配置",
        items: [{ text: "导入", link: "/component/index" }],
      },
      {
        text: "基础组件",
        items: [
          { text: "按钮", link: "/component/button" },
          { text: "图标", link: "/component/icon" },
        ],
      },
      {
        text: "反馈组件",
        items: [{ text: "加载", link: "/component/loading" }],
      },
      {
        text: "进阶组件",
        items: [{ text: "环形进度条", link: "/component/progress" }],
      },
    ],
  },
};
