import { postSignin } from "@/apis/auth/auth";

export const resolvers = {
  resolveSignin: async (email: string, password: string) => {
    const { data: authTokens } = await postSignin(email, password);
    const { accessToken, refreshToken } = authTokens;

    localStorage.setItem("accessToken", accessToken);
  },
};
