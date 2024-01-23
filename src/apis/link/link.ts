import { fetcher } from "@/apis/fetcher";
import { apiRouteUtils } from "@/routes";
import {
  LinkListResponse,
  UsersLinkListResponse,
} from "@/apis/link/link.schema";

export const getUsersLinkList = async (userId: number, folderId?: number) => {
  const res = await fetcher
    .get(apiRouteUtils.parseLinkListURL(userId), {
      searchParams: folderId ? { folderId } : undefined,
    })
    .json()
    .then(UsersLinkListResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};

export const getLinkList = async (folderId?: number) => {
  const res = await fetcher
    .get(apiRouteUtils.LINK_LIST, {
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
