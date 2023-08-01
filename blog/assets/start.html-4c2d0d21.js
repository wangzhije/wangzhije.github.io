import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as r,f as e}from"./app-a98e131c.js";const a={},s=e('<h1 id="mysql-概述" tabindex="-1"><a class="header-anchor" href="#mysql-概述" aria-hidden="true">#</a> MySQL 概述</h1><ul><li>使用 MySQL 的厂商 <ul><li>Facebook，Twitter， YouTube，阿里巴巴/蚂蚁金服，去哪儿，美团外卖，腾讯</li></ul></li><li>为什么如此多的厂商要选用 MySQL？大概总结的原因主要有以下几点： <ol><li>开放源代码，使用成本低。</li><li>性能卓越，服务稳定。</li><li>软件体积小，使用简单，并且易于维护。</li><li>历史悠久，社区用户非常活跃，遇到问题可以寻求帮助。</li><li>许多互联网公司在用，经过了时间的验证。</li></ol></li></ul><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li>MySQL 是一个 <strong>开放源代码</strong>的<strong>关系型数据库管理系统</strong> ，由瑞典 MySQL AB（创始人 Michael Widenius）公 司 1995 年开发，迅速成为开源数据库的 No.1</li><li>2008 被 Sun 收购（10 亿美金），2009 年 Sun 被 <strong>Oracle</strong> 收购。 <strong>MariaDB</strong> 应运而生。（MySQL 的创造者担心 MySQL 有闭源的风险，因此创建了 MySQL 的分支项目 MariaDB）</li><li>MySQL6.x 版本之后分为 <strong>社区版</strong> 和 <strong>商业版</strong></li><li>MySQL 是可以定制的，采用了 <strong>GPL</strong>（GNU General Public License） 协议，你可以修改源码来开发自己的 MySQL 系统</li><li>MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 <strong>4GB</strong> ，64 位系统支持最大的表文件为 <strong>8TB</strong></li><li>MySQL 使用 <strong>标准的 SQL 数据语言</strong> 形式</li><li>MySQL 可以允许运行于多个系统上，并且<strong>支持多种语言</strong>。这些编程语言包括 C、C++、Python、 Java、Perl、PHP 和 Ruby 等</li><li>MySQL 是一种关联数据库管理系统，将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性</li><li>MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。</li></ul><h2 id="mysql-发展史重大事件" tabindex="-1"><a class="header-anchor" href="#mysql-发展史重大事件" aria-hidden="true">#</a> MySQL 发展史重大事件</h2><h2 id="关于-mysql-8-0" tabindex="-1"><a class="header-anchor" href="#关于-mysql-8-0" aria-hidden="true">#</a> 关于 MySQL 8.0</h2><h2 id="关系型数据库和非关系型数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库和非关系型数据库" aria-hidden="true">#</a> 关系型数据库和非关系型数据库</h2><ul><li>关系型数据库（RDBMS）（二元关系：即二维表格形式） <ul><li>行/列</li><li>SQL 就是关系型数据库的查询语言</li><li>优势 <ul><li>复杂查询 可以用 SQL 语句方便的在一个表以及多个表之间做非常复杂的数据查询。</li><li>事务支持 使得对于安全性能很高的数据访问要求得以实现。</li></ul></li></ul></li><li>非关系型数据库（非 RDBMS） <ul><li>基于键值对存储数据</li><li>不需要经过 SQL 层的解析，性能非常高</li><li>类别 <ul><li>键值型数据库 <ul><li>使用场景：<strong>内存缓存</strong></li><li>Redis、</li></ul></li><li>文档型数据库 <ul><li>此类数据库可存放并获取文档，可以是 XML、JSON 等格式</li><li>基本单位：文档</li><li>MongoDB、有 CouchDB</li></ul></li><li>搜索引擎数据库 <ul><li>Elasticsearch、Solr、Splunk</li></ul></li><li>列式数据库 <ul><li>行式存储的数据库 <ul><li>Oracle、MySQL、SQL Server 等数据库都是采用的行式存储（Row-based）</li></ul></li><li>列式存储的数据库 <ul><li>HBase</li></ul></li><li>优势 <ul><li>可以大量降低系统的 I/O，适合于分布式文件系统</li></ul></li><li>劣势 <ul><li>功能相对有限</li></ul></li></ul></li><li>图形数据库 <ul><li>存储图形关系的数据库</li><li>Neo4J、InfoGrid</li></ul></li></ul></li></ul></li><li>NoSQL 的演变</li></ul>',8),t=[s];function o(n,u){return i(),r("div",null,t)}const d=l(a,[["render",o],["__file","start.html.vue"]]);export{d as default};
