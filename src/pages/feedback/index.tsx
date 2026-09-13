import {
  Avatar,
  Button,
  Dialog,
  Loading,
  Lottie,
  Overlay,
  ResultPage,
  Skeleton,
  Space,
  Toast,
} from '@nutui/nutui-react-taro';
import lightLoading from '@nutui/nutui-react-taro/dist/es/packages/lottie/animation/light/loading.json';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';

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
    <PageWrapper>
      <PageHeader
        title="反馈与状态"
        description="高交互性的模态提示、遮罩面板、智能骨架屏及多端统一的全局状态反馈"
      />

      <SectionCard title="轻提示 Toast & 弹窗">
        <Space className="w-full">
          <Button
            type="info"
            onClick={() => showToast('info', '正在拉取云端数据...')}
          >
            普通
          </Button>
          <Button
            type="success"
            onClick={() => showToast('success', '微信授权登录成功')}
          >
            成功
          </Button>
          <Button
            type="danger"
            onClick={() => showToast('error', '上传网络超时，请重试')}
          >
            失败
          </Button>
          <Button type="primary" onClick={() => setDialogVisible(true)}>
            弹窗
          </Button>
        </Space>
      </SectionCard>

      <SectionCard title="加载 Loading & 遮罩">
        <Space className="w-full">
          <Button type="primary" onClick={showLoading}>
            全屏加载
          </Button>
          <Button
            type="info"
            onClick={() => setSkeletonLoading(!skeletonLoading)}
          >
            骨架屏切换
          </Button>
        </Space>
      </SectionCard>

      <SectionCard title="骨架屏 Skeleton">
        <Skeleton rows={3} animated visible={!skeletonLoading} size="small">
          <View className="flex items-center gap-2 py-3">
            <Avatar
              background="var(--primary)"
              color="var(--primary-foreground)"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <View className="flex min-w-0 flex-1 flex-col gap-1">
              <View className="font-semibold text-foreground text-sm">
                DeepMind-AI
              </View>
              <View className="text-muted-foreground text-xs">
                由 Taro-best-practices 编译渲染完成
              </View>
            </View>
          </View>
        </Skeleton>
      </SectionCard>

      <SectionCard title="多态结果页 ResultPage">
        <ResultPage
          status="success"
          title="操作执行完毕"
          description="数据记录已经过序列化转换并推送到服务器"
          className="text-center"
        />
      </SectionCard>

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
        onCancel={() => setDialogVisible(false)}
        onConfirm={() => {
          setDialogVisible(false);
          Taro.showToast({ title: '已确认', icon: 'success' });
        }}
      />

      <Overlay
        visible={loadingVisible}
        className="flex items-center justify-center"
        zIndex={2000}
      >
        <View className="rounded-3xl bg-card px-6 py-4 shadow-whisper">
          <Loading
            style={{ flexDirection: 'column' }}
            icon={
              <Lottie source={lightLoading} style={{ width: 56, height: 56 }} />
            }
          >
            努力加载中
          </Loading>
        </View>
      </Overlay>
    </PageWrapper>
  );
}
