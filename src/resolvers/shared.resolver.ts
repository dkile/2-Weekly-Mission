import { getSampleFolder } from "@/apis/sample/sample";
import { FolderVO } from "@/apis/sample/sample.schema";
import { Folder } from "@/types/shared";

export const resolvers = {
  resolveSharedPage: async () => {
    const { folder } = await getSampleFolder();

    return createFolderWithFolderVO(folder);
  },
};

const createFolderWithFolderVO = (vo: FolderVO): Folder => {
  return vo;
};
