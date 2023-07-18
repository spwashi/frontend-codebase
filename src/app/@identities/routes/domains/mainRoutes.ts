import { IRouteConfig } from "../types/linkConfig";

const mainRootRoute: IRouteConfig = <const>{
  id: "root",
  href: "/",
  absolutePath: "/*",
  subConfigMap: {},
};
const mainHomeRoute: IRouteConfig = <const>{
  id: "home",
  href: "/",
  title: "Home",
  absolutePath: "/",
  subConfigMap: {},
};
const mainAboutRoute: IRouteConfig = <const>{
  id: "about",
  href: "/about",
  title: "About",
  absolutePath: "about",
  subConfigMap: {},
};

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  about: mainAboutRoute,
};
