import { z } from "zod";

export const LinkList = z.object({
	data: z.array(
		z.object({
			id: z.number(),
			created_at: z.string().datetime({ offset: true }),
			updated_at: z.nullable(z.string().datetime({ offset: true })),
			url: z.string().url(),
			title: z.nullable(z.string()),
			description: z.nullable(z.string()),
			image_source: z.nullable(z.string().url()),
			folder_id: z.nullable(z.number()),
		}),
	),
});
export type LinkList = z.infer<typeof LinkList>;
