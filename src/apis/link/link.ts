import { fetcher } from "@/apis/fetcher";
import { apiRouteUtils } from "@/routes";
import { LinkListResponse } from "@/apis/link/link.schema";

export const getLinkList = async (userId: number, folderId?: number) => {
  const res = await fetcher
    .get(apiRouteUtils.parseLinkListURL(userId), {
      searchParams: folderId ? { folderId } : undefined,
    })
    .json()
    .then(LinkListResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
