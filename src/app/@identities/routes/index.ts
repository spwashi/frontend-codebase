import { IRouteConfig } from "./types/linkConfig";

export { adminRoutes } from "./domains/adminRoutes";
export { mainRoutes } from "./domains/mainRoutes";
export { forumRoutes } from "./domains/forumRoutes";

const envSiteUrl = "http://localhost:5173";

export function getAbsoluteUrl(route: IRouteConfig, siteUrl = envSiteUrl) {
  return siteUrl + route.href;
}
export function getRouterPath(route: IRouteConfig, ...params: any[]) {
  if (route.generatePath) {
    return route.generatePath(false, ...params);
  }
  return route.path;
}
export function getRelativeRouterPath(route: IRouteConfig) {
  if (!route.relativePath) throw new Error("improper usage of routes");
  return route.relativePath;
}
