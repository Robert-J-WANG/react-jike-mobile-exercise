import { useChannel } from "@/hooks/useChannel";
import "@/pages/Home/index.css";
import { Tabs } from "antd-mobile";
import { HomeList } from "./HomeList";

export const Home = () => {
  const { channels } = useChannel();

  return (
    <div className="tabContainer">
      {/* 频道tab区域 */}
      <Tabs defaultActiveKey="0">
        {channels.map((item) => (
          <Tabs.Tab title={item.name} key={item.id}>
            {/* 文章列表区域 */}
            <HomeList articleID={"" + item.id} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};
