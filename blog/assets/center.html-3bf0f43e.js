import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as d}from"./app-a98e131c.js";const a={},s=d(`<h1 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h1><h2 id="已知元素宽高" tabindex="-1"><a class="header-anchor" href="#已知元素宽高" aria-hidden="true">#</a> 已知元素宽高</h2><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>#div1{
  width:200px;
  height:200px;
  background-color:#6699FF;
  position: absolute; //父元素需要相对定位
  top: 50%;
  left: 50%;
  margin-top:-100px ; //二分之一的 height，width
  margin-left: -100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="未知元素的高宽" tabindex="-1"><a class="header-anchor" href="#未知元素的高宽" aria-hidden="true">#</a> 未知元素的高宽</h2><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>#div1{
  width: 200px;
  height: 200px;
  background-color: #6699FF;
  margin:auto;
  position: absolute; //父元素需要相对定位
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[s];function r(c,t){return i(),n("div",null,l)}const u=e(a,[["render",r],["__file","center.html.vue"]]);export{u as default};
