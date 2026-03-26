import { View, Text } from "@tarojs/components";
import { Cell, Button, Grid, GridItem } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

export default function Index() {
  const navigateTo = (url: string) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="container">
      <View className="p-4">
        <Text className="text-xl font-bold mb-4 block">Taro + NutUI + Tailwind Showcase</Text>
        <Text className="text-gray-600 mb-6 block">
          这是一个基于 Taro 4.x + React + NutUI-React-Taro + Tailwind CSS 的跨端开发示例应用。
        </Text>
      </View>

      <Grid columns={2} gap={16} className="px-4">
        <GridItem>
          <Button
            type="primary"
            block
            onClick={() => navigateTo("/pages/components/index")}
          >
            基础组件
          </Button>
        </GridItem>
        <GridItem>
          <Button
            type="info"
            block
            onClick={() => navigateTo("/pages/form/index")}
          >
            表单组件
          </Button>
        </GridItem>
        <GridItem>
          <Button
            type="success"
            block
            onClick={() => navigateTo("/pages/navigation/index")}
          >
            导航组件
          </Button>
        </GridItem>
        <GridItem>
          <Button
            type="warning"
            block
            onClick={() => navigateTo("/pages/feedback/index")}
          >
            反馈组件
          </Button>
        </GridItem>
      </Grid>

      <View className="mt-8 px-4">
        <Cell.Group title="功能特性">
          <Cell title="跨端开发" description="支持微信小程序、H5、React Native 等多平台" />
          <Cell title="UI 组件库" description="基于 NutUI-React-Taro 的丰富组件" />
          <Cell title="样式解决方案" description="Tailwind CSS 原子化样式" />
          <Cell title="TypeScript" description="完整的类型支持" />
        </Cell.Group>
      </View>
    </View>
  );
}