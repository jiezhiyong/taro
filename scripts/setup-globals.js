if (typeof window === "undefined") global.window = {};
if (typeof document === "undefined") global.document = {
  createElement: () => ({}),
  querySelector: () => null,
  documentElement: { style: {} }
};