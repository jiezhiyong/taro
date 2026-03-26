# Taro 跨端开发示例

这是一个基于 Taro 4.x + React + TypeScript 构建的跨端开发示例应用，展示了现代跨端开发的核心能力。

## 🚀 技术栈

- **Taro 4.x** - 跨端开发框架
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **基础 CSS** - 样式方案

## 📱 支持平台

- 微信小程序
- H5 网页
- 支付宝小程序
- 百度小程序
- 其他 Taro 支持的小程序平台

## 📦 功能特性

### 🎯 核心页面

1. **首页** - 项目介绍和技术栈展示
2. **基础组件** - 展示各类 UI 组件
3. **表单组件** - 表单输入和验证
4. **导航组件** - 导航和交互组件
5. **反馈组件** - 用户反馈相关组件

### 🛠️ 开发特性

- **TypeScript 支持** - 完整的类型定义
- **模块化开发** - 清晰的项目结构
- **跨端一致性** - 统一的开发体验
- **可扩展架构** - 易于添加新功能

## 🔧 开发环境

### 环境要求

- Node.js 16+
- pnpm 8+

### 安装依赖

\`\`\`bash
pnpm install
\`\`\`

### 开发命令

\`\`\`bash
# H5 开发
pnpm dev:h5

# 微信小程序开发
pnpm dev:weapp

# H5 构建
pnpm build:h5

# 微信小程序构建
pnpm build:weapp
\`\`\`

## 📁 项目结构

\`\`\`
├── src/
│   ├── app.config.ts      # 应用配置
│   ├── app.css           # 全局样式
│   ├── app.tsx           # 应用入口
│   └── pages/            # 页面目录
│       ├── index/        # 首页
│       ├── components/   # 组件展示页
│       ├── form/         # 表单页面
│       ├── navigation/   # 导航页面
│       └── feedback/     # 反馈页面
├── config/
│   └── index.ts          # Taro 配置
├── package.json
└── tsconfig.json
\`\`\`

## 🎨 样式说明

项目使用原生 CSS 进行样式开发，确保在各个平台的兼容性：

- **全局样式** - `src/app.css`
- **页面样式** - 各页面目录下的 `.scss` 文件
- **内联样式** - 使用 React style 属性

## 🚀 部署说明

### H5 部署

构建后的 H5 文件在 `dist/` 目录，可直接部署到静态服务器。

### 小程序部署

1. 使用微信开发者工具打开 `dist/` 目录
2. 配置 AppID
3. 上传代码到微信后台

## 📝 开发规范

### 代码规范

- 使用 TypeScript 进行开发
- 遵循 React Hooks 最佳实践
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

### 目录规范

- 页面放在 `src/pages/` 下
- 每个页面包含 `.tsx`、`.config.ts`、`.scss` 三个文件
- 公共组件放在 `src/components/` 下（如需要）

## 🔗 相关链接

- [Taro 官方文档](https://docs.taro.zone/)
- [React 官方文档](https://react.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

## 📄 License

MIT License

---

**注意：** 项目当前处于开发阶段，构建功能可能需要进一步调试和优化。