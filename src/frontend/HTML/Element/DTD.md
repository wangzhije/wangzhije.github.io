---
# 这是文章的标题
# title: 页面配置
# 这是页面的图标
# icon: page
# 这是侧边栏的顺序
order: 1
# 设置作者
# author: wangzhijie
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - HTML
# 一个页面可以有多个标签
tag:
  - HTML
  - DTD
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

# DTD

> - DTD：Document Type Declaration 文档类型声明
> - `<!DOCTYPE html>`(H5 标准模式)

<div style="display: none;">
- [DTD](!https://developer.mozilla.org/zh-CN/docs/Glossary/DTD)
</div>

历史发展

第一次浏览器大战，两个主要阵营

- 网景（Netscape）的浏览器（Navigator）
- 微软（Microsoft）的浏览器（Internet Explorer，IE）

标准化：W3C 创立网络标准

- 浏览器采用了两种模式；为了不破坏当时的既有网站，并且，区分老旧网站、符合新规范的网站
  - 怪异模式
  - 标准模式

目前浏览器的排版引擎，使用三种模式

- **怪异模式** Quirks mode，**兼容模式**
  - 排版会模拟，IE 的非标准行为
- **接近标准模式** Almost standards mode
  - 从 Mozilla 1.0.1 和 1.1 Beta 开始，存在的一种新的渲染模式
  - 只有少数的怪异行为被实现
- **标准模式** Standards mode
  - HTML 和 CSS 的规范描述行为

## Doctype

浏览器根据 Doctype 决定使用哪种排版模式

- 在 HTML 中，doctype 声明，是必要的
- 把 DOCTYPE 正确地置于 HTML 文件的顶端
  - 如果有任何其他字符位于 DOCTYPE 之前，比如注释或 XML 声明
  - 会导致 IE 9 或更早期的浏览器触发怪异模式
- 版本介绍
  - HTML4
    - 文档类型声明类似于链接
    - 规定了 HTML 页面必须遵从的良好规则 - 能自动检测错误和其他有用的东西
      `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      `
  - HTML5，标准推荐
    - 唯一的作用是启用标准模式，用于保证文档正常读取
    ```HTML
      <!DOCTYPE html>
    ```

## 浏览器的排版引擎模式

浏览器解析，主要是三个部分

- 布局（盒模型）
- 样式解析（CSS）
- 脚本解析（JS）

### 混杂模式 Quirks mode

- 排版会模拟，IE 的非标准行为

### 近标准模式 Almost standards mode

- 从 Mozilla 1.0.1 和 1.1 Beta 开始，存在的一种新的渲染模式
- 只有少数的怪异行为被实现

### 标准模式 Standards mode

- HTML 和 CSS 的规范描述行为
