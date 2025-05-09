#!/bin/bash

# 设置备份目录
BACKUP_DIR="/var/backups/blog"
DATE=$(date +%Y%m%d)

# 创建备份目录
mkdir -p $BACKUP_DIR

# 备份项目文件
tar -czf $BACKUP_DIR/blog_$DATE.tar.gz /var/www/blog

# 备份数据库（如果有）
# mysqldump -u username -p database > $BACKUP_DIR/database_$DATE.sql

# 删除30天前的备份
find $BACKUP_DIR -type f -mtime +30 -delete 