import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./polyfills.js";  // 导入全局 polyfills
import "./app.css";

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log("App launched.");
  });
  return children;
}

export default App;