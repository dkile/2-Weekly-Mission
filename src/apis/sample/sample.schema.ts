import { z } from "zod";

export const LinkVO = z.object({
  id: z.number(),
  createdAt: z.string().datetime({ offset: true }),
  url: z.string().url(),
  title: z.nullable(z.string()),
  description: z.nullable(z.string()),
  imageSource: z.optional(z.string().url()),
});
export type LinkVO = z.infer<typeof LinkVO>;

export const FolderVO = z.object({
  id: z.number(),
  name: z.string(),
  owner: z.object({
    id: z.number(),
    name: z.string(),
    profileImageSource: z.nullable(z.string().url()),
  }),
  links: z.array(LinkVO),
  count: z.number(),
});
export type FolderVO = z.infer<typeof FolderVO>;

export const FolderResponse = z.object({
  folder: FolderVO,
});
export type FolderResponse = z.infer<typeof FolderResponse>;
