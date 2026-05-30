import { Input, Text, View } from '@tarojs/components';
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

  const handleNicknameChange = (e: { detail: { value: string } }) => {
    const val = e.detail.value;
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
    <View className="min-h-screen bg-slate-950 pb-12 text-slate-100">
      {/* 顶部发光标题区域 */}
      <View className="relative overflow-hidden px-6 pt-12 pb-10">
        <View className="absolute top-[-30px] right-[-30px] h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
        <View className="absolute bottom-[-50px] left-[-30px] h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />

        <View className="relative z-10 flex items-center justify-between">
          <View>
            <View className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-semibold text-[10px] text-indigo-300 uppercase tracking-wider">
              🐻 State Manager
            </View>
            <Text className="block font-extrabold text-3xl text-white tracking-tight">
              Zustand 状态管理
            </Text>
            <Text className="mt-1 block text-slate-400 text-xs">
              轻量、极致性能的多端状态流转方案
            </Text>
          </View>
          <View
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition-all hover:bg-slate-800 active:scale-95"
            onClick={handleGoBack}
          >
            ←
          </View>
        </View>
      </View>

      <View className="space-y-6 px-6">
        {/* 模块 1: Counter (非持久化内存存储) */}
        <View className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md">
          <View className="flex items-center justify-between border-slate-850 border-b pb-4">
            <View>
              <Text className="block font-bold text-base text-white">
                ⏱️ 计数状态 (内存存储)
              </Text>
              <Text className="mt-0.5 block text-[10px] text-slate-500">
                当页面完全关闭/小程序冷启动后会被重置
              </Text>
            </View>
            <View
              className="cursor-pointer rounded-md bg-slate-800/80 px-2.5 py-1 text-slate-400 text-xs hover:bg-slate-700 active:scale-95"
              onClick={handleResetCounter}
            >
              重置
            </View>
          </View>

          <View className="my-6 flex items-center justify-center gap-10">
            <View
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-800 font-bold text-lg text-slate-300 transition-all hover:bg-slate-700 active:scale-90"
              onClick={handleDecrement}
            >
              -
            </View>
            <View className="min-w-[80px] text-center">
              <Text className="block font-black text-4xl text-indigo-400 tracking-tight transition-all duration-350">
                {count}
              </Text>
              <Text className="mt-1 block font-mono text-[10px] text-slate-500 tracking-widest">
                COUNT VALUE
              </Text>
            </View>
            <View
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-indigo-600 font-bold text-lg text-white shadow-indigo-600/30 shadow-md transition-all hover:bg-indigo-500 active:scale-90"
              onClick={handleIncrement}
            >
              +
            </View>
          </View>
        </View>

        {/* 模块 2: User Settings (多端持久化存储) */}
        <View className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md">
          {/* 头部信息 */}
          <View className="mb-5 flex items-center justify-between border-slate-850 border-b pb-4">
            <View>
              <Text className="block font-bold text-base text-white">
                👤 个人设置 (持久化存储)
              </Text>
              <Text className="mt-0.5 block font-semibold text-[10px] text-emerald-400">
                💾 自动映射至 Taro Storage (刷新不丢失)
              </Text>
            </View>
            <View
              className="cursor-pointer rounded-md border border-rose-900/30 bg-rose-950/30 px-2.5 py-1 text-rose-400 text-xs hover:bg-rose-900/20 active:scale-95"
              onClick={handleResetProfile}
            >
              恢复默认
            </View>
          </View>

          {/* 实时预览卡片 (毛玻璃效果) */}
          <View className="mb-6 rounded-xl border border-slate-800/80 bg-slate-950/50 p-4 transition-all duration-300">
            <View className="flex items-start gap-4">
              <View
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-extrabold text-lg text-white shadow-lg transition-all duration-500"
                style={{ backgroundColor: profile.themeColor }}
              >
                {profile.nickname
                  ? profile.nickname.charAt(0).toUpperCase()
                  : 'U'}
              </View>
              <View className="min-w-0 flex-1">
                <Text className="block truncate font-bold text-base text-white">
                  {profile.nickname || '未设定昵称'}
                </Text>
                <Text className="mt-0.5 block truncate text-slate-400 text-xs">
                  色彩标识：
                  <Text
                    className="font-mono font-semibold"
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
                <Text className="text-slate-500 text-xs">暂无个性化标签</Text>
              ) : (
                profile.tags.map((tag) => (
                  <View
                    key={tag}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-slate-700/60 bg-slate-800 px-2.5 py-0.5 text-[10px] text-slate-300 transition-all hover:border-rose-500/50 hover:bg-rose-950/20 hover:text-rose-300"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    <Text>{tag}</Text>
                    <Text className="ml-0.5 font-bold text-slate-500">×</Text>
                  </View>
                ))
              )}
            </View>
          </View>

          {/* 表单控件区 */}
          <View className="space-y-4">
            {/* 修改昵称 */}
            <View>
              <Text className="mb-1.5 block font-semibold text-slate-400 text-xs">
                修改昵称
              </Text>
              <Input
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 transition-all focus:border-indigo-500 focus:bg-slate-950"
                value={profile.nickname}
                onInput={handleNicknameChange}
                placeholder="请输入您的昵称"
              />
            </View>

            {/* 选择主题色 */}
            <View>
              <Text className="mb-2 block font-semibold text-slate-400 text-xs">
                个性主题配色
              </Text>
              <View className="flex items-center gap-3.5">
                {colorPresets.map((preset) => (
                  <View
                    key={preset.value}
                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                      profile.themeColor === preset.value
                        ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-slate-900'
                        : 'opacity-70 hover:scale-105 hover:opacity-100'
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
              <Text className="mb-1.5 block font-semibold text-slate-400 text-xs">
                标签偏好管理
              </Text>
              <View className="flex items-center gap-2">
                <Input
                  className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 transition-all focus:border-indigo-500 focus:bg-slate-950"
                  value={newTag}
                  onInput={(e) => setNewTag(e.detail.value)}
                  placeholder="输入新标签，回车或点击添加..."
                  onConfirm={handleAddTag}
                />
                <View
                  className="flex h-[42px] cursor-pointer items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800 px-4 font-semibold text-slate-300 text-sm transition-all hover:bg-slate-700 hover:text-white active:scale-95"
                  onClick={handleAddTag}
                >
                  添加
                </View>
              </View>
              <Text className="mt-1.5 block text-[10px] text-slate-500 leading-relaxed">
                💡 贴心提示：您可以直接点击上方卡片中的标签将其移除。
              </Text>
            </View>
          </View>
        </View>

        {/* 模块 3: 日志流水终端 (极其硬核美观) */}
        <View className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 font-mono">
          <Text className="mb-3 block font-bold text-slate-400 text-xs uppercase tracking-wider">
            📠 Real-time Action Logger
          </Text>
          <View className="max-h-[200px] min-h-[140px] space-y-1.5 overflow-y-auto rounded-xl border border-slate-900 bg-slate-950 p-4 text-[10px] leading-relaxed">
            {logs.map((log) => (
              <View key={log.id} className="flex items-start gap-2">
                <Text className="shrink-0 font-semibold text-indigo-400">
                  [{log.time}]
                </Text>
                <Text className="flex-1 break-all text-slate-300">
                  {log.action}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 持久化验证与导航说明 */}
        <View className="rounded-xl border border-slate-800/40 bg-slate-900/20 p-4 text-center">
          <Text className="block text-slate-400 text-xs leading-relaxed">
            想测试多端持久化？您可以点击下方返回首页，刷新页面，再次进入本页，个人设置（昵称、色彩、标签）仍将完好如初！
          </Text>
          <View
            className="mt-3.5 inline-flex cursor-pointer items-center gap-1 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 font-semibold text-indigo-300 text-xs transition-all hover:bg-indigo-500/20 active:scale-95"
            onClick={handleGoBack}
          >
            返回 Showcase 首页
          </View>
        </View>
      </View>
    </View>
  );
}
