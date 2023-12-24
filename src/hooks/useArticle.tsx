import { fetchArticleLists } from "@/apis/articleListAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useArticle = (channelID: string) => {
  const [articleLists, setArticleLists] = useState<ArticleRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getArticleLists = async () => {
      try {
        const res = await fetchArticleLists({
          channel_id: channelID,
          timestamp: "" + new Date().getTime(),
        });
        setArticleLists({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("Error getting articles");
      }
    };
    getArticleLists();
  }, []);

  // 无限滚动加载部分
  const [hasMore, setHasMore] = useState(true);
  const loadMore = async () => {
    // 处理滚动时的逻辑
    // 调用接口，获取数据，合并新老数据

    try {
      const res = await fetchArticleLists({
        channel_id: channelID,
        timestamp: articleLists.pre_timestamp,
      });
      setArticleLists({
        results: [...articleLists.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      if (res.data.data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("Error getting articles");
    }
  };

  //  跳转路由的回调
  const navigate = useNavigate();
  const goToArticleDetail = (id: string) => {
    navigate(`/detail?id=${id}`);
  };

  return { articleLists, goToArticleDetail, hasMore, loadMore };
};
