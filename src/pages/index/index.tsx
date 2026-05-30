import {
  Badge,
  Button,
  Divider,
  Grid,
  Space,
  Switch,
  Tag,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { DemoNavCell, DemoPage, DemoSection } from '@/components/demo-layout';
import { useLocaleStore } from '@/store/localeStore';

const MENU_ITEMS = [
  {
    title: '基础组件',
    desc: 'Buttons, Badges, Tags',
    url: '/pages/components/index',
    badge: 4 as const,
    badgeType: 'value' as const,
    cta: '进入组件 →',
  },
  {
    title: '表单组件',
    desc: 'Inputs, Checkboxes, Switches',
    url: '/pages/form/index',
    badge: 'Hot' as const,
    badgeType: 'value' as const,
    cta: '进入表单 →',
  },
  {
    title: '导航组件',
    desc: 'Tabs, Custom NavBar, Popups',
    url: '/pages/navigation/index',
    badge: null,
    badgeType: 'dot' as const,
    cta: '进入导航 →',
  },
  {
    title: '反馈组件',
    desc: 'Toast, Dialogs, Skeletons',
    url: '/pages/feedback/index',
    badge: 'New' as const,
    badgeType: 'value' as const,
    cta: '进入反馈 →',
  },
];

export default function Index() {
  const { locale, toggleLocale } = useLocaleStore();

  const navigateTo = (url: string) => {
    Taro.navigateTo({ url });
  };

  return (
    <DemoPage>
      {/* Editorial Hero */}
      <View className="demo-hero dark flex flex-col gap-4 text-foreground">
        <View className="absolute top-[-50px] right-[-50px] h-48 w-48 rounded-full bg-primary/10 opacity-20 blur-3xl" />
        <View className="absolute bottom-[-100px] left-[-20px] h-64 w-64 rounded-full bg-primary/5 opacity-15 blur-3xl" />
        <View className="relative z-10 flex flex-col gap-4">
          <Tag
            type="primary"
            className="self-start rounded-full px-3 py-1 text-[10px] uppercase tracking-widest"
          >
            🚀 Taro 4.x Multi-Platform
          </Tag>
          <View className="flex flex-col gap-2">
            <View className="font-medium font-serif text-3xl leading-tight tracking-tight">
              Taro Showcase
            </View>
            <View className="max-w-md text-muted-foreground text-sm leading-relaxed">
              基于 React + Tailwind CSS
              编译的高性能、跨端开发示例，展示极速首屏渲染与全平台原生交互适配的最佳实践。
            </View>
          </View>
        </View>
      </View>

      {/* Dashboard Grid */}
      <Grid columns={2} gap={16} className="demo-menu-grid">
        {MENU_ITEMS.map((item) => (
          <Grid.Item
            key={item.url}
            text={
              <View
                className="demo-menu-tile"
                onClick={() => navigateTo(item.url)}
              >
                <View className="flex flex-col gap-1.5">
                  <View className="flex items-center justify-between">
                    <View className="font-medium font-serif text-base text-foreground">
                      {item.title}
                    </View>
                    {item.badgeType === 'dot' ? (
                      <Badge dot />
                    ) : (
                      <Badge value={item.badge} />
                    )}
                  </View>
                  <View className="text-muted-foreground text-xs leading-snug">
                    {item.desc}
                  </View>
                </View>
                <View className="self-end font-semibold text-primary text-xs">
                  {item.cta}
                </View>
              </View>
            }
          />
        ))}
      </Grid>

      <DemoNavCell
        title="🐻 Zustand 状态管理"
        description="轻量级高性能全局状态机，支持多端数据本地持久化存储"
        extra={
          <Tag type="success" className="rounded-full px-2 py-0.5 text-[9px]">
            Store
          </Tag>
        }
        onClick={() => navigateTo('/pages/zustand/index')}
      />

      <DemoSection
        title={
          locale === 'zh-CN'
            ? 'NutUI 组件库接入演示'
            : 'NutUI Components Showcase'
        }
        description={
          locale === 'zh-CN'
            ? '通过 ConfigProvider 关联 CSS Variables 主题，支持全局国际化切换'
            : 'Themed via CSS variables through ConfigProvider, supports global i18n'
        }
      >
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-col gap-0.5">
            <View className="font-semibold text-foreground text-sm">
              {locale === 'zh-CN' ? '切换国际化语言' : 'Toggle Language'}
            </View>
            <View className="text-muted-foreground text-xs">
              {locale === 'zh-CN' ? `当前: ${locale}` : `Current: ${locale}`}
            </View>
          </View>
          <Switch
            checked={locale === 'en-US'}
            onChange={() => toggleLocale()}
          />
        </View>

        <Divider />

        <View className="flex flex-col gap-3">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            {locale === 'zh-CN'
              ? '主题色关联测试 (Terracotta 陶土橙)'
              : 'Theme Sync Test (Terracotta)'}
          </View>
          <Space wrap className="w-full">
            <Button
              type="primary"
              size="small"
              className="flex-1 rounded-lg shadow-ring"
            >
              {locale === 'zh-CN' ? '主要按钮' : 'Primary'}
            </Button>
            <Button
              type="info"
              size="small"
              className="flex-1 rounded-lg shadow-ring"
            >
              {locale === 'zh-CN' ? '辅助按钮' : 'Info'}
            </Button>
            <Button
              type="default"
              size="small"
              className="flex-1 rounded-lg shadow-ring"
            >
              {locale === 'zh-CN' ? '幽灵按钮' : 'Ghost'}
            </Button>
          </Space>
        </View>
      </DemoSection>
    </DemoPage>
  );
}
