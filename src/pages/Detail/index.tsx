import { useDetail } from "@/hooks/useDetail";
import { NavBar } from "antd-mobile";

export const Detail = () => {
  const { articleDetail, goBack } = useDetail();
  console.log(articleDetail);

  if (!articleDetail) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <NavBar onBack={goBack}>
        <div>
          <div>{articleDetail?.title}</div>
          <div className="my-nav-bar-subtitle">{articleDetail?.aut_name}</div>
        </div>
      </NavBar>
      <div dangerouslySetInnerHTML={{ __html: articleDetail?.content }}></div>
    </div>
  );
};
