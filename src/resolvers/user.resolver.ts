import { getCurrentUser, getUser, postCheckEmail } from "@/apis/user/user";
import { createUserWithUserVO } from "@/resolvers/helper";

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
  resolveUser: async (userId: number) => {
    try {
      const { data } = await getUser(userId);
      const user = data.at(0);
      if (!user) throw new Error("Cannot find user");

      return createUserWithUserVO(user);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  resolveCurrentUser: async () => {
    try {
      const { data } = await getCurrentUser();
      const user = data.at(0);
      if (!user) throw new Error("Cannot find user");

      return createUserWithUserVO(user);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
