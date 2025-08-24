<template><div><h2 id="personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#personal-access-tokens"><span>Personal access tokens</span></a></h2>
<p>用于使用 Github API。</p>
<p>个人访问令牌的功能类似于普通 OAuth 访问令牌。</p>
<p>它们可以用来代替 HTTPS 上 Git 的密码，也可以用于通过基本身份验证对 API 进行身份验证。</p>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<p>如果您有令牌，则可以在通过 HTTPS 执行 Git 操作时输入令牌，而不是密码。<br>
例如，在命令行中输入以下内容：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/username/repo.git</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Username:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your_username</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Password:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your_token</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h2>
<ol>
<li>Github 点击头像 --&gt; Settings --&gt; Developer settings --&gt; Personal access tokens</li>
<li>新建，点击 Gernerate new token</li>
</ol>
<ul>
<li><code v-pre>Note</code>：token 做什么用</li>
<li><code v-pre>Expiration</code>：token 有效期</li>
<li><code v-pre>Select scopes</code>：赋予 token 哪些权限
<ul>
<li>不选：授予对公共信息的只读访问权限（包括用户个人资料信息、公共仓库信息和 gist）</li>
<li>repo：授予对仓库（包括私有仓库）的完全访问权限；对仓库和组织的代码、提交状态、仓库和组织项目、邀请、协作者、添加团队成员身份、部署状态以及仓库 web 挂钩的读取/写入权限</li>
<li>workflow：授予添加和更新 GitHub Actions 工作流程文件的权限</li>
</ul>
</li>
</ul>
<ol start="3">
<li>点击 Generate token，生成 token，复制一下，备用</li>
</ol>
<!-- `githubio deploy: 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` -->
<!-- `IO_DEPLOY: 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` -->
<ol start="4">
<li><strong>切记，务必复制一下这个 token，否则之后只能编辑权限，找不到 token 值了，只能重新创建；</strong></li>
</ol>
</div></template>


