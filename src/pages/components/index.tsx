import { Badge, Button, Divider, Space, Tag } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import {
  DemoPage,
  DemoPageHeader,
  DemoSection,
} from '@/components/demo-layout';

export default function Components() {
  return (
    <DemoPage>
      <DemoPageHeader
        title="🧩 基础组件"
        description="符合 React Native 与跨端兼容的标准 UI 基础组装单元"
      />

      <DemoSection title="交互式按钮 Buttons">
        <Space direction="vertical" className="w-full">
          <Button
            type="primary"
            block
            className="rounded-lg font-semibold text-xs shadow-ring"
          >
            品牌主色按钮 (Primary)
          </Button>
          <Button
            type="info"
            block
            className="rounded-lg font-semibold text-xs shadow-ring"
          >
            品牌辅助按钮 (Info)
          </Button>
          <Button
            type="success"
            block
            className="rounded-lg font-semibold text-xs shadow-ring"
          >
            成功状态按钮 (Success)
          </Button>
          <Button
            type="danger"
            block
            className="rounded-lg font-semibold text-xs shadow-ring"
          >
            危险警告按钮 (Danger)
          </Button>
        </Space>
      </DemoSection>

      <DemoSection title="语义化标签与徽标 Badges & Tags">
        <View className="flex flex-col gap-2.5">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            组件标签 Tags
          </View>
          <Space wrap>
            <Tag
              type="primary"
              className="rounded-full px-3 py-1 text-[10px] tracking-wider"
            >
              主要标签
            </Tag>
            <Tag
              type="success"
              className="rounded-full px-3 py-1 text-[10px] tracking-wider"
            >
              成功标签
            </Tag>
            <Tag
              type="warning"
              className="rounded-full px-3 py-1 text-[10px] tracking-wider"
            >
              警告标签
            </Tag>
            <Tag
              type="danger"
              className="rounded-full px-3 py-1 text-[10px] tracking-wider"
            >
              危险标签
            </Tag>
          </Space>
        </View>

        <Divider />

        <View className="flex flex-col gap-3">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            交互徽标 Badges
          </View>
          <Space wrap className="items-center pt-1">
            <Badge value={8}>
              <Button
                size="small"
                type="primary"
                className="rounded-lg text-xs"
              >
                未读消息
              </Button>
            </Badge>
            <Badge value="New">
              <Button size="small" type="info" className="rounded-lg text-xs">
                全新功能
              </Button>
            </Badge>
            <Badge dot>
              <Button
                size="small"
                type="default"
                className="h-10 w-10 rounded-xl border border-border bg-secondary text-lg shadow-ring"
              >
                🔔
              </Button>
            </Badge>
          </Space>
        </View>
      </DemoSection>

      <DemoSection title="优雅卡片 Premium Card">
        <View className="flex flex-col gap-3 rounded-xl border border-border bg-secondary/35 p-5 shadow-ring">
          <View className="flex items-center gap-2 font-medium text-foreground text-sm">
            <Tag
              type="primary"
              className="rounded-full px-2 py-0.5 text-[10px]"
            >
              核心
            </Tag>
            模块化设计
          </View>
          <View className="text-muted-foreground text-xs leading-relaxed">
            卡片是所有跨端视口的基础容器，符合 Flex-only 排布规范，可完美适配
            H5、微信小程序及 React Native 端，保障高水准的一致性视觉输出。
          </View>
        </View>
      </DemoSection>
    </DemoPage>
  );
}
