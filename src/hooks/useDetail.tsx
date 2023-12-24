import { fetchArticleDetail } from "@/apis/articleDetailAPI";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useDetail = () => {
  const [searchParams] = useSearchParams();
  const article_id = searchParams.get("id");
  const [articleDetail, setArticleDetail] = useState<ArticleDetailRes | null>(
    null
  );

  useEffect(() => {
    const getDetail = async () => {
      const res = await fetchArticleDetail(article_id!);
      setArticleDetail(res.data.data);
    };
    getDetail();
  }, [article_id]);

  // 返回按钮的回调
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return { articleDetail, goBack };
};
