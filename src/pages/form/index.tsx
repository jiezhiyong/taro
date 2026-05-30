import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Text,
  View,
} from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';

export default function FormPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [checkboxValue, setCheckboxValue] = useState(['1']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCheckboxChange = (e: { detail: { value: string[] } }) => {
    setCheckboxValue(e.detail.value);
  };

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

        <View className="space-y-4">
          <View>
            <Text className="mb-2 block font-semibold text-slate-500 text-xs">
              用户名 *
            </Text>
            <Input
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white"
              placeholder="请输入用户名"
              placeholderStyle="color: #cbd5e1"
              value={username}
              onInput={(e) => setUsername(e.detail.value)}
            />
          </View>

          <View>
            <Text className="mb-2 block font-semibold text-slate-500 text-xs">
              密码 *
            </Text>
            <Input
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white"
              type="safe-password"
              placeholder="请输入密码"
              placeholderStyle="color: #cbd5e1"
              value={password}
              onInput={(e) => setPassword(e.detail.value)}
            />
          </View>
        </View>
      </View>

      {/* Selectors */}
      <View className="premium-card mb-6 border border-slate-100 bg-white p-6 shadow-sm">
        <Text className="mb-4 block font-bold text-base text-slate-800">
          选项与开关 Selectors
        </Text>

        <View className="space-y-6">
          <View>
            <Text className="mb-3 block font-semibold text-slate-500 text-xs">
              单项选择 (Radio)
            </Text>
            <RadioGroup onChange={(e) => setRadioValue(e.detail.value)}>
              <View className="flex gap-6">
                <Radio value="1" checked={radioValue === '1'} color="#6366f1">
                  选项一
                </Radio>
                <Radio value="2" checked={radioValue === '2'} color="#6366f1">
                  选项二
                </Radio>
              </View>
            </RadioGroup>
          </View>

          <View>
            <Text className="mb-3 block font-semibold text-slate-500 text-xs">
              多项选择 (Checkbox)
            </Text>
            <CheckboxGroup onChange={handleCheckboxChange}>
              <View className="flex gap-6">
                <Checkbox
                  value="1"
                  checked={checkboxValue.includes('1')}
                  color="#10b981"
                >
                  选项A
                </Checkbox>
                <Checkbox
                  value="2"
                  checked={checkboxValue.includes('2')}
                  color="#10b981"
                >
                  选项B
                </Checkbox>
              </View>
            </CheckboxGroup>
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
              color="#6366f1"
              onChange={(e) => setSwitchValue(e.detail.value)}
            />
          </View>
        </View>
      </View>

      {/* Form Submission button */}
      <View className="mt-8">
        <Button
          className="premium-btn w-full rounded-2xl bg-linear-to-r from-indigo-600 to-blue-600 py-3.5 text-center font-bold text-sm text-white shadow-indigo-200 shadow-lg active:scale-98 active:opacity-95"
          onClick={onSubmit}
        >
          提交表单信息
        </Button>
      </View>
    </View>
  );
}
