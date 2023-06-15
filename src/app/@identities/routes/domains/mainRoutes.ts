import { IRouteConfig } from "../types/linkConfig";

const mainRootRoute: IRouteConfig = <const>{
  id: "root",
  href: "/",
  path: "/*",
};
const mainHomeRoute: IRouteConfig = <const>{
  id: "home",
  href: "/",
  title: "Home",
  path: "/",
};
const mainAboutRoute: IRouteConfig = <const>{
  id: "about",
  href: "/about",
  title: "About",
  path: "about",
};

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  about: mainAboutRoute,
};
