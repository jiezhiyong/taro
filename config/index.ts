import path from 'node:path';
import { defineConfig } from '@tarojs/cli';
import type { CIOptions } from '@tarojs/plugin-mini-ci';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';

const isMiniCiCommand = ['open', 'preview', 'upload'].includes(
  process.argv[2] ?? '',
);

const stringifyEnv = (name: string) => JSON.stringify(process.env[name] ?? '');

const getWeappCiConfig = (): CIOptions => {
  const appid = process.env.TARO_WEAPP_APPID;
  const privateKeyPath = process.env.TARO_WEAPP_PRIVATE_KEY_PATH;

  if (isMiniCiCommand && (!appid || !privateKeyPath)) {
    throw new Error(
      '请设置 TARO_WEAPP_APPID 和 TARO_WEAPP_PRIVATE_KEY_PATH 后再执行小程序 CI 命令。',
    );
  }

  return {
    version: process.env.TARO_CI_VERSION ?? process.env.npm_package_version,
    desc: process.env.TARO_CI_DESC ?? 'CI upload',
    projectPath: process.env.TARO_CI_PROJECT_PATH ?? 'dist',
    weapp: {
      appid: appid ?? 'TARO_WEAPP_APPID',
      privateKeyPath:
        privateKeyPath ?? 'config/ci/private.TARO_WEAPP_APPID.key',
      robot: process.env.TARO_WEAPP_ROBOT
        ? Number(process.env.TARO_WEAPP_ROBOT)
        : undefined,
      setting: {
        es6: true,
        es7: true,
        disableUseStrict: false,
        minifyJS: true,
        minifyWXML: true,
        minifyWXSS: true,
        minify: true,
        codeProtect: false,
        autoPrefixWXSS: true,
      },
    },
  };
};

export default defineConfig({
  projectName: 'taro-showcase',
  date: '2026-03-26',
  designWidth: 750,
  deviceRatio: { 640: 2.34, 750: 1, 828: 1.81 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html',
    ['@tarojs/plugin-mini-ci', getWeappCiConfig],
  ],
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: true,
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  defineConstants: {
    API_HOST:
      process.env.NODE_ENV === 'development'
        ? '"/api"'
        : '"https://api.example.com"',
    YOUSHU_TOKEN: stringifyEnv('YOUSHU_TOKEN'),
    YOUSHU_APPID: stringifyEnv('YOUSHU_APPID'),
    YOUSHU_DEBUG: JSON.stringify(process.env.YOUSHU_DEBUG === '1'),
  },
  mini: {
    postcss: {
      pxtransform: { enable: true },
      cssModules: { enable: false },
    },
    webpackChain(chain) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [
              {
                appType: 'taro',
                injectAdditionalCssVarScope: true,
              },
            ],
          },
        },
      });
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'hash',
    },
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js',
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    },
    devServer: {
      proxy: {
        '/api/': {
          target: 'https://api.example.com',
          pathRewrite: {
            '^/api/': '/',
          },
          changeOrigin: true,
        },
      },
    },
    postcss: {
      autoprefixer: { enable: false },
      cssModules: { enable: false },
    },
  },
});
