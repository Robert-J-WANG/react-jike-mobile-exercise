/// <reference types="vite/client" />

// 通用泛型
type ResType<T> = {
  data: T;
  message: string;
};

// 频道列表数据类型
type ChannelItem = {
  id: number;
  name: string;
};
type ChannelRes = {
  channels: ChannelItem[];
};
