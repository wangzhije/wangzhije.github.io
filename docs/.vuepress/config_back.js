
const nav = [
  {
    text: '前端',
    link: '/frontend/'
  }
]
const roadmap = [
  'HTML',
  'CSS',
  'JavaScript',
  'Vue',
  'React',
]
const sidebar = [
  {
    title: '前端',
    path: ''
  }
];


module.exports = {
  // 
  temp: '',
  shouldPrefetch: function(){

  },
  // dev
  host: '0.0.0.0',
  port: '9000',
  // build
  base: '/',
  dest: '.vuepress/dist',
  cache: '',
  extraWatchFiles: [],
  patterns: [],
  // 内容
  title: 'Notes',
  description: '',
  head: [],
  locales: {},
  // 主题
  theme: '', // 主题
  themeConfig: { // 默认主题配置
    search: false,
    nav: [ // 导航栏
      {
        text: '计算机基础',
        link: '/basic/'
      },
      {
        text: '前端',
        link: '/frontend/'
      }
    ],
    // sidebar: 'auto'
    sidebar: {
      // fallback
      '/': [
        '',
        'VuePress',
        'Linux',
      ]
    },
    // lastUpdated: 'Last Updated', // string | boolean
  },
  plugins: [],
  // markdown
  markdown: {
    lineNumbers: undefined,
    slugify: function(){},
    extendMarkdown: function(){},
    extractHeaders: ['h2', 'h3'],
    anchor: {
      permalink: true,
      permalinkBefore: true,
      pageSufixx: '.html',
      externalLinks: {
        target: '_blank',
        rel: 'noopener noreferer'
      },
      toc: {
        includeLevel: [2, 3]
      },
      plugins: {}
    }
  },
  // webpack 构建流程
  configureWebpack: (config, isServer) =>{},
  chainWebpack: (config, isServer) =>{},
  // 浏览器兼容性
  evergreen: false,
}