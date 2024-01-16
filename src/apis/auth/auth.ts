import { apiRouteUtils } from "@/routes";
import { SigninResponse } from "./auth.schema";
import { fetcher } from "@/apis/fetcher";

export const postSignin = (email: string, password: string) => {
  const res = fetcher
    .post(apiRouteUtils.SIGNIN, {
      json: {
        email,
        password,
      },
    })
    .json()
    .then(SigninResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
