import { ConfigProvider } from '@nutui/nutui-react-taro';
import enUS from '@nutui/nutui-react-taro/dist/es/locales/en-US';
import zhCN from '@nutui/nutui-react-taro/dist/es/locales/zh-CN';
import { useLaunch } from '@tarojs/taro';
import type { PropsWithChildren } from 'react';
import { useLocaleStore } from '@/store/localeStore';
import './polyfills.js';
import './app.css';

// CSS variables-backed theme mapping
const nutuiTheme = {
  nutuiColorPrimary: 'var(--primary)',
  nutuiColorPrimaryStop1: 'var(--primary)',
  nutuiColorPrimaryStop2: 'var(--primary)',
  nutuiLinkColor: 'var(--primary)',
  nutuiTextColor: 'var(--foreground)',
  nutuiTitleColor: 'var(--foreground)',
  nutuiBorderColor: 'var(--border)',
  nutuiGrayBg: 'var(--secondary)',
};

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.');
  });

  const locale = useLocaleStore((state) => state.locale);
  const localePack = locale === 'en-US' ? enUS : zhCN;

  return (
    <ConfigProvider theme={nutuiTheme} locale={localePack}>
      {children}
    </ConfigProvider>
  );
}

export default App;
