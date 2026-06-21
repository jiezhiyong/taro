import Taro from '@tarojs/taro';

/**
 * 兼容小程序与 H5 的多端同步持久化存储引擎适配器
 * 专为 Zustand persist 中间件设计，可无缝用于多页面持久化状态管理
 */
export const taroStorage = {
  getItem: (name: string): string | null => {
    try {
      const value = Taro.getStorageSync(name);
      if (value === undefined || value === null || value === '') {
        return null;
      }
      return typeof value === 'string' ? value : JSON.stringify(value);
    } catch (e) {
      console.error('Failed to get from Taro storage:', e);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      Taro.setStorageSync(name, value);
    } catch (e) {
      console.error('Failed to set to Taro storage:', e);
    }
  },
  removeItem: (name: string): void => {
    try {
      Taro.removeStorageSync(name);
    } catch (e) {
      console.error('Failed to remove from Taro storage:', e);
    }
  },
};
