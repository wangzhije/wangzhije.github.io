# cnpm

国内使用 npm 存在的问题

- 安装 npm 后，每次我们安装包时，是去 npm 仓库获取包
- 因为 npm 的远程服务器在国外，所以有时候难免出现访问过慢，甚至无法访问的情况

npm 仓库地址

- 默认地址为：http://registry.npmjs.org
- 查看当前 npm 仓库地址命令：`npm config get registry`

为了解决这个问题，我们有以下几个解决办法

## 直接安装淘宝提供的 cnpm

- 安装 cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 以后使用 `cnpm install webpack -D`

## 替换 npm 仓库地址为淘宝镜像地址

- `npm config set registry https://registry.npm.taobao.org`
- 以后使用 `npm install webpack -D`
