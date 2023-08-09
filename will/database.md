# 数据库

相关概念

- SQL
- MySQL
- DBS
- RDBS

数据库管理工具

- DBeaver
- Navicat Premium

知识图谱

- [数据库 知识图谱](!https://blog.csdn.net/qq_40272978/article/details/107164318)
- [MySQL 知识图谱](!https://blog.csdn.net/weixin_57693899/article/details/124491648)

学习链接

- [菜鸟教程 - SQL 教程](!https://www.runoob.com/sql/sql-tutorial.html)
- [牛客网 - MySQL 教程](!https://www.nowcoder.com/tutorial/10006/3fbb1dc787f34a9cad2c73be2b21d8d6)

相关书籍

- SQL 必知必会

## 本地环境搭建

- 安装 MySQL
- 安装 DBeaver
- 练习
  - 执行 SQL 脚本
  - SQL 语句

## SQL

> SQL 是用于访问和处理数据库的标准的计算机语言

### 使用 SQL 访问和处理数据系统中的数据

- 常用数据库
  - MySQL
  - SQL Server
  - Oracle
  - DB2
  - Access
  - Sybase

### SQL 数据类型

- Microsoft Access 数据类型
- MySQL 数据类型
- SQL Server 数据类型

### 语法

- 大小写不敏感
- `set names utf8` 命令用于设置使用的字符集
- `use RUNOOB` 命令用于选择数据库

### 语句

SELECT 查询语句

```sql
-- SELECT 查询
Select *
From table_name;

Select column1, column2, ...
From table_name;

-- SELECT DISTINCT 去重，查询
Select Distinct column1, column2, ...
From table_name;
```

WHERE 过滤子句

- `<>` 和 `!=` 都是不等于运算符
  - `<>`为最初的不等运算符（推荐使用），可移植性
  - `!=`为后来的不等运算
- `like` 模糊查询
  - `%` 表示多个字值，`_` 下划线表示一个字符；
  - `M%` : 为能配符，正则表达式，表示的意思为模糊查询信息为 M 开头的。
  - `%M%` : 表示查询包含 M 的所有内容。
  - `%M_` : 表示查询以 M 在倒数第二位的所有内容。

```sql
-- WHERE 过滤

-- 比较运算符
-- = > >= < <= <> != BETWEEN LIKE IN

-- 逻辑运算符
-- 优先级 () not and or
Select column1, column2, ...
From table_name
Where name='John' and age>=24;

-- 特殊条件

-- is null
Select * from emp where comm is null;
-- between and (在 之间的值)
Select * from emp where sal between 1500 and 3000;
-- In(可选值)
Select * from emp where sal in (5000,3000,1500);
-- Like（模糊查询）
Select * from emp where ename like 'M%';
```

Order By 关键字

```sql
-- 排序
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

### utf8 和 utf8mb4

## Mysql

### 下载

[官网下载地址](!https://dev.mysql.com/downloads/mysql/)

提示：可以不用登录直接下载 `No thanks,just start my download.`

### Mac 下载安装

1. 终端 `uname -a` 查看电脑是 x86 还是 ARM，选择对应的 `.dmg` 安装包下载
2. 安装
   1. 至 `Configuration` 选 `Use Legacy Password Encryption`
   2. Next 设置 password 密码
3. 查看 `系统偏好设置` 下方 `mysql` 图标，点击进入
   1. 左侧，看到 2 个绿色小标，代表安装成功
   2. 右侧，版本下有安装目录 `/usr/local/mysql/bin`
4. 配置
   1. 终端输入 `mysql` 提示 command not found mysql 代表没有配置环境
   2. 终端输入 `sudo vim ~/.zshrc` 编辑配置文件，向后添加 `export PATH=$PATH:/usr/local/mysql/bin`（第 3 步的安装目录）
   3. vim 编辑不多说了 `i esc :wq`
5. 终端输入 `mysql --version`，输出版本号，代表配置成功

### 使用

1. 终端输入 `mysql -uroot -p` 输入密码，进入 mysql 即可

- `-u` 即 username，root
- `-p` 即 password，root1234

其他

- 查看当前数据库 `$mysql> select database();`
- 创建数据库 `$mysql> `
- 切换数据库 `$mysql> use databaseName;`
- 退出数据库 `$mysql> exit;` `$mysql> quit;`
- 导入 .sql 文件
  - `$mysql> source /tour.sql`
  - `mysql -uroot -p root1234 tour < /Users/wangzhijie/Desktop/project/VueNode/server/tour.sql`
- nodejs 中连接 mysql 报错 `Client does not support authentication protocol requested by server；`
  - mysql 版本是 8 以后的，对密码的算法在 node 中不支持，所以需要去修改密码为旧版本
  - cmd 登录 `mysql -u root -p`，输入密码
  - `$mysql>use mysql;`
  - `$mysql>select user,host from user where user='root'`
  - `$mysql>ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;`
  - `$mysql>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';`
  - 刷新权限 `$mysql>FLUSH PRIVILEGES;`

## 数据库命名规范

- [数据库命名规范](!https://blog.csdn.net/hutuyaoniexi/article/details/124860414)
