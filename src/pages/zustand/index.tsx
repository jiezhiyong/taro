import { Button, Input, Tag } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { useCounterStore } from '@/store/counterStore';
import { useUserStore } from '@/store/userStore';

interface ActionLog {
  id: string;
  time: string;
  action: string;
}

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

  // 局部状态：用户输入框 & 操作日志流水
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

  const colorPresets = [
    { value: '#4f46e5', label: '靛蓝' },
    { value: '#10b981', label: '翡翠' },
    { value: '#f43f5e', label: '玫瑰' },
    { value: '#f59e0b', label: '琥珀' },
    { value: '#8b5cf6', label: '紫罗兰' },
  ];

  return (
    <View className="min-h-screen bg-background pb-12 font-sans text-foreground">
      {/* 顶部发光标题区域 */}
      <View className="relative overflow-hidden px-6 pt-12 pb-10">
        <View className="absolute top-[-30px] right-[-30px] h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <View className="absolute bottom-[-50px] left-[-30px] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <View className="relative z-10 flex items-center justify-between">
          <View>
            <View className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-semibold text-[10px] text-primary uppercase tracking-widest">
              🐻 State Manager
            </View>
            <Text className="block font-medium font-serif text-3xl tracking-tight">
              Zustand 状态管理
            </Text>
            <Text className="mt-1 block font-sans text-muted-foreground text-xs">
              轻量、极速性能的多端状态流转方案
            </Text>
          </View>
          <View
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-input bg-secondary text-secondary-foreground shadow-ring transition-all active:scale-95"
            onClick={handleGoBack}
          >
            ←
          </View>
        </View>
      </View>

      <View className="space-y-6 px-6">
        {/* 模块 1: Counter (非持久化内存存储) */}
        <View className="premium-card p-6">
          <View className="flex items-center justify-between border-border border-b pb-4">
            <View>
              <Text className="block font-medium font-serif text-base text-foreground">
                ⏱️ 计数状态 (内存存储)
              </Text>
              <Text className="mt-0.5 block font-sans text-[10px] text-muted-foreground">
                当页面完全关闭/小程序冷启动后会被重置
              </Text>
            </View>
            <View
              className="cursor-pointer rounded-lg border border-input bg-secondary px-2.5 py-1 font-sans text-secondary-foreground text-xs shadow-ring active:scale-95"
              onClick={handleResetCounter}
            >
              重置
            </View>
          </View>

          <View className="my-6 flex items-center justify-center gap-10">
            <Button
              shape="round"
              className="flex h-12 w-12 items-center justify-center border-input bg-secondary font-semibold text-lg text-secondary-foreground shadow-ring transition-all active:scale-90"
              onClick={handleDecrement}
            >
              -
            </Button>
            <View className="min-w-[80px] text-center">
              <Text className="block font-medium font-serif text-4xl text-foreground tracking-tight transition-all duration-350">
                {count}
              </Text>
              <Text className="mt-1 block font-mono text-[10px] text-muted-foreground tracking-widest">
                COUNT VALUE
              </Text>
            </View>
            <Button
              shape="round"
              type="primary"
              className="flex h-12 w-12 items-center justify-center font-semibold text-lg shadow-ring transition-all active:scale-90"
              onClick={handleIncrement}
            >
              +
            </Button>
          </View>
        </View>

        {/* 模块 2: User Settings (多端持久化存储) */}
        <View className="premium-card p-6">
          {/* 头部信息 */}
          <View className="mb-5 flex items-center justify-between border-border border-b pb-4">
            <View>
              <Text className="block font-medium font-serif text-base text-foreground">
                👤 个人设置 (持久化存储)
              </Text>
              <Text className="mt-0.5 block font-sans font-semibold text-[10px] text-success">
                💾 自动映射至 Taro Storage (刷新不丢失)
              </Text>
            </View>
            <View
              className="cursor-pointer rounded-lg border border-destructive/20 bg-destructive/10 px-2.5 py-1 font-sans text-destructive text-xs active:scale-95"
              onClick={handleResetProfile}
            >
              恢复默认
            </View>
          </View>

          {/* 实时预览卡片 */}
          <View className="mb-6 rounded-xl border border-border bg-secondary/40 p-4 transition-all duration-300">
            <View className="flex items-start gap-4">
              <View
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-medium font-serif text-lg text-white shadow-whisper transition-all duration-500"
                style={{ backgroundColor: profile.themeColor }}
              >
                {profile.nickname
                  ? profile.nickname.charAt(0).toUpperCase()
                  : 'U'}
              </View>
              <View className="min-w-0 flex-1">
                <Text className="block truncate font-medium font-serif text-base text-foreground">
                  {profile.nickname || '未设定昵称'}
                </Text>
                <Text className="mt-0.5 block truncate font-sans text-muted-foreground text-xs">
                  色彩标识：
                  <Text
                    className="font-mono font-semibold text-xs"
                    style={{ color: profile.themeColor }}
                  >
                    {profile.themeColor}
                  </Text>
                </Text>
              </View>
            </View>

            {/* 标签预览与移除交互 */}
            <View className="mt-4 flex flex-wrap gap-2">
              {profile.tags.length === 0 ? (
                <Text className="font-sans text-muted-foreground text-xs">
                  暂无个性化标签
                </Text>
              ) : (
                profile.tags.map((tag) => (
                  <Tag
                    key={tag}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 font-sans text-[10px] text-foreground transition-all hover:border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    <Text>{tag}</Text>
                    <Text className="ml-0.5 font-bold text-muted-foreground hover:text-destructive">
                      ×
                    </Text>
                  </Tag>
                ))
              )}
            </View>
          </View>

          {/* 表单控件区 */}
          <View className="space-y-4">
            {/* 修改昵称 */}
            <View>
              <Text className="mb-1.5 block font-sans font-semibold text-muted-foreground text-xs">
                修改昵称
              </Text>
              <Input
                className="w-full rounded-lg border border-input bg-card text-foreground text-sm"
                value={profile.nickname}
                onChange={handleNicknameChange}
                placeholder="请输入您的昵称"
              />
            </View>

            {/* 选择主题色 */}
            <View>
              <Text className="mb-2 block font-sans font-semibold text-muted-foreground text-xs">
                个性主题配色
              </Text>
              <View className="flex items-center gap-3.5">
                {colorPresets.map((preset) => (
                  <View
                    key={preset.value}
                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                      profile.themeColor === preset.value
                        ? 'scale-110 ring-2 ring-primary ring-offset-2 ring-offset-background'
                        : 'opacity-80 hover:scale-105 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: preset.value }}
                    onClick={() =>
                      handleColorChange(preset.value, preset.label)
                    }
                  >
                    {profile.themeColor === preset.value && (
                      <Text className="font-bold text-[10px] text-white">
                        ✓
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* 添加偏好标签 */}
            <View>
              <Text className="mb-1.5 block font-sans font-semibold text-muted-foreground text-xs">
                标签偏好管理
              </Text>
              <View className="flex items-center gap-2">
                <Input
                  className="flex-1 rounded-lg border border-input bg-card text-foreground text-sm"
                  value={newTag}
                  onChange={(val) => setNewTag(val)}
                  placeholder="输入新标签，回车或点击添加..."
                  onConfirm={handleAddTag}
                />
                <View
                  className="flex h-[42px] cursor-pointer items-center justify-center rounded-lg border border-input bg-secondary px-4 font-semibold text-secondary-foreground text-sm shadow-ring transition-all active:scale-95"
                  onClick={handleAddTag}
                >
                  添加
                </View>
              </View>
              <Text className="mt-1.5 block font-sans text-[10px] text-muted-foreground leading-relaxed">
                💡 贴心提示：您可以直接点击上方卡片中的标签将其移除。
              </Text>
            </View>
          </View>
        </View>

        {/* 模块 3: 日志流水终端 */}
        <View className="dark rounded-xl border border-border bg-background p-5 font-mono shadow-whisper">
          <Text className="mb-3 block font-bold font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            📠 Real-time Action Logger
          </Text>
          <View className="max-h-[200px] min-h-[140px] space-y-1.5 overflow-y-auto rounded-lg border border-border bg-card p-4 text-[11px] leading-relaxed">
            {logs.map((log) => (
              <View key={log.id} className="flex items-start gap-2">
                <Text className="shrink-0 font-semibold text-primary/90">
                  [{log.time}]
                </Text>
                <Text className="flex-1 break-all text-foreground">
                  {log.action}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 持久化验证与导航说明 */}
        <View className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
          <Text className="block font-sans text-muted-foreground text-xs leading-relaxed">
            想测试多端持久化？您可以点击下方返回首页，刷新页面，再次进入本页，个人设置（昵称、色彩、标签）仍将完好如初！
          </Text>
          <View
            className="mt-3.5 inline-flex cursor-pointer items-center gap-1 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 font-sans font-semibold text-primary text-xs shadow-ring active:scale-95"
            onClick={handleGoBack}
          >
            返回 Showcase 首页
          </View>
        </View>
      </View>
    </View>
  );
}
