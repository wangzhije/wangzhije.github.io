<template><div><h2 id="什么是-event-loop-事件循环" tabindex="-1"><a class="header-anchor" href="#什么是-event-loop-事件循环"><span>什么是 Event Loop 事件循环</span></a></h2>
<p><a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" target="_blank" rel="noopener noreferrer">whatwg 的 html5规范</a></p>
<p>Event-Loop 是一个执行模型，在 html5规范 中进行了浏览器端的 Event-Loop 的明确定义。</p>
<blockquote>
<p>为了协调事件、用户交互、脚本、渲染、网络等，用户代理（如浏览器）必须使用本节所述的事件循环。</p>
<p>每个代理都有一个与之相关联的事件循环，该事件循环对该代理是唯一的。</p>
<p>同源窗口代理的事件循环被称为窗口事件循环。</p>
<p>专用工作线程代理、共享工作线程代理或服务工作线程代理的事件循环被称为工作线程事件循环。</p>
<p>而工作线程代理的事件循环则被称为工作线程事件循环。</p>
</blockquote>
<h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务"><span>宏任务和微任务</span></a></h2>
<p>JS的本质是单线程：</p>
<ol>
<li>非阻塞性的任务采取同步的方式，直接在主线程的执行栈完成。</li>
<li>阻塞性的任务都会采用异步来执行，异步的工作一般会交给其他线程完成，然后回调函数会放到事件队列中。</li>
</ol>
<p>javascript 有两种异步任务</p>
<ul>
<li>宏任务 <code v-pre>macro task</code> 也叫 <code v-pre>tasks</code></li>
<li>微任务 <code v-pre>micro task</code> 也叫 <code v-pre>jobs</code></li>
</ul>
<h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h3>
<p>回调会依次进入宏任务队列（macro task queue）的异步任务，等待后续被调用。
包括：</p>
<ul>
<li>setTimeout</li>
<li>setInterval</li>
<li>I/O</li>
<li>UI rendering</li>
<li>requestAnimationFrame (浏览器独有)</li>
<li>setImmediate (Node独有)</li>
</ul>
<h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h3>
<p>回调会依次进入微任务队列（macro task queue）的异步任务，等待后续被调用。
包括：</p>
<ul>
<li>Promise</li>
<li>Object.observe</li>
<li>MutationObserver</li>
<li>process.nextTick(Node独有)</li>
</ul>
<h2 id="宏任务和微任务的执行过程" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务的执行过程"><span>宏任务和微任务的执行过程</span></a></h2>
<ol>
<li>执行全局 script 代码，这些代码有一些是同步语句，有一些是异步语句（如： setTimeout）；</li>
<li>全局script同步代码执行完毕后，调用栈Stack会清空；</li>
<li>从微任务micro task queue 中取出位于队首的任务，放入调用栈Stack中执行，执行完后micro task queue长度减一；</li>
<li>继续取出微任务micro task queue位于队首的任务，放入调用栈Stack中执行， 以此类推，直到把micro task queue中的所有任务都执行完毕。注意，如果在执行micro task的过程中，产生了micro task那么会加入到队列的末尾，也会在这个周期被调用执行；</li>
<li>micro task中的所有无人都执行完毕，此时 micro task queue 为空队列，调用栈Stack也为空；</li>
<li>取出宏队列 macro task queue 中位于队首的任务，放入Stack中执行；</li>
<li>执行完毕后，调用栈Stack为空；</li>
<li>重复第3-7个步骤；</li>
<li>以此继续循环重复；</li>
</ol>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3>
<ul>
<li>宏任务marco task 一次只从队列中取出一个任务执行，执行后就去执行微任务队列中的任务；</li>
<li>微任务队列中所有的任务都会依次取出来执行，直到micro task queue为空， 且当前微任务执行过程中产生新的micro task，也会加入到当前micro task queue;</li>
<li>UI Rendering由浏览器自定判断决定执行节点。但是只要执行UI Rendering，它的节点是在执行完所有 micro task之后，下一个macro task之前，紧跟着执行UI Rendering</li>
</ul>
<h2 id="代码执行" tabindex="-1"><a class="header-anchor" href="#代码执行"><span>代码执行</span></a></h2>
<CodeTabs id="198" :data='[{"id":"javascript"},{"id":"console.log"}]'><template #title0="{ value, isActive }"><VPIcon provider="iconify" name="vscode-icons:file-type-js-official"/><span>javascript</span></template><template #title1="{ value, isActive }"><span>console.log</span></template><template #tab0="{ value, isActive }"><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>console.log('script')</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() => {</span></span>
<span class="line"><span>  console.log('timeout 1')</span></span>
<span class="line"><span>  Promise.resolve().then(() => {</span></span>
<span class="line"><span>    console.log('promise 1')</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Promise((resolve) => {</span></span>
<span class="line"><span>  console.log('promise resolver')</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Promise.resolve().then(() => {</span></span>
<span class="line"><span>    console.log('promise 3')</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  resolve('promise 2')</span></span>
<span class="line"><span>}).then((data) => {</span></span>
<span class="line"><span>  console.log('promise-then', data)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() => {</span></span>
<span class="line"><span>  console.log('timeout 2')</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log('end')</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>script</span></span>
<span class="line"><span>promise resolver</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>promise 3</span></span>
<span class="line"><span>promise-then</span></span>
<span class="line"><span>promise 2</span></span>
<span class="line"><span>timeout 1</span></span>
<span class="line"><span>promise 1</span></span>
<span class="line"><span>timeout 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs></div></template>


