import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
// import { useChannel } from "./hooks/useChannel.tsx";
// import { fetchChannels } from "./apis/channelAPI.tsx";

// 测试api端口封装成功？
// fetchChannels().then((res) => console.log(res.data.data));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
