---
title: git config
createTime: 2025/08/25 01:35:36
permalink: /tools/git/zh31je6c/
---

```bash
# 配置用户名
git config --[local/global/system] user.name "yourname"

# 配置用户邮箱
git config --[local/global/system] user.email "youremail@xxx.com"

# 查看当前的配置信息
git config --[local/global/system] --list

# 记住密码
git config --[local/global/system] credential.helper store

# 文件区分大小写
git config --[local/global/system] core.ignorecase fasle

# 通过 alias 配置简写
## 例如使用 git co 代替 git checkout
git config --[local/global/system] alias.co checkout
```

local/global/system三个级别：优先级从高到低
- local 项目配置
    - 项目根目录下的 `./git/config` 文件
- global 用户配置
    - MacOS 中的 `~/.gitconfig` 文件
    - Windows：一般是 `C:\用户\<用户名>`
- system 系统配置
    - MacOS 中的 `/etc/gitconfig`
    - Windows：一般是 `/mingw64/etc/gitconfig`