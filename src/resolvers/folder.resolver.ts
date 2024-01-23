import { getFolderList } from "@/apis/folder/folder";
import { getLinkList } from "@/apis/link/link";
import { getUser } from "@/apis/user/user";
import {
  createFolderListWithFolderListVO,
  createLinkListWithLinkListVO,
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
  resolveLinkList: async (userId: number, folderId?: number) => {
    const { data: linkList } = await getLinkList(userId, folderId);

    return createLinkListWithLinkListVO(linkList);
  },
};
