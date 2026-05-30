import path from 'node:path';
import { defineConfig } from '@tarojs/cli';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';

export default defineConfig({
  projectName: 'taro-showcase',
  date: '2026-03-26',
  designWidth: 750,
  deviceRatio: { 640: 2.34, 750: 1, 828: 1.81 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
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
