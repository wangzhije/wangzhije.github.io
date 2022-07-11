# GitHub 只要发现 .github/workflows 目录里面有 .yml 文件，就会自动运行该文件

# workflow 名称
name: Build and Deploy

# 事件监听
on:
  # push 时触发
  push:
    # 指定分支 main
    branches:
      - main

# 需要执行的任务; 依次运行 jobs
jobs:
  # 任务名称：打包并发布
  build-and-deploy:
    # 运行所需要的虚拟机环境
    runs-on: ubuntu-latest
    # 需要的步骤
    steps:
    - name: Checkout
      uses: actions/checkout@main
      
    - name: deploy
      uses: actions/deploy-pages@main
      # env:
      #   ACCESS_TOKEN: ${{ secrets.IO_DEPLOY }}
      #   TARGET_REPO: wangzhije/wangzhije.github.io
      #   TARGET_BRANCH: main
      #   BUILD_SCRIPT: npm && npm run docs:build
      #   BUILD_DIR: /blog
        # CNAME: https://www.xxx.com