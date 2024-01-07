export const ASSET_ROUTE =
  "https://res.cloudinary.com/divjslgco/image/upload/v1698465629/codeit";

export const assetRoutes = {
  icon: `${ASSET_ROUTE}/icons`,
  image: `${ASSET_ROUTE}/images`,
};

export const API_ROUTE = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const apiRoutes = {
  folderList: (userId: number) => `users/${userId}/folders`,
  linkList: (userId: number) => `users/${userId}/links`,
  user: (userId: number) => `users/${userId}`,
};

export const pageRoutes = {
  home: "/",
  signin: "/signin",
  singup: "/signup",
  shared: "/shared",
  folder: "/folder",
  privacy: "/privacy",
  faq: "/faq",
};
