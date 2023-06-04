import { INavLinkConfig } from "./types/linkConfig";

export { adminRoutes } from "@identities/routes/domains/adminRoutes";
export { mainRoutes } from "@identities/routes/domains/mainRoutes";

const envSiteUrl = "http://localhost:5173";

export const getAbsoluteUrl = (route: INavLinkConfig, siteUrl = envSiteUrl) => {
  return siteUrl + route.href;
};
