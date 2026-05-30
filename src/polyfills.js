// Global window polyfill for Taro H5 build
if (typeof window === 'undefined') {
  global.window = global;
  global.document = {};
  global.navigator = { userAgent: 'Taro' };
}
