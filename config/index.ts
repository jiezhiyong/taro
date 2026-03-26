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
  defineConstants: {
    ENABLE_INNER_HTML: JSON.stringify(true),
    ENABLE_ADJACENT_HTML: JSON.stringify(true),
    ENABLE_SIZE_APIS: JSON.stringify(true),
    ENABLE_CLONE_NODE: JSON.stringify(true),
    ENABLE_TEMPLATE_CONTENT: JSON.stringify(true),
    ENABLE_MUTATION_OBSERVER: JSON.stringify(true),
    ENABLE_CONTAINS: JSON.stringify(true)
  },
  mini: {
    postcss: {
      pxtransform: { enable: true },
      cssModules: { enable: false }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    ssr: false,
    router: {
      mode: 'hash'
    },
    postcss: {
      autoprefixer: { enable: false },
      cssModules: { enable: false }
    }
  }
});