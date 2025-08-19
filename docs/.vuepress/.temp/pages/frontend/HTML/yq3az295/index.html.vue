<template><div><p>被点击访问过的超链接样式不在具有 hover 和 active 了</p>
<p>解决方法是改变 CSS 属性的</p>
<p>排列顺序: L-V-H-A（link,visited,hover,active）</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-css"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">visited</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">hover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">active</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


