<template><div><h2 id="渲染引擎的主流程" tabindex="-1"><a class="header-anchor" href="#渲染引擎的主流程"><span>渲染引擎的主流程</span></a></h2>
<p>浏览器内核不同，前端关注的主要是渲染引擎的不同</p>
<p>主流程基本一致</p>
<ul>
<li>解析 HTML 以构建 DOM 树</li>
<li>解析 CSS 以构建 StyleRules</li>
<li>构建 render 树</li>
<li>排版布局 render 树</li>
<li>绘制 render 树</li>
<li>显示内容</li>
</ul>
<p>Webkit</p>
<p><img src="@source/notes/1.frontend/4.浏览器/imgs/webkit.png" alt="Webkit 渲染"></p>
<p>Gecko</p>
<p><img src="@source/notes/1.frontend/4.浏览器/imgs/gecko.jpg" alt="Gecko 渲染"></p>
<p>加入 JavaScript 后</p>
<p><img src="@source/notes/1.frontend/4.浏览器/imgs/all.jpg" alt="渲染总流程"></p>
<h2 id="重绘和重排" tabindex="-1"><a class="header-anchor" href="#重绘和重排"><span>重绘和重排</span></a></h2>
</div></template>


