import { postCheckEmail } from "@/apis/user/user";

export const resolvers = {
  resolveEmailCheck: async (email: string) => {
    try {
      const { data } = await postCheckEmail(email);

      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
