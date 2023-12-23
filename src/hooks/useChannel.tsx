import { useEffect, useState } from "react";
import { fetchChannels } from "@/apis/channelAPI";

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
  return { channels };
};
