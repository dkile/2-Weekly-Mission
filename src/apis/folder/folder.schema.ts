import { z } from "zod";

export const FolderVO = z.object({
  id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  name: z.string(),
  user_id: z.number(),
  favorite: z.boolean(),
  link: z.object({
    count: z.number(),
  }),
});
export type FolderVO = z.infer<typeof FolderVO>;

export const FolderListResponse = z.object({
  data: z.array(FolderVO),
});
export type FolderList = z.infer<typeof FolderListResponse>;

export const MyFolderVO = FolderVO.omit({ link: true });
export type MyFolderVO = z.infer<typeof MyFolderVO>;

export const MyFolderListResponse = z.object({
  data: z.object({
    folder: z.array(MyFolderVO),
  }),
});
