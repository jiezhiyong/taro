# Taro H5 构建问题和解决方案

## 问题描述
在 Taro 4.x 中构建 H5 时遇到 `ReferenceError: window is not defined` 错误。

## 问题根源
1. NutUI beta 版本（@nutui/nutui-react-taro 3.0.19-cpp.26-beta.2）包含了对 window 对象的引用
2. Taro 4.x H5 构建过程中的 SSR 阶段无法访问浏览器全局对象

## 尝试的解决方案

### 1. 替换 UI 组件库 ✅ 部分成功
- 移除了 beta 版本的 NutUI
- 改用原生 Taro 组件 + Tailwind CSS
- 消除了第三方库带来的 window 依赖

### 2. Webpack 配置 polyfill ❌ 未完全解决
尝试了多种 webpack 配置方式：
```typescript
// defineConstants 方式
defineConstants: {
  "window": "globalThis",
  "document": "globalThis"
}

// webpackChain 方式
webpackChain(chain) {
  chain.plugin('define')
    .use(require('webpack').DefinePlugin, [{
      'global': 'globalThis',
      'window': 'globalThis'
    }]);
}
```

### 3. 全局 polyfill 脚本 ❌ 未解决
创建了综合的 polyfill 文件来模拟浏览器环境，但构建阶段的问题仍然存在。

## 当前状态
- ✅ 消除了 NutUI beta 版本的 window 依赖
- ✅ 成功使用原生 Taro 组件和 Tailwind CSS
- ✅ 微信小程序构建正常：`pnpm build:weapp`
- ❌ H5 构建仍有问题：需要进一步的 SSR 配置

## 推荐解决方案
1. **短期方案**: 使用微信小程序开发，功能完整
2. **长期方案**: 等待 Taro 4.x 的 H5 构建问题修复，或使用 Taro 3.x
3. **替代方案**: 使用原生 H5 + Vue/React 开发 H5 版本

## 项目特色
- 🚀 Taro 4.x 跨平台框架
- ⚛️ React 18 + TypeScript
- 🎨 Tailwind CSS 原子化样式
- 📱 支持微信小程序（已验证）
- 🌐 H5 支持（需额外配置）

## 使用说明
```bash
# 安装依赖
pnpm install

# 开发微信小程序
pnpm dev:weapp

# 构建微信小程序
pnpm build:weapp

# H5 开发（需要解决 window 问题）
pnpm dev:h5

# H5 构建（需要解决 window 问题）
pnpm build:h5
```