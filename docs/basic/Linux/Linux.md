# Linux 基础



## Linux VS Windows

## CentOS

- Roasky

### 版本

#### 版本主要变化

## 文件系统

> Linux 一切皆文件

- 挂载点
  - 想做分区的话，首先要指定当前硬盘分区的文件系统格式
  - CentOS6
    - ext4 第四代扩展文件系统
  - CentOS7
    - xfs 64 位高性能日志文件系统，擅长处理大文件
  - 不同分区可以设置挂载点，设置文件存放目录

### 文件目录

> 约定大于配置

- /
  - /bin
    - binary，二进制
    - 可以直接执行的二进制命令
    - 是个软连接，指向 /usr/bin
  - /sbin
    - system binary，系统二进制
    - 系统管理员/超级用户，能够使用的二进制命令
    - 是个软连接，指向 /usr/sbin
  - /boot
    - 引导分区的挂载点
  - /lib
    - libary，库文件
    - 是个软连接，指向 /usr/lib
  - /lib64
    - 64 位特殊的库文件
    - 是个软连接，指向 /usr/lib64
  - /dev
    - device，设备管理目录
    - cpu
      - 2 个 cpu，4 核，8 个文件
  - /proc
    - process，进程目录，虚拟目录
  - /run
    - 运行目录，临时
  - /src
    - service，系统服务
  - /sys
    - 系统硬件相关文件
  - /var
    - 可变目录，如 log 日志文件
  - /usr
    - /usr/bin
    - /usr/sbin
    - /usr/lib
    - /usr/lib64
    - /usr/local
  - /etc
    - 系统管理的配置文件
  - /home
    - 普通用户目录
  - /root
    - 超级管理员目录
    - /root/Desktop
    - /root/Maildir
  - opt
    - option，可选目录
  - /media
    - 媒体目录，识别可移动媒体，u 盘，光驱
  - /mnt
    - 挂载目录
  - /tmp
    - 临时目录
    - 内存不够，首先可以查询删除
  - ...

### Vim

> shell 文本编辑

- vi
  - 是 Unix 操作系统或者类 Unix 操作系统中最通用的文本编辑器
- vim
  - 从 vi 发展而来，高亮显示
  - 编辑器之神
  - 其他
    - Emacs
      - lisp 解释器
      - 神之编辑器
      - 可以管理系统/编辑文件/收发邮件/当浏览器
  - 操作
    - 三种模式
    - 一般模式/普通模式
      - 不能编辑文件
      - 删除/复制/粘贴
    - 编辑模式
      - 编辑文本
    - 命令模式
      - 有时候命令模式也被当作一般模式
  - 网络连接
    - 网络连接模式
      - 计算机网络基础知识，交换机，路由器，局域网等知识
      - 桥接
      - NAT
    - 修改静态 IP
      - 桥接问题
        - 虚拟机 ip 地址是动态分配的，所以不固定
        - 服务器场景下，静态 IP 更为方便
      - `vim /etc/sysconfig/network-scripts/`
        - 查找 vmware 局域网网卡名 `ifconfig`
        - 如 ens 33 `vim /etc/sysconfig/network-scripts/ifcfg-ens33`
    - 修改主机名
      - 查看当前主机名 `hostname`
      - 修改当前主机名
        1. `vim /ect/hostname` 然后重启
        2. `hostnamectl set-hostname <value>` 实时修改
  - 远程登陆
    - SSH

## 系统管理

- 服务管理
  - 进程：一个正在执行的程序或命令
  - 服务：启动后，一直存在的、常驻内存的进程
  - 基本语法
    - `service 服务名 status|start|stop|restart`

## shell 常用命令

- 帮助命令
- 文件目录
- 时间日期
- 用户管理
- 用户组管理
- 文件权限
- 搜索查找
- 压缩和解压
- 磁盘查看和分区
- 进程管理
- crontab 系统定时任务

## 软件包管理

- RPM
- YUM

## 系统管理

### 系统运行级别

- 运行级别 runlevel
  - Linux 开机启动过程
    - 开机
    - BIOS 自检和启动
    - 引导分区 /boot 初始化
    - 启动 init 进程：用户级别主动启动的第一个级别
    - 判断当前系统的运行级别
    - 根据运行界别启动对应的服务
  - Linux 系统的 7 中运行级别
    - 0：系统停机状态；系统默认运行级别不能设为 0，否则不能正常启动
    - 1：单用户工作状态；root 权限，用于系统维护，禁止远程登陆
    - 2：多用户状态（没有 NFS 网络文件系统），不支持网络
    - 3：完全的多用户状态（有 NFS），登陆后进入控制台命令行模式
    - 4：系统未使用，保留
    - 5：X11 控制台，登陆后进入 GUI 模式
    - 6：系统正常关闭并重启，系统默认运行级别不能设为 6，否则无限循环重启
  - CentOS 7
    - 运行级别简化为
      - multi-user.target 等价于原运行级别 3
      - graphical.target 等价于原运行级别 5
  - 查看当前运行级别 `systemctl get-default`
  - 修改当前运行级别 `systemctl set <TARGET.target>`

### 配置服务开机自启

- CentOS 6
  - 查看 `chkconfig --list`
  - 修改 `chkconfig --level <runlevel> <service> on/off`
- CentOS 7

### 防火墙

- 查看 `systemctl status firewalld`
- 临时关闭 `systemctl stop firewalld`
- 开机启动 `systemctl enable firewalld.service`
- 开机关闭 `systemctl disabled firewalld.service`

### 关机重启命令

## Shell 命令

- BASH Shell
