import ky from "ky";
import { API_ROUTE } from "@/routes";
import { getAccessToken } from "@/utils/auth";

export const fetcher = ky.create({
  prefixUrl: API_ROUTE,
  hooks: {
    beforeRequest: [
      (req) => req.headers.set("Authorization", `Bearer ${getAccessToken()}`),
    ],
  },
});
