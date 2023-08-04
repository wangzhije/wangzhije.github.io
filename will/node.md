# Node.js

相关概念

知识图谱

学习链接

相关书籍

## 内置核心模块

### 基础

### 网络

## 本地环境搭建

## 数据库使用

## Web Server 开发

### 框架

#### Express

项目搭建

- 脚手架 express-generator

```sh
# express-generator 搭建

# 方式一：npm 全局安装
npm install -g express-generator
express --view=pug express-start
# 方式二：npx
npx express-generaotor --view=pub express-start
```

目录结构

```
express-start
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```

- 自定义 手动搭建

```sh
# 自定义 手动搭建

# 创建工作目录
mkdir express-start
# 进入工作目录
cd express-start
# npm 初始化；-y 默认全部 yes
npm init -y

# 安装 express
npm install --save express
```

中间件

- 应用级 中间件
- 路由级 中间件
- 错误处理 中间件
- 内置 中间件
- 第三方 中间件

路由

```js
const express = require("express");
const app = express();

// 注册路由
app.get(url, handler);
app.post(url, handler);
app.put(url, handler);
app.delete(url, handler);
```

静态文件

`express.static` 内置中间件

```js
// 语法
// express.static(root, [options]);

// 示例
const path = require("path");
// 即可访问 /image/logo.png
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "files")));
// 即可访问 /static/image/logo.png
app.use("/static", express.static(path.join(__dirname, "public")));
```

Koa

脚手架 koa-generator

Egg

MidWay

### 常见功能

大文件上传

## node 部署

### 操作系统

1. 操作系统环境准备

```sh
// 系统升级命令
yum update
// 压缩包zip上传下载命令
yum install lrzsz
```

2. 安装 nginx

```sh

// 安装nginx
yum install nginx
// 启动/重启nginx服务
nginx / nginx -s reload
```

```sh
// 安装MySQL
wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
rpm -ivh mysql57-community-release-el7-9.noarch.rpm
yum -y install mysql-community-server
// 启动MySQL服务
systemctl start mysqld.service
// 测试访问数据库端口是否开启
netstat -tnlp grep 3306
// 查看数据库初始密码
grep "password" /var/log/mysqld.log
// 连接数据库，输入密码登录
mysql -uroot -p
// 设置字符编码UTF8
vim /etc/my.cnf
    [client]
        default-character-set=utf8
    [mysqld]
        character-set-server=utf8
        collation-server=utf8_general_ci
// 重启MySQL服务
systemctl restart mysqld.service
```

3. 安装 node.js

```sh
// 安装
wget https://nodejs.org/dist/v10.16.2/node-v10.16.2-linux-x64.tar.xz
// 解压
tar xf node-v10.16.2-linux-x64.tar.xz
// 修改文件名
mv node-v10.16.2-linux-x64 nodejs
// 建立软连接（环境变量）
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/
ln -s /usr/local/nodejs/bin/node /usr/local/bin/
// 重启服务，打印显示版本号表示安装成功
node -v
```

4. 安装 PM2

```sh
npm install -g pm2
// 建立软连接
ln -s /usr/local/nodejs/bin/pm2 /usr/local/bin/
// 打印显示版本号表示安装成功
pm2 -v
```

5. 相关命令

```sh
// 启动
pm2 start/restart ecosystem.config.js
// 日志
pm2 log
```

## 工具链

- 编辑器
  - VSCode
- 依赖管理
  - npm
  - cnpm
  - yarn
  - pnpm
- 单元测试
  - 测试框架
    - Mocha
    - Jest
    - Ava
  - 断言库
    - should
    - chai
  - 覆盖率
    - nyc
- 代码辅助
  - 代码规范
    - eslint
- 调试
  - VSCode 调试
  - `--inspect + devTools`
- 代码托管
  - Git
