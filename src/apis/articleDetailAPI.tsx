import { http } from "@/utils";

export const fetchArticleDetail = (article_id: string) => {
  return http.request({
    url: `/articles/${article_id}`,
  });
};
