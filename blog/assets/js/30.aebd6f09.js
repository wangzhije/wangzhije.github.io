(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{313:function(v,_,l){"use strict";l.r(_);var i=l(13),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"vmware-虚拟机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vmware-虚拟机"}},[v._v("#")]),v._v(" VMWare 虚拟机")]),v._v(" "),_("p",[v._v("Windows 下环境搭建，我的台式机")]),v._v(" "),_("h2",{attrs:{id:"安装-vmware"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装-vmware"}},[v._v("#")]),v._v(" 安装 VMWare")]),v._v(" "),_("p",[v._v("我的版本 VMware Workstation Pro 14.0")]),v._v(" "),_("ol",[_("li",[v._v("下载 "),_("code",[v._v("VMware-workstation-full-14.0.0.exe")])]),v._v(" "),_("li",[v._v("安装：正常的软件安装，不详细阐述了，只说下大体步骤\n双击运行 exe 程序\n同意许可，下一步\n选择安装目录，下一步\n安装\n完成")])]),v._v(" "),_("h2",{attrs:{id:"vmware-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vmware-配置"}},[v._v("#")]),v._v(" VMWare 配置")]),v._v(" "),_("ol",[_("li",[v._v("运行刚刚安装好的 VMWare 程序\n"),_("ul",[_("li",[v._v("许可证密钥")]),v._v(" "),_("li",[v._v("使用"),_("br"),v._v("\n点击完成")])])]),v._v(" "),_("li",[v._v("新建虚拟机")]),v._v(" "),_("li",[v._v("新建虚拟机向导\n"),_("ul",[_("li",[v._v("典型")]),v._v(" "),_("li",[_("strong",[v._v("自定义")]),v._v("：选择自定义（要不然怎么学习嘛，自己配置），下一步")])])]),v._v(" "),_("li",[v._v("硬件兼容\n"),_("ul",[_("li",[v._v("选择最新版本，下一步")])])]),v._v(" "),_("li",[v._v("安装虚拟机的操作系统\n"),_("ul",[_("li",[v._v("安装程序光盘")]),v._v(" "),_("li",[_("strong",[v._v("安装程序光盘映像文件(iso)")]),v._v("：直接安装")]),v._v(" "),_("li",[_("strong",[v._v("稍后安装操作系统")]),v._v("：也可以稍后安装")])])]),v._v(" "),_("li",[v._v("选择虚拟机操作系统\n"),_("ul",[_("li",[v._v("操作系统：Linux")]),v._v(" "),_("li",[v._v("版本：CentOS 7 64 位")])])]),v._v(" "),_("li",[v._v("命名虚拟机\n"),_("ul",[_("li",[v._v("虚拟机名称：相当于给电脑取名")]),v._v(" "),_("li",[v._v("位置：安装目录，为了以后记载速度快，建议选择固态硬盘上")])])]),v._v(" "),_("li",[v._v("处理器设置\n"),_("ul",[_("li",[v._v("查看物理机（我们电脑）CPU 个数：我电脑 内核 6 逻辑处理器 12，即 6 核 12 线程")]),v._v(" "),_("li",[v._v("处理器数量")]),v._v(" "),_("li",[v._v("每个处理器的内核数量")])])]),v._v(" "),_("li",[v._v("内存设置\n"),_("ul",[_("li",[v._v("建议 4GB，不能给太多，后期如果多台虚拟机同时启动负担太重")])])]),v._v(" "),_("li",[v._v("上网方式")])]),v._v(" "),_("ul",[_("li",[v._v("桥接模式：相当于独立主机，需要自行配置 IP 地址、子网掩码，并且还要和宿主机器处于同一网段")]),v._v(" "),_("li",[_("strong",[v._v("NAT")]),v._v("：选择 NAT 即可，通过宿主机器所在的网络来访问公网")]),v._v(" "),_("li",[v._v("仅主机模式网络")])]),v._v(" "),_("ol",{attrs:{start:"12"}},[_("li",[v._v("选择对应的的文件系统 IO 方式（按推荐的来）")]),v._v(" "),_("li",[v._v("选择磁盘类型（按推荐的来）")]),v._v(" "),_("li",[v._v("选择磁盘种类")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("创建虚拟磁盘")]),v._v("：选择这个")]),v._v(" "),_("li",[v._v("使用现有虚拟磁盘")]),v._v(" "),_("li",[v._v("使用物理磁盘")])]),v._v(" "),_("ol",{attrs:{start:"15"}},[_("li",[v._v("指定磁盘容量")])]),v._v(" "),_("ul",[_("li",[v._v("立即分配所有磁盘空间")]),v._v(" "),_("li",[v._v("将虚拟机磁盘存储为单个文件")]),v._v(" "),_("li",[_("strong",[v._v("将虚拟机磁盘拆分为多个文件")]),v._v("：选这个")])]),v._v(" "),_("ol",{attrs:{start:"16"}},[_("li",[v._v("磁盘文件保存目录")])]),v._v(" "),_("ul",[_("li",[v._v("找 第 7 步 的安装目录下")])]),v._v(" "),_("ol",{attrs:{start:"17"}},[_("li",[v._v("配置完成，之后也可以修改")])]),v._v(" "),_("h2",{attrs:{id:"安装操作系统-centos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装操作系统-centos"}},[v._v("#")]),v._v(" 安装操作系统 CentOS")]),v._v(" "),_("p",[v._v("RedHat、CentOS、Debian、Ubuntu 分不清楚？查看"),_("RouterLink",{attrs:{to:"/basic/Linux/env/Linux.html"}},[v._v("Linux 发行版")])],1),v._v(" "),_("ol",[_("li",[v._v("查看 BIOS 是否开启\n"),_("ul",[_("li",[v._v("如果 BIOS 虚拟化没有开启\n"),_("ul",[_("li",[v._v("重启电脑，在加载界面时按 F1-F10")]),v._v(" "),_("li",[v._v("具体怎么进入得去查一下（按照自己电脑的型号去查）")])])]),v._v(" "),_("li",[v._v("修改虚拟化为开启")])])]),v._v(" "),_("li",[v._v("选择 CD/DVD 的方式安装系统")]),v._v(" "),_("li",[v._v("选择对应的 ISO 镜像文件，如 CentOS 7")]),v._v(" "),_("li",[v._v("开启虚拟机，开始安装系统")]),v._v(" "),_("li",[v._v("选中 Installed CentOS 7，回车")]),v._v(" "),_("li",[v._v("选择语言：简体中文")]),v._v(" "),_("li",[v._v("选择时间（和物理主机保持一直）")]),v._v(" "),_("li",[v._v("选择 GUI（图形化界面）方式")]),v._v(" "),_("li",[v._v("磁盘分区\n"),_("ul",[_("li",[_("strong",[v._v("自动配置分区")]),v._v("：可以先选这个")]),v._v(" "),_("li",[_("strong",[v._v("手动配置分区")]),v._v("：这部分稍微比较复杂，等熟悉后可以自己分区")])])]),v._v(" "),_("li",[v._v("点击开始安装，时间较长，等")]),v._v(" "),_("li",[v._v("设置 root 账号密码，一定要记住账号和密码，怕记不住就 账号root 密码root")]),v._v(" "),_("li",[v._v("重启，登录，即可")])]),v._v(" "),_("h2",{attrs:{id:"可能遇到的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可能遇到的问题"}},[v._v("#")]),v._v(" 可能遇到的问题")]),v._v(" "),_("ul",[_("li",[v._v("虚拟机内 Linux 系统，与外网无法连通："),_("code",[v._v("ping www.baidu.com")])]),v._v(" "),_("li",[v._v("虚拟机内 Linux 系统，与宿主物理机无法连通 "),_("code",[v._v("ping 192.168.125.1")])]),v._v(" "),_("li",[v._v("虚拟机内 Linux 系统，节点与节点之间无法连通（如果装了多个Linux节点的话）")])]),v._v(" "),_("p",[v._v("需要修改网络配置")]),v._v(" "),_("h2",{attrs:{id:"网络配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络配置"}},[v._v("#")]),v._v(" 网络配置")])])}),[],!1,null,null,null);_.default=t.exports}}]);