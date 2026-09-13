# Taro 跨端开发示例

这是一个基于 Taro 4.x + React 18.x + TypeScript + Tailwind CSS 4.x & Sass & Zustand 构建的跨端开发示例应用。

## 微信/企业微信小程序 CI

先构建小程序产物：

```sh
pnpm build:weapp
```

再按需单独执行 CI 命令：

```sh
TARO_WEAPP_APPID=wx_xxx \
TARO_WEAPP_PRIVATE_KEY_PATH=config/ci/private.wx_xxx.key \
pnpm ci:weapp:preview
```

可用命令：

- `pnpm ci:weapp:open`：打开微信开发者工具并载入 `dist`
- `pnpm ci:weapp:preview`：上传开发版并生成预览二维码
- `pnpm ci:weapp:upload`：上传体验版

可选环境变量：

- `TARO_CI_VERSION`：上传版本号，默认读取 `package.json` 版本号
- `TARO_CI_DESC`：上传描述，默认 `CI upload`
- `TARO_CI_PROJECT_PATH`：上传目录，默认 `dist`
- `TARO_WEAPP_ROBOT`：指定微信 CI 机器人编号，取值 `1` 到 `30`

私钥文件建议放在 `config/ci/`，该目录已加入 `.gitignore`。
