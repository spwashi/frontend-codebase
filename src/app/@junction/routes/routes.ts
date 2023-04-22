export type INavLink = {
  id: string;
  href: string;
  title: string;
  children?: INavLink[];
};

export const routeHasHref = (route: INavLink) => !!route.href;

const homeRoute: INavLink = {
  id: "home",
  href: "/",
  title: "Home",
};
const aboutRoute: INavLink = {
  id: "about",
  href: "/about",
  title: "About",
};

const standardRoutes = {
  home: homeRoute,
  about: aboutRoute,
};

export const adminPaths = {
  admin: {
    _prefix: "/admin",
    _path: "/admin/*",
  },
};

const adminRoutes: { [key: string]: INavLink } = {
  all: {
    href: `${adminPaths.admin._prefix}/all`,
    id: "admin-all",
    title: "All",
  },
  projects: {
    href: `${adminPaths.admin._prefix}/projects`,
    id: "admin-projects",
    title: "Projects",
  },
  users: {
    href: `${adminPaths.admin._prefix}/users`,
    id: "admin-users",
    title: "Users",
  },
  scenes: {
    href: `${adminPaths.admin._prefix}/scenes`,
    id: "admin-scenes",
    title: "Scenes",
  },
  concepts: {
    href: `${adminPaths.admin._prefix}/concepts`,
    id: "admin-concepts",
    title: "Concepts",
  },
  events: {
    href: `${adminPaths.admin._prefix}/events`,
    id: "admin-events",
    title: "Events",
  },
  tags: {
    href: `${adminPaths.admin._prefix}/tags`,
    id: "admin-tags",
    title: "Tags",
  },
  assets: {
    href: `${adminPaths.admin._prefix}/assets`,
    id: "admin-assets",
    title: "Assets",
  },
};

export const routes = {
  admin: adminRoutes,
  main: standardRoutes,
};
