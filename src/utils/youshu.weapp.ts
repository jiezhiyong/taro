declare const YOUSHU_TOKEN: string;
declare const YOUSHU_APPID: string;
declare const YOUSHU_DEBUG: boolean;

let initialized = false;

export function initYoushu() {
  if (initialized) return;

  if (!YOUSHU_TOKEN || !YOUSHU_APPID) {
    if (YOUSHU_DEBUG) {
      console.warn('腾讯有数未初始化：请配置 YOUSHU_TOKEN 和 YOUSHU_APPID。');
    }
    return;
  }

  const sr = require('sr-sdk-wxapp') as typeof import('sr-sdk-wxapp');

  sr.init({
    token: YOUSHU_TOKEN,
    appid: YOUSHU_APPID,
    debug: YOUSHU_DEBUG,
    usePlugin: false,
    proxyPage: true,
    proxyComponent: true,
    openSdkShareDepth: true,
    autoTrack: true,
  });

  initialized = true;
}

initYoushu();
