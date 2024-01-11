import { fetcher } from "@/apis/fetcher";
import { apiRouteUtils } from "@/routes";
import { LinkList } from "@/apis/link/link.schema";

export const getLinkList = async (userId: number, folderId?: number) => {
  try {
    const linkList = await fetcher
      .get(apiRouteUtils.parseLinkListURL(userId), {
        searchParams: folderId ? { folderId } : undefined,
      })
      .json();
    const validLinkList = LinkList.parse(linkList);

    return validLinkList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
