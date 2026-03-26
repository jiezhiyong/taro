import { View, Text, Input, Button, Switch, Checkbox, Radio, RadioGroup, CheckboxGroup } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

export default function FormPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [checkboxValue, setCheckboxValue] = useState(['1']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    console.log('表单值:', { username, password, description, switchValue, radioValue, checkboxValue });
    // 简单的 alert 提示
    console.log('提交成功！');
  };

  return (
    <View className="min-h-screen bg-gray-50 p-4 pb-20">
      {/* 基础输入组件 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">基础输入</Text>

        <View className="space-y-4">
          <View>
            <Text className="text-sm text-gray-600 mb-2">用户名</Text>
            <Input
              className="w-full p-3 border border-gray-200 rounded"
              placeholder="请输入用户名"
              value={username}
              onInput={(e) => setUsername(e.detail.value)}
            />
          </View>

          <View>
            <Text className="text-sm text-gray-600 mb-2">密码</Text>
            <Input
              className="w-full p-3 border border-gray-200 rounded"
              type="password"
              placeholder="请输入密码"
              value={password}
              onInput={(e) => setPassword(e.detail.value)}
            />
          </View>

          <View>
            <Text className="text-sm text-gray-600 mb-2">个人简介</Text>
            <View className="w-full p-3 border border-gray-200 rounded min-h-20">
              <Text className="text-gray-400 text-sm">这里是文本域效果</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 选择组件 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">选择组件</Text>

        <View className="space-y-6">
          <View>
            <Text className="text-sm text-gray-600 mb-3">单选按钮</Text>
            <RadioGroup onChange={(e) => setRadioValue(e.detail.value)}>
              <View className="flex gap-4">
                <Radio value="1" checked={radioValue === '1'} color="#FA2C19">选项1</Radio>
                <Radio value="2" checked={radioValue === '2'} color="#FA2C19">选项2</Radio>
              </View>
            </RadioGroup>
          </View>

          <View>
            <Text className="text-sm text-gray-600 mb-3">复选框</Text>
            <CheckboxGroup>
              <View className="flex gap-4 flex-wrap">
                <Checkbox value="1" color="#FA2C19">选项1</Checkbox>
                <Checkbox value="2" color="#FA2C19">选项2</Checkbox>
                <Checkbox value="3" color="#FA2C19">选项3</Checkbox>
              </View>
            </CheckboxGroup>
          </View>

          <View className="flex justify-between items-center">
            <Text className="text-sm text-gray-600">开关</Text>
            <Switch
              checked={switchValue}
              color="#FA2C19"
              onChange={(e) => setSwitchValue(e.detail.value)}
            />
          </View>
        </View>
      </View>

      {/* 选择器效果 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">选择器效果</Text>

        <View className="space-y-3">
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>单列选择</Text>
            <View className="flex items-center">
              <Text className="text-gray-500 mr-2">选项一</Text>
              <Text className="text-gray-400">></Text>
            </View>
          </View>

          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>日期选择</Text>
            <View className="flex items-center">
              <Text className="text-gray-500 mr-2">2026-03-26</Text>
              <Text className="text-gray-400">></Text>
            </View>
          </View>

          <View className="flex justify-between items-center p-3">
            <Text>时间选择</Text>
            <View className="flex items-center">
              <Text className="text-gray-500 mr-2">12:00</Text>
              <Text className="text-gray-400">></Text>
            </View>
          </View>
        </View>
      </View>

      {/* 表单验证示例 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">表单验证</Text>

        <View className="space-y-4">
          <View>
            <Text className="text-sm text-gray-600 mb-2">必填项 *</Text>
            <Input
              className="w-full p-3 border border-gray-200 rounded"
              placeholder="此项为必填项"
            />
          </View>

          <View>
            <Text className="text-sm text-gray-600 mb-2">最小长度（6个字符）</Text>
            <Input
              className="w-full p-3 border border-gray-200 rounded"
              placeholder="最少6个字符"
            />
          </View>

          <View>
            <Text className="text-sm text-gray-600 mb-2">数字输入</Text>
            <Input
              className="w-full p-3 border border-gray-200 rounded"
              type="number"
              placeholder="只能输入数字"
            />
          </View>
        </View>

        <View className="mt-6">
          <Button
            className="w-full bg-blue-500 text-white rounded-lg p-3"
            onClick={onSubmit}
          >
            提交表单
          </Button>
        </View>
      </View>
    </View>
  );
}