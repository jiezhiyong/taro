import { Button, Tag } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';

export default function Components() {
  return (
    <View className="min-h-screen bg-slate-50 p-6 pb-12">
      <View className="mt-2 mb-6">
        <Text className="block font-extrabold text-2xl text-slate-800">
          🧩 基础组件
        </Text>
        <Text className="mt-1 block text-slate-500 text-xs">
          符合 React Native 与跨端兼容的标准组件 design
        </Text>
      </View>

      {/* Button styles */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          交互式按钮 Buttons
        </Text>
        <View className="flex flex-col gap-3">
          <Button
            type="primary"
            block
            className="rounded-xl font-semibold text-sm shadow-md"
          >
            主要按钮 (Primary)
          </Button>
          <Button
            type="success"
            block
            className="rounded-xl font-semibold text-sm shadow-md"
          >
            成功按钮 (Success)
          </Button>
          <Button
            type="warning"
            block
            className="rounded-xl font-semibold text-sm shadow-md"
          >
            警告按钮 (Warning)
          </Button>
          <Button
            type="danger"
            block
            className="rounded-xl font-semibold text-sm shadow-md"
          >
            危险按钮 (Danger)
          </Button>
        </View>
      </View>

      {/* Badge/Tags styles */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          语义化标签 Badges
        </Text>
        <View className="flex flex-wrap gap-3">
          <Tag
            type="primary"
            className="rounded-full px-3 py-1.5 font-semibold text-xs"
          >
            主要标签
          </Tag>
          <Tag
            type="success"
            className="rounded-full px-3 py-1.5 font-semibold text-xs"
          >
            成功标签
          </Tag>
          <Tag
            type="warning"
            className="rounded-full px-3 py-1.5 font-semibold text-xs"
          >
            警告标签
          </Tag>
          <Tag
            type="danger"
            className="rounded-full px-3 py-1.5 font-semibold text-xs"
          >
            危险标签
          </Tag>
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
