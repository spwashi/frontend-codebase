import { INavLinkConfig } from "./types/linkConfig";

export { adminRoutes } from "./domains/adminRoutes";
export { mainRoutes } from "./domains/mainRoutes";

const envSiteUrl = "http://localhost:5173";

export const getAbsoluteUrl = (route: INavLinkConfig, siteUrl = envSiteUrl) => {
  return siteUrl + route.href;
};
