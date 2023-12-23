import { useEffect, useState } from "react";
import { fetchChannels } from "@/apis/channelAPI";
import { useNavigate } from "react-router-dom";

export const useChannel = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannels();
        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch Channels failed: " + error);
      }
    };
    getChannels();
  }, []);

  //  跳转路由的回调
  const navigate = useNavigate();
  const goToArticleLists = (id: string) => {
    navigate(`/articles?id=${id}`);
  };

  return { channels, goToArticleLists };
};
