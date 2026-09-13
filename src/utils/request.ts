import Taro from '@tarojs/taro';

// 声明全局编译变量
declare const API_HOST: string;

interface RequestOptions {
  url: string;
  data?: unknown;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD';
  header?: Record<string, string>;
  loading?: boolean;
}

/**
 * 封装 Taro.request，实现多端开发最佳实践
 * 包含：Alipay 小程序 Content-Type 兼容、请求/响应拦截器、加载提示、错误提示
 */
export function request<T = unknown>(options: RequestOptions): Promise<T> {
  const {
    url,
    data = {},
    method = 'GET',
    header = {},
    loading = false,
  } = options;

  if (loading) {
    Taro.showLoading({ title: '加载中...', mask: true });
  }

  // 拼接 API 主机名
  const resolvedUrl = url.startsWith('http') ? url : `${API_HOST}${url}`;

  // 处理 Header，默认为 application/json
  const defaultHeader = {
    'Content-Type': 'application/json',
    ...header,
  };

  // 针对支付宝小程序的请求兼容最佳实践
  // 支付宝小程序在设置 Content-Type 为 application/json 时需要手动将 POST 请求体 JSON.stringify 序列化
  let requestData = data;
  if (
    process.env.TARO_ENV === 'alipay' &&
    method === 'POST' &&
    defaultHeader['Content-Type'] === 'application/json' &&
    typeof data === 'object'
  ) {
    requestData = JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: resolvedUrl,
      data: requestData,
      method,
      header: defaultHeader,
      success(res) {
        if (loading) Taro.hideLoading();

        // 统一业务逻辑处理
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as T);
        } else {
          // 通用错误提示
          Taro.showToast({
            title: `服务错误 (${res.statusCode})`,
            icon: 'none',
            duration: 2000,
          });
          reject(res);
        }
      },
      fail(err) {
        if (loading) Taro.hideLoading();

        Taro.showToast({
          title: '网络连接失败，请稍后重试',
          icon: 'none',
          duration: 2000,
        });
        reject(err);
      },
    });
  });
}
