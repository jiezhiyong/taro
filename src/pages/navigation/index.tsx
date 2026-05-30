import { ScrollView, Text, View } from '@tarojs/components';
import { useState } from 'react';
import { getWindowHeight } from '@/utils/style';

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  // 调用最佳实践视口高度计算函数
  const dynamicHeight = getWindowHeight(true);

  return (
    <View
      className="flex min-h-screen flex-col justify-between bg-slate-50"
      style={{ height: dynamicHeight }}
    >
      {/* Scrollable Content Container (Cross-platform friendly) */}
      <ScrollView scrollY className="flex-1 p-6 pb-24">
        <View className="mb-6">
          <Text className="block font-extrabold text-2xl text-slate-800">
            🧭 导航与弹窗
          </Text>
          <Text className="mt-1 block text-slate-500 text-xs">
            使用 getWindowHeight 进行精准的高端定位和跨平台弹窗布局适配
          </Text>
        </View>

        {/* Custom NavBar Showcase */}
        <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
          <Text className="mb-4 block font-bold text-base text-slate-800">
            自定义导航 NavBar
          </Text>
          <View className="space-y-4">
            <View className="flex items-center justify-between rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white shadow-md">
              <Text className="font-medium text-sm text-white">← 返回</Text>
              <Text className="font-bold text-sm text-white">详情页面</Text>
              <Text className="font-medium text-sm text-white">•••</Text>
            </View>
          </View>
        </View>

        {/* Custom Tabs Showcase */}
        <View className="premium-card mb-6 overflow-hidden border border-slate-100 bg-white shadow-sm">
          <Text className="block p-6 pb-2 font-bold text-base text-slate-800">
            标签页 Tabs
          </Text>
          <View className="flex border-slate-100 border-b bg-slate-50/50">
            {['推荐关注', '今日热点', '特惠专区'].map((tab, index) => (
              <View
                key={tab}
                className={`relative flex-1 cursor-pointer py-4 text-center transition-all ${
                  currentTab === index
                    ? 'font-bold text-indigo-600'
                    : 'text-slate-500'
                }`}
                onClick={() => setCurrentTab(index)}
              >
                <Text className="text-xs">{tab}</Text>
                {currentTab === index && (
                  <View className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-indigo-600" />
                )}
              </View>
            ))}
          </View>
          <View className="bg-white p-6">
            <Text className="block text-slate-600 text-sm leading-relaxed">
              {currentTab === 0 && '🔥 精选今日最受关注的内容与活动推送。'}
              {currentTab === 1 && '⚡️ 实时更新全网最核心的开发与资讯动态。'}
              {currentTab === 2 && '💰 限时狂欢特惠专区，超低折扣专属福利。'}
            </Text>
          </View>
        </View>

        {/* Action triggers */}
        <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
          <Text className="mb-4 block font-bold text-base text-slate-800">
            交互弹出 Popup
          </Text>
          <View className="flex gap-4">
            <View
              className="premium-btn flex-1 rounded-xl bg-slate-900 py-3 text-center font-semibold text-white text-xs shadow-md active:scale-98"
              onClick={() => setPopupVisible(true)}
            >
              弹出底部抽屉
            </View>
          </View>
        </View>

        {/* Best practice callout for RN compatibility */}
        <View className="premium-card mb-8 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6">
          <Text className="block font-bold text-indigo-900 text-sm">
            💡 跨端 fixed 最佳实践
          </Text>
          <Text className="mt-2 block text-indigo-700/80 text-xs leading-relaxed">
            由于 React Native 平台本身并不支持传统的 CSS `position: fixed`
            布局。为保证小程序、H5 与 RN 三端同构，本页面采用了 getWindowHeight
            计算视口物理高度，并结合 ScrollView 与绝对定位 (Absolute)
            模拟完美实现底栏或顶栏固定。
          </Text>
        </View>
      </ScrollView>

      {/* Dynamic bottom drawer with absolute viewport emulation */}
      {popupVisible && (
        <View className="absolute inset-0 z-50 flex items-end justify-center bg-slate-950/60 transition-all duration-300">
          {/* Click mask to dismiss */}
          <View
            className="absolute inset-0"
            onClick={() => setPopupVisible(false)}
          />

          <View className="premium-card relative z-10 w-full animate-slide-up rounded-t-[28px] border-slate-100 border-t bg-white p-6 pb-10 shadow-2xl">
            {/* Header pill indicator */}
            <View className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200" />

            <Text className="mb-2 block font-extrabold text-lg text-slate-800">
              最佳实践 - 底部模态抽屉
            </Text>
            <Text className="mb-6 block text-slate-500 text-xs leading-relaxed">
              此抽屉采用多端统一的绝对定位模拟方案构建，高度回弹及交互效果已全面兼容
              Android / iOS 与 H5 视口。
            </Text>

            <View className="flex gap-4">
              <View
                className="premium-btn flex-1 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 py-3.5 text-center font-bold text-white text-xs shadow-md active:scale-98"
                onClick={() => setPopupVisible(false)}
              >
                确认授权
              </View>
              <View
                className="premium-btn flex-1 rounded-xl bg-slate-100 py-3.5 text-center font-bold text-slate-700 text-xs active:scale-98"
                onClick={() => setPopupVisible(false)}
              >
                取消
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
