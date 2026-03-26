import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

export default function Components() {
  return (
    <View className="min-h-screen bg-gray-50 p-4 pb-20">
      {/* Button 组件 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">按钮 Button</Text>
        <View className="space-y-3">
          <View className="flex gap-2 flex-wrap">
            <Button type="primary" size="mini">主要按钮</Button>
            <Button type="default" size="mini">默认按钮</Button>
            <Button type="warn" size="mini">警告按钮</Button>
          </View>
          <View className="flex gap-2 flex-wrap">
            <Button type="primary" plain size="mini">线框按钮</Button>
            <Button disabled size="mini">禁用按钮</Button>
            <Button loading size="mini">加载中</Button>
          </View>
        </View>
      </View>

      {/* 标签展示 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">标签展示</Text>
        <View className="space-y-4">
          <View>
            <Text className="text-gray-600 text-sm mb-2">徽章效果：</Text>
            <View className="flex gap-2 flex-wrap">
              <View className="relative">
                <View className="w-10 h-10 bg-gray-200 rounded"></View>
                <View className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <Text className="text-white text-xs">8</Text>
                </View>
              </View>
              <View className="relative">
                <View className="w-10 h-10 bg-gray-200 rounded"></View>
                <View className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></View>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-gray-600 text-sm mb-2">标签样式：</Text>
            <View className="flex gap-2 flex-wrap">
              <View className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">主要</View>
              <View className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">成功</View>
              <View className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded">警告</View>
              <View className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">危险</View>
              <View className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">圆角</View>
            </View>
          </View>
        </View>
      </View>

      {/* 头像展示 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">头像 Avatar</Text>
        <View className="space-y-4">
          <View>
            <Text className="text-gray-600 text-sm mb-2">不同尺寸：</Text>
            <View className="flex gap-3 items-center">
              <View className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Text className="text-white text-lg">L</Text>
              </View>
              <View className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Text className="text-white">N</Text>
              </View>
              <View className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Text className="text-white text-sm">S</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-gray-600 text-sm mb-2">不同形状：</Text>
            <View className="flex gap-3 items-center">
              <View className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <Text className="text-white">圆</Text>
              </View>
              <View className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                <Text className="text-white">方</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 宫格布局 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">宫格 Grid</Text>
        <View className="grid grid-cols-4 gap-3">
          <View className="text-center p-3">
            <Text className="text-2xl mb-1">🏠</Text>
            <Text className="text-xs text-gray-600">首页</Text>
          </View>
          <View className="text-center p-3">
            <Text className="text-2xl mb-1">📊</Text>
            <Text className="text-xs text-gray-600">分类</Text>
          </View>
          <View className="text-center p-3">
            <Text className="text-2xl mb-1">🛒</Text>
            <Text className="text-xs text-gray-600">购物车</Text>
          </View>
          <View className="text-center p-3">
            <Text className="text-2xl mb-1">👤</Text>
            <Text className="text-xs text-gray-600">我的</Text>
          </View>
        </View>
      </View>

      {/* 开关和进度条 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">交互组件</Text>
        <View className="space-y-4">
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>开关状态</Text>
            <View className="w-12 h-6 bg-green-500 rounded-full relative">
              <View className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></View>
            </View>
          </View>

          <View>
            <Text className="text-gray-600 text-sm mb-2">进度条：</Text>
            <View className="w-full h-2 bg-gray-200 rounded">
              <View className="w-3/4 h-full bg-blue-500 rounded"></View>
            </View>
            <Text className="text-xs text-gray-500 mt-1">75%</Text>
          </View>

          <View>
            <Text className="text-gray-600 text-sm mb-2">评分：</Text>
            <View className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Text key={index} className={index < 3 ? "text-yellow-500" : "text-gray-300"}>
                  ⭐
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}