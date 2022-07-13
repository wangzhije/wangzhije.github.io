# node_modules 结构演变

## 第一阶段：npm@3 之前版本

- 依赖树层级太深，会导致 Windows 上的目录路径过长问题
- 相同包在不同的依赖项中需要时，会存在多个相同副本

```
node_modules
└─ foo
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ bar
         ├─ index.js
         └─ package.json
```

## 第二阶段：npm@3 版本，扁平化处理

所有的依赖都被拍平到 node_modules 目录下，不再有很深层次的嵌套关系。

这样在安装新的包时，根据 node require 机制，会不停往上级的 node_modules 当中去找，如果找到相同版本的包就不会重新安装，解决了大量包重复安装的问题，而且依赖层级也不会太深。

```
node_modules
├─ foo
|  ├─ index.js
|  └─ package.json
└─ bar
   ├─ index.js
   └─ package.json
```

但还是存在一些问题

- 依赖结构的不确定性。
- 扁平化算法本身的复杂性很高，耗时较长。
- 项目中仍然可以非法访问没有声明过依赖的包
- 这就是为什么会产生依赖结构的不确定问题，也是 lock 文件诞生的原因，无论是 package-lock.json(npm 5.x 才出现)还是 yarn.lock，都是为了保证 install 之后都产生确定的 node_modules 结构。

尽管如此，npm/yarn 本身还是存在扁平化算法复杂和 package 非法访问的问题，影响性能和安全

## 第三阶段：pnpm

由于扁平化算法的极其复杂，以及会存在多项目间相同依赖副本的情况。pnpm 在尝试解决这些问题时，放弃了扁平化处理 node_modules 的方式。而是采用 硬链+软链 方式。

这种布局结构的一大好处是只有真正在依赖项中（package.json dependences）的包才能访问

```
node_modules
├─ .pnpm
|  ├─ foo@1.0.0/node_modules/foo
|  |  └─ index.js
|  └─ bar@2.0.0/node_modules/bar
├─ foo -> .pnpm/foo@1.0.0/node_modules/foo
└─ bar -> .pnpm/bar@2.0.0/node_modules/bar
```

### 举个例子

安装一个 express 依赖，会在 node_modules 中形成这样两个目录结构:

```
node_modules/express/...
node_modules/.pnpm/express@4.17.1/node_modules/xxx
```

其中第一个路径是 nodejs 正常寻找路径会去找的一个目录，如果去查看这个目录下的内容，会发现里面连个 node_modules 文件都没有：

```
▾ express
    ▸ lib
      History.md
      index.js
      LICENSE
      package.json
      Readme.md
```

实际上这个文件只是个软连接，它会形成一个到第二个目录的一个软连接(类似于软件的快捷方式)，这样 node 在找路径的时候，最终会找到 .pnpm 这个目录下的内容。

其中这个 .pnpm 是个虚拟磁盘目录，然后 express 这个依赖的一些依赖会被平铺到 .pnpm/express@4.17.1/node_modules/ 这个目录下面，这样保证了依赖能够 require 到，同时也不会形成很深的依赖层级。

在保证了 nodejs 能找到依赖路径的基础上，同时也很大程度上保证了依赖能很好的被放在一起。
