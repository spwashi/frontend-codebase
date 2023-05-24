import { routeHasHref } from "@identities/routes/helpers/routeHasHref";
import {
  INavLinkConfig,
  INavLinkConfigMap,
} from "@identities/routes/types/linkConfig";
import { routerCategories } from "@identities/routes/routerCategories";

const adminAllRoute = {
  href: `${routerCategories.admin.prefix}/all`,
  id: "admin-all",
  title: "All",
  path: "all/*",
} as INavLinkConfig;
const adminAssetsRoute = {
  href: `${routerCategories.admin.prefix}/assets`,
  id: "admin-assets",
  title: "Assets",
  path: "assets/*",
} as INavLinkConfig;
const adminConceptsRoute = {
  href: `${routerCategories.admin.prefix}/concepts`,
  id: "admin-concepts",
  title: "Concepts",
  path: "concepts/*",
} as INavLinkConfig;
const adminEventsRoute = {
  href: `${routerCategories.admin.prefix}/events`,
  id: "admin-events",
  title: "Events",
  path: "events/*",
} as INavLinkConfig;
const adminProjectsRoute = {
  href: `${routerCategories.admin.prefix}/projects`,
  id: "admin-projects",
  title: "Projects",
  path: "projects/*",
} as INavLinkConfig;
const adminScenesRoute = {
  href: `${routerCategories.admin.prefix}/scenes`,
  id: "admin-scenes",
  title: "Scenes",
  path: "scenes/*",
} as INavLinkConfig;
const adminTagsRoute = {
  href: `${routerCategories.admin.prefix}/tags`,
  id: "admin-tags",
  title: "Tags",
  path: "tags/*",
} as INavLinkConfig;
const adminUsersRoute = {
  href: `${routerCategories.admin.prefix}/users`,
  id: "admin-users",
  title: "Users",
  path: "users/*",
} as INavLinkConfig;

export const adminRoutes = <const>{
  all: adminAllRoute,
  assets: adminAssetsRoute,
  concepts: adminConceptsRoute,
  events: adminEventsRoute,
  projects: adminProjectsRoute,
  scenes: adminScenesRoute,
  tags: adminTagsRoute,
  users: adminUsersRoute,
};
export default Object.values(adminRoutes as INavLinkConfigMap).filter(
  routeHasHref
);
