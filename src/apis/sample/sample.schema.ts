import { z } from "zod";

export const Link = z.object({
	id: z.number(),
	createdAt: z.string().datetime({ offset: true }),
	url: z.string().url(),
	title: z.nullable(z.string()),
	description: z.nullable(z.string()),
	imageSource: z.optional(z.string().url()),
});
export type Link = z.infer<typeof Link>;

export const Folder = z.object({
	folder: z.object({
		id: z.number(),
		name: z.string(),
		owner: z.object({
			id: z.number(),
			name: z.string(),
			profileImageSource: z.nullable(z.string().url()),
		}),
		links: z.array(Link),
		count: z.number(),
	}),
});
export type Folder = z.infer<typeof Folder>;
