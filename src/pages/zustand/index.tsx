import { Minus, Plus, Refresh } from '@nutui/icons-react-taro';
import { Avatar, Button, Space, Tag } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';
import { useCounterStore } from '@/store/counterStore';
import { useUserStore } from '@/store/userStore';

const COLOR_PRESETS = [
  { value: 'var(--primary)', label: '陶土橙' },
  { value: 'var(--success)', label: '暖绿' },
  { value: 'var(--warning)', label: '琥珀' },
  { value: 'var(--destructive)', label: '赤褐' },
  { value: 'var(--foreground)', label: '墨黑' },
];

export default function ZustandShowcase() {
  const {
    count,
    increment,
    decrement,
    reset: resetCounter,
  } = useCounterStore();
  const {
    profile,
    updateNickname,
    updateThemeColor,
    addTag,
    removeTag,
    resetProfile,
  } = useUserStore();

  const [newTag, setNewTag] = useState('');

  const handleNicknameChange = (val: string) => {
    updateNickname(val);
  };

  const handleColorChange = (color: string) => {
    updateThemeColor(color);
  };

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (!trimmed) return;
    if (profile.tags.includes(trimmed)) {
      Taro.showToast({ title: '标签已存在', icon: 'none' });
      return;
    }
    addTag(trimmed);
    setNewTag('');
  };

  const handleRemoveTag = (tag: string) => {
    removeTag(tag);
  };

  const handleResetProfile = () => {
    resetProfile();
    Taro.showToast({ title: '配置已重置', icon: 'success' });
  };

  return (
    <PageWrapper>
      <PageHeader
        title="Zustand 状态管理"
        description="轻量、极速性能的多端局部与全局状态流转方案"
      />

      <SectionCard
        title="计数状态 (内存存储)"
        description="当页面完全关闭/小程序冷启动后会被重置"
      >
        <Space className="w-full items-center">
          <Button onClick={decrement}>
            <Minus />
          </Button>
          <Button fill="none">{count}</Button>
          <Button onClick={increment}>
            <Plus />
          </Button>
          <Button onClick={resetCounter}>
            <Refresh />
          </Button>
        </Space>
      </SectionCard>

      <SectionCard
        title="个人设置 (持久化存储)"
        description="自动映射至 Taro Storage，刷新不丢失"
      >
        <View className="rounded-3xl border border-border bg-background p-5 shadow-ring">
          <View className="flex items-start gap-4">
            <Avatar
              background={profile.themeColor}
              color="var(--primary-foreground)"
            >
              {profile.nickname
                ? profile.nickname.charAt(0).toUpperCase()
                : 'U'}
            </Avatar>
            <View className="flex min-w-0 flex-1 flex-col gap-0.5">
              <View className="truncate font-medium text-base text-foreground">
                {profile.nickname || '未设定昵称'}
              </View>
              <View className="truncate text-muted-foreground text-xs">
                色彩标识：{profile.themeColor}
              </View>
            </View>
          </View>

          <Space wrap className="mt-4">
            {profile.tags.length === 0 ? (
              <View className="text-muted-foreground text-xs">
                暂无个性化标签
              </View>
            ) : (
              profile.tags.map((tag) => (
                <Tag
                  type="default"
                  key={tag}
                  onClick={() => handleRemoveTag(tag)}
                  className="cursor-pointer"
                >
                  {tag} ×
                </Tag>
              ))
            )}
          </Space>
        </View>

        <View className="flex flex-col gap-2">
          <View className="font-semibold text-xs">个性主题配色</View>
          <Space wrap className="pt-1">
            {COLOR_PRESETS.map((preset) => (
              <Button
                key={preset.value}
                style={{ backgroundColor: preset.value }}
                onClick={() => handleColorChange(preset.value)}
              >
                <Text className="w-4 text-white">
                  {profile.themeColor === preset.value ? '✓' : ' '}
                </Text>
              </Button>
            ))}
          </Space>
        </View>

        <Button type="danger" fill="outline" onClick={handleResetProfile}>
          恢复默认
        </Button>
      </SectionCard>
    </PageWrapper>
  );
}
