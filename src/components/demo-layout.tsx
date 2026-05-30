import { Cell, CellGroup, SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import type { ReactNode } from 'react';

interface DemoPageProps {
  children: ReactNode;
}

/** 统一页面容器：宽松 padding + TabBar 底部留白 */
export function DemoPage({ children }: DemoPageProps) {
  return (
    <View className="page-wrapper flex flex-col gap-6 bg-background font-sans text-foreground">
      {children}
      <SafeArea position="bottom" />
    </View>
  );
}

interface DemoPageHeaderProps {
  title: string;
  description: string;
}

export function DemoPageHeader({ title, description }: DemoPageHeaderProps) {
  return (
    <View className="demo-page-header flex flex-col gap-1.5">
      <View className="font-medium font-serif text-2xl text-foreground leading-tight">
        {title}
      </View>
      <View className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </View>
    </View>
  );
}

interface DemoSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** 基于 NutUI CellGroup 的区块卡片 */
export function DemoSection({
  title,
  description,
  children,
  className = '',
}: DemoSectionProps) {
  return (
    <CellGroup
      title={title}
      description={description}
      divider={false}
      className={`demo-section ${className}`.trim()}
    >
      <View className="demo-section-body">{children}</View>
    </CellGroup>
  );
}

interface DemoNavCellProps {
  title: string;
  description: string;
  extra?: ReactNode;
  onClick: () => void;
}

/** 可点击导航行 */
export function DemoNavCell({
  title,
  description,
  extra,
  onClick,
}: DemoNavCellProps) {
  return (
    <Cell
      title={title}
      description={description}
      extra={extra}
      clickable
      onClick={onClick}
      className="rounded-xl border border-border bg-card shadow-whisper"
    />
  );
}
