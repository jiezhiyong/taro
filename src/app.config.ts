export default {
  pages: [
    'pages/index/index',
    'pages/components/index',
    'pages/form/index',
    'pages/navigation/index',
    'pages/feedback/index',
    'pages/zustand/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro Showcase',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#FA2C19',
    backgroundColor: '#fff',
    list: [
      { pagePath: 'pages/index/index', text: '首页' },
      { pagePath: 'pages/components/index', text: '组件' },
      { pagePath: 'pages/form/index', text: '表单' },
    ],
  },
};
