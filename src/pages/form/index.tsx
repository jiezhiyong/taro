import {
  Button,
  Cell,
  Checkbox,
  Divider,
  Input,
  Radio,
  Switch,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import {
  DemoPage,
  DemoPageHeader,
  DemoSection,
} from '@/components/demo-layout';

export default function FormPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [checkboxValue, setCheckboxValue] = useState(['1']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (!username) {
      Taro.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 2000,
      });
      return;
    }

    Taro.showToast({
      title: '表单提交成功',
      icon: 'success',
      duration: 2000,
    });
    console.log('表单值:', {
      username,
      password,
      switchValue,
      radioValue,
      checkboxValue,
    });
  };

  return (
    <DemoPage>
      <DemoPageHeader
        title="✍️ 表单组件"
        description="提供跨端统一样式、交互行为与原生重绘能力的表单录入组件"
      />

      <DemoSection title="基础输入 Fields">
        <View className="flex flex-col gap-4">
          <View className="flex flex-col gap-2">
            <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
              用户名 *
            </View>
            <Input
              className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm"
              placeholder="请输入用户名"
              value={username}
              onChange={(val) => setUsername(val)}
            />
          </View>
          <View className="flex flex-col gap-2">
            <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
              密码 *
            </View>
            <Input
              className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm"
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(val) => setPassword(val)}
            />
          </View>
        </View>
      </DemoSection>

      <DemoSection title="选项与开关 Selectors">
        <View className="flex flex-col gap-2.5">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            单项选择 (Radio)
          </View>
          <Radio.Group
            value={radioValue}
            onChange={(val) => setRadioValue(String(val))}
          >
            <View className="flex gap-8 pt-1 font-sans text-sm">
              <Radio value="1">选项一</Radio>
              <Radio value="2">选项二</Radio>
            </View>
          </Radio.Group>
        </View>

        <Divider />

        <View className="flex flex-col gap-2.5">
          <View className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
            多项选择 (Checkbox)
          </View>
          <Checkbox.Group
            value={checkboxValue}
            onChange={(vals) => setCheckboxValue(vals as string[])}
          >
            <View className="flex gap-8 pt-1 font-sans text-sm">
              <Checkbox value="1">选项 A</Checkbox>
              <Checkbox value="2">选项 B</Checkbox>
            </View>
          </Checkbox.Group>
        </View>

        <Divider />

        <Cell
          title="启用消息通知"
          description="接收系统相关的云端动态推送与消息同步"
          extra={
            <Switch
              checked={switchValue}
              onChange={(val) => setSwitchValue(val)}
            />
          }
          className="rounded-xl"
        />
      </DemoSection>

      <Button
        type="primary"
        block
        className="rounded-xl py-3 font-semibold text-xs shadow-ring"
        onClick={onSubmit}
      >
        提交表单信息
      </Button>
    </DemoPage>
  );
}
