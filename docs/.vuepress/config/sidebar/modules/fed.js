// 自动遍历子目录，并获取对象
// let fs = require('fs');
// let path = require('path');
// let rootDir = __dirname
// let fed = path.resolve(__dirname, 'fed/');
// fs.readdir(fed,(err, files) =>{
//   console.log(err, files)
// })

const HTML_SIDEBAR = require("./fed/html.js");
const CSS_SIDEBAR = require("./fed/css.js");
const JS_SIDEBAR = require("./fed/js.js");
const BROWSER_SIDEBAR = require("./fed/browser.js");
const NODE_SIDEBAR = require("./fed/node.js");
const VISUAL_SIDEBAR = require("./fed/visual.js");
const WEBPACK_SIDEBAR = require("./fed/webpack.js");
const VUE_SIDEBAR = require("./fed/vue.js");
const REACT_SIDEBAR = require("./fed/react.js");
const TS_SIDEBAR = require("./fed/ts.js");
const ENGINEER_SIDEBAR = require("./fed/engineer.js");
const PERFORMANCE_SIDEBAR = require("./fed/performance.js");

const FED_SIDEBAR = [
  "",
  HTML_SIDEBAR,
  CSS_SIDEBAR,
  JS_SIDEBAR,
  BROWSER_SIDEBAR,
  NODE_SIDEBAR,
  WEBPACK_SIDEBAR,
  VUE_SIDEBAR,
  REACT_SIDEBAR,
  TS_SIDEBAR,
  VISUAL_SIDEBAR,
  ENGINEER_SIDEBAR,
  PERFORMANCE_SIDEBAR,

  {
    title: "ES6 +",
    sidebarDepth: 1,
    collapsable: true,
    children: ["ES6/es2022"],
  },
  {
    title: "模块化",
    sidebarDepth: 2,
    collapsable: true,
    children: [],
  },
  {
    title: "JavaScript数据结构与算法",
    sidebarDepth: 2,
    collapsable: true,
    children: [],
  },
  {
    title: "JavaScript设计模式",
    sidebarDepth: 0,
    collapsable: true,
    children: [
      "JavaScript/designPatterns/",
      "JavaScript/designPatterns/basic.md",
      "JavaScript/designPatterns/oop.md",
    ],
  },
  {
    title: "JavaScript函数式编程",
    sidebarDepth: 2,
    collapsable: true,
    children: [],
  },
];

module.exports = FED_SIDEBAR;
