import { routeHasHref } from "@identities/routes/helpers/routeHasHref";
import {
  INavLinkConfig,
  INavLinkConfigMap,
} from "@identities/routes/types/linkConfig";

const homeRoute: INavLinkConfig = {
  id: "home",
  href: "/",
  title: "Home",
};
const aboutRoute: INavLinkConfig = {
  id: "about",
  href: "/about",
  title: "About",
};

const mainLinkConfigs: INavLinkConfigMap = {
  home: homeRoute,
  about: aboutRoute,
};

export default Object.values(mainLinkConfigs).filter(routeHasHref);