# Work

## Git + Sonar：代码库获取文件变更清单

- 仅获取文件变更清单
  - `git diff --name-only [SHA1 [SHA2]]`
  - 示例 `git diff --name-only HEAD^5 HEAD`
- 获取文件变更清单，及改动类型
  - `git diff --name-only --online [SHA1 [SHA2]]`
  - 示例 `git diff --name-only commitId1 commitId2`
  - 改动类型
    - M modified
    - C copy-edit
    - A added
    - D delete
    - U unmergedsss
- 结合规范
  1. 获取 master 分支最新的 commitID `git rev-parse --short origin/master`
  2. 获取待扫描代码分支的最新 commitID `git rev-parse --short HEAD`
  3. 获取文件变更清单 `git diff --name-only startCommitId endCommitId`
- Sonar 脚本配置模板

```bash
# Sonar 脚本配置模版

## 备份并执行删除清单之外文件
rm -rf 【副本项目名称】
cp -rf 【原项目名称】【副本项目名称】
rm -rf 【副本项目名称】 /src/main/*

## 获取 开始的commitId 和 结束的commitId
master_id=`git rev-parse --short origin/master`
saomiao_id=`git rev-parse --short origin/release`

# 获取所有文件变更清单，并输出到 log 文件
git diff --name-only ${master_id} ${saomiao_id} > saomiao_list_all.log
# 从所有文件变更清单中，匹配 src/main 目录下的，并标准输出到 log 文件
cat saomiao_list_all.log |grep "src/main" > saomiao_list_main.log

# 根据清单内容复制 class
rm -rf temp
mkdir temp
for file in 'cat saomiao_list_main.log'
# 递归生成目录结构
do
  filepath=${file%/*.*}
  mkdir -p temp/$filepath
  cp -r $file temp/$filepath/
done

#
cp -rf temp/【原项目名称】/*【副本项目名称】
```

## Ukey 流程、环境、使用
