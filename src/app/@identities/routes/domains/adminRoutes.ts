import { routerCategories } from "../helpers/routerCategories";
import {
  IRouteConfig,
  IRouteConfigMap,
} from "@identities/routes/types/linkConfig";

const adminPrefix = routerCategories.admin.prefix;
const adminRootRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/`,
  id: "admin-root",
  title: "Root",
  absolutePath: "admin/*",
  subConfigMap: {},
};
const adminAllRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/all/`,
  id: "admin-all",
  title: "All",
  absolutePath: "all/*",
  subConfigMap: {},
};
const adminAssetsRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/assets/`,
  id: "admin-assets",
  title: "Assets",
  absolutePath: "assets/*",
  subConfigMap: {
    root: {
      id: "admin-assets-root",
      href: `${adminPrefix}/assets/`,
      title: "Asset Administration",
      absolutePath: "/",
      relativePath: "../assets",
      subConfigMap: {},
    },
    all: {
      id: "admin-assets-all",
      href: `${adminPrefix}/assets/all/`,
      title: "Asset List of All",
      absolutePath: "all",
      relativePath: "../assets/all",
      subConfigMap: {},
    },
  },
};
const adminConceptsRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/concepts/`,
  id: "admin-concepts",
  title: "Concepts",
  absolutePath: "concepts/*",
  subConfigMap: {
    root: {
      id: "admin-concepts-root",
      href: `${adminPrefix}/concepts/`,
      title: "Concept Administration",
      absolutePath: "/",
      relativePath: "../concepts",
      subConfigMap: {},
    },
    all: {
      id: "admin-concepts-all",
      href: `${adminPrefix}/concepts/all/`,
      title: "Concept List of All",
      absolutePath: "all",
      relativePath: "../concepts/all",
      subConfigMap: {},
    },
  },
};
const adminEventsRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/events/`,
  id: "admin-events",
  title: "Events",
  absolutePath: "events/*",
  subConfigMap: {
    root: {
      id: "admin-events-root",
      href: `${adminPrefix}/events/`,
      title: "Event Administration",
      absolutePath: "/",
      relativePath: "../events",
      subConfigMap: {},
    },
    all: {
      id: "admin-events-all",
      href: `${adminPrefix}/events/all/`,
      title: "Event List of All",
      absolutePath: "all",
      relativePath: "../events/all",
      subConfigMap: {},
    },
  },
};
const adminProjectsRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/projects/`,
  id: "admin-projects",
  title: "Projects",
  absolutePath: "projects/*",
  subConfigMap: {
    root: {
      id: "admin-projects-root",
      href: `${adminPrefix}/projects/`,
      title: "Project Administration",
      absolutePath: "/",
      relativePath: "../projects",
      subConfigMap: {},
    },
    all: {
      id: "admin-projects-all",
      href: `${adminPrefix}/projects/all/`,
      title: "Project List of All",
      absolutePath: "all",
      relativePath: "../projects/all",
      subConfigMap: {},
    },
  },
};
const adminScenesRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/scenes/`,
  id: "admin-scenes",
  title: "Scenes",
  absolutePath: "scenes/*",
  subConfigMap: {
    root: {
      id: "admin-scenes-root",
      href: `${adminPrefix}/scenes/`,
      title: "Scene Administration",
      absolutePath: "/",
      relativePath: "../scenes",
      subConfigMap: {},
    },
    all: {
      id: "admin-scenes-all",
      href: `${adminPrefix}/scenes/all/`,
      title: "Scene List of All",
      absolutePath: "all",
      relativePath: "../scenes/all",
      subConfigMap: {},
    },
  },
};
const adminTagsRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/tags/`,
  id: "admin-tags",
  title: "Tags",
  absolutePath: "tags/*",
  subConfigMap: {
    root: {
      id: "admin-tags-root",
      href: `${adminPrefix}/tags/`,
      title: "Tag Administration",
      absolutePath: "/",
      relativePath: "../tags",
      subConfigMap: {},
    },
    all: {
      id: "admin-tags-all",
      href: `${adminPrefix}/tags/all/`,
      title: "Tag List of All",
      absolutePath: "all",
      relativePath: "../tags/all",
      subConfigMap: {},
    },
  },
};
const adminUsersRoute: IRouteConfig = <const>{
  href: `${adminPrefix}/users/`,
  id: "admin-users",
  title: "Users",
  absolutePath: "users/*",
  subConfigMap: {
    root: {
      id: "admin-users-root",
      href: `${adminPrefix}/users/`,
      title: "User Administration",
      absolutePath: "/",
      relativePath: "../users",
      subConfigMap: {},
    },
    all: {
      id: "admin-users-all",
      href: `${adminPrefix}/users/all/`,
      title: "User List of All",
      absolutePath: "all",
      relativePath: "../users/all",
      subConfigMap: {},
    },
  },
};

export const adminRoutes = <const>{
  all: adminAllRoute,
  root: adminRootRoute,
  assets: adminAssetsRoute,
  concepts: adminConceptsRoute,
  events: adminEventsRoute,
  projects: adminProjectsRoute,
  scenes: adminScenesRoute,
  tags: adminTagsRoute,
  users: adminUsersRoute,
};
