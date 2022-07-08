# link 标签

> link 元素，属于**外部资源链接元素**，规定了当前文档与外部资源的关系

[`<link >` 使用总结整理](!../../../linkAll.md)

## rel

> 命名链接文档与当前文档的关系

### rel.stylesheet

#### 一、加载 CSS

```HTML
<link href="style.css" rel="stylesheet" />
```

#### 二、与 `alternate` 关键字结合使用

- 使用说明
  - 定义 `rel` 中定义 `alternate stylesheet` 后，`title` 不能为空
  - 定义一个**可替换的样式表**
  - 它和第一个 link 元素同时使用，第一个定义了**首选样式**
  - 而 alternate 则让用户可选择替换的样式
  - 但这个替换操作需要浏览器支持（IE7 及以下不支持）
- 最佳实践
  - [网站换肤](!../../../application/style.md)

```HTML
<link rel="stylesheet alternate" title="不能为空" />
```

```HTML
<!-- 常规样式表 -->
<link id="normalize" type="text/css" href="normalize.css" rel="stylesheet">
<!-- 首选样式表 -->
<link id="default" type="text/css" href="default.css" title="默认皮肤" rel="stylesheet">
<!-- 替换样式表1 -->
<link id="light" type="text/css" href="light.css" title="白天模式" rel="alternate stylesheet">
<!-- 替换样式表2 -->
<link id="dark" type="text/css" href="dark.css" title="夜间模式" rel="alternate stylesheet">
```

### rel.icon

#### 一、通用图标：PC 端的页签图标，移动设备上用以显示在主屏幕的图标

```HTML
<link href="/favicon.ico" rel="icon">
```

#### 二、在之前，经常可以看到 shortcut，但不是标准推荐的

```HTML
<link href="/favicon.ico" rel="icon shortcut">
```

#### 三、与 `type` `sizes` 属性结合使用：定义不同平台

#### 四、与 `media` 属性结合使用：定义不同 @media 媒体查询条件使用

```HTML
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
```

#### 五、苹果 iOS 不支持 icon 类型

**解决方案**

一、 `apple-touch-icon` 图片自动处理成圆角和高光等效果;推荐使用 `.png` 格式图片

```HTML
<link href="apple-icon-114.png" rel="apple-touch-icon">
```

二、 `apple-touch-icon-precomposed` 禁止系统自动添加效果，直接显示设计原图

```HTML
<link href="apple-icon-114.png" rel="apple-touch-icon-precomposed">
```

三、 `apple-touch-icon` `apple-touch-icon-precomposed` 支持 `sizes`属性

- 不同的设备对应的 `sizes` 属性值
  - 57×57（默认值）的图标对应 320×640 的 iphone 老设备
  - 72×72 对应 ipad
  - 114×114 对应 retina 屏的 iPhone 及 iTouch
  - ipad3 对应 144×144 的高分辨率

```HTML
<link href="apple-icon-114.png" rel="apple-touch-icon" sizes="57x57" />
<link href="apple-icon-114.png" rel="apple-touch-icon" sizes="72x72" />
<link href="apple-icon-114.png" rel="apple-touch-icon" sizes="114x114" />
<link href="apple-icon-114.png" rel="apple-touch-icon-precomposed" sizes="144x144" />
```

四、 `apple-touch-startup-image` 为 WebApp 设置一个类似 NativeApp 的启动画面;不支持 `sizes`

- 在 iPhone 及 iTouch 设备上
  - 只支持竖屏模式；图片分辨率为 `320×460`
- 在 iPad 上
  - 支持竖屏模式；图片分辨率为 `768x1004`
  - 支持横屏模式；图片分辨率 `748x1024`

```HTML
<link href="/startup-landscape.png" rel="apple-touch-startup-image"
media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)" />
<link href="/startup-portrait.png"  rel="apple-touch-startup-image"
media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)" />
<link href="/startup.png" rel="apple-touch-startup-image"
media="screen and (max-device-width: 320)" />
```

### rel.shortlink

一些网站创建短链接，使通过即时消息共享链接更容易

## as
