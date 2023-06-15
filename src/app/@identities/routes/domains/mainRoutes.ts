import { IRouteConfig } from "../types/linkConfig";

const mainRootRoute: IRouteConfig = <const>{
  id: "root",
  href: "/",
  absolutePath: "/*",
};
const mainHomeRoute: IRouteConfig = <const>{
  id: "home",
  href: "/",
  title: "Home",
  absolutePath: "/",
};
const mainAboutRoute: IRouteConfig = <const>{
  id: "about",
  href: "/about",
  title: "About",
  absolutePath: "about",
};

export const mainRoutes = {
  root: mainRootRoute,
  home: mainHomeRoute,
  about: mainAboutRoute,
};
