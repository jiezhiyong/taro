import { ArrowLeft } from '@nutui/icons-react-taro';
import { Button, NavBar, Popup, Space, Tabs } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';

export default function Navigation() {
  const [currentTab, setCurrentTab] = useState<string | number>(0);
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <PageWrapper>
      <PageHeader
        title="导航与弹窗"
        description="Tabs、自定义 NavBar 与底部 Popup 的跨端导航与弹层交互演示"
      />

      <SectionCard title="自定义导航 NavBar">
        <NavBar
          title="详情"
          back={
            <Button size="small" fill="none">
              <ArrowLeft />
            </Button>
          }
          right={
            <Button size="small" fill="none">
              •••
            </Button>
          }
          onBackClick={() => Taro.showToast({ title: '点击返回' })}
        />
      </SectionCard>

      <SectionCard title="标签页 Tabs">
        <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
          <Tabs.TabPane title="推荐关注" value={0}>
            <View className="text-foreground text-sm">
              🔥 实时筛选今日最受学术界
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="今日热点" value={1}>
            <View className="text-foreground text-sm">
              ⚡️ 动态跟进全网最新发布的构建系统升级
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="特惠专区" value={2}>
            <View className="text-foreground text-sm">
              💰 限时放送精品跨端课程折扣券
            </View>
          </Tabs.TabPane>
        </Tabs>
      </SectionCard>

      <SectionCard title="交互弹出 Popup">
        <Button type="primary" block onClick={() => setPopupVisible(true)}>
          弹出底部抽屉
        </Button>
      </SectionCard>

      <Popup
        title="底部模态抽屉"
        description="此抽屉采用 NutUI Popup 构建，高度回弹及交互效果已兼容 H5 与小程序视口"
        visible={popupVisible}
        position="bottom"
        round
        onClose={() => setPopupVisible(false)}
      >
        <Space className="w-full px-4" justify="center">
          <Button type="primary" block onClick={() => setPopupVisible(false)}>
            确认授权
          </Button>
          <Button block onClick={() => setPopupVisible(false)}>
            取消
          </Button>
        </Space>
      </Popup>
    </PageWrapper>
  );
}
