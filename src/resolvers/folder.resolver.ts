import { getFolderList } from "@/apis/folder/folder";
import { FolderVO } from "@/apis/folder/folder.schema";
import { getLinkList } from "@/apis/link/link";
import { LinkVO } from "@/apis/link/link.schema";
import { getUser } from "@/apis/user/user";
import { UserVO } from "@/apis/user/user.schema";
import { Folder, LinkInfo } from "@/types/folder";
import { User } from "@/types/user";

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

const createUserWithUserVO = (vo: UserVO): User => {
  return {
    id: vo.id,
    name: vo.name,
    createdAt: vo.created_at,
    email: vo.email,
    authId: vo.auth_id,
    imageSource: vo.image_source,
  };
};

const createFolderListWithFolderListVO = (vo: FolderVO[]): Folder[] => {
  return vo.map((fvo) => ({
    id: fvo.id,
    name: fvo.name,
    createdAt: fvo.created_at,
    userId: fvo.user_id,
    favorite: fvo.favorite,
    link: fvo.link,
  }));
};

const createLinkListWithLinkListVO = (vo: LinkVO[]): LinkInfo[] => {
  return vo.map((lvo) => ({
    id: lvo.id,
    title: lvo.title,
    createdAt: lvo.created_at,
    updatedAt: lvo.updated_at,
    url: lvo.url,
    description: lvo.description,
    folderId: lvo.folder_id,
    imageSource: lvo.image_source,
  }));
};
