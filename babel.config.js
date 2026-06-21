module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        hot: false,
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react-taro',
        libraryDirectory: 'dist/es/packages',
        style: 'css',
        camel2DashComponentName: false,
        customName: (name) => {
          return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`;
        },
      },
      'nutui-react-taro',
    ],
  ],
};
