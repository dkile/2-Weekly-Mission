export const ASSET_ROUTE =
  "https://res.cloudinary.com/divjslgco/image/upload/v1698465629/codeit";

export const ASSET_ROUTES = {
  ICON: `${ASSET_ROUTE}/icons`,
  IMAGE: `${ASSET_ROUTE}/images`,
} as const;

export const API_ROUTE = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const apiRouteUtils = {
  parseFolderListURL: (userId: number) => `users/${userId}/folders`,
  parseLinkListURL: (userId: number) => `users/${userId}/links`,
  parseUserURL: (userId: number) => `users/${userId}`,
  SAMPLE_FOLDER: "sample/folder",
  SIGNIN: "sign-in",
  SIGNUP: "sign-up",
  REFRESH_TOKEN: "refresh-token",
};

export const PAGE_ROUTES = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  SHARED: "/shared",
  FOLDER: "/folder",
  PRIVACY: "/privacy",
  FAQ: "/faq",
} as const;
