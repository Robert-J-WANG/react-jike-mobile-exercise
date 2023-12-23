import { http } from "@/utils";

const fetchChannels = () => {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
};

export { fetchChannels };
