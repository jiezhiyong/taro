import Taro from '@tarojs/taro';

const NAVIGATOR_HEIGHT = 44;
const TAB_BAR_HEIGHT = 50;

/**
 * 获取可用的窗口高度，支持多端适配（H5, 微信小程序, RN）
 * @param showTabBar 是否显示底部的 TabBar
 */
export function getWindowHeight(showTabBar: boolean = true): string | number {
  const info = Taro.getSystemInfoSync();
  const { windowHeight, statusBarHeight } = info;
  const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  if (process.env.TARO_ENV === 'rn') {
    // React Native 计算实际可用高度需要减去状态栏与导航栏高度
    const safeStatusBarHeight = statusBarHeight || 0;
    return windowHeight - safeStatusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight;
  }

  if (process.env.TARO_ENV === 'h5') {
    return `${windowHeight - tabBarHeight}px`;
  }

  // 小程序端返回的 windowHeight 已经是小程序容器刨除了顶部导航的高度
  return `${windowHeight}px`;
}
