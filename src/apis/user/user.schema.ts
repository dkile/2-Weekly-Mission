import { z } from "zod";

export const UserVO = z.object({
  id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  name: z.string(),
  image_source: z.string().url(),
  email: z.string().email(),
  auth_id: z.string().uuid(),
});
export type UserVO = z.infer<typeof UserVO>;

export const UserResponse = z.object({
  data: z.array(UserVO),
});
export type UserResponse = z.infer<typeof UserResponse>;
