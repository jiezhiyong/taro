import {
  Avatar,
  Button,
  Cell,
  Divider,
  Input,
  Space,
  Tag,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { DemoPage, DemoSection } from '@/components/demo-layout';
import { useCounterStore } from '@/store/counterStore';
import { useUserStore } from '@/store/userStore';

interface ActionLog {
  id: string;
  time: string;
  action: string;
}

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
  const [logs, setLogs] = useState<ActionLog[]>([
    {
      id: 'init',
      time: new Date().toLocaleTimeString(),
      action: '🐻 Zustand Store 初始化完成',
    },
  ]);

  const addLog = (action: string) => {
    const time = new Date().toLocaleTimeString();
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    setLogs((prev) => [{ id, time, action }, ...prev.slice(0, 7)]);
  };

  const handleIncrement = () => {
    increment();
    addLog(`➕ 计数器增加: ${count + 1}`);
  };

  const handleDecrement = () => {
    decrement();
    addLog(`➖ 计数器减少: ${count - 1}`);
  };

  const handleResetCounter = () => {
    resetCounter();
    addLog('🔄 计数器归零');
  };

  const handleNicknameChange = (val: string) => {
    updateNickname(val);
    addLog(`✍️ 昵称更新为: "${val}"`);
  };

  const handleColorChange = (color: string, colorName: string) => {
    updateThemeColor(color);
    addLog(`🎨 主题色切换为: ${colorName}`);
  };

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (!trimmed) return;
    if (profile.tags.includes(trimmed)) {
      Taro.showToast({ title: '标签已存在', icon: 'none' });
      return;
    }
    addTag(trimmed);
    addLog(`🏷️ 添加标签: "${trimmed}"`);
    setNewTag('');
  };

  const handleRemoveTag = (tag: string) => {
    removeTag(tag);
    addLog(`🗑️ 移除标签: "${tag}"`);
  };

  const handleResetProfile = () => {
    resetProfile();
    addLog('🔄 个人配置重置');
    Taro.showToast({ title: '配置已重置', icon: 'success' });
  };

  const handleGoBack = () => {
    Taro.navigateBack();
  };

  return (
    <DemoPage>
      <Cell
        title="Zustand 状态管理"
        description="轻量、极速性能的多端局部与全局状态流转方案"
        extra={
          <Space>
            <Tag type="primary" className="rounded-full px-2 py-0.5 text-[9px]">
              Store
            </Tag>
            <Button
              shape="round"
              size="small"
              type="default"
              className="h-10 w-10 border border-input bg-secondary font-bold text-xs shadow-ring"
              onClick={handleGoBack}
            >
              ←
            </Button>
          </Space>
        }
        className="demo-hero rounded-3xl border border-border bg-card shadow-whisper"
      />

      <DemoSection
        title="⏱️ 计数状态 (内存存储)"
        description="当页面完全关闭/小程序冷启动后会被重置"
      >
        <View className="flex items-center justify-between">
          <View />
          <Button
            size="small"
            type="default"
            className="rounded-lg border border-input bg-secondary text-xs shadow-ring"
            onClick={handleResetCounter}
          >
            重置
          </Button>
        </View>
        <View className="flex items-center justify-center gap-10 py-2">
          <Button
            shape="round"
            type="default"
            className="flex h-12 w-12 items-center justify-center border border-input bg-secondary text-lg shadow-ring"
            onClick={handleDecrement}
          >
            -
          </Button>
          <View className="flex min-w-[80px] flex-col gap-1 text-center">
            <View className="font-medium font-serif text-4xl text-foreground tracking-tight">
              {count}
            </View>
            <View className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
              Count Value
            </View>
          </View>
          <Button
            shape="round"
            type="primary"
            className="flex h-12 w-12 items-center justify-center text-lg shadow-ring"
            onClick={handleIncrement}
          >
            +
          </Button>
        </View>
      </DemoSection>

      <DemoSection
        title="👤 个人设置 (持久化存储)"
        description="💾 自动映射至 Taro Storage (刷新不丢失)"
      >
        <View className="flex items-center justify-end">
          <Button
            size="small"
            type="danger"
            className="rounded-lg text-xs"
            onClick={handleResetProfile}
          >
            恢复默认
          </Button>
        </View>

        <View className="rounded-xl border border-border bg-secondary/35 p-5 shadow-ring">
          <View className="flex items-start gap-4">
            <Avatar
              size="large"
              background={profile.themeColor}
              color="var(--primary-foreground)"
            >
              {profile.nickname
                ? profile.nickname.charAt(0).toUpperCase()
                : 'U'}
            </Avatar>
            <View className="flex min-w-0 flex-1 flex-col gap-0.5">
              <View className="truncate font-medium font-serif text-base text-foreground">
                {profile.nickname || '未设定昵称'}
              </View>
              <View className="truncate font-sans text-muted-foreground text-xs">
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
                  key={tag}
                  className="cursor-pointer rounded-full border border-border bg-card px-3 py-1 text-[10px] shadow-ring"
                  onClick={() => handleRemoveTag(tag)}
                >
                  {tag} ×
                </Tag>
              ))
            )}
          </Space>
        </View>

        <Divider />

        <View className="flex flex-col gap-2">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            修改昵称
          </View>
          <Input
            className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm"
            value={profile.nickname}
            onChange={handleNicknameChange}
            placeholder="请输入您的昵称"
          />
        </View>

        <Divider />

        <View className="flex flex-col gap-2">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            个性主题配色
          </View>
          <Space wrap className="pt-1">
            {COLOR_PRESETS.map((preset) => (
              <Button
                key={preset.value}
                shape="round"
                type="default"
                className={`h-8 w-8 min-w-8 border-2 p-0 ${
                  profile.themeColor === preset.value
                    ? 'scale-110 border-primary'
                    : 'border-transparent opacity-80'
                }`}
                style={{ backgroundColor: preset.value }}
                onClick={() => handleColorChange(preset.value, preset.label)}
              >
                {profile.themeColor === preset.value ? '✓' : ''}
              </Button>
            ))}
          </Space>
        </View>

        <Divider />

        <View className="flex flex-col gap-2">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            标签偏好管理
          </View>
          <Space className="w-full">
            <Input
              className="flex-1 rounded-xl border border-input bg-card px-4 py-2.5 text-sm"
              value={newTag}
              onChange={(val) => setNewTag(val)}
              placeholder="输入新标签..."
              onConfirm={handleAddTag}
            />
            <Button
              type="default"
              className="rounded-xl border border-input bg-secondary px-5 shadow-ring"
              onClick={handleAddTag}
            >
              添加
            </Button>
          </Space>
          <View className="text-[10px] text-muted-foreground leading-relaxed">
            💡 点击上方预览区中的标签可便捷移除。
          </View>
        </View>
      </DemoSection>

      <DemoSection title="📠 Real-time Action Logger">
        <View className="dark flex max-h-[160px] min-h-[120px] flex-col gap-2 overflow-y-auto rounded-lg border border-border bg-background p-4 font-mono text-[10px] leading-relaxed">
          {logs.map((log) => (
            <View key={log.id} className="flex items-start gap-2">
              <View className="shrink-0 font-semibold text-primary">
                [{log.time}]
              </View>
              <View className="flex-1 break-all text-foreground">
                {log.action}
              </View>
            </View>
          ))}
        </View>
      </DemoSection>

      <DemoSection title="持久化验证">
        <View className="flex flex-col items-center gap-4 text-center">
          <View className="max-w-sm text-muted-foreground text-xs leading-relaxed">
            返回首页后再次进入，个人设置（昵称、主题色、标签）仍将保留。
          </View>
          <Button
            type="primary"
            className="rounded-lg px-6 py-2.5 font-semibold text-xs shadow-ring"
            onClick={handleGoBack}
          >
            返回 Showcase 首页
          </Button>
        </View>
      </DemoSection>
    </DemoPage>
  );
}
