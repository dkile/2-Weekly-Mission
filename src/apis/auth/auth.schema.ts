import { z } from "zod";

export const AuthTokenVO = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});
export type AuthToken = z.infer<typeof AuthTokenVO>;

export const SigninResponse = z.object({
  data: AuthTokenVO,
});
export type SigninResponse = z.infer<typeof SigninResponse>;

export const AuthRequestBodyVO = z.object({
  email: z.string(),
  password: z.string(),
});
export type AuthRequestBodyVO = z.infer<typeof AuthRequestBodyVO>;

export const SignupResponse = z.object({
  data: AuthTokenVO,
});
export type SignupResponse = z.infer<typeof SignupResponse>;
