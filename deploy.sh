#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包
npm run docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# git 命令
# git pull --rebase https://wangzhije:WZJforever22411%24%40github.com/wangzhije/wangzhije.github.io.git main
git add .
git commit -m "auto deploy"
git push -f https://wangzhije:WZJforever22411%24%40github.com/wangzhije/wangzhije.github.io.git

