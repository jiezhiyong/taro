import {
  Button,
  Cell,
  Checkbox,
  Input,
  Radio,
  Space,
  Switch,
} from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import { PageHeader, PageWrapper, SectionCard } from '@/components/PageWrapper';

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
    <PageWrapper className="pb-12.5">
      <PageHeader
        title="表单组件"
        description="跨端统一样式、交互行为与原生重绘"
      />

      <SectionCard title="基础输入 Fields">
        <Space direction="vertical">
          <View className="font-semibold text-xs">用户名 *</View>
          <Input
            placeholder="请输入用户名"
            value={username}
            onChange={(val) => setUsername(val)}
          />
        </Space>

        <Space direction="vertical">
          <View className="font-semibold text-xs">密码 *</View>
          <Input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(val) => setPassword(val)}
          />
        </Space>
      </SectionCard>

      <SectionCard title="选项与开关 Selectors">
        <Space direction="vertical">
          <View className="font-semibold text-xs">单项选择 Radio</View>
          <Radio.Group
            value={radioValue}
            onChange={(val) => setRadioValue(String(val))}
          >
            <Space direction="horizontal">
              <Radio value="1">选项一</Radio>
              <Radio value="2">选项二</Radio>
            </Space>
          </Radio.Group>
        </Space>

        <Space direction="vertical">
          <View className="font-semibold text-xs">多项选择 Checkbox</View>
          <Checkbox.Group
            value={checkboxValue}
            onChange={(vals) => setCheckboxValue(vals as string[])}
          >
            <Space direction="horizontal">
              <Checkbox value="1">选项 A</Checkbox>
              <Checkbox value="2">选项 B</Checkbox>
            </Space>
          </Checkbox.Group>
        </Space>

        <Cell
          title="启用消息通知"
          description="接收系统相关的消息推送"
          extra={
            <Switch
              checked={switchValue}
              onChange={(val) => setSwitchValue(val)}
            />
          }
        />
      </SectionCard>

      <Button type="primary" size="large" block onClick={onSubmit}>
        提交表单信息
      </Button>
    </PageWrapper>
  );
}
