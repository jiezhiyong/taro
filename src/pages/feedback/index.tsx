import {
  Dialog,
  Loading,
  Overlay,
  Skeleton,
  Toast,
} from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

export default function Feedback() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState('提示信息');
  const [toastIcon, setToastIcon] = useState<'success' | 'fail' | 'warn' | 'loading' | null>(null);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);

  const showToast = (type: string, text: string) => {
    let iconName: 'success' | 'fail' | 'warn' | 'loading' | null = null;
    if (type === 'success') iconName = 'success';
    else if (type === 'error') iconName = 'fail';
    else if (type === 'warn') iconName = 'warn';
    else if (type === 'loading') iconName = 'loading';

    setToastIcon(iconName);
    setToastText(text);
    setToastVisible(true);
  };

  const showLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 2500);
  };

  const showNativeDialog = () => {
    setDialogVisible(true);
  };

  return (
    <View className="relative min-h-screen bg-background p-6 pb-20 font-sans">
      <View className="mb-6">
        <Text className="block font-medium font-serif text-2xl text-foreground">
          🔔 反馈与状态
        </Text>
        <Text className="mt-1 block font-sans text-muted-foreground text-xs">
          高交互性的模态提示、骨架屏及多端状态控制
        </Text>
      </View>

      {/* Toast triggers */}
      <View className="premium-card mb-6 p-6">
        <Text className="mb-4 block font-medium font-serif text-base text-foreground">
          轻提示 Toast
        </Text>
        <View className="grid grid-cols-2 gap-3">
          <View
            className="w-full rounded-lg border border-input bg-secondary py-3.5 text-center font-semibold text-secondary-foreground text-xs shadow-ring active:scale-98"
            onClick={() => showToast('info', 'ℹ️ 正在拉取云端数据...')}
          >
            普通提示
          </View>
          <View
            className="w-full rounded-lg border border-success/30 bg-success/15 py-3.5 text-center font-semibold text-success text-xs active:scale-98"
            onClick={() => showToast('success', '✅ 微信授权登录成功')}
          >
            成功提示
          </View>
          <View
            className="w-full rounded-lg border border-destructive/30 bg-destructive/15 py-3.5 text-center font-semibold text-destructive text-xs active:scale-98"
            onClick={() => showToast('error', '❌ 上传网络超时，请重试')}
          >
            失败提示
          </View>
          <View
            className="w-full rounded-lg bg-primary py-3.5 text-center font-semibold text-primary-foreground text-xs shadow-ring active:scale-98"
            onClick={showNativeDialog}
          >
            原生弹窗
          </View>
        </View>
      </View>

      {/* Loading Overlay */}
      <View className="premium-card mb-6 p-6">
        <Text className="mb-4 block font-medium font-serif text-base text-foreground">
          加载 Loading & 遮罩
        </Text>
        <View className="flex gap-4">
          <View
            className="flex-1 rounded-lg bg-primary py-3.5 text-center font-semibold text-primary-foreground text-xs shadow-ring active:scale-98"
            onClick={showLoading}
          >
            模拟全屏加载
          </View>
          <View
            className="flex-1 rounded-lg border border-input bg-secondary py-3.5 text-center font-semibold text-secondary-foreground text-xs shadow-ring active:scale-98"
            onClick={() => setSkeletonLoading(!skeletonLoading)}
          >
            切换骨架屏状态
          </View>
        </View>
      </View>

      {/* Skeleton Loading */}
      <View className="premium-card mb-6 p-6">
        <Text className="mb-4 block font-medium font-serif text-base text-foreground">
          智能骨架屏 Skeleton
        </Text>
        <Skeleton rows={3} animated visible={!skeletonLoading}>
          <View className="flex items-center">
            <View className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary font-semibold text-primary-foreground text-sm shadow-ring">
              JD
            </View>
            <View className="flex-1">
              <Text className="block font-semibold text-foreground text-sm">
                云端用户: DeepMind-AI
              </Text>
              <Text className="mt-1 block text-muted-foreground text-xs">
                由 Taro-best-practices 渲染完成
              </Text>
            </View>
          </View>
        </Skeleton>
      </View>

      {/* Success/Error Results */}
      <View className="premium-card p-6">
        <Text className="mb-4 block font-medium font-serif text-base text-foreground">
          多态结果页 Result
        </Text>
        <View className="rounded-xl border border-border bg-secondary/40 p-6 text-center">
          <View className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-2xl shadow-inner">
            ✨
          </View>
          <Text className="block font-medium font-serif text-base text-foreground">
            操作执行完毕
          </Text>
          <Text className="mx-auto mt-2 block max-w-xs text-muted-foreground text-xs leading-relaxed">
            数据记录已经过 Alipay 自动序列化转换并推送到后台服务器。
          </Text>
        </View>
      </View>

      {/* NutUI Declarative Toast */}
      <Toast
        visible={toastVisible}
        content={toastText}
        icon={toastIcon}
        onClose={() => setToastVisible(false)}
      />

      {/* NutUI Dialog Component */}
      <Dialog
        visible={dialogVisible}
        title="最佳实践确认"
        content="这是一个 NutUI 弹窗（Dialog）最佳实践展示，能自动适配不同终端样式。"
        onConfirm={() => {
          setDialogVisible(false);
          Taro.showToast({ title: '已确认', icon: 'success' });
        }}
        onCancel={() => setDialogVisible(false)}
      />

      {/* Screen Loading Mask overlay */}
      <Overlay
        visible={loadingVisible}
        className="flex items-center justify-center bg-[#141413]/60 backdrop-blur-xs"
        zIndex={2000}
      >
        <View className="premium-card flex flex-col items-center justify-center p-6 shadow-whisper">
          <Loading direction="vertical">云端数据载入中...</Loading>
        </View>
      </Overlay>
    </View>
  );
}
