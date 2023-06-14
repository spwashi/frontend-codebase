import { INavLinkConfig } from "./types/linkConfig";

export { adminRoutes } from "./domains/adminRoutes";
export { forumRoutes } from "./domains/forumRoutes";
export { mainRoutes } from "./domains/mainRoutes";

const envSiteUrl = "http://localhost:5173";

export const getAbsoluteUrl = (route: INavLinkConfig, siteUrl = envSiteUrl) => {
  return siteUrl + route.href;
};
export const getRouterPath = (route: INavLinkConfig) => {
  return route.path;
};
export const getRouterPath_adminRelativePath = (route: INavLinkConfig) => {
  if (!route.adminRelativePath) throw new Error("improper usage of routes");
  return route.adminRelativePath;
};
