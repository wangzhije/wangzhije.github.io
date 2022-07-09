# HTML 概述

## HTML 是什么

HTML：HyperText Markup Language，超文本标记语言

- 不是一门编程语言，是标记语言/描述语言
- 用来描述网页结构
- 用来告知**浏览器**如何**组织页面**的标记语言
- 指明，标题、段落、文本、超链接、图片、列表、表单等

## 发展历史

- 1990 年，Tim-Berners-Lee，对 Web 的远见，提出 Hypertext 超文本概念
  - Hypertext，包含了指向其他文本的链接，而不是像小说中的单一线性流
  - 1965 年左右，Ted Nelson 提出
- 1991 年，在 SGML 基础上，将 Hypertext 定义为一个标记语言
  - [SGML](!https://isgmlug.org/)：Standard Generalized Markup Language ，标准通用标记语言
    - [ISO](!https://www.iso.org/home.html) ，国际标准化组织，所定义，用来规范宣告式标记语言的标准
    - Web 环境中，**XML、XHTML、HTML4** 都是以 SGML 为基础的语言
    - **HTML5** 开始，HTML 有了自己的解析规则，不再以 SGML 为基础语言
- 1993 年，[IETF](!https://www.ietf.org/)，正式开始制定 HTML 规范
- 1994 年，Tim-Berners-Lee 为了 Web 发展，成立了 [W3C](!https://www.w3.org/)
- 1995 年，经历了几个版本后，发布了 **HTML2.0**
- 1996 年，W3C 接管 HTML 的标准化工作
- 1997 年，W3C 发布 **HTML3.2**
- 1999 年，**HTML4.0** 发布
- 2000 年，HTML4.0 成为 ISO 标准
- 之后，W3C 几乎放弃了 HTML 而转向 XHTML
- 2004 年，[WHATWG](https://whatwg.org/)，小组成立
  - WHATWG：Web Hypertext Application Technology Working Group，超文本应用技术工作组
- WHATWG 小组转回参与制定 HTML5 标准
- 2008 年，W3C 和 WHATWG 发布了 HTML5 第一份草案
- 2014 年，发布了 **HTML5** 标准的最终版

## HTML 文档结构

- HTML 文件扩展名，通常为 `.html` 或 `.htm`
  - 用户可以从 Web 服务器中下载
  - 并使用 Web **浏览器**来解析和显示
- 完整的 HTML 文本基本结构
  - DTD：Document Type Definition
  - html 根元素
  - metadata 文档元数据
  - body 文档内容
  - 注释 `<!-- -->`
  - 实体引用：转义字符

## 信息架构

规划整个网站，页面的拆分、组合、相互连接，提升用户体验

通用结构

- 页眉
- 导航菜单
- 主内容
- 侧边栏
- 页脚
  - 联系方式
  - 版权声明
  - 超链接
    - 术语
    - 状态
    - 站点语言选择
    - 无障碍访问策略
