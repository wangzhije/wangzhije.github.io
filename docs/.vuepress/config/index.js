// export * from './nav/en.js'
// export * from './nav/zh.js'
// export * from './sidebar/en.js'
// export * from './sidebar/zh.js'

const { NavItems4EN } = require('./nav/en.js');
const { NavItems4ZH } = require('./nav/zh.js');
const { Sidebar4EN } = require('./sidebar/en.js');
const { Sidebar4ZH } = require('./sidebar/zh.js');

module.exports = {
  NavItems4EN,
  NavItems4ZH,
  Sidebar4EN,
  Sidebar4ZH,
}