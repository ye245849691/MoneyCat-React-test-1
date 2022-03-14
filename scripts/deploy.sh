#!/usr/bin/env sh

# 当发生错误时中止脚本
# 构建
yarn build &&

# cd 到构建输出的目录下
cd build &&

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:ye245849691/MoneyCat-React-Website.git &&
git push -u origin main -f
cd -
