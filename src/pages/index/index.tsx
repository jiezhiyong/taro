import { Button, Switch } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';
import { useLocaleStore } from '@/store/localeStore';
import './index.scss';

const MENU_ITEMS = [
  {
    title: '基础组件',
    url: '/pages/components/index',
  },
  {
    title: '表单组件',
    url: '/pages/form/index',
  },
  {
    title: 'Zustand 状态管理',
    url: '/pages/zustand/index',
  },
  {
    title: '导航组件',
    url: '/pages/navigation/index',
  },
  {
    title: '反馈组件',
    url: '/pages/feedback/index',
  },
];

export default function Index() {
  const { locale, toggleLocale } = useLocaleStore();

  return (
    <PageWrapper className="pb-12.5">
      <PageHeader
        title="Taro Showcase 🚀"
        tag="Taro 4.x"
        description="基于 React + Tailwind CSS 的高性能、跨端开发示例"
      />

      <View className="flex flex-wrap gap-2">
        {MENU_ITEMS.map((item) => (
          <Button
            key={item.url}
            type="primary"
            onClick={() => Taro.navigateTo({ url: item.url })}
          >
            {item.title}
          </Button>
        ))}
      </View>

      <SectionCard
        title="NutUI 组件库接入演示"
        description="通过 ConfigProvider 关联 CSS Variables 主题，支持全局国际化切换"
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
      </SectionCard>
    </PageWrapper>
  );
}
