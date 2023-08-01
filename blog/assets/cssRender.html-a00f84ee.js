import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as d}from"./app-a98e131c.js";const n="/blog/assets/css1-d28f7558.png",l="/blog/assets/css2-e1ca0b6a.png",a={},t=d(`<h1 id="css-渲染" tabindex="-1"><a class="header-anchor" href="#css-渲染" aria-hidden="true">#</a> CSS 渲染</h1><h2 id="css-选择器从右往左解析" tabindex="-1"><a class="header-anchor" href="#css-选择器从右往左解析" aria-hidden="true">#</a> CSS 选择器从右往左解析</h2><p>CSS 尽量减少使用层级关系的目的</p><ul><li>减少选择器匹配的次数</li><li>提高 CSS 匹配效率</li><li>提高 Render Tree 生成效率</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!-- html --&gt;
&lt;div id=&quot;div1&quot;&gt;
  &lt;div class=&quot;a&quot;&gt;
    &lt;div class=&quot;b&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;div class=&quot;c&quot;&gt;
      &lt;div class=&quot;d&quot;&gt;
        ...
      &lt;/div&gt;
      &lt;div class=&quot;e&quot;&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;f&quot;&gt;
    &lt;div class=&quot;c&quot;&gt;
      &lt;div class=&quot;d&quot;&gt;
        ...
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* CSS */
#div1 .c .d{}
.f .c .d{}
.a .c .e{}
#div1 .f{}
.c .d{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 CSS 选择器从左往右解析</p><p><img src="`+n+'" alt="CSS1"></p><p>假如 CSS 选择器从右往左解析</p><p><img src="'+l+'" alt="CSS1"></p><p>结果很明显，从右往左的效率更高。</p>',12),c=[t];function v(r,u){return e(),s("div",null,c)}const b=i(a,[["render",v],["__file","cssRender.html.vue"]]);export{b as default};
