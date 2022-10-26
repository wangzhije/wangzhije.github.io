# 云服务器搭建

常用云服务器：腾讯云服务器、阿里云服务器、UCloud 云服务器、华为云服务器

## 购买云服务器

我用的阿里云，轻量应用服务器

1. 初始化服务器

- 系统镜像（只有操作系统）
  - Alibaba Cloud Linux：阿里云官方操作系统
  - CentOS
  - Ubuntu
  - Debin
  - Windows
- 应用镜像（系统镜像 + 应用程序）
  - WordPress
    - 最流行的、最强大的博客和内容管理网站的工具平台，借助第三方开发的模板、插件，用户可实现多样化的个性化功能
    - 该镜像底层环境信息：Alibaba Cloud Linux，PHP，MySQL，Nginx
  - Docker
    - 当前最流行的开源容器引擎，可以让开发者将应用以及依赖包简单高效的打包至轻量级、可移植的容器中，实现更快速的应用交付、部署、迁移和扩展
    - 该镜像基于 CentOS 操作系统
  - LAMP
    - 预装了 Apache，MySQL 和 PHP 及相关组件支持，是最常见的搭建 Web 应用所需的环境
    - 该镜像基于 CentOS, PHP，MySQL，Apache
  - LNMP
    - 预装了 Nginx，MySQL 和 PHP 及相关组件支持，是常见的搭建 Web 应用所需的环境，因支持高并发性能受到广大用户欢迎。
    - 该镜像基于 Ubuntu, PHP，MySQL，Nginx
  - Node.js
    - 基于 Chrome JavaScript runtime 建立的平台，用于方便地搭建响应速度快、易于扩展的网络应用
    - 该镜像基于 CentOS 操作系统
  - Tomcat
    - 开源的性能稳定的 Java Web 应用服务器
    - 该镜像基于 CentOS, jdk, tomcat, MySQL, Nginx、

2. 站点设置：绑定域名，DNS 解析
3. 服务器安全设置：防火墙设置
   - HTTP：80 端口
   - HTTPS：443 端口
   - HTTPS：21 端口
   - SSH：22 端口
4. 应用部署：服务器运维
   - 远程连接：设置连接账号、密码；用于 Xshell、Xftp 远程工具使用

## 购买域名

顶级域名/域名后缀

- 国别域名：.cn, .us, .ru
- 国际通用域名：.com, .top, .xyz, .wang, .pub, .xin, .net 等 1000 多种

注意事项

- 查询域名是否被占用
- 不同域名后缀价钱不同
- 有些域名在国内是不能备案的

## 域名备案

实名认证，备案审核

- 备案主体
  - ICP 主体备案号
  - 备案状态
  - 主办单位名称：姓名
  - 主办单位性质：个人
  - 负责人姓名：姓名
  - 负责人手机：手机号
- 备案网站
  - 网站名称（有很多限制，被驳回好多次）
  - 网站备案号：备案主体-ICP 主体备案号
  - 网站域名
  - 负责人
  - 备案状态
