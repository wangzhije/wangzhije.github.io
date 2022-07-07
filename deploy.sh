#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包
npm run docs:build

# git 命令
git add .
git commit -m "auto deploy"
git push https://github.com/wangzhije/wangzhije.github.io.git

