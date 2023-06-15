import { IRouteConfig } from "../types/linkConfig";

const mainRootRoute = (<const>{
  id: "root",
  href: "/",
  title: "[App Name]",
  path: "/*",
}) as IRouteConfig;
const mainHomeRoute = (<const>{
  id: "home",
  href: "/",
  title: "Home",
  path: "/",
}) as IRouteConfig;
const mainAboutRoute = (<const>{
  id: "about",
  href: "/about",
  title: "About",
  path: "about",
}) as IRouteConfig;

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  about: mainAboutRoute,
};
