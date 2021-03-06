
const {
  Sidebar4EN,
  Sidebar4ZH,
  NavItems4EN,
  NavItems4ZH
} = require('./config/index.js')

module.exports = {
  // dev
  host: '0.0.0.0',
  port: '9000',
  // build
  base: '/blog/',
  dest: './blog/',
  extraWatchFiles: ['.vuepress/config/**'],
  // 默认主题配置
  themeConfig: {
    // 国际化-多语言支持
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: NavItems4ZH,
        sidebar: Sidebar4ZH
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: NavItems4EN,
        sidebar: Sidebar4EN
      }
    },
    smoothScroll: true,
    lastUpdated: true,
    editLinks: true, // 编辑地址 Github
    repo: 'https://github.com/wangzhije/wangzhije.github.io.git',
  },
  locales: {
    '/': {
      lang: 'zh',
      title: '个人知识库',
      description: '开发者路线学习记录',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Learn Notes',
      description: 'developer roadmap learn notes',
    },
  },
}