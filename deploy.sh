#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/wangzhije

# 
git remote add origin https://github.com/wangzhije/wangzhije.github.io.git
git pull --rebase https://github.com/wangzhije/wangzhije.github.io.git main
git add .
git commit -m "auto deploy"
git push


cd ../
rm -rf wangzhije