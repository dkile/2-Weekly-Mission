import { FolderVO } from "@/apis/folder/folder.schema";
import { LinkVO } from "@/apis/link/link.schema";
import { UserVO } from "@/apis/user/user.schema";
import { Folder, LinkInfo } from "@/types/folder";
import { User } from "@/types/user";

export const createUserWithUserVO = (vo: UserVO): User => {
  return {
    id: vo.id,
    name: vo.name,
    createdAt: vo.created_at,
    email: vo.email,
    authId: vo.auth_id,
    imageSource: vo.image_source,
  };
};

export const createFolderListWithFolderListVO = (vo: FolderVO[]): Folder[] => {
  return vo.map((fvo) => ({
    id: fvo.id,
    name: fvo.name,
    createdAt: fvo.created_at,
    userId: fvo.user_id,
    favorite: fvo.favorite,
    link: fvo.link,
  }));
};

export const createLinkListWithLinkListVO = (vo: LinkVO[]): LinkInfo[] => {
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
