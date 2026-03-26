import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <View className="min-h-screen bg-gray-50 pb-20">
      {/* 导航栏展示 */}
      <View className="bg-white shadow-sm p-6 mb-6">
        <Text className="text-lg font-bold mb-4">导航栏 NavBar</Text>
        <View className="space-y-4">
          <View className="flex items-center justify-between bg-blue-500 text-white p-3 rounded">
            <Text className="text-white">← 返回</Text>
            <Text className="text-white font-bold">页面标题</Text>
            <Text className="text-white">更多</Text>
          </View>
          <View className="flex items-center justify-between bg-green-500 text-white p-3 rounded">
            <Text className="text-white">← 返回</Text>
            <Text className="text-white font-bold">自定义导航</Text>
            <Text className="text-white">•••</Text>
          </View>
        </View>
      </View>

      {/* 标签页展示 */}
      <View className="bg-white mx-4 rounded-lg shadow-sm mb-6">
        <Text className="text-lg font-bold p-6 pb-0">标签页 Tabs</Text>
        <View className="flex border-b border-gray-100">
          {['标签页1', '标签页2', '标签页3'].map((tab, index) => (
            <View
              key={index}
              className={`flex-1 text-center p-4 ${
                currentTab === index ? 'border-b-2 border-blue-500' : ''
              }`}
              onClick={() => setCurrentTab(index)}
            >
              <Text className={currentTab === index ? 'text-blue-500 font-bold' : 'text-gray-600'}>
                {tab}
              </Text>
            </View>
          ))}
        </View>
        <View className="p-6">
          <Text>标签页{currentTab + 1}的内容</Text>
        </View>
      </View>

      {/* 指示器展示 */}
      <View className="bg-white mx-4 rounded-lg shadow-sm p-6 mb-6">
        <Text className="text-lg font-bold mb-4">指示器 Indicator</Text>
        <View className="space-y-4">
          <View>
            <Text className="text-gray-600 text-sm mb-2">横向指示器：</Text>
            <View className="flex gap-2 justify-center">
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <View
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 2 ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </View>
          </View>
          <View>
            <Text className="text-gray-600 text-sm mb-2">竖向指示器：</Text>
            <View className="flex flex-col gap-2 items-center">
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <View
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 2 ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* 弹出层和动作面板 */}
      <View className="bg-white mx-4 rounded-lg shadow-sm mb-6">
        <Text className="text-lg font-bold p-6 pb-0">弹出层 & 动作面板</Text>
        <View className="space-y-0">
          <View className="flex justify-between items-center p-4 border-b border-gray-100">
            <Text>底部弹出</Text>
            <Button size="mini" onClick={() => setPopupVisible(!popupVisible)}>
              {popupVisible ? '关闭' : '打开'}
            </Button>
          </View>
          <View className="flex justify-between items-center p-4 border-b border-gray-100">
            <Text>动作面板</Text>
            <Text className="text-gray-400">></Text>
          </View>
          <View className="flex justify-between items-center p-4">
            <Text>悬浮导航</Text>
            <Text className="text-gray-400">></Text>
          </View>
        </View>

        {/* 简单的弹出层效果 */}
        {popupVisible && (
          <View className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
            <View className="bg-white w-full rounded-t-lg p-6">
              <Text className="text-lg font-bold mb-4">弹出层内容</Text>
              <Text className="text-gray-600 mb-4">
                这是从底部弹出的内容区域，可以放置任何内容。
              </Text>
              <View className="flex gap-3">
                <Button size="mini" onClick={() => setPopupVisible(false)}>确定</Button>
                <Button size="mini" onClick={() => setPopupVisible(false)}>取消</Button>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* 导航示例 */}
      <View className="bg-white mx-4 rounded-lg shadow-sm p-6 mb-6">
        <Text className="text-lg font-bold mb-4">导航示例</Text>
        <View className="space-y-4">
          <View>
            <Text className="text-gray-600 text-sm mb-2">面包屑导航：</Text>
            <View className="flex items-center gap-2">
              <Text className="text-blue-500">首页</Text>
              <Text className="text-gray-400">/</Text>
              <Text className="text-blue-500">分类</Text>
              <Text className="text-gray-400">/</Text>
              <Text className="text-gray-600">商品详情</Text>
            </View>
          </View>

          <View>
            <Text className="text-gray-600 text-sm mb-2">标签导航：</Text>
            <View className="flex gap-2 flex-wrap">
              <View className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">推荐</View>
              <View className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">最新</View>
              <View className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">热门</View>
              <View className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">科技</View>
              <View className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">生活</View>
            </View>
          </View>
        </View>
      </View>

      {/* 返回顶部 */}
      <View className="fixed bottom-24 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <Text className="text-white text-xs">顶部</Text>
      </View>

      {/* 滚动内容生成器 */}
      <View className="mx-4">
        <Text className="text-gray-500 text-sm mb-4">
          滚动页面可以看到返回顶部按钮
        </Text>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <Text>滚动内容 {index + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}