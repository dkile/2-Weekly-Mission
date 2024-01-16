import { apiRouteUtils } from "@/routes";
import { SigninResponse, SignupResponse } from "@/apis/auth/auth.schema";
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

export const postSignup = (email: string, password: string) => {
  const res = fetcher
    .post(apiRouteUtils.SIGNUP, {
      json: {
        email,
        password,
      },
    })
    .json()
    .then(SignupResponse.parse)
    .catch((err) => {
      console.error(err);
      throw err;
    });

  return res;
};
