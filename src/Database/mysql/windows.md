# MySQL 环境搭建（Windows）

### 检查是否已装 MySQL

- 查看 `mysql --version`

### 卸载

- 停止 MySQL 服务
- 卸载
- 残余文件的清理
  - 服务目录：mysql 服务的安装目录
  - 数据目录：默认在 C:\ProgramData\MySQL
- 清理注册表（选做）
  - 打开注册表：在系统的搜索框中输入 `regedit`
  ```
    HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\Eventlog\Application\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\MySQL服务 目录删除 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application\MySQL服务目录 删除HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MySQL服务删除
  ```
  - 删除环境变量配置

### 下载、安装、配置

- [下载](!https://www.mysql.com)
- 安装
- 配置：添加环境变量

### 服务的启动与停止

- 图形界面工具
  - 打开 windows 服务
    1. 计算机（点击鼠标右键）→ 管理 → 服务和应用程序 → 服务
    2. 控制面板 → 系统和安全 → 管理工具 → 服务
    3. 任务栏（点击鼠标右键）→ 启动任务管理器 → 服务
    4. 单击【开始】菜单，在搜索框中输入`services.msc`，按 Enter 键确认
  - 找到 MySQL80（点击鼠标右键）→ 启动或停止
- 命令行
  - 启动 `net start MySQL服务名`
  - 停止 `net stop MySQL服务名`

### 登录

- MySQL 自带客户端
  - 开始菜单 → 所有程序 → MySQL → MySQL 8.0 Command Line Client
- 命令行
  - `mysql -h 主机名 -P 端口号 -u 用户名 -p密码`
  - `mysql -h localhost -P 3306 -u root -proot`
- 退出
  - `exit` 或 `quit`

### 查看版本

- `mysql -V`
- `mysql --version`
- `mysql> select version();`

### 图形化界面工具

- Navicat Premium
- DBeaver
  - 需要 JDK
- MySQL Workbench
- SQLyog

### MySQL 目录结构与源码
