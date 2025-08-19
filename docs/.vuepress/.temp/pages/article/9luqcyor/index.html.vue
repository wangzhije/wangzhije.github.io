<template><div><blockquote>
<p><a href="https://docs.github.com/cn/actions" target="_blank" rel="noopener noreferrer">Github Actions 中文文档</a></p>
</blockquote>
<p>GitHub Actions 正式发布于 2019 年 12 月。</p>
<p>GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。</p>
<p>GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。</p>
<p>GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。</p>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2>
<ul>
<li>workflow（工作流程）: 一个 workflow 就是一个完整的工作流过程，每个 workflow 包含一组 jobs 任务。</li>
<li>job（任务）: jobs 任务包含一个或多个 job ，每个 job 包含一系列的 steps 步骤</li>
<li>step（步骤）: 每个 step 步骤可以执行指令或者使用一个 action 动作</li>
<li>action（动作）: 每个 action 动作就是一个通用的基本单元</li>
</ul>
<h2 id="主要流程" tabindex="-1"><a class="header-anchor" href="#主要流程"><span>主要流程</span></a></h2>
<ol>
<li>如果 <code v-pre>.github/workflows</code> 目录不存在，请在仓库根目录中创建此目录</li>
<li>在 <code v-pre>.github/workflow</code> 目录中，创建一个名为 <code v-pre>actions.yml</code> 的文件</li>
</ol>
<ul>
<li>重点是 <code v-pre>.yml</code> 配置文件</li>
<li><a href="https://github.com/sdras/awesome-actions" target="_blank" rel="noopener noreferrer">awesome-actions</a></li>
</ul>
<ol start="3">
<li>向仓库的分支提交工作流程文件会触发 <code v-pre>push</code> 事件并运行工作流程</li>
<li>查看工作流程结果：Github --&gt; Repo --&gt; Actions</li>
</ol>
<h3 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml"><span>Yaml</span></a></h3>
<p>yml 是 YAML（YAML Ain’t Markup Language）语言的文件，以数据为中心，比 properties、xml 等更适合做配置文件，主要有以下几个特点:</p>
<ul>
<li>大小写敏感</li>
<li>使用缩进表示层级关系</li>
<li>缩进只能使用空格，不能用 TAB 字符</li>
<li>缩进的空格数量不重要，只要层级相同的元素左对齐即可</li>
<li><code v-pre>#</code> 表示注释</li>
</ul>
<h2 id="actions-secrets" tabindex="-1"><a class="header-anchor" href="#actions-secrets"><span>Actions Secrets</span></a></h2>
<p>Actions Secrets 是加密的环境变量。任何有权访问此存储库的都可以使用这些机密进行操作</p>
<p>Actions Secrets 不会传递给 fork 的仓库 pull request 触发的 workflow 工作流</p>
<h3 id="创建-actions-secrets" tabindex="-1"><a class="header-anchor" href="#创建-actions-secrets"><span>创建 Actions Secrets</span></a></h3>
<ul>
<li>Github 项目 --&gt; Settings --&gt; Secrets --&gt; Actions --&gt; 单击 New repository secret</li>
<li><VPLink href="!./../tokens.md">Github token 创建</VPLink></li>
<li>Name：创建 Github token 的 Note</li>
<li>Value：创建 Github token 生成的 token</li>
</ul>
<!-- ## 最佳实践

[个人博客网站/个人知识库网站快速搭建](!./../../../../frontend/Vue/vuePress/start.md)
- VuePress 搭建
- VuePress 部署 --></div></template>


