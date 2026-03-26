import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function Index() {
  const navigateTo = (url: string) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="min-h-screen bg-gray-50">
      <View className="p-6">
        <Text className="text-2xl font-bold text-gray-800 mb-2 block">Taro + Tailwind Showcase</Text>
        <Text className="text-gray-600 mb-8 block">
          这是一个基于 Taro 4.x + React + Tailwind CSS 的跨端开发示例应用。
        </Text>
      </View>

      <View className="grid grid-cols-2 gap-4 px-6">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-lg shadow-md"
          onClick={() => navigateTo("/pages/components/index")}
        >
          基础组件
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg shadow-md"
          onClick={() => navigateTo("/pages/form/index")}
        >
          表单组件
        </Button>
        <Button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-4 px-6 rounded-lg shadow-md"
          onClick={() => navigateTo("/pages/navigation/index")}
        >
          导航组件
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-6 rounded-lg shadow-md"
          onClick={() => navigateTo("/pages/feedback/index")}
        >
          反馈组件
        </Button>
      </View>

      <View className="mt-8 px-6">
        <View className="bg-white rounded-xl p-6 shadow-lg">
          <Text className="text-xl font-semibold text-gray-800 mb-4">功能特性</Text>
          <View className="space-y-4">
            <View className="border-l-4 border-blue-500 pl-4">
              <Text className="font-medium text-gray-800">跨端开发</Text>
              <Text className="text-sm text-gray-600 mt-1">支持微信小程序、H5、React Native 等多平台</Text>
            </View>
            <View className="border-l-4 border-green-500 pl-4">
              <Text className="font-medium text-gray-800">样式解决方案</Text>
              <Text className="text-sm text-gray-600 mt-1">Tailwind CSS 原子化样式，快速开发</Text>
            </View>
            <View className="border-l-4 border-purple-500 pl-4">
              <Text className="font-medium text-gray-800">TypeScript</Text>
              <Text className="text-sm text-gray-600 mt-1">完整的类型支持，提升开发效率</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mt-8 px-6 pb-6">
        <Text className="text-center text-gray-500 text-sm">
          注意：H5 构建可能需要额外配置来处理 window 对象的 SSR 问题
        </Text>
      </View>
    </View>
  );
}