import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Refresh,
  Share,
} from '@nutui/icons-react-taro';
import { Button, Space, Tag } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';

const ROUTER_PAGE = '/pages/router/index';

type RouterParams = {
  from?: string;
  scene?: string;
  ticket?: string;
};

const DEMO_PARAMS: Required<RouterParams> = {
  from: 'home-card',
  scene: 'router-demo',
  ticket: 'A-2026',
};

function buildUrl(params: RouterParams) {
  const query = Object.entries(params)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return query ? `${ROUTER_PAGE}?${query}` : ROUTER_PAGE;
}

export default function RouterShowcase() {
  const router = useRouter<RouterParams>(true);
  const currentInstance = Taro.getCurrentInstance();
  const routerParams = router.params;
  const instanceParams = currentInstance.router?.params ?? {};
  const targetUrl = buildUrl(DEMO_PARAMS);
  const currentPath =
    router.path || currentInstance.router?.path || ROUTER_PAGE;

  const navigateToDemo = () => {
    Taro.navigateTo({
      url: targetUrl,
    });
  };

  const redirectToDemo = () => {
    Taro.redirectTo({
      url: buildUrl({
        ...DEMO_PARAMS,
        scene: 'redirect-demo',
        ticket: 'R-2026',
      }),
    });
  };

  const navigateBack = () => {
    Taro.navigateBack({
      delta: 1,
      fail: () => Taro.switchTab({ url: '/pages/index/index' }),
    });
  };

  const copyUrl = () => {
    Taro.setClipboardData({
      data: targetUrl,
      success: () => {
        Taro.showToast({ title: '已复制路由地址', icon: 'success' });
      },
    });
  };

  return (
    <PageWrapper className="pb-12.5">
      <PageHeader
        title="路由能力"
        tag="Router"
        description="展示 Taro 页面注册、路由跳转、路由传参，以及在页面内读取当前路由参数"
      />

      <SectionCard
        title="当前路由快照"
        description="由 useRouter(true) 动态读取"
      >
        <View className="rounded-2xl border border-border bg-background p-4">
          <View className="text-muted-foreground text-xs">path</View>
          <View className="mt-1 break-all font-medium text-foreground text-sm">
            {currentPath}
          </View>
        </View>

        <View className="grid grid-cols-1 gap-2">
          {(['from', 'scene', 'ticket'] as const).map((key) => (
            <View
              key={key}
              className="flex items-center justify-between rounded-2xl border border-border bg-secondary px-3 py-2"
            >
              <Text className="font-semibold text-xs">{key}</Text>
              <Tag type={routerParams[key] ? 'primary' : 'default'}>
                {routerParams[key] || '未传入'}
              </Tag>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard
        title="路由跳转"
        description="navigateTo 会保留当前页并打开新页面"
      >
        <View className="rounded-2xl border border-primary/60 border-dashed bg-primary/10 p-3">
          <View className="text-muted-foreground text-xs">目标地址</View>
          <View className="mt-1 break-all font-medium text-foreground text-xs">
            {targetUrl}
          </View>
        </View>

        <Space direction="vertical">
          <Button type="primary" block onClick={navigateToDemo}>
            <ArrowRight />
            navigateTo 带参跳转
          </Button>
          <Button block onClick={redirectToDemo}>
            <Refresh />
            redirectTo 替换当前页
          </Button>
          <Button fill="outline" block onClick={navigateBack}>
            <ArrowLeft />
            navigateBack 返回上一页
          </Button>
        </Space>
      </SectionCard>

      <SectionCard
        title="读取路由参数"
        description="同一份参数可通过 useRouter 或 getCurrentInstance().router.params 获取"
      >
        <View className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-4">
          <View>
            <View className="font-semibold text-xs">
              useRouter(true).params
            </View>
            <View className="mt-1 break-all text-muted-foreground text-xs">
              {JSON.stringify(routerParams)}
            </View>
          </View>
          <View>
            <View className="font-semibold text-xs">
              getCurrentInstance().router.params
            </View>
            <View className="mt-1 break-all text-muted-foreground text-xs">
              {JSON.stringify(instanceParams)}
            </View>
          </View>
        </View>

        <Button fill="outline" block onClick={copyUrl}>
          <Copy />
          复制示例路由
        </Button>
        <Button
          fill="none"
          block
          onClick={() => Taro.switchTab({ url: '/pages/index/index' })}
        >
          <Share />
          回到首页 Tab
        </Button>
      </SectionCard>
    </PageWrapper>
  );
}
