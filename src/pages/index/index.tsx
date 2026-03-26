import { View, Text } from "@tarojs/components";

export default function Index() {
  return (
    <View style={{ padding: '16px' }}>
      <Text>Hello Taro!</Text>
      <Text style={{ marginTop: '16px', color: '#666' }}>
        这是一个基于 Taro 4.x + React 的跨端开发示例应用。
      </Text>
    </View>
  );
}