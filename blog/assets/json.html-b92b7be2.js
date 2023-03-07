import{_ as n,V as s,W as a,a1 as e}from"./framework-ad6b4471.js";const t={},o=e(`<h1 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h1><blockquote><p>package.json 是项目的清单记录</p></blockquote><p><code>[npm | cnpm | yarn | pnpm] init</code> 初始化项目，则生成 <code>package.json</code> 文件</p><ul><li>文件结构</li><li>属性分类 <ul><li>npm 属性：包管理使用</li><li>命令特有属性：npm 具体插件使用 <ul><li>eslint 的 eslintConfig</li><li>babel</li></ul></li></ul></li><li>软件包版本：Semver 语义化规范</li></ul><blockquote><p>内容过多，尽量使用 Ctrl+F</p></blockquote><h2 id="基本信息-npm-搜索、install-等" tabindex="-1"><a class="header-anchor" href="#基本信息-npm-搜索、install-等" aria-hidden="true">#</a> 基本信息：npm 搜索、install 等</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wzjcli-test&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 名称：小写</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 版本：遵循 Semver 语义化规范</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可执行命令 [npm | cnpm | yarn | pnpm]</span>
    <span class="token comment">// 自定义命令</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// hooks 包管理器生命周期钩子函数</span>
    <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/preinstall.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm@7.1.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Node 16新增，使用的包管理器</span>
  <span class="token comment">// 环境版本约束</span>
  <span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=12.18.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;7.0.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 业务依赖/生产环境依赖，发布后仍需使用</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.9.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.9.0&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 开发依赖，只在开发环境中使用，生产环境不会将其打包</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.40.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.9&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.8.1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 宿主环境去安装的包</span>
  <span class="token comment">// 示例为 ant-design UI 组件库要求宿主环境安装指定的 React 版本</span>
  <span class="token property">&quot;peerDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=16.9.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react-dom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=16.9.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><blockquote><p>main 属性设置：模块加载的入口文件</p></blockquote><p>未设置 main 属性 <code>require(&#39;dist/myModule.js&#39;)</code><br> 设置 main 属性 <code>require(&#39;myModule.js&#39;)</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/myModule.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cli-脚手架开发" tabindex="-1"><a class="header-anchor" href="#cli-脚手架开发" aria-hidden="true">#</a> CLI 脚手架开发</h2><blockquote><p>bin 执行命令时调用的文件<br> 命令行运行 <code>webpack</code> 时，执行<code> webpack/bin/index.js</code> 文件</p></blockquote><ul><li><code>key(webpack)</code>: 定义的可执行命令，不能重名</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/index.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-的-sideeffects-和-tree-shaking" tabindex="-1"><a class="header-anchor" href="#webpack-的-sideeffects-和-tree-shaking" aria-hidden="true">#</a> webpack 的 sideEffects 和 tree-shaking</h2><p>声明该模块是否包含 sideEffects（副作用） 从而可以为 tree-shaking 提供更大的优化空间</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;es/**/style/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lib/**/style/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">/*
   * npm 发布相关
   */</span>
  <span class="token comment">//</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//</span>
  <span class="token property">&quot;publishConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发布到 npm 注册表时, 要使用的程序包访问级别</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 工作区是 monorepos 用来将一个大型项目拆分为半独立子项目的一项可选功能，每个子项目都列出了自己的一组依赖关系。</span>
  <span class="token comment">// 工作区字段是全局模式列表，这些模式与应成为应用程序工作区的所有目录匹配</span>
  <span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-lock-json" tabindex="-1"><a class="header-anchor" href="#package-lock-json" aria-hidden="true">#</a> package-lock.json</h2><p><code>package.json</code></p><ul><li>指定依赖的版本<strong>范围</strong>，可以使用很多版本</li></ul><p><code>-lock.json</code></p><ul><li>项目安装的<strong>具体版本号</strong></li></ul>`,25),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","json.html.vue"]]);export{r as default};
