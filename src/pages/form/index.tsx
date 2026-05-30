import {
  Button,
  Checkbox,
  Input,
  Radio,
  Switch,
} from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

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
    <View className="min-h-screen bg-slate-50 p-6 pb-20">
      <View className="mb-6">
        <Text className="block font-extrabold text-2xl text-slate-800">
          ✍️ 表单组件
        </Text>
        <Text className="mt-1 block text-slate-500 text-xs">
          符合多端运行的表单交互和原生元素重绘效果
        </Text>
      </View>

      {/* Basic Inputs */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          基础输入 fields
        </Text>

        <View className="flex flex-col gap-4">
          <View>
            <Text className="mb-2 block font-semibold text-slate-500 text-xs">
              用户名 *
            </Text>
            <Input
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:border-indigo-500 focus:bg-white"
              placeholder="请输入用户名"
              value={username}
              onChange={(val) => setUsername(val)}
            />
          </View>

          <View>
            <Text className="mb-2 block font-semibold text-slate-500 text-xs">
              密码 *
            </Text>
            <Input
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:border-indigo-500 focus:bg-white"
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(val) => setPassword(val)}
            />
          </View>
        </View>
      </View>

      {/* Selectors */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          选项与开关 Selectors
        </Text>

        <View className="flex flex-col gap-6">
          <View>
            <Text className="mb-3 block font-semibold text-slate-500 text-xs">
              单项选择 (Radio)
            </Text>
            <Radio.Group
              value={radioValue}
              onChange={(val) => setRadioValue(String(val))}
            >
              <View className="flex gap-6">
                <Radio value="1">选项一</Radio>
                <Radio value="2">选项二</Radio>
              </View>
            </Radio.Group>
          </View>

          <View>
            <Text className="mb-3 block font-semibold text-slate-500 text-xs">
              多项选择 (Checkbox)
            </Text>
            <Checkbox.Group
              value={checkboxValue}
              onChange={(vals) => setCheckboxValue(vals as string[])}
            >
              <View className="flex gap-6">
                <Checkbox value="1">选项A</Checkbox>
                <Checkbox value="2">选项B</Checkbox>
              </View>
            </Checkbox.Group>
          </View>

          <View className="flex items-center justify-between border-slate-100 border-t pt-3">
            <View>
              <Text className="block font-semibold text-slate-800 text-sm">
                启用消息通知
              </Text>
              <Text className="mt-0.5 block text-slate-400 text-xs">
                接收系统相关动态推送
              </Text>
            </View>
            <Switch
              checked={switchValue}
              onChange={(val) => setSwitchValue(val)}
            />
          </View>
        </View>
      </View>

      {/* Form Submission button */}
      <View className="mt-8">
        <Button
          type="primary"
          block
          className="rounded-2xl font-bold text-sm shadow-indigo-200 shadow-lg"
          onClick={onSubmit}
        >
          提交表单信息
        </Button>
      </View>
    </View>
  );
}
