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
    miniCssExtractPluginOption: {
      ignoreOrder: true
    },
    postcss: {
      autoprefixer: { enable: false },
      cssModules: { enable: false }
    },
    webpackChain(chain) {
      chain.optimization.minimize(false)

      // Define global variables for Node.js environment
      chain.plugin("define-globals").use(require("webpack").DefinePlugin, [{
        "typeof window": JSON.stringify("object"),
        "window": JSON.stringify({}),
        "global.window": JSON.stringify({}),
        "typeof document": JSON.stringify("object"),
        "document": JSON.stringify({ createElement: () => ({}), querySelector: () => null, documentElement: { style: {} } })
      }])

      // Inject window polyfill for Node.js environment
      chain.plugin("provide-window").use(require("webpack").ProvidePlugin, [{
        window: require.resolve("../scripts/window-polyfill.js")
      }])

      chain.plugin('stats').use(class StatsPlugin {
        apply(compiler) {
          compiler.hooks.done.tap('StatsPlugin', (stats) => {
            if (stats.hasErrors()) {
              const info = stats.toJson({ errors: true, errorDetails: true, errorStack: true });
              info.errors?.forEach(e => {
                if (e.message?.includes('window')) {
                  process.stderr.write('\n=== WINDOW ERROR DETAIL ===\n');
                  process.stderr.write(JSON.stringify(e, null, 2) + '\n');
                  process.stderr.write('=== END ===\n');
                }
              });
            }
          });
        }
      })
    }
  }
});