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

// 文章详情数据类型

/**
 * 响应数据
 */
type ArticleDetailRes = {
  /**
   * 文章id
   */
  art_id: string;
  /**
   * 文章-是否被点赞，-1无态度, 0未点赞, 1点赞, 是当前登录用户对此文章的态度
   */
  attitude: number;
  /**
   * 文章作者id
   */
  aut_id: string;
  /**
   * 文章作者名
   */
  aut_name: string;
  /**
   * 文章作者头像，无头像, 默认为null
   */
  aut_photo: string;
  /**
   * 文章_评论总数
   */
  comm_count: number;
  /**
   * 文章内容
   */
  content: string;
  /**
   * 文章-是否被收藏，true(已收藏)false(未收藏)是登录的用户对此文章的收藏状态
   */
  is_collected: boolean;
  /**
   * 文章作者-是否被关注，true(关注)false(未关注), 说的是当前登录用户对这个文章作者的关注状态
   */
  is_followed: boolean;
  /**
   * 文章_点赞总数
   */
  like_count: number;
  /**
   * 文章发布时间
   */
  pubdate: string;
  /**
   * 文章_阅读总数
   */
  read_count: number;
  /**
   * 文章标题
   */
  title: string;
  [property: string]: any;
};
