import { defineAppConfig } from '@tarojs/taro'

export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/components/index",
    "pages/form/index",
    "pages/navigation/index",
    "pages/feedback/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Taro Showcase",
    navigationBarTextStyle: "black"
  }
});