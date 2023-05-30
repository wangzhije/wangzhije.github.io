# pnpm

> - Fast, disk space efficient package manager
> - 快，节省磁盘空间，的 package 管理器

## 高效利用磁盘空间

硬链接(Hard Link)

```
硬连接指通过索引节点来进行连接。
在Linux的文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号(Inode Index)。
在Linux中，多个文件名指向同一索引节点是存在的。一般这种连接就是硬连接。
硬连接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬连接到重要文件，以防止“误删”的功能。其原因如上所述，因为对应该目录的索引节点有一个以上的连接。
只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。
也就是说，文件真正删除的条件是与之相关的所有硬连接文件均被删除。
```

软连接(Symbolic Link)

```
另外一种连接称之为符号连接，也叫软连接。
软链接文件有类似于Windows的快捷方式。
它实际上是一个特殊的文件。
在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。
```

## 支持 monorepo

monorepo 的宗旨就是用一个 git 仓库来管理多个子项目，所有的子项目都存放在根目录的 packages 目录下，那么一个子项目就代表一个 package。

monorepo 管理工具 `lerna`

项目参考：`babel`

## 安全

之前在使用 npm/yarn 的时候，由于 node_module 的扁平结构，如果 A 依赖 B， B 依赖 C，那么 A 当中是可以直接使用 C 的，但问题是 A 当中并没有声明 C 这个依赖。

因此会出现这种非法访问的情况。

但 pnpm 自创了一套依赖管理方式，很好地解决了这个问题，保证了安全性。

> [node_modules 结构历史](!./nodeModules.md)

## 不适用的场景

前面有提到关于 pnpm 的主要问题在于 symlink(软链接)在一些场景下会存在兼容的问题，可以参考作者在 nodejs 那边开的一个 [node discussion](https://github.com/nodejs/node/discussions/37509)

在里面作者提到了目前 nodejs 软连接不能适用的一些场景，希望 nodejs 能提供一种 link 方式而不是使用软连接，同时也提到了 pnpm 目前因为软连接而不能使用的场景:

- Electron 应用无法使用 pnpm
- 部署在 lambda 上的应用无法使用 pnpm
- 一些 nodejs 基础库不支持 symlink 的情况导致使用 pnpm 无法正常工作，不过这些库在迭代更新之后也会支持这一特性。

## 未来会做的一些事情

### 脱离 Node.js

具体可以参考 [pnpm discussions](https://github.com/pnpm/pnpm/discussions/3434)

安装 pnpm 的， 可以基本上脱离掉 nodejs 这个 runtime 去进行安装使用。

可以通过 pnpm 来使用不同版本的 nodejs 来去做依赖安装，类似于 nvm 提供的功能。

目前该特性其实已经到了 [beta 版本](https://www.npmjs.com/package/@pnpm/beta)，可以参考这个包。

管理不同版本的 nodejs 功能可以参考 env 这个子命令: [pnpm-cli-env](https://pnpm.io/cli/env)

### 使用 rust 写一些模块

具体可以看[pnpm discussion](https://github.com/pnpm/pnpm/discussions/3419)讨论的内容，大概就是作者希望给 pnpm 的一些子命令提供一些 rust 的 cli wrapper 来做提升性能使用。

