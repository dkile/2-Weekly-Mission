import { getFolderList, getMyFolderList } from "@/apis/folder/folder";
import { getLinkList } from "@/apis/link/link";
import { getUser } from "@/apis/user/user";
import {
  createFolderListWithFolderListVO,
  createLinkListWithLinkListVO,
  createMyFolderListWithMyFolderListVO,
  createUserWithUserVO,
} from "@/resolvers/helper";

export const resolvers = {
  resolveFolderPage: async () => {
    const { data: users } = await getUser(1);
    const user = users.at(0);
    if (!user) throw new Error("Cannot find user");
    const { data: folderList } = await getFolderList(user.id);

    return {
      user: createUserWithUserVO(user),
      folderList: createFolderListWithFolderListVO(folderList),
    };
  },
  resolveFolderList: async (userId: number) => {
    const { data: folderList } = await getFolderList(userId);

    return createFolderListWithFolderListVO(folderList);
  },
  resolveLinkList: async (folderId?: number) => {
    const {
      data: { folder: linkList },
    } = await getLinkList(folderId);

    return createLinkListWithLinkListVO(linkList);
  },
  resolveMyFolderList: async () => {
    const { data: folderList } = await getMyFolderList();

    return createMyFolderListWithMyFolderListVO(folderList.folder);
  },
};
