import { INavLinkConfig } from "../types/linkConfig";

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
  home: homeRoute,
  about: aboutRoute,
};
