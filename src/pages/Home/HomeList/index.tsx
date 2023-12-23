import { List, Image } from "antd-mobile";

// mock数据
// import { users } from "./user";
import { useArticleList } from "@/hooks/useArticleList";

type ParamsType = {
  articleID: string;
};

export const HomeList = (params: ParamsType) => {
  const { articleID } = params;
  const { articleLists } = useArticleList(articleID);
  return (
    <div>
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
          >
            {item.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
};
