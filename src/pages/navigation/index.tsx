import { Button, NavBar, Popup, Space, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import {
  DemoPage,
  DemoPageHeader,
  DemoSection,
} from '@/components/demo-layout';

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState<string | number>(0);
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <DemoPage>
      <DemoPageHeader
        title="🧭 导航与弹窗"
        description="Tabs、自定义 NavBar 与底部 Popup 的跨端导航与弹层交互演示"
      />

      <DemoSection title="自定义导航 NavBar">
        <View className="overflow-hidden rounded-lg border border-border bg-secondary/20">
          <NavBar
            title="详情页面"
            back={
              <Button
                type="primary"
                size="small"
                className="bg-transparent text-xs"
              >
                ← 返回
              </Button>
            }
            right={
              <Button
                type="default"
                size="small"
                className="bg-transparent text-xs"
              >
                •••
              </Button>
            }
            onBackClick={() =>
              Taro.showToast({ title: '点击返回', icon: 'none' })
            }
          />
        </View>
      </DemoSection>

      <DemoSection title="标签页 Tabs" className="overflow-hidden">
        <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
          <Tabs.TabPane title="推荐关注" value={0}>
            <View className="min-h-[100px] p-2 text-foreground text-sm leading-relaxed">
              🔥{' '}
              <View className="inline font-semibold text-primary">
                精选推荐
              </View>
              ：实时筛选今日最受学术界和开发圈关注的前沿论文与多端应用架构设计。
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="今日热点" value={1}>
            <View className="min-h-[100px] p-2 text-foreground text-sm leading-relaxed">
              ⚡️{' '}
              <View className="inline font-semibold text-success">
                实时追踪
              </View>
              ：动态跟进全网最新发布的构建系统升级与跨端引擎性能演进。
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="特惠专区" value={2}>
            <View className="min-h-[100px] p-2 text-foreground text-sm leading-relaxed">
              💰{' '}
              <View className="inline font-semibold text-warning">
                独家福利
              </View>
              ：限时放送精品跨端课程折扣券与极速版构建平台额度。
            </View>
          </Tabs.TabPane>
        </Tabs>
      </DemoSection>

      <DemoSection title="交互弹出 Popup">
        <Button
          type="primary"
          block
          className="rounded-lg font-semibold text-xs shadow-ring"
          onClick={() => setPopupVisible(true)}
        >
          弹出底部抽屉
        </Button>
      </DemoSection>

      <DemoSection
        title="💡 跨端布局说明"
        description="二级页面使用 page-wrapper 统一留白；Popup 由 NutUI 处理多端弹层。"
      >
        <View className="text-muted-foreground text-xs leading-relaxed">
          React Native 不支持传统 CSS fixed，本 Demo 在 Tab 页通过底部 padding
          避开 TabBar，子页面则依赖 NutUI Popup 与统一页面容器完成布局适配。
        </View>
      </DemoSection>

      <Popup
        visible={popupVisible}
        position="bottom"
        round
        onClose={() => setPopupVisible(false)}
      >
        <View className="flex flex-col gap-3 rounded-t-3xl bg-card p-6 pb-10">
          <View className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-secondary/80" />
          <View className="font-medium font-serif text-foreground text-lg">
            底部模态抽屉
          </View>
          <View className="mb-4 text-muted-foreground text-xs leading-relaxed">
            此抽屉采用 NutUI Popup 构建，高度回弹及交互效果已兼容 H5
            与小程序视口。
          </View>
          <Space className="w-full">
            <Button
              type="primary"
              block
              className="flex-1 rounded-lg font-semibold text-xs shadow-ring"
              onClick={() => setPopupVisible(false)}
            >
              确认授权
            </Button>
            <Button
              block
              className="flex-1 rounded-lg border border-input bg-secondary font-semibold text-secondary-foreground text-xs shadow-ring"
              onClick={() => setPopupVisible(false)}
            >
              取消
            </Button>
          </Space>
        </View>
      </Popup>
    </DemoPage>
  );
}
