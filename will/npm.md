# npm

## npm 报错

- npm i 报错问题

  - 依赖树解析错误
  - `npm i -- force` `npm i --legacy-peer-deps`
  - 然后执行 `npm audit --fix` 版本以来修复，则不会再报错

- 下载模板报错问题 `raw.githubusercontent.com`
  - [ipaddress 查询地址](!https://www.ipaddress.com/site/raw.githubusercontent.com)
  - 配置 hosts 文件
  ```sh
  Failed to download template from registry: request to https://raw.githubusercontent.com failed, reason: connect ECONNREFUSED 0.0.0.0:443
  ```
  ```sh
  # raw.Githubusercontent.com
  185.199.108.133 raw.Githubusercontent.com
  185.199.109.133 raw.Githubusercontent.com
  185.199.110.133 raw.Githubusercontent.com
  185.199.111.133 raw.Githubusercontent.com
  ```
