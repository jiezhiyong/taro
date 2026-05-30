import { Text, View } from '@tarojs/components';

export default function Components() {
  return (
    <View className="min-h-screen bg-slate-50 p-6 pb-12">
      <View className="mt-2 mb-6">
        <Text className="block font-extrabold text-2xl text-slate-800">
          🧩 基础组件
        </Text>
        <Text className="mt-1 block text-slate-500 text-xs">
          符合 React Native 与跨端兼容的标准组件设计
        </Text>
      </View>

      {/* Button styles */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          交互式按钮 Buttons
        </Text>
        <View className="space-y-3">
          <View className="premium-btn w-full rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 py-3 text-center font-semibold text-sm text-white shadow-md transition-all active:scale-98 active:opacity-90">
            主要按钮 (Primary)
          </View>
          <View className="premium-btn w-full rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 py-3 text-center font-semibold text-sm text-white shadow-md transition-all active:scale-98 active:opacity-90">
            成功按钮 (Success)
          </View>
          <View className="premium-btn w-full rounded-xl bg-linear-to-r from-amber-500 to-orange-600 py-3 text-center font-semibold text-sm text-white shadow-md transition-all active:scale-98 active:opacity-90">
            警告按钮 (Warning)
          </View>
          <View className="premium-btn w-full rounded-xl bg-linear-to-r from-rose-500 to-red-600 py-3 text-center font-semibold text-sm text-white shadow-md transition-all active:scale-98 active:opacity-90">
            危险按钮 (Danger)
          </View>
        </View>
      </View>

      {/* Badge/Tags styles */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          语义化标签 Badges
        </Text>
        <View className="flex flex-wrap gap-3">
          <View className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 font-semibold text-blue-600 text-xs">
            主要标签
          </View>
          <View className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-600 text-xs">
            成功标签
          </View>
          <View className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 font-semibold text-amber-600 text-xs">
            警告标签
          </View>
          <View className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 font-semibold text-rose-600 text-xs">
            危险标签
          </View>
        </View>
      </View>

      {/* Premium custom card style */}
      <View className="premium-card border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          优雅卡片 Premium Card
        </Text>
        <View className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
          <Text className="block font-bold text-slate-800 text-sm">
            模块化设计核心
          </Text>
          <Text className="mt-2 block text-slate-500 text-xs leading-relaxed">
            卡片是所有跨端视口的基础容器，符合 Flex-only 排布规范，可完美适配
            React Native 端。
          </Text>
        </View>
      </View>
    </View>
  );
}
