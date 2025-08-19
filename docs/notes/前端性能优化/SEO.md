---
title: SEO
createTime: 2025/08/14 23:23:11
permalink: /article/4kbrjl5u/
---
# SEO

Search Engine Optimization 搜索引擎优化

## meta 标签优化

- `keywords`: 网页的关键字（已过时）
- `description`: 网站的主要内容
- `robots`: 搜索机器人
  - 哪些页面需要索引
  - 哪些不需要索引
  - 用来阻止搜索引擎获取拷贝页面、私密页面和未完成的页面
  - `content`
    - all: 文件将被检索，且页面上的链接可以被查询；
    - none: 文件将不被检索，且页面上的链接不可以被查询；
    - index: 文件将被检索；
    - follow: 页面上的链接可以被查询；
    - noindex: 文件将不被检索；
    - nofollow: 页面上的链接不可以被查询。
- `google`: Google 在结果页面会提供一个翻译链接
  - `content`
    - notranslate
    -

```HTML
<title>网站首页</title>
<meta name="keywords" content="blog">
<meta name="description" content="">
<meta name="robots" content="">
<meta name="author" content="wangzhijie">
<meta name="google" content="notranslate">
```

## 相关知识

### 主要的搜索引擎

虽然搜索引擎有很多，但是对网站流量起决定作用的就那么几个。

比如英文的主要有 `Google`, `Yahoo`, `Bing` 等

中文的有`百度`, `搜狗`, `有道`等

不同的搜索引擎对页面的抓取和索引、排序的规则都不一样。

各搜索门户和搜索引擎之间的关系

- AOL 网页搜索用的是 Google 的搜索技术
- MSN 用的是 Bing 的技术

### 主要的互联网目录

Open Directory

自身不是搜索引擎，而是一个大型的网站目录

和搜索引擎的主要区别：网站内容的收集方式不同

- **搜索引擎**是自动收集的，除了主页外还抓取大量的内容页面
- **目录**是人工编辑的，主要收录网站主页

### 按点击付费的搜索引擎

搜索引擎也需要生存，随着互联网商务的越来越成熟，收费的搜索引擎也开始大行其道。

最典型的有 `Overture` 和`百度`，当然也包括 `Google Adwords`(广告项目)

越来越多的人通过搜索引擎的点击广告来定位商业网站

**要学会用最少的广告投入获得最多的点击**

### 搜索引擎登录

将网站提交（submit）到搜索引擎

- 主要的搜索引擎和目录
  - Yahoo: 299 美元
  - Google: 目前还是免费，而且它主宰着 60％以上的搜索市场

### 链接交换和链接广泛度

Link Popularity

网页内容都是以超文本（Hypertext）的方式来互相链接的，网站之间也是如此。

除了搜索引擎以外，人们也每天通过不同网站之间的链接来浏览。

其它网站到你的网站的链接越多，你也就会获得更多的访问量。

更重要的是，你的网站的外部链接数越多，会被搜索引擎认为它的重要性越大，从而给你更高的排名。
