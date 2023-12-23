import { fetchArticleLists } from "@/apis/articleListAPI";
import { useEffect, useState } from "react";

export const useArticleList = (channelID: string) => {
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

  return { articleLists };
};
