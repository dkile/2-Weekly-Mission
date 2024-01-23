import { apiRouteUtils } from "@/routes";
import {
  FolderListResponse,
  MyFolderListResponse,
} from "@/apis/folder/folder.schema";
import { fetcher } from "@/apis/fetcher";

export const getFolderList = async (userId: number) => {
  const res = await fetcher
    .get(apiRouteUtils.parseFolderListURL(userId))
    .json()
    .then(FolderListResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};

export const getMyFolderList = async () => {
  const res = await fetcher
    .get(apiRouteUtils.FOLDER_LIST)
    .json()
    .then(MyFolderListResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
