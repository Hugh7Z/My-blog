#!/bin/bash

# 进入项目目录
cd /var/www/blog

# 拉取最新代码
echo "正在拉取最新代码..."
git pull

# 安装依赖
echo "正在安装依赖..."
npm install

# 构建项目
echo "正在构建项目..."
npm run build

# 重启 PM2 进程
echo "正在重启服务..."
pm2 restart My-blog

echo "部署完成！" 