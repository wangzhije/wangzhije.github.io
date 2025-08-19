<template><div><p><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Git 官方文档</a></p>
<p><a href="https://www.php.cn/manual/view/34943.html" target="_blank" rel="noopener noreferrer">Git 中文文档</a></p>
<p><a href="https://www.runoob.com/manual/git-guide/" target="_blank" rel="noopener noreferrer">Git 简明指南</a></p>
<p><a href="https://www.runoob.com/manual/github-git-cheat-sheet.pdf" target="_blank" rel="noopener noreferrer">Git 完整命令手册</a></p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<blockquote>
<p>分布式版本控制系统</p>
</blockquote>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程"><span>工作流程</span></a></h2>
<p><img src="@source/notes/Git/git/img/git-process.png" alt="Git工作流程"></p>
<h2 id="工作区、暂存区、版本库" tabindex="-1"><a class="header-anchor" href="#工作区、暂存区、版本库"><span>工作区、暂存区、版本库</span></a></h2>
<p><img src="@source/notes/Git/git/img/area.jpg" alt="工作区、暂存区、版本库"></p>
<h2 id="gitflow-分支管理模型" tabindex="-1"><a class="header-anchor" href="#gitflow-分支管理模型"><span>GitFlow 分支管理模型</span></a></h2>
<p><img src="@source/notes/Git/git/img/git-flow.png" alt="Git工作流程"></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<ul>
<li>三个级别：优先级从高到低
<ul>
<li>项目配置：项目根目录下的 <code v-pre>./git/config</code> 文件</li>
<li>用户配置：home directory 中的 <code v-pre>~/.gitconfig</code> 文件
<ul>
<li>home directory
<ul>
<li>Windows：一般都是 <code v-pre>C:\用户\&lt;用户名&gt;</code></li>
</ul>
</li>
</ul>
</li>
<li>系统配置：所用用户 <code v-pre>~/gitconfig/</code></li>
</ul>
</li>
<li>命令
<ul>
<li>设置用户名/邮箱
<ul>
<li><code v-pre>git config --[local/global/system] user.name &quot;wangzhijie&quot;</code></li>
<li><code v-pre>git config --[local/global/system] user.email 1662285571@qq.com</code></li>
</ul>
</li>
<li>记住密码
<ul>
<li><code v-pre>git config --[local/global/system] credential.helper store</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="初始化仓库" tabindex="-1"><a class="header-anchor" href="#初始化仓库"><span>初始化仓库</span></a></h2>
<ul>
<li>已有仓库
<ul>
<li><code v-pre>git clone &lt;projectName&gt;</code></li>
</ul>
</li>
<li>本地仓库
<ul>
<li>创建远程仓库
<ul>
<li>一般会选择创建 <code v-pre>.gitignore</code> <code v-pre>LICENSE</code> 文件</li>
</ul>
</li>
<li>初始化本地仓库 <code v-pre>git init</code></li>
<li>关联远程库 <code v-pre>git remote add origin &lt;gitRepoUrl&gt;</code>
<ul>
<li>修改关联仓库
<ul>
<li>删除 remote <code v-pre>git remote rm origin</code></li>
<li>重新设置 remote <code v-pre>git remote add origin &lt;gitRepoUrl&gt;</code></li>
</ul>
</li>
</ul>
</li>
<li>获取远程库，并与本地同步合并
<ul>
<li><code v-pre>git pull --rebase origin &lt;branchName&gt;</code>
<blockquote>
<p>git pull = git fetch + git merge；区别在于是否合并
merge 与 rebase 的使用</p>
</blockquote>
</li>
</ul>
</li>
<li>添加到暂存区 <code v-pre>git add .</code></li>
<li>将暂存区内容添加到本地版本库 <code v-pre>git commit -m &quot;commit message&quot;</code></li>
<li>提交当前分支到远端仓库，并切换到此分支 <code v-pre>git push -u origin master</code></li>
</ul>
</li>
</ul>
<h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h2>
<ul>
<li>创建本地分支 <code v-pre>git branch &lt;branchName&gt;</code></li>
<li>推送到远程分支 <code v-pre>git push -u origin &lt;branchName&gt;</code></li>
<li>切换分支 <code v-pre>git checkout &lt;branchName&gt;</code></li>
<li>从某个 commit 新建本地分支 <code v-pre>git checkout &lt;commitId&gt; -b &lt;branchName&gt;</code></li>
</ul>
</div></template>


