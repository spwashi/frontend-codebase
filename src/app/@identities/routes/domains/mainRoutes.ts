import { INavLinkConfig } from "../types/linkConfig";

const rootRoute: INavLinkConfig = {
  id: "home",
  href: "/",
  title: "Home",
  path: "/*",
};
const homeRoute: INavLinkConfig = {
  id: "home",
  href: "/",
  title: "Home",
  path: "/",
};
const aboutRoute: INavLinkConfig = {
  id: "about",
  href: "/about",
  title: "About",
  path: "about",
};

export const mainRoutes = {
  root: rootRoute,
  home: homeRoute,
  about: aboutRoute,
};
