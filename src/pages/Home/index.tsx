import { useChannel } from "@/hooks/useChannel";
import "@/pages/Home/index.css";
import { Tabs } from "antd-mobile";

export const Home = () => {
  const { channels } = useChannel();

  return (
    <div className="tabContainer">
      <Tabs defaultActiveKey="1">
        {channels.map((item) => (
          <Tabs.Tab title={item.name} key={item.id}></Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};
