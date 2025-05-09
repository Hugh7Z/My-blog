# 个人博客项目

这是一个使用 Next.js 构建的个人博客项目，采用现代化的技术栈和最佳实践。

## 项目结构

```
blog/
├── components/                 # React组件目录
│   ├── Navbar.js             # 导航栏组件
│   ├── Footer.js             # 页脚组件
│   ├── Sidebar.js            # 侧边栏组件
│   └── ArticleCard.js        # 文章卡片组件
│
├── pages/                    # 页面目录
│   ├── _app.js              # 应用入口
│   ├── index.js             # 首页
│   ├── about.js             # 关于页面
│   ├── projects.js          # 项目展示页面
│   └── posts/               # 文章页面目录
│       └── [id].js          # 动态文章页面
│
├── public/                   # 静态资源目录
│   ├── images/              # 图片资源
│   │   ├── projects/       # 项目图片
│   │   └── posts/          # 文章图片
│   └── favicon.ico         # 网站图标
│
├── styles/                   # 样式文件目录
│   ├── globals.css         # 全局样式
│   └── theme.css           # 主题样式
│
├── data/                    # 数据文件目录
│   ├── posts.js            # 文章数据
│   └── projects.js         # 项目数据
│
├── lib/                     # 工具函数目录
│   └── posts.js            # 文章处理函数
│
├── node_modules/           # 依赖包目录
├── package.json            # 项目配置文件
├── next.config.js          # Next.js配置
├── ecosystem.config.js     # PM2配置
├── blog.conf              # Nginx配置
└── backup.sh              # 备份脚本
```

## 文件说明

### 组件文件
- `components/Navbar.js`: 导航栏组件，包含网站导航和响应式菜单
- `components/Footer.js`: 页脚组件，包含版权信息和链接
- `components/Sidebar.js`: 侧边栏组件，显示个人信息和文章目录
- `components/ArticleCard.js`: 文章卡片组件，用于展示文章预览

### 页面文件
- `pages/_app.js`: Next.js应用入口，配置全局样式和布局
- `pages/index.js`: 首页，展示最新文章和项目
- `pages/about.js`: 关于页面，展示个人信息
- `pages/projects.js`: 项目展示页面
- `pages/posts/[id].js`: 动态文章页面，根据文章ID显示内容

### 样式文件
- `styles/globals.css`: 全局样式定义
- `styles/theme.css`: 主题相关样式，包含颜色变量和动画效果

### 数据文件
- `data/posts.js`: 文章数据，包含文章内容和元数据
- `data/projects.js`: 项目数据，包含项目信息和链接

### 工具函数
- `lib/posts.js`: 文章处理函数，用于获取和处理文章数据

### 配置文件
- `package.json`: 项目依赖和脚本配置
- `next.config.js`: Next.js框架配置
- `ecosystem.config.js`: PM2进程管理配置
- `blog.conf`: Nginx服务器配置
- `backup.sh`: 自动备份脚本

## 依赖关系

### 系统依赖
- Node.js (v14+)
- Nginx
- PM2
- Git
- Certbot (SSL证书)

### 项目依赖
```json
{
  "dependencies": {
    "next": "^12.0.0",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "tailwindcss": "^2.0.0",
    "gray-matter": "^4.0.0",
    "remark": "^13.0.0",
    "remark-html": "^13.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^7.0.0",
    "eslint-config-next": "^12.0.0"
  }
}
```

## 部署配置

### PM2配置 (ecosystem.config.js)
```javascript
module.exports = {
  apps: [{
    name: 'blog',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
```

### Nginx配置 (blog.conf)
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 备份脚本 (backup.sh)
```bash
#!/bin/bash
BACKUP_DIR="/var/backups/blog"
DATE=$(date +%Y%m%d)
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/blog_$DATE.tar.gz /var/www/blog
find $BACKUP_DIR -type f -mtime +30 -delete
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建项目
npm run build

# 生产环境运行
npm start
```

## 部署命令

```bash
# 启动应用
pm2 start ecosystem.config.js

# 停止应用
pm2 stop blog

# 重启应用
pm2 restart blog

# 查看日志
pm2 logs blog
```

## 维护命令

```bash
# 测试Nginx配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx

# 执行备份
./backup.sh
```

## 注意事项

1. 确保所有配置文件中的域名和路径都已正确设置
2. 定期更新系统和依赖包
3. 保持备份的及时性
4. 监控服务器资源使用情况
5. 定期检查日志文件

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
