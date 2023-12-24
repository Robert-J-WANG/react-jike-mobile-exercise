import { List, Image, InfiniteScroll } from "antd-mobile";

// mock数据
// import { users } from "./user";
import { useArticle } from "@/hooks/useArticle";

type ParamsType = {
  articleID: string;
};

export const HomeList = (params: ParamsType) => {
  const { articleID } = params;
  const { articleLists, goToArticleDetail, loadMore, hasMore } =
    useArticle(articleID);
  return (
    <div className="listContainer">
      <List header="文章列表">
        {articleLists.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
            onClick={() => goToArticleDetail(item.art_id)}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      {/* 无限滚动加载控件 */}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};
