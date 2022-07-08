
# link 常用总结

## 加载 CSS

```HTML
<html>
  <head>
    <!-- 加载 favicon -->
    <link href="/favicon.ico" rel="icon" />
    <!-- 加载 CSS -->
    <link href="style.css" rel="stylesheet" />
    <!-- rel 多属性，空格分割 -->
    <link href="/favicon.ico" rel="icon shortcut" />

    <!-- 首选样式表 -->
    <link href="default.css" rel="stylesheet" />
    <!-- 替换样式表；只加载，不渲染 -->
    <link href="light.css" rel="stylesheet alternate" title="白天模式" />
    <link href="night.css" rel="stylesheet alternate" title="夜间模式" />

  </head>
</html>
```

## iOS 图标

官方开发社区地址 [iOS Human Interface Guidelines](!https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-ios/)

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- iOS 图标 -->
    <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
    <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
    <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
  </head>
</html>
```

其他

```HTML
<!DOCTYPE html>
<html>
  <head>
    <!-- 添加 RSS 订阅 -->
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
    <!-- 添加 favicon icon -->
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
  </head>
</html>
```
