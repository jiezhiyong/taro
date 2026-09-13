declare module 'sr-sdk-wxapp' {
  interface YoushuInitOptions {
    appid: string;
    token: string;
    usePlugin?: boolean;
    debug?: boolean;
    openSdkShareDepth?: boolean;
    serverUrl?: string;
    trackApp?: boolean;
    proxyPage?: boolean;
    proxyComponent?: boolean;
    autoStart?: boolean;
    autoTrack?: boolean;
  }

  interface YoushuSdk {
    init(options: YoushuInitOptions): void;
    track(type: string, props?: Record<string, unknown>): void;
    setUser(user: Record<string, unknown>, isSr?: number, flush?: boolean): this;
    setChan(chan: Record<string, unknown>, isSr?: number, flush?: boolean): this;
    startReport(): this;
    pauseReport(): this;
    resumeReport(): this;
    flush(): this;
  }

  const sr: YoushuSdk;
  export = sr;
}
