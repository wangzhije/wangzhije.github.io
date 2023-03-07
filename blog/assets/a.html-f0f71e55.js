import{_ as e,V as a,W as i,a1 as n}from"./framework-ad6b4471.js";const s={},d=n(`<h1 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> a</h1><p>被点击访问过的超链接样式不在具有 hover 和 active 了</p><p>解决方法是改变 CSS 属性的</p><p>排列顺序: L-V-H-A（link,visited,hover,active）</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>a:link{}
a:visited{}
a:hover{}
a:active{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[d];function r(t,l){return a(),i("div",null,c)}const v=e(s,[["render",r],["__file","a.html.vue"]]);export{v as default};
