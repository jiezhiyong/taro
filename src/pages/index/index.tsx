import { Button, Switch } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useLocaleStore } from '@/store/localeStore';

export default function Index() {
  const { locale, toggleLocale } = useLocaleStore();

  const navigateTo = (url: string) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="min-h-screen bg-slate-50 pb-12">
      {/* Premium Gradient Hero Section */}
      <View className="relative overflow-hidden rounded-b-[32px] bg-linear-to-br from-indigo-900 via-slate-900 to-indigo-950 px-6 pt-12 pb-16 text-white shadow-2xl">
        <View className="absolute top-[-50px] right-[-50px] h-48 w-48 rounded-full bg-indigo-500 opacity-20 blur-3xl" />
        <View className="absolute bottom-[-100px] left-[-20px] h-64 w-64 rounded-full bg-emerald-500 opacity-15 blur-3xl" />

        <View className="relative z-10">
          <View className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 font-semibold text-indigo-200 text-xs uppercase tracking-wider backdrop-blur-md">
            🚀 Taro 4.x Multi-Platform
          </View>
          <Text className="mb-2 block font-extrabold text-3xl text-white tracking-tight">
            Taro Showcase
          </Text>
          <Text className="block max-w-md text-slate-300 text-sm leading-relaxed">
            基于 React + Tailwind CSS
            编译的高性能、跨端开发示例，展示极速首屏渲染与全平台原生交互适配的最佳实践。
          </Text>
        </View>
      </View>

      {/* Grid Dashboard Menu */}
      <View className="relative z-20 -mt-8 grid grid-cols-2 gap-4 px-6">
        <View
          className="premium-card flex h-32 cursor-pointer flex-col justify-between border-l-4 border-l-blue-500 bg-white p-6"
          onClick={() => navigateTo('/pages/components/index')}
        >
          <View className="mb-2 text-2xl">🧩</View>
          <View>
            <Text className="block font-bold text-base text-slate-800">
              基础组件
            </Text>
            <Text className="mt-0.5 block text-slate-500 text-xs">
              Buttons, Badges
            </Text>
          </View>
        </View>

        <View
          className="premium-card flex h-32 cursor-pointer flex-col justify-between border-l-4 border-l-emerald-500 bg-white p-6"
          onClick={() => navigateTo('/pages/form/index')}
        >
          <View className="mb-2 text-2xl">✍️</View>
          <View>
            <Text className="block font-bold text-base text-slate-800">
              表单组件
            </Text>
            <Text className="mt-0.5 block text-slate-500 text-xs">
              Inputs, Checkboxes
            </Text>
          </View>
        </View>

        <View
          className="premium-card flex h-32 cursor-pointer flex-col justify-between border-l-4 border-l-amber-500 bg-white p-6"
          onClick={() => navigateTo('/pages/navigation/index')}
        >
          <View className="mb-2 text-2xl">🧭</View>
          <View>
            <Text className="block font-bold text-base text-slate-800">
              导航组件
            </Text>
            <Text className="mt-0.5 block text-slate-500 text-xs">
              Tabs, Popups
            </Text>
          </View>
        </View>

        <View
          className="premium-card flex h-32 cursor-pointer flex-col justify-between border-l-4 border-l-rose-500 bg-white p-6"
          onClick={() => navigateTo('/pages/feedback/index')}
        >
          <View className="mb-2 text-2xl">🔔</View>
          <View>
            <Text className="block font-bold text-base text-slate-800">
              反馈组件
            </Text>
            <Text className="mt-0.5 block text-slate-500 text-xs">
              Toast, Skeleton
            </Text>
          </View>
        </View>

        {/* Zustand 状态管理 (全宽特色卡片) */}
        <View
          className="premium-card col-span-2 flex h-24 cursor-pointer flex-row items-center justify-between border-l-4 border-l-indigo-600 bg-white p-6"
          onClick={() => navigateTo('/pages/zustand/index')}
        >
          <View className="flex items-center gap-4">
            <View className="text-3xl">🐻</View>
            <View className="min-w-0">
              <Text className="block font-bold text-base text-slate-800">
                Zustand 状态管理
              </Text>
              <Text className="mt-0.5 block truncate text-slate-500 text-xs">
                高性能轻量全局状态机，支持多端持久化存储
              </Text>
            </View>
          </View>
          <View className="shrink-0 font-bold text-lg text-slate-400">→</View>
        </View>
      </View>

      {/* Feature Walkthrough */}
      <View className="mt-8 px-6">
        <View className="premium-card border border-slate-100 bg-white/70 p-6 shadow-md backdrop-blur-md">
          <Text className="mb-5 block font-bold text-lg text-slate-800">
            最佳实践内核特性
          </Text>

          <View className="space-y-5">
            <View className="flex items-start gap-4">
              <View className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                🌐
              </View>
              <View>
                <Text className="block font-semibold text-slate-800 text-sm">
                  多端同构
                </Text>
                <Text className="mt-1 block text-slate-500 text-xs">
                  通过统一的 Taro API 处理小程序、H5、React Native
                  的底层视口与网络请求差异。
                </Text>
              </View>
            </View>

            <View className="flex items-start gap-4 border-slate-100 border-t pt-4">
              <View className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                💎
              </View>
              <View>
                <Text className="block font-semibold text-slate-800 text-sm">
                  盒模型与性能控制
                </Text>
                <Text className="mt-1 block text-slate-500 text-xs">
                  强制采用 border-box 并通过 hash 方式处理 H5
                  缓存，极大提高网络与首屏的渲染吞吐。
                </Text>
              </View>
            </View>

            <View className="flex items-start gap-4 border-slate-100 border-t pt-4">
              <View className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                🎯
              </View>
              <View>
                <Text className="block font-semibold text-slate-800 text-sm">
                  Sass & 路径别名
                </Text>
                <Text className="mt-1 block text-slate-500 text-xs">
                  支持 `@/` 精确绝对路径映射，彻底抛弃传统的 `../../../`
                  嵌套，保持项目高度整洁。
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* NutUI-React-Taro Showcase Card */}
      <View className="mt-8 px-6">
        <View className="premium-card border border-slate-100 bg-white/70 p-6 shadow-md backdrop-blur-md">
          <Text className="mb-2 block font-bold font-serif text-lg text-slate-800">
            {locale === 'zh-CN'
              ? 'NutUI 组件库接入演示'
              : 'NutUI Components Showcase'}
          </Text>
          <Text className="mb-4 block text-slate-500 text-xs">
            {locale === 'zh-CN'
              ? '通过 ConfigProvider 关联 CSS Variables 主题，支持全局国际化切换'
              : 'Themed via CSS variables through ConfigProvider, supports global i18n'}
          </Text>

          {/* i18n Switch */}
          <View className="mb-4 flex flex-row items-center justify-between border-slate-100 border-b py-3">
            <View>
              <Text className="block font-semibold text-slate-800 text-sm">
                {locale === 'zh-CN' ? '切换国际化语言' : 'Toggle Language'}
              </Text>
              <Text className="mt-0.5 block text-slate-400 text-xs">
                {locale === 'zh-CN' ? `当前: ${locale}` : `Current: ${locale}`}
              </Text>
            </View>
            <Switch
              checked={locale === 'en-US'}
              onChange={() => toggleLocale()}
            />
          </View>

          {/* Theme & Button Tests */}
          <View className="flex flex-col gap-3">
            <Text className="block font-semibold text-slate-600 text-xs">
              {locale === 'zh-CN'
                ? '主题色关联测试 (Terracotta 陶土橙)'
                : 'Theme Sync Test (Terracotta)'}
            </Text>

            <View className="flex gap-2">
              <Button type="primary" size="small">
                {locale === 'zh-CN' ? '品牌主色按钮' : 'Primary Brand Button'}
              </Button>
              <Button type="info" size="small">
                {locale === 'zh-CN' ? '辅助色按钮' : 'Info Style Button'}
              </Button>
            </View>
          </View>
        </View>
      </View>

      {/* Footer disclaimer */}
      <View className="mt-8 px-6">
        <Text className="block text-center text-slate-400 text-xs leading-relaxed">
          Taro Best Practices Built • 2026
          <br />
          已完美适配 H5 离线缓存哈希与支付宝小程序的请求处理
        </Text>
      </View>
    </View>
  );
}
