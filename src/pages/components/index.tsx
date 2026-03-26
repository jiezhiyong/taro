import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Components() {
  return (
    <View className="container p-4">
      <Text className="text-xl font-bold mb-4">基础组件展示</Text>

      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-lg font-semibold mb-2">按钮组件</Text>
        <View className="space-y-2">
          <View className="bg-blue-500 text-white p-2 rounded text-center">主要按钮</View>
          <View className="bg-green-500 text-white p-2 rounded text-center">成功按钮</View>
          <View className="bg-yellow-500 text-white p-2 rounded text-center">警告按钮</View>
          <View className="bg-red-500 text-white p-2 rounded text-center">危险按钮</View>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-lg font-semibold mb-2">标签组件</Text>
        <View className="flex flex-wrap gap-2">
          <View className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">主要标签</View>
          <View className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">成功标签</View>
          <View className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm">警告标签</View>
          <View className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">危险标签</View>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4">
        <Text className="text-lg font-semibold mb-2">卡片组件</Text>
        <View className="border border-gray-200 rounded p-3">
          <Text className="font-medium">卡片标题</Text>
          <Text className="text-sm text-gray-600 mt-1">这是一个简单的卡片组件示例</Text>
        </View>
      </View>
    </View>
  );
}