import { z } from "zod";

export const User = z.object({
	data: z.array(
		z.object({
			id: z.number(),
			created_at: z.string().datetime({ offset: true }),
			name: z.string(),
			image_source: z.string().url(),
			email: z.string().email(),
			auth_id: z.string().uuid(),
		}),
	),
});
export type User = z.infer<typeof User>;
