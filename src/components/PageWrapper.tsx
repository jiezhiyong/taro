import { Badge, SafeArea } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/** 统一页面容器：宽松 padding + TabBar 底部留白 */
export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <View
      className={cn(
        'flex min-h-screen flex-col gap-4 bg-background px-4 pt-4',
        className,
      )}
    >
      {children}
      <SafeArea position="bottom" />
    </View>
  );
}

interface PageHeaderProps {
  title: string;
  tag?: string;
  description: string;
}

/** 页面头部 */
export function PageHeader({ title, tag, description }: PageHeaderProps) {
  return (
    <View className="flex flex-col gap-1.5">
      <View>
        <Badge value={tag} className="font-medium text-3xl leading-tight">
          {title}
        </Badge>
      </View>
      <View className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </View>
    </View>
  );
}

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** 区块卡片 */
export function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <View className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-card p-4 shadow-whisper">
      <View>
        <View className="font-semibold capitalize tracking-wider">{title}</View>
        {description && (
          <View className="text-muted-foreground text-xs leading-relaxed">
            {description}
          </View>
        )}
      </View>
      {children}
    </View>
  );
}
