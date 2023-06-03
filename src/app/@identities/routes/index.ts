import { INavLinkConfig } from "./types/linkConfig";

export { adminRoutes } from "./links/adminRoutes";
export { mainRoutes } from "./links/mainRoutes";

const envSiteUrl = "http://localhost:5173";

export const getAbsoluteUrl = (route: INavLinkConfig, siteUrl = envSiteUrl) => {
  return siteUrl + route.href;
};
