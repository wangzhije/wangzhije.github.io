<template><div><blockquote>
<p>Linux 一切皆文件</p>
</blockquote>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2>
<table>
<thead>
<tr>
<th>路径</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/</code></td>
<td></td>
</tr>
<tr>
<td><strong>系统启动</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/boot</code></td>
<td>启动 Linux 时使用的内核文件，包括连接文件以及镜像文件</td>
</tr>
<tr>
<td><code v-pre>/etc</code></td>
<td>系统的配置文件和子目录列表</td>
</tr>
<tr>
<td><code v-pre>/sys</code></td>
<td>linux2.6 内核的一个很大的变化。文件系统 sysfs</td>
</tr>
<tr>
<td><code v-pre>/lib</code></td>
<td>存放基本代码库是个软连接，指向 /usr/lib 类似于 Windows 里的 DLL 文件</td>
</tr>
<tr>
<td><strong>指令</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/bin</code></td>
<td>可以直接执行的二进制命令 是个软连接，指向 /usr/bin</td>
</tr>
<tr>
<td><code v-pre>/sbin</code></td>
<td>系统管理员/超级用户，能够使用的二进制命令 是个软连接，指向 /usr/bin</td>
</tr>
<tr>
<td><strong>外部文件管理</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/dev</code></td>
<td>设备管理目录</td>
</tr>
<tr>
<td><code v-pre>/media</code></td>
<td>媒体目录，识别可移动媒体、U 盘、光驱等</td>
</tr>
<tr>
<td><code v-pre>/mnt</code></td>
<td>临时挂载别的文件系统的</td>
</tr>
<tr>
<td><strong>临时文件</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/run</code></td>
<td>临时文件系统，存储系统启动以来的信息</td>
</tr>
<tr>
<td><code v-pre>/lost+found</code></td>
<td>一般情况下为空的。系统非法关机后，这里就存放一些文件</td>
</tr>
<tr>
<td><code v-pre>/tmp</code></td>
<td>存放一些临时文件的</td>
</tr>
<tr>
<td><strong>账户</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/root</code></td>
<td>超级管理员目录</td>
</tr>
<tr>
<td><code v-pre>/home</code></td>
<td>普通用户目录</td>
</tr>
<tr>
<td><code v-pre>/usr</code></td>
<td><strong>重要目录</strong> 类似于 windows 下的 program files 目录</td>
</tr>
<tr>
<td><code v-pre>/usr/bin</code></td>
<td>系统用户 使用的指令和应用程序</td>
</tr>
<tr>
<td><code v-pre>/usr/sbin</code></td>
<td>超级用户 使用的比较高级的管理程序和系统守护程序</td>
</tr>
<tr>
<td><code v-pre>/usr/src</code></td>
<td>内核源代码默认的放置目录</td>
</tr>
<tr>
<td><code v-pre>/tmp</code></td>
<td>存放一些临时文件的</td>
</tr>
<tr>
<td><strong>运行</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/var</code></td>
<td>经常修改的数据，比如程序运行的日志文件（/var/log 目录下）</td>
</tr>
<tr>
<td><code v-pre>/proc</code></td>
<td>管理内存空间！虚拟的目录，是系统内存的映射。</td>
</tr>
<tr>
<td><code v-pre>/tmp</code></td>
<td>存放一些临时文件的</td>
</tr>
<tr>
<td><strong>扩展</strong></td>
<td></td>
</tr>
<tr>
<td><code v-pre>/opt</code></td>
<td>默认是空的，我们安装额外软件可以放在这个里面</td>
</tr>
</tbody>
</table>
</div></template>


