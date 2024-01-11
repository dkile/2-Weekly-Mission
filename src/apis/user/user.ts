import { User } from "@/apis/user/user.schema";
import { fetcher } from "@/apis/fetcher";
import { apiRouteUtils } from "@/routes";

export const getUser = async (userId: number) => {
  try {
    const user = await fetcher.get(apiRouteUtils.parseUserURL(userId)).json();
    const validUser = User.parse(user);

    return validUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
