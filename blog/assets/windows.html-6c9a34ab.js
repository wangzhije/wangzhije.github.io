import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as a}from"./app-a98e131c.js";const d={},r=a(`<h1 id="mysql-环境搭建-windows" tabindex="-1"><a class="header-anchor" href="#mysql-环境搭建-windows" aria-hidden="true">#</a> MySQL 环境搭建（Windows）</h1><h3 id="检查是否已装-mysql" tabindex="-1"><a class="header-anchor" href="#检查是否已装-mysql" aria-hidden="true">#</a> 检查是否已装 MySQL</h3><ul><li>查看 <code>mysql --version</code></li></ul><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><ul><li>停止 MySQL 服务</li><li>卸载</li><li>残余文件的清理 <ul><li>服务目录：mysql 服务的安装目录</li><li>数据目录：默认在 C:\\ProgramData\\MySQL</li></ul></li><li>清理注册表（选做） <ul><li>打开注册表：在系统的搜索框中输入 <code>regedit</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Services\\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet002\\Services\\Eventlog\\Application\\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet002\\Services\\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Eventlog\\Application\\MySQL服务目录 删除HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\MySQL服务删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除环境变量配置</li></ul></li></ul><h3 id="下载、安装、配置" tabindex="-1"><a class="header-anchor" href="#下载、安装、配置" aria-hidden="true">#</a> 下载、安装、配置</h3><ul><li><a href="!https://www.mysql.com">下载</a></li><li>安装</li><li>配置：添加环境变量</li></ul><h3 id="服务的启动与停止" tabindex="-1"><a class="header-anchor" href="#服务的启动与停止" aria-hidden="true">#</a> 服务的启动与停止</h3><ul><li>图形界面工具 <ul><li>打开 windows 服务 <ol><li>计算机（点击鼠标右键）→ 管理 → 服务和应用程序 → 服务</li><li>控制面板 → 系统和安全 → 管理工具 → 服务</li><li>任务栏（点击鼠标右键）→ 启动任务管理器 → 服务</li><li>单击【开始】菜单，在搜索框中输入<code>services.msc</code>，按 Enter 键确认</li></ol></li><li>找到 MySQL80（点击鼠标右键）→ 启动或停止</li></ul></li><li>命令行 <ul><li>启动 <code>net start MySQL服务名</code></li><li>停止 <code>net stop MySQL服务名</code></li></ul></li></ul><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3><ul><li>MySQL 自带客户端 <ul><li>开始菜单 → 所有程序 → MySQL → MySQL 8.0 Command Line Client</li></ul></li><li>命令行 <ul><li><code>mysql -h 主机名 -P 端口号 -u 用户名 -p密码</code></li><li><code>mysql -h localhost -P 3306 -u root -proot</code></li></ul></li><li>退出 <ul><li><code>exit</code> 或 <code>quit</code></li></ul></li></ul><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><ul><li><code>mysql -V</code></li><li><code>mysql --version</code></li><li><code>mysql&gt; select version();</code></li></ul><h3 id="图形化界面工具" tabindex="-1"><a class="header-anchor" href="#图形化界面工具" aria-hidden="true">#</a> 图形化界面工具</h3><ul><li>Navicat Premium</li><li>DBeaver <ul><li>需要 JDK</li></ul></li><li>MySQL Workbench</li><li>SQLyog</li></ul><h3 id="mysql-目录结构与源码" tabindex="-1"><a class="header-anchor" href="#mysql-目录结构与源码" aria-hidden="true">#</a> MySQL 目录结构与源码</h3>`,16),o=[r];function t(c,s){return e(),i("div",null,o)}const u=l(d,[["render",t],["__file","windows.html.vue"]]);export{u as default};
