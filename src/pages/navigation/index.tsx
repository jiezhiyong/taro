import { Button, NavBar, Popup, Tabs } from '@nutui/nutui-react-taro';
import { ScrollView, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { getWindowHeight } from '@/utils/style';

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState<string | number>(0);
  const [popupVisible, setPopupVisible] = useState(false);

  // 调用最佳实践视口高度计算函数
  const dynamicHeight = getWindowHeight(true);

  return (
    <View
      className="flex min-h-screen flex-col justify-between bg-background font-sans"
      style={{ height: dynamicHeight }}
    >
      {/* Scrollable Content Container (Cross-platform friendly) */}
      <ScrollView scrollY className="flex-1 p-6 pb-24">
        <View className="mb-6">
          <Text className="block font-medium font-serif text-2xl text-foreground">
            🧭 导航与弹窗
          </Text>
          <Text className="mt-1 block font-sans text-muted-foreground text-xs">
            使用 getWindowHeight 进行精准的高端定位和跨平台弹窗布局适配
          </Text>
        </View>

        {/* Custom NavBar Showcase */}
        <View className="premium-card mb-6 p-6">
          <Text className="mb-4 block font-medium font-serif text-base text-foreground">
            自定义导航 NavBar
          </Text>
          <View className="space-y-4">
            <View className="dark">
              <NavBar
                title="详情页面"
                back={
                  <Text className="font-sans font-semibold text-muted-foreground text-xs">
                    ← 返回
                  </Text>
                }
                right={
                  <Text className="font-sans font-semibold text-muted-foreground text-xs">
                    •••
                  </Text>
                }
                onBackClick={() =>
                  Taro.showToast({ title: '点击返回', icon: 'none' })
                }
              />
            </View>
          </View>
        </View>

        {/* Custom Tabs Showcase */}
        <View className="premium-card mb-6 overflow-hidden">
          <Text className="block p-6 pb-2 font-medium font-serif text-base text-foreground">
            标签页 Tabs
          </Text>
          <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
            <Tabs.TabPane title="推荐关注" value={0}>
              <View className="bg-card p-6">
                <Text className="block font-sans text-foreground text-sm leading-relaxed">
                  🔥 精选今日最受关注的内容与活动推送。
                </Text>
              </View>
            </Tabs.TabPane>
            <Tabs.TabPane title="今日热点" value={1}>
              <View className="bg-card p-6">
                <Text className="block font-sans text-foreground text-sm leading-relaxed">
                  ⚡️ 实时更新全网最核心的开发与资讯动态。
                </Text>
              </View>
            </Tabs.TabPane>
            <Tabs.TabPane title="特惠专区" value={2}>
              <View className="bg-card p-6">
                <Text className="block font-sans text-foreground text-sm leading-relaxed">
                  💰 限时狂欢特惠专区，超低折扣专属福利。
                </Text>
              </View>
            </Tabs.TabPane>
          </Tabs>
        </View>

        {/* Action triggers */}
        <View className="premium-card mb-6 p-6">
          <Text className="mb-4 block font-medium font-serif text-base text-foreground">
            交互弹出 Popup
          </Text>
          <View className="flex gap-4">
            <Button
              type="primary"
              block
              className="rounded-lg py-3 font-semibold text-xs"
              onClick={() => setPopupVisible(true)}
            >
              弹出底部抽屉
            </Button>
          </View>
        </View>

        {/* Best practice callout for RN compatibility */}
        <View className="premium-card mb-8 rounded-xl border border-primary/20 bg-primary/10 p-6">
          <Text className="block font-medium font-serif text-primary text-sm">
            💡 跨端 fixed 最佳实践
          </Text>
          <Text className="mt-2 block font-sans text-primary/90 text-xs leading-relaxed">
            由于 React Native 平台本身并不支持传统的 CSS `position: fixed`
            布局。为保证小程序、H5 与 RN 三端同构，本页面采用了 getWindowHeight
            计算视口物理高度，并结合 ScrollView 与绝对定位 (Absolute)
            模拟完美实现底栏或顶栏固定。
          </Text>
        </View>
      </ScrollView>

      {/* Dynamic bottom drawer with absolute viewport emulation using NutUI Popup */}
      <Popup
        visible={popupVisible}
        position="bottom"
        round
        onClose={() => setPopupVisible(false)}
      >
        <View className="rounded-t-3xl bg-card p-6 pb-10">
          {/* Header pill indicator */}
          <View className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-secondary/80" />

          <Text className="mb-2 block font-medium font-serif text-foreground text-lg">
            最佳实践 - 底部模态抽屉
          </Text>
          <Text className="mb-6 block font-sans text-muted-foreground text-xs leading-relaxed">
            此抽屉采用多端统一的 NutUI Popup
            方案构建，高度回弹及交互效果已全面兼容 Android / iOS 与 H5 视口。
          </Text>

          <View className="flex gap-4">
            <Button
              type="primary"
              block
              className="rounded-lg py-3.5 font-semibold text-xs"
              onClick={() => setPopupVisible(false)}
            >
              确认授权
            </Button>
            <Button
              block
              className="rounded-lg border border-input bg-secondary py-3.5 font-semibold text-xs"
              onClick={() => setPopupVisible(false)}
            >
              取消
            </Button>
          </View>
        </View>
      </Popup>
    </View>
  );
}
