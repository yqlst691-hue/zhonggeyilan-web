# 中格一蓝环保官网

河北中格一蓝环保科技有限公司官方网站项目。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4 + CSS 变量设计系统
- **部署**: 静态导出 (Static Export)
- **SEO**: next-sitemap 自动生成 sitemap 与 robots.txt

## 快速开始

### 环境要求

- Node.js >= 18.0
- npm >= 9.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看开发服务器。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `out/` 目录（静态导出模式）。

### 启动生产服务器

```bash
npm start
```

## 项目目录结构

```
zhonggeyilan-web/
├── app/                          # Next.js App Router 页面目录
│   ├── layout.tsx                # 根布局（全局元数据、字体、导航）
│   ├── globals.css               # 全局样式（Tailwind 指令 + CSS 变量）
│   ├── page.tsx                  # 首页
│   ├── not-found.tsx             # 自定义 404 页面
│   ├── products/                 # 产品中心
│   │   ├── page.tsx              # 产品列表页
│   │   ├── sludge-conditioner/   # 污泥调理剂
│   │   │   └── page.tsx
│   │   ├── composite-carbon-source/ # 复合碳源
│   │   │   └── page.tsx
│   │   └── bio-deodorant/        # 生物除臭剂
│   │       └── page.tsx
│   ├── solutions/                # 解决方案
│   │   └── ies-zero-carbon-fishery/ # IES零碳渔业技术
│   │       └── page.tsx
│   ├── cases/                    # 工程案例
│   │   └── page.tsx
│   ├── about/                    # 关于我们
│   │   └── page.tsx
│   ├── news/                     # 新闻动态
│   │   └── page.tsx
│   └── faq/                      # 常见问题
│       └── page.tsx
├── components/                   # 可复用组件（待创建）
├── public/                       # 静态资源（图片、图标等）
├── package.json                  # 项目依赖与脚本
├── next.config.js                # Next.js 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── postcss.config.js            # PostCSS 配置
├── tsconfig.json                # TypeScript 配置
├── next-sitemap.config.js       # Sitemap 生成配置
└── README.md                     # 项目说明文档
```

## 设计系统

项目采用 CSS 变量 + Tailwind CSS 双重设计系统：

| 变量名 | 色值 | 用途 |
|--------|------|------|
| `--primary` | `#0d9488` | 品牌主色（青绿色） |
| `--primary-dark` | `#096b63` | 主色深色变体 |
| `--dark` | `#0a2540` | 深色背景/文字 |

字体栈：`PingFang SC` > `Microsoft YaHei` > `sans-serif`

## GEO（生成式引擎优化）说明

本项目针对搜索引擎优化做了以下配置：

### 1. 页面元数据 (Metadata)

每个页面均配置了独立的 `metadata` 导出，包含：
- 中文标题与描述
- Open Graph 社交分享信息
- 规范 URL (canonical URL)
- 关键词标签

### 2. Sitemap 与 Robots.txt

使用 `next-sitemap` 在构建后自动生成：
- `sitemap.xml` - 站点地图，首页优先级 1.0，产品页 0.8，其他页面 0.7
- `robots.txt` - 搜索引擎爬虫指令

### 3. Schema.org 结构化数据

（待集成）建议在各页面添加 JSON-LD 结构化数据：
- `Organization` - 公司信息
- `Product` - 产品信息
- `FAQPage` - 常见问题
- `BreadcrumbList` - 面包屑导航

### 4. 静态导出 (Static Export)

配置 `output: 'export'` 实现全站静态化，优势：
- 加载速度极快
- 服务器资源占用低
- CDN 友好，全球加速
- 搜索引擎爬取效率高

## 开发规范

- 所有页面组件使用 TypeScript
- UI 文本与注释统一使用中文
- 使用 Tailwind CSS 工具类进行样式编写
- 每个页面必须导出 `metadata` 用于 SEO
- 组件放置在 `components/` 目录下

## 许可证

版权所有 (c) 河北中格一蓝环保科技有限公司
