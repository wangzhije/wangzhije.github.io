<template><div><h2 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone"><span>Git clone</span></a></h2>
<h3 id="git-clone-慢的解决" tabindex="-1"><a class="header-anchor" href="#git-clone-慢的解决"><span><code v-pre>git clone</code> 慢的解决</span></a></h3>
<p><code v-pre>git clone --depth 1 &lt;repository&gt;</code></p>
<ul>
<li>为什么快？下载的内容少了。</li>
<li>代码是全的吗？是的。完全可以正常开发、拉取、提交</li>
<li>下载内容少了什么？ 历史 commit</li>
<li>问题 1：历史 commit
<ul>
<li><code v-pre>git reset</code> 不能切换到历史 commit</li>
<li><code v-pre>git pull</code> 不能拉取历史 commit</li>
<li>解决：<code v-pre>git pull --unshallow</code> 需要的时候再下载历史 commit 就行了</li>
</ul>
</li>
<li>问题 2：分支 branch
<ul>
<li>拉取到本地的代码库只有一个主分支，不能查看到所有分支，不能切换分支</li>
<li>直接 fetch 不行，fetch 用于拉取新的 commit 到本地</li>
<li>解决：修改 fetch 配置
<ul>
<li>单个分支 <code v-pre>git config remote.origin.fetch &quot;+refs/heads/&lt;branchName&gt;:refs/remotes/origin/&lt;branchName&gt;&quot;</code></li>
<li>所有分支 <code v-pre>git config remote.origin.fetch &quot;+refs/heads/*:refs/remotes/origin/*&quot;</code></li>
</ul>
</li>
</ul>
</li>
<li>Git 底层
<ul>
<li>glob 对象: 存储文件内容</li>
<li>tree 对象: 存储文件路径</li>
<li>commit 对象: 存储 commit，关联多个 tree</li>
</ul>
</li>
</ul>
</div></template>


