import { routeHasHref } from "@identities/routes/helpers/routeHasHref";
import {
  INavLinkConfig,
  INavLinkConfigMap,
} from "@identities/routes/types/linkConfig";

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

export default Object.values(mainRoutes).filter(routeHasHref);
