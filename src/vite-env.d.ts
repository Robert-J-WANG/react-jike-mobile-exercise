/// <reference types="vite/client" />

// 通用泛型
type ResType<T> = {
  data: T;
  message: string;
};

// 频道列表数据类型
type ParmasType = {
  channel_id: string;
  timestamp: string;
};
type ChannelItem = {
  id: number;
  name: string;
};
type ChannelRes = {
  channels: ChannelItem[];
};

// 文章列表数据类型
type ArticleItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: 0 | 1;
  cover: {
    type: 0 | 1 | 3;
    images: string[];
  };
};
type ArticleRes = {
  results: ArticleItem[];
  pre_timestamp: string;
};
