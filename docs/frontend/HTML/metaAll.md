# meta 常用总结

## 基本信息

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- 声明文档使用的字符编码 -->
    <meta charset='utf-8'>
    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符"/>
    <!-- 页面关键词 -->
    <meta name="keywords" content=""/>
    <!-- 网页作者 -->
    <meta name="author" content="name, email@gmail.com"/>
    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow"/>
  </head>
</html>
```

## 移动端相关

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- 为移动设备添加 viewport -->
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->
    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
  </head>
</html>
```

## Windows 相关

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileColor" content="#000"/>
    <!-- Windows 8 磁贴图标 -->
    <meta name="msapplication-TileImage" content="icon.png"/>
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
  </head>
</html>
```

## IOS 相关

官方开发社区地址 [iOS Human Interface Guidelines](!https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-ios/)

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-title" content="标题">
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
    <!-- 设置苹果工具栏颜色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <meta name="format-detection" content="telphone=no, email=no"/>
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
  </head>
</html>
```
