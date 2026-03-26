import { defineAppConfig } from '@tarojs/taro'

export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/components/index",
    "pages/form/index",
    "pages/navigation/index",
    "pages/feedback/index"
  ],
  // 移除可能导致 H5 构建冲突的 window 配置
  // window 配置已移至平台特定配置
});