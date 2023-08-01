import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as a}from"./app-a98e131c.js";const c={},d=a(`<h1 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS Hack</h1><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* 属性 */
#test{
  background-color: red; // IE8
  +background-color: red; // IE7
  _background-color: red; // IE6
}
/* 语句 */
&lt;! - [if lte IE 6]&gt;&lt;![endif] -&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[d];function r(l,t){return n(),i("div",null,s)}const v=e(c,[["render",r],["__file","hack.html.vue"]]);export{v as default};
