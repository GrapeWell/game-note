# Plan - 方案层

## 1. 技术栈
### 核心框架
| 类别 | 选型 | 版本 | 选择理由 |
|------|------|------|----------|
| 框架 | Astro | 5.x | SSG 优先、性能优秀 |
| 样式 | Tailwind | 4.x | 原子化 CSS、开发效率高 |

### 开发工具
| 类别 | 选型 | 用途 |
|------|------|------|
| 包管理 | pnpm | 依赖管理 |
| 类型检查 | TypeScript | 类型安全 |

## 2. 系统架构
### 整体架构图
┌─────────────────────────────────┐
│           用户浏览器              │
└───────────────┬─────────────────┘
                ↓
┌─────────────────────────────────┐
│          CDN / 边缘节点           │
└───────────────┬─────────────────┘
                ↓
┌─────────────────────────────────┐
│            静态资源               │
│   HTML / CSS / JS / Images      │
└─────────────────────────────────┘
### 目录结构
src/
├── assets/        # 静态资源
├── components/    # 可复用组件
├── layouts/       # 页面布局
├── pages/         # 页面路由
├── content/       # 内容集合
├── styles/        # 全局样式
├── utils/         # 工具函数
└── plugins/       # markdown自定义插件
## 3. 数据模型
interface Post {
  // Frontmatter 字段
  title: string;
  date: Date;
  category: string;
  tags?: string[];
  description?: string;
  // 自动生成字段
  slug: string;
  readingTime: number;
}

## 4. 接口设计
```javascript
// 获取所有已发布文章
const posts = await getCollection('posts', ({ data }) => {
  return data
});

// 按日期排序
const sortedPosts = posts.sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);
```
## 5. 部署方案
我自己处理，你不用管

## 6. 开发计划
### Phase 1：基础搭建
- [ ] 项目初始化
- [ ] 基础布局组件
- [ ] 首页
- [ ] 导航
- [ ] 文章列表

### Phase 2：功能完善
- [ ] 标签页面
- [ ] 暗黑模式

### Phase 3：优化上线
- [ ] 性能优化

### Phase 4: 文章列表优化
- [ ] 构建布局
- [ ] 每个游戏
