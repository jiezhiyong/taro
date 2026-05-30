import {
  Avatar,
  Button,
  Dialog,
  Loading,
  Overlay,
  ResultPage,
  Skeleton,
  Space,
  Toast,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import {
  DemoPage,
  DemoPageHeader,
  DemoSection,
} from '@/components/demo-layout';

export default function Feedback() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState('提示信息');
  const [toastIcon, setToastIcon] = useState<
    'success' | 'fail' | 'warn' | 'loading' | null
  >(null);
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

  return (
    <DemoPage>
      <DemoPageHeader
        title="🔔 反馈与状态"
        description="高交互性的模态提示、遮罩面板、智能骨架屏及多端统一的全局状态反馈"
      />

      <DemoSection title="轻提示 Toast">
        <View className="grid grid-cols-2 gap-3">
          <Button
            type="info"
            className="rounded-lg py-3 font-semibold text-xs shadow-ring"
            onClick={() => showToast('info', 'ℹ️ 正在拉取云端数据...')}
          >
            普通提示
          </Button>
          <Button
            type="success"
            className="rounded-lg py-3 font-semibold text-xs shadow-ring"
            onClick={() => showToast('success', '✅ 微信授权登录成功')}
          >
            成功提示
          </Button>
          <Button
            type="danger"
            className="rounded-lg py-3 font-semibold text-xs shadow-ring"
            onClick={() => showToast('error', '❌ 上传网络超时，请重试')}
          >
            失败提示
          </Button>
          <Button
            type="primary"
            className="rounded-lg py-3 font-semibold text-xs shadow-ring"
            onClick={() => setDialogVisible(true)}
          >
            模块弹窗
          </Button>
        </View>
      </DemoSection>

      <DemoSection title="加载 Loading & 遮罩">
        <Space className="w-full">
          <Button
            type="primary"
            className="flex-1 rounded-lg py-3 font-semibold text-xs shadow-ring"
            onClick={showLoading}
          >
            全屏加载
          </Button>
          <Button
            type="default"
            className="flex-1 rounded-lg border border-input bg-secondary py-3 font-semibold text-secondary-foreground text-xs shadow-ring"
            onClick={() => setSkeletonLoading(!skeletonLoading)}
          >
            骨架屏切换
          </Button>
        </Space>
      </DemoSection>

      <DemoSection title="智能骨架屏 Skeleton">
        <Skeleton rows={3} animated visible={!skeletonLoading}>
          <View className="flex items-center gap-4 rounded-lg bg-secondary/10 p-2">
            <Avatar
              size="large"
              background="var(--primary)"
              color="var(--primary-foreground)"
            >
              JD
            </Avatar>
            <View className="flex min-w-0 flex-1 flex-col gap-1">
              <View className="font-semibold text-foreground text-sm">
                云端用户: DeepMind-AI
              </View>
              <View className="text-muted-foreground text-xs">
                由 Taro-best-practices 编译渲染完成
              </View>
            </View>
          </View>
        </Skeleton>
      </DemoSection>

      <DemoSection title="多态结果页 ResultPage">
        <ResultPage
          status="success"
          title="操作执行完毕"
          description="数据记录已经过序列化转换并推送到后台服务器。"
          className="rounded-xl border border-border bg-secondary/35 py-4 shadow-ring"
        />
      </DemoSection>

      <Toast
        visible={toastVisible}
        content={toastText}
        icon={toastIcon}
        onClose={() => setToastVisible(false)}
      />

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

      <Overlay
        visible={loadingVisible}
        className="flex items-center justify-center bg-foreground/60"
        zIndex={2000}
      >
        <View className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-whisper">
          <Loading direction="vertical">云端数据载入中...</Loading>
        </View>
      </Overlay>
    </DemoPage>
  );
}
