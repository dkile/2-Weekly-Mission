import { z } from "zod";

export const LinkVO = z.object({
  id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.nullable(z.string().datetime({ offset: true })),
  url: z.string().url(),
  title: z.nullable(z.string()),
  description: z.nullable(z.string()),
  image_source: z.nullable(z.string().url()),
  folder_id: z.nullable(z.number()),
});
export type LinkVO = z.infer<typeof LinkVO>;

export const UsersLinkListResponse = z.object({
  data: z.array(LinkVO),
});
export type UsersLinkListResponse = z.infer<typeof UsersLinkListResponse>;

export const LinkListResponse = z.object({
  data: z.object({
    folder: z.array(LinkVO),
  }),
});
export type FolderLinkListResponse = z.infer<typeof LinkListResponse>;
