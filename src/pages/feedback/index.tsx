import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

export default function Feedback() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState('提示信息');
  const [_toastType, setToastType] = useState('info');
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  const showToast = (type: string, text: string) => {
    setToastType(type);
    setToastText(text);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const showLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 2500);
  };

  const showNativeDialog = () => {
    Taro.showModal({
      title: '最佳实践确认',
      content:
        '这是一个原生弹窗（Modal）最佳实践展示，能自动适配不同终端原生样式。',
      success: (res) => {
        if (res.confirm) {
          Taro.showToast({ title: '已确认', icon: 'success' });
        }
      },
    });
  };

  return (
    <View className="relative min-h-screen bg-slate-50 p-6 pb-20">
      <View className="mb-6">
        <Text className="block font-extrabold text-2xl text-slate-800">
          🔔 反馈与状态
        </Text>
        <Text className="mt-1 block text-slate-500 text-xs">
          高交互性的模态提示、骨架屏及多端状态控制
        </Text>
      </View>

      {/* Toast triggers */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          轻提示 Toast
        </Text>
        <View className="grid grid-cols-2 gap-3">
          <View
            className="premium-btn rounded-xl bg-slate-100 py-3.5 text-center font-semibold text-slate-700 text-xs"
            onClick={() => showToast('info', 'ℹ️ 正在拉取云端数据...')}
          >
            普通提示
          </View>
          <View
            className="premium-btn rounded-xl border border-emerald-100 bg-emerald-50 py-3.5 text-center font-semibold text-emerald-600 text-xs"
            onClick={() => showToast('success', '✅ 微信授权登录成功')}
          >
            成功提示
          </View>
          <View
            className="premium-btn rounded-xl border border-rose-100 bg-rose-50 py-3.5 text-center font-semibold text-rose-600 text-xs"
            onClick={() => showToast('error', '❌ 上传网络超时，请重试')}
          >
            失败提示
          </View>
          <View
            className="premium-btn rounded-xl border border-indigo-100 bg-indigo-50 py-3.5 text-center font-semibold text-indigo-600 text-xs"
            onClick={showNativeDialog}
          >
            原生弹窗
          </View>
        </View>
      </View>

      {/* Loading Overlay */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          加载 Loading & 遮罩
        </Text>
        <View className="flex gap-4">
          <View
            className="premium-btn flex-1 rounded-xl bg-indigo-600 py-3.5 text-center font-bold text-white text-xs shadow-indigo-100 shadow-md"
            onClick={showLoading}
          >
            模拟全屏加载
          </View>
          <View
            className="premium-btn flex-1 rounded-xl bg-slate-900 py-3.5 text-center font-bold text-white text-xs"
            onClick={() => setSkeletonLoading(!skeletonLoading)}
          >
            切换骨架屏状态
          </View>
        </View>
      </View>

      {/* Skeleton Loading */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          智能骨架屏 Skeleton
        </Text>
        {skeletonLoading ? (
          <View className="flex items-center">
            <View className="mr-4 h-12 w-12 shrink-0 animate-pulse rounded-2xl bg-slate-200" />
            <View className="flex-1 space-y-2">
              <View className="h-4 w-1/3 animate-pulse rounded-lg bg-slate-200" />
              <View className="h-3 w-3/4 animate-pulse rounded-lg bg-slate-200" />
            </View>
          </View>
        ) : (
          <View className="flex items-center">
            <View className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr from-indigo-500 to-blue-600 font-extrabold text-white shadow-md">
              JD
            </View>
            <View className="flex-1">
              <Text className="block font-bold text-slate-800 text-sm">
                云端用户: DeepMind-AI
              </Text>
              <Text className="mt-1 block text-slate-400 text-xs">
                由 Taro-best-practices 渲染完成
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Success/Error Results */}
      <View className="premium-card border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          多态结果页 Result
        </Text>
        <View className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-center">
          <View className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-2xl shadow-inner">
            ✨
          </View>
          <Text className="block font-extrabold text-base text-slate-800">
            操作执行完毕
          </Text>
          <Text className="mx-auto mt-2 block max-w-xs text-slate-500 text-xs leading-relaxed">
            数据记录已经过 Alipay 自动序列化转换并推送到后台服务器。
          </Text>
        </View>
      </View>

      {/* Custom absolute Toast container */}
      {toastVisible && (
        <View className="absolute top-1/2 left-1/2 z-50 flex max-w-xs -translate-x-1/2 -translate-y-1/2 animate-fade-in items-center justify-center rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-4 shadow-xl backdrop-blur-md">
          <Text className="text-center font-bold text-white text-xs leading-relaxed">
            {toastText}
          </Text>
        </View>
      )}

      {/* Screen Loading Mask overlay */}
      {loadingVisible && (
        <View className="absolute inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-950/70">
          <View className="premium-card flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl">
            <View className="mb-3 h-8 w-8 animate-spin rounded-full border-3 border-indigo-600 border-t-transparent" />
            <Text className="font-semibold text-slate-600 text-xs">
              云端数据载入中...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
