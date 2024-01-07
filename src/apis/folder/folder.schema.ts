import { z } from "zod";

export const Folder = z.object({
	id: z.number(),
	created_at: z.string().datetime({ offset: true }),
	name: z.string(),
	user_id: z.number(),
	favorite: z.boolean(),
	link: z.object({
		count: z.number(),
	}),
});
export type Folder = z.infer<typeof Folder>;

export const FolderList = z.object({
	data: z.array(Folder),
});
export type FolderList = z.infer<typeof FolderList>;
