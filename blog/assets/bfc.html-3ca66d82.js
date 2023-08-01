import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as n}from"./app-a98e131c.js";const l={},d=n(`<h1 id="外边距重叠-和-bfc" tabindex="-1"><a class="header-anchor" href="#外边距重叠-和-bfc" aria-hidden="true">#</a> 外边距重叠 和 BFC</h1><h2 id="外边距重叠" tabindex="-1"><a class="header-anchor" href="#外边距重叠" aria-hidden="true">#</a> 外边距重叠</h2><blockquote><ul><li>在 CSS 当中</li><li>相邻的两个盒子（兄弟元素或是祖先元素）的外边距可以结合成一个单独的外边距</li><li>这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距</li></ul></blockquote><h3 id="外边距重叠条件" tabindex="-1"><a class="header-anchor" href="#外边距重叠条件" aria-hidden="true">#</a> 外边距重叠条件</h3><ul><li>只有块级元素会发生外边距重叠</li><li>相邻的父子元素间</li><li>相邻的同级元素间</li></ul><h3 id="解决方案-开启-bfc" tabindex="-1"><a class="header-anchor" href="#解决方案-开启-bfc" aria-hidden="true">#</a> 解决方案：开启 BFC</h3><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><p>BFC（块级格式化上下文）</p><p>一个创建了新的 BFC 的盒子是独立布局的</p><p>盒子内元素的布局不会影响盒子外面的元素</p><h3 id="触发-bfc" tabindex="-1"><a class="header-anchor" href="#触发-bfc" aria-hidden="true">#</a> 触发 BFC</h3><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>#parent{
  /* display */
  display: &quot;table-cell&quot;;
  display: &quot;table-caption&quot;;
  display: &quot;inline-block&quot;;
  display: &quot;flex&quot;;
  display: &quot;inline-flex&quot;;
  /* overflow */
  overflow: &quot;hidden&quot;;
  overflow: &quot;auto&quot;; 
  overflow: &quot;scroll&quot;;
  /* 浮动 */
  float: &quot;left&quot;;
  float: &quot;right&quot;;
  /* position */
  position: &quot;absolute&quot;;
  position: &quot;fixed&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[d];function o(r,t){return e(),a("div",null,s)}const v=i(l,[["render",o],["__file","bfc.html.vue"]]);export{v as default};
