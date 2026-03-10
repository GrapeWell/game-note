# 游戏笔记

一个简约的游戏风格笔记网站，用于记录游戏攻略、心得和 Build 推荐。

## 功能特性

- 📝 基于 Markdown 的内容管理
- 🎮 多游戏分类支持
- 🏷️ 标签系统（支持标签页面和标签筛选）
- 🎬 自动视频链接嵌入（YouTube、Bilibili）
- 📱 响应式设计，支持移动端
- 🚀 高性能，SEO 优化
- 🌓 暗色模式切换（自动保存用户偏好）

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [MDX](https://mdxjs.com/) - Markdown 增强
- TypeScript

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:4321`

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 内容管理

### 创建文章

在 `src/content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2024-03-10
category: "游戏名称"
tags: ["攻略", "BD推荐"]
description: "文章描述"
draft: false
---

## 文章内容

这里是文章正文...
```

### Frontmatter 字段说明

- `title`: 文章标题（必填）
- `date`: 发布日期（必填）
- `category`: 游戏分类（必填）
- `tags`: 标签数组（可选）
- `description`: 文章描述（可选）
- `draft`: 是否为草稿（可选，默认 false）

### 嵌入视频

直接在 Markdown 中使用视频链接，会自动转换为嵌入式播放器：

```markdown
[视频标题](https://www.youtube.com/watch?v=VIDEO_ID)
[视频标题](https://www.bilibili.com/video/BV1234567890)
```

或者使用 iframe：

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="视频标题"></iframe>
```

## 项目结构

```
├── docs/                  # 项目文档
│   ├── intent.md         # 项目意图
│   ├── spec.md           # 功能规范
│   └── plan.md           # 实现方案
├── src/
│   ├── components/       # 组件
│   │   ├── Navigation.astro
│   │   └── SEO.astro
│   ├── content/          # 内容
│   │   ├── config.ts     # 内容集合配置
│   │   └── posts/        # 文章目录
│   ├── layouts/          # 布局
│   │   └── BaseLayout.astro
│   ├── pages/            # 页面
│   │   ├── index.astro   # 首页
│   │   ├── category/     # 分类页面
│   │   └── posts/        # 文章详情页
│   ├── plugins/          # 插件
│   │   └── remark-video-embed.js
│   ├── styles/           # 样式
│   │   └── global.css
│   └── utils/            # 工具函数
├── public/               # 静态资源
└── astro.config.mjs      # Astro 配置
```

## 部署

### 静态部署

构建后的文件在 `dist/` 目录，可以部署到任何静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### 配置站点 URL

在 `astro.config.mjs` 中修改 `site` 字段：

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

## SEO 优化

项目已内置 SEO 优化：

- 自动生成 sitemap
- Open Graph 标签
- Twitter Card 标签
- 结构化数据
- robots.txt

## 开发指南

### 添加新游戏

只需在 `src/content/posts/` 下创建新文章，使用新的 `category` 值，导航会自动更新。

### 自定义样式

在 `src/styles/global.css` 中修改全局样式。

### 添加新页面

在 `src/pages/` 目录下创建 `.astro` 文件。

## License

MIT
