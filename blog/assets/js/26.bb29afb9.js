(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{308:function(v,_,l){"use strict";l.r(_);var i=l(13),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"linux-基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础"}},[v._v("#")]),v._v(" Linux 基础")]),v._v(" "),_("h2",{attrs:{id:"linux-vs-windows"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-vs-windows"}},[v._v("#")]),v._v(" Linux VS Windows")]),v._v(" "),_("h2",{attrs:{id:"centos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[v._v("#")]),v._v(" CentOS")]),v._v(" "),_("ul",[_("li",[v._v("Roasky")])]),v._v(" "),_("h3",{attrs:{id:"版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[v._v("#")]),v._v(" 版本")]),v._v(" "),_("h4",{attrs:{id:"版本主要变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本主要变化"}},[v._v("#")]),v._v(" 版本主要变化")]),v._v(" "),_("h2",{attrs:{id:"文件系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[v._v("#")]),v._v(" 文件系统")]),v._v(" "),_("blockquote",[_("p",[v._v("Linux 一切皆文件")])]),v._v(" "),_("h3",{attrs:{id:"vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[v._v("#")]),v._v(" Vim")]),v._v(" "),_("blockquote",[_("p",[v._v("shell 文本编辑")])]),v._v(" "),_("ul",[_("li",[v._v("vi\n"),_("ul",[_("li",[v._v("是 Unix 操作系统或者类 Unix 操作系统中最通用的文本编辑器")])])]),v._v(" "),_("li",[v._v("vim\n"),_("ul",[_("li",[v._v("从 vi 发展而来，高亮显示")]),v._v(" "),_("li",[v._v("编辑器之神")]),v._v(" "),_("li",[v._v("其他\n"),_("ul",[_("li",[v._v("Emacs\n"),_("ul",[_("li",[v._v("lisp 解释器")]),v._v(" "),_("li",[v._v("神之编辑器")]),v._v(" "),_("li",[v._v("可以管理系统/编辑文件/收发邮件/当浏览器")])])])])]),v._v(" "),_("li",[v._v("操作\n"),_("ul",[_("li",[v._v("三种模式")]),v._v(" "),_("li",[v._v("一般模式/普通模式\n"),_("ul",[_("li",[v._v("不能编辑文件")]),v._v(" "),_("li",[v._v("删除/复制/粘贴")])])]),v._v(" "),_("li",[v._v("编辑模式\n"),_("ul",[_("li",[v._v("编辑文本")])])]),v._v(" "),_("li",[v._v("命令模式\n"),_("ul",[_("li",[v._v("有时候命令模式也被当作一般模式")])])])])]),v._v(" "),_("li",[v._v("网络连接\n"),_("ul",[_("li",[v._v("网络连接模式\n"),_("ul",[_("li",[v._v("计算机网络基础知识，交换机，路由器，局域网等知识")]),v._v(" "),_("li",[v._v("桥接")]),v._v(" "),_("li",[v._v("NAT")])])]),v._v(" "),_("li",[v._v("修改静态 IP\n"),_("ul",[_("li",[v._v("桥接问题\n"),_("ul",[_("li",[v._v("虚拟机 ip 地址是动态分配的，所以不固定")]),v._v(" "),_("li",[v._v("服务器场景下，静态 IP 更为方便")])])]),v._v(" "),_("li",[_("code",[v._v("vim /etc/sysconfig/network-scripts/")]),v._v(" "),_("ul",[_("li",[v._v("查找 vmware 局域网网卡名 "),_("code",[v._v("ifconfig")])]),v._v(" "),_("li",[v._v("如 ens 33 "),_("code",[v._v("vim /etc/sysconfig/network-scripts/ifcfg-ens33")])])])])])]),v._v(" "),_("li",[v._v("修改主机名\n"),_("ul",[_("li",[v._v("查看当前主机名 "),_("code",[v._v("hostname")])]),v._v(" "),_("li",[v._v("修改当前主机名\n"),_("ol",[_("li",[_("code",[v._v("vim /ect/hostname")]),v._v(" 然后重启")]),v._v(" "),_("li",[_("code",[v._v("hostnamectl set-hostname <value>")]),v._v(" 实时修改")])])])])])])]),v._v(" "),_("li",[v._v("远程登陆\n"),_("ul",[_("li",[v._v("SSH")])])])])])]),v._v(" "),_("h2",{attrs:{id:"系统管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[v._v("#")]),v._v(" 系统管理")]),v._v(" "),_("ul",[_("li",[v._v("服务管理\n"),_("ul",[_("li",[v._v("进程：一个正在执行的程序或命令")]),v._v(" "),_("li",[v._v("服务：启动后，一直存在的、常驻内存的进程")]),v._v(" "),_("li",[v._v("基本语法\n"),_("ul",[_("li",[_("code",[v._v("service 服务名 status|start|stop|restart")])])])])])])]),v._v(" "),_("h2",{attrs:{id:"shell-常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shell-常用命令"}},[v._v("#")]),v._v(" shell 常用命令")]),v._v(" "),_("ul",[_("li",[v._v("帮助命令")]),v._v(" "),_("li",[v._v("文件目录")]),v._v(" "),_("li",[v._v("时间日期")]),v._v(" "),_("li",[v._v("用户管理")]),v._v(" "),_("li",[v._v("用户组管理")]),v._v(" "),_("li",[v._v("文件权限")]),v._v(" "),_("li",[v._v("搜索查找")]),v._v(" "),_("li",[v._v("压缩和解压")]),v._v(" "),_("li",[v._v("磁盘查看和分区")]),v._v(" "),_("li",[v._v("进程管理")]),v._v(" "),_("li",[v._v("crontab 系统定时任务")])]),v._v(" "),_("h2",{attrs:{id:"软件包管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件包管理"}},[v._v("#")]),v._v(" 软件包管理")]),v._v(" "),_("ul",[_("li",[v._v("RPM")]),v._v(" "),_("li",[v._v("YUM")])]),v._v(" "),_("h2",{attrs:{id:"系统管理-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统管理-2"}},[v._v("#")]),v._v(" 系统管理")]),v._v(" "),_("h3",{attrs:{id:"系统运行级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统运行级别"}},[v._v("#")]),v._v(" 系统运行级别")]),v._v(" "),_("ul",[_("li",[v._v("运行级别 runlevel\n"),_("ul",[_("li",[v._v("Linux 开机启动过程\n"),_("ul",[_("li",[v._v("开机")]),v._v(" "),_("li",[v._v("BIOS 自检和启动")]),v._v(" "),_("li",[v._v("引导分区 /boot 初始化")]),v._v(" "),_("li",[v._v("启动 init 进程：用户级别主动启动的第一个级别")]),v._v(" "),_("li",[v._v("判断当前系统的运行级别")]),v._v(" "),_("li",[v._v("根据运行界别启动对应的服务")])])]),v._v(" "),_("li",[v._v("Linux 系统的 7 中运行级别\n"),_("ul",[_("li",[v._v("0：系统停机状态；系统默认运行级别不能设为 0，否则不能正常启动")]),v._v(" "),_("li",[v._v("1：单用户工作状态；root 权限，用于系统维护，禁止远程登陆")]),v._v(" "),_("li",[v._v("2：多用户状态（没有 NFS 网络文件系统），不支持网络")]),v._v(" "),_("li",[v._v("3：完全的多用户状态（有 NFS），登陆后进入控制台命令行模式")]),v._v(" "),_("li",[v._v("4：系统未使用，保留")]),v._v(" "),_("li",[v._v("5：X11 控制台，登陆后进入 GUI 模式")]),v._v(" "),_("li",[v._v("6：系统正常关闭并重启，系统默认运行级别不能设为 6，否则无限循环重启")])])]),v._v(" "),_("li",[v._v("CentOS 7\n"),_("ul",[_("li",[v._v("运行级别简化为\n"),_("ul",[_("li",[v._v("multi-user.target 等价于原运行级别 3")]),v._v(" "),_("li",[v._v("graphical.target 等价于原运行级别 5")])])])])]),v._v(" "),_("li",[v._v("查看当前运行级别 "),_("code",[v._v("systemctl get-default")])]),v._v(" "),_("li",[v._v("修改当前运行级别 "),_("code",[v._v("systemctl set <TARGET.target>")])])])])]),v._v(" "),_("h3",{attrs:{id:"配置服务开机自启"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置服务开机自启"}},[v._v("#")]),v._v(" 配置服务开机自启")]),v._v(" "),_("ul",[_("li",[v._v("CentOS 6\n"),_("ul",[_("li",[v._v("查看 "),_("code",[v._v("chkconfig --list")])]),v._v(" "),_("li",[v._v("修改 "),_("code",[v._v("chkconfig --level <runlevel> <service> on/off")])])])]),v._v(" "),_("li",[v._v("CentOS 7")])]),v._v(" "),_("h3",{attrs:{id:"防火墙"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[v._v("#")]),v._v(" 防火墙")]),v._v(" "),_("ul",[_("li",[v._v("查看 "),_("code",[v._v("systemctl status firewalld")])]),v._v(" "),_("li",[v._v("临时关闭 "),_("code",[v._v("systemctl stop firewalld")])]),v._v(" "),_("li",[v._v("开机启动 "),_("code",[v._v("systemctl enable firewalld.service")])]),v._v(" "),_("li",[v._v("开机关闭 "),_("code",[v._v("systemctl disabled firewalld.service")])])]),v._v(" "),_("h3",{attrs:{id:"关机重启命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关机重启命令"}},[v._v("#")]),v._v(" 关机重启命令")]),v._v(" "),_("h2",{attrs:{id:"shell-命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shell-命令"}},[v._v("#")]),v._v(" Shell 命令")]),v._v(" "),_("ul",[_("li",[v._v("BASH Shell")])])])}),[],!1,null,null,null);_.default=t.exports}}]);