import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

export default function Feedback() {
  const [toastVisible, setToastVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  const showToast = (type: string) => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const showLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
  };

  return (
    <View className="min-h-screen bg-gray-50 p-4 pb-20">
      {/* Toast 轻提示 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">轻提示 Toast</Text>
        <View className="flex gap-2 flex-wrap">
          <Button size="mini" onClick={() => showToast('text')}>文本提示</Button>
          <Button size="mini" type="primary" onClick={() => showToast('success')}>成功提示</Button>
          <Button size="mini" type="warn" onClick={() => showToast('fail')}>失败提示</Button>
          <Button size="mini" onClick={() => showToast('loading')}>加载提示</Button>
        </View>

        {/* Toast 效果展示 */}
        {toastVisible && (
          <View className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white px-4 py-2 rounded z-50">
            <Text className="text-white text-center">提示信息</Text>
          </View>
        )}
      </View>

      {/* Dialog 对话框 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">对话框 Dialog</Text>
        <View className="flex gap-2 flex-wrap">
          <Button size="mini">警告对话框</Button>
          <Button size="mini" type="primary">确认对话框</Button>
        </View>
      </View>

      {/* 消息通知 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">消息通知 Notify</Text>
        <View className="flex gap-2 flex-wrap">
          <Button size="mini">基础通知</Button>
          <Button size="mini" type="primary">成功通知</Button>
          <Button size="mini" type="warn">警告通知</Button>
          <Button size="mini">错误通知</Button>
        </View>

        {/* 通知效果展示 */}
        <View className="mt-4 space-y-2">
          <View className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
            <Text className="text-blue-700 text-sm">基础通知信息</Text>
          </View>
          <View className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
            <Text className="text-green-700 text-sm">成功通知信息</Text>
          </View>
        </View>
      </View>

      {/* Loading 加载 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">加载 Loading</Text>
        <View className="flex gap-2 flex-wrap">
          <Button size="mini" onClick={showLoading}>显示加载</Button>
          <Button size="mini" type="primary" onClick={() => setOverlayVisible(true)}>
            遮罩层
          </Button>
          <Button
            size="mini"
            type="warn"
            onClick={() => setSkeletonLoading(!skeletonLoading)}
          >
            {skeletonLoading ? '隐藏' : '显示'}骨架屏
          </Button>
        </View>

        {/* Loading 效果展示 */}
        {loadingVisible && (
          <View className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <View className="bg-white p-6 rounded-lg flex items-center">
              <View className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-3"></View>
              <Text>加载中...</Text>
            </View>
          </View>
        )}

        {/* 遮罩层效果 */}
        {overlayVisible && (
          <View
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setOverlayVisible(false)}
          >
            <View className="bg-white p-6 rounded-lg">
              <Text>点击遮罩层关闭</Text>
            </View>
          </View>
        )}
      </View>

      {/* 骨架屏 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">骨架屏 Skeleton</Text>
        {skeletonLoading ? (
          <View className="flex">
            <View className="w-12 h-12 bg-gray-200 rounded-full mr-3 animate-pulse"></View>
            <View className="flex-1">
              <View className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></View>
              <View className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></View>
            </View>
          </View>
        ) : (
          <View className="flex">
            <View className="w-12 h-12 bg-gray-200 rounded-full mr-3"></View>
            <View className="flex-1">
              <Text className="text-lg font-bold">用户名</Text>
              <Text className="text-gray-600 text-sm">
                这是用户的个人简介内容，当数据加载完成后会显示真实内容。
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Empty 空状态 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">空状态 Empty</Text>
        <View className="text-center py-8">
          <Text className="text-6xl mb-4">📭</Text>
          <Text className="text-gray-500">暂无数据</Text>
        </View>
      </View>

      {/* Result 结果页 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">结果页 Result</Text>
        <View className="space-y-6">
          <View className="text-center py-4">
            <Text className="text-4xl mb-2">✅</Text>
            <Text className="text-lg font-bold mb-2">操作成功</Text>
            <Text className="text-gray-600 text-sm mb-4">订单已提交成功，我们将尽快为您处理</Text>
            <View className="flex gap-2 justify-center">
              <Button size="mini" type="primary">返回首页</Button>
              <Button size="mini">查看订单</Button>
            </View>
          </View>

          <View className="text-center py-4 border-t border-gray-100">
            <Text className="text-4xl mb-2">❌</Text>
            <Text className="text-lg font-bold mb-2">操作失败</Text>
            <Text className="text-gray-600 text-sm mb-4">很抱歉，操作失败，请稍后再试</Text>
            <Button size="mini" type="primary">重新尝试</Button>
          </View>
        </View>
      </View>

      {/* 反馈状态展示 */}
      <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <Text className="text-lg font-bold mb-4">反馈状态示例</Text>
        <View className="space-y-0">
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>成功状态</Text>
            <Text>✅</Text>
          </View>
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>警告状态</Text>
            <Text>⚠️</Text>
          </View>
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>错误状态</Text>
            <Text>❌</Text>
          </View>
          <View className="flex justify-between items-center p-3 border-b border-gray-100">
            <Text>信息状态</Text>
            <Text>ℹ️</Text>
          </View>
          <View className="flex justify-between items-center p-3">
            <Text>加载状态</Text>
            <Text>🔄</Text>
          </View>
        </View>
      </View>
    </View>
  );
}