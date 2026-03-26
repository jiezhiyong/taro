import { defineConfig } from "@tarojs/cli";

export default defineConfig({
  projectName: "taro-showcase",
  date: "2026-03-26",
  designWidth: 750,
  deviceRatio: { 640: 2.34, 750: 1, 828: 1.81 },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-html"],
  framework: "react",
  compiler: "webpack5",
  mini: {
    postcss: {
      pxtransform: { enable: true },
      cssModules: { enable: false }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    router: {
      mode: 'hash'
    },
    postcss: {
      autoprefixer: { enable: false },
      cssModules: { enable: false }
    }
  }
});
