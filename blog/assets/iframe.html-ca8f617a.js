import{_ as a,V as e,W as r,a1 as i}from"./framework-ad6b4471.js";const t={},d=i(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1><h2 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h2><p>| 属性 | 说明 | | ----------- | -------------------------------------------------: | --- | ------- | | name | frame 的名称 | | width | 设置 frame 的宽度 | | height | 设置 frame 的高度 | | src | 设置在 frame 中显示的页面 | | frameborder | 是否显示 frame 的边框（0：不显示边框 1：显示边框） | | scrolling | 是否显示 frame 中的滚动条（ yes | no | auto ） |</p><h2 id="iframe-使用方式" tabindex="-1"><a class="header-anchor" href="#iframe-使用方式" aria-hidden="true">#</a> iframe 使用方式</h2><h3 id="html-中嵌入-iframe" tabindex="-1"><a class="header-anchor" href="#html-中嵌入-iframe" aria-hidden="true">#</a> HTML 中嵌入 iframe</h3><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;iframe id=&quot;iframeId&quot; name=&quot;iframeName&quot; src=&quot;http://wangzhije.github.io/xxl/&quot;&gt;&lt;/iframe&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><iframe id="iframeId" name="iframeName" src="http://wangzhije.github.io/xxl/" width="100%" height="500px"></iframe><h3 id="javascript-动态插入" tabindex="-1"><a class="header-anchor" href="#javascript-动态插入" aria-hidden="true">#</a> JavaScript 动态插入</h3><h2 id="父子页面通信" tabindex="-1"><a class="header-anchor" href="#父子页面通信" aria-hidden="true">#</a> 父子页面通信</h2><h2 id="iframe-缺点" tabindex="-1"><a class="header-anchor" href="#iframe-缺点" aria-hidden="true">#</a> iframe 缺点</h2><ul><li>iframe 会阻塞主⻚⾯的 Onload 事件</li><li>搜索引擎的检索程序⽆法解读这种⻚⾯，不利于 SEO</li><li>iframe 和主⻚⾯共享连接池，⽽浏览器对相同域的连接有限制，所以会影响⻚⾯的并⾏加载</li></ul><p>使⽤ iframe 之前需要考虑这两个缺点。如果需要使⽤ iframe ，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题</p>`,12),h=[d];function n(m,f){return e(),r("div",null,h)}const c=a(t,[["render",n],["__file","iframe.html.vue"]]);export{c as default};
