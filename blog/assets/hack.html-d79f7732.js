import{_ as e,V as n,W as a,a1 as i}from"./framework-ad6b4471.js";const d={},s=i(`<h1 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS Hack</h1><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* 属性 */
#test{
  background-color: red; // IE8
  +background-color: red; // IE7
  _background-color: red; // IE6
}
/* 语句 */
&lt;! - [if lte IE 6]&gt;&lt;![endif] -&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[s];function r(l,t){return n(),a("div",null,c)}const u=e(d,[["render",r],["__file","hack.html.vue"]]);export{u as default};
