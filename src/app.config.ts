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
    selectedColor: '#c96442',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home-active.png',
      },
      {
        pagePath: 'pages/components/index',
        text: '组件',
        iconPath: 'assets/components.png',
        selectedIconPath: 'assets/components-active.png',
      },
      {
        pagePath: 'pages/form/index',
        text: '表单',
        iconPath: 'assets/form.png',
        selectedIconPath: 'assets/form-active.png',
      },
    ],
  },
};
