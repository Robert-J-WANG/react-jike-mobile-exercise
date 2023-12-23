import { http } from "@/utils";

export const fetchArticleLists = (params: ParmasType) => {
  return http.request({
    url: "/articles",
    params,
  });
};
