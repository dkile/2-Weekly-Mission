import { CheckEmailResponse, UserResponse } from "@/apis/user/user.schema";
import { fetcher } from "@/apis/fetcher";
import { apiRouteUtils } from "@/routes";

export const getUser = async (userId: number) => {
  const res = await fetcher
    .get(apiRouteUtils.parseUserURL(userId))
    .json()
    .then(UserResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};

export const postCheckEmail = async (email: string) => {
  const res = await fetcher
    .post(apiRouteUtils.CHECK_EMAIL, {
      json: {
        email,
      },
    })
    .json()
    .then(CheckEmailResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
