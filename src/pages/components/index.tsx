import { Badge, Button, Space, Tag } from '@nutui/nutui-react-taro';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';

export default function Components() {
  return (
    <PageWrapper className="pb-12.5">
      <PageHeader
        title="基础组件"
        description="符合跨端兼容的标准 UI 基础组装单元"
      />

      <SectionCard title="Buttons" description="交互式按钮">
        <Space>
          <Button type="primary">Primary</Button>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
        </Space>
      </SectionCard>

      <SectionCard title="Badges" description="徽标">
        <Space wrap className="items-center pt-1">
          <Badge dot>
            <Button
              size="small"
              type="default"
              className="h-10 w-10 rounded-xl border border-border bg-secondary text-lg shadow-ring"
            >
              🔔
            </Button>
          </Badge>
          <Badge value={8}>
            <Button size="small" type="primary" className="rounded-lg text-xs">
              未读消息
            </Button>
          </Badge>
          <Badge value="New">
            <Button size="small" type="info" className="rounded-lg text-xs">
              全新功能
            </Button>
          </Badge>
        </Space>
      </SectionCard>

      <SectionCard title="Tags" description="语义化标签">
        <Space wrap>
          <Tag type="primary">主要标签</Tag>
          <Tag type="success">成功标签</Tag>
          <Tag type="warning">警告标签</Tag>
          <Tag type="danger">危险标签</Tag>
        </Space>
      </SectionCard>
    </PageWrapper>
  );
}
