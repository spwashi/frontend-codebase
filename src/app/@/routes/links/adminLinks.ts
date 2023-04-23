import { routes } from "@/routes";
import { routeHasHref } from "@/routes/helpers/routeHasHref";
import { INavLinkConfigMap } from "@/routes/types/linkConfig";

const adminLinkConfigs: INavLinkConfigMap = {
  all: {
    href: `${routes.admin.prefix}/all`,
    id: "admin-all",
    title: "All",
  },
  assets: {
    href: `${routes.admin.prefix}/assets`,
    id: "admin-assets",
    title: "Assets",
  },
  concepts: {
    href: `${routes.admin.prefix}/concepts`,
    id: "admin-concepts",
    title: "Concepts",
  },
  events: {
    href: `${routes.admin.prefix}/events`,
    id: "admin-events",
    title: "Events",
  },
  projects: {
    href: `${routes.admin.prefix}/projects`,
    id: "admin-projects",
    title: "Projects",
  },
  scenes: {
    href: `${routes.admin.prefix}/scenes`,
    id: "admin-scenes",
    title: "Scenes",
  },
  tags: {
    href: `${routes.admin.prefix}/tags`,
    id: "admin-tags",
    title: "Tags",
  },
  users: {
    href: `${routes.admin.prefix}/users`,
    id: "admin-users",
    title: "Users",
  },
};
export default Object.values(adminLinkConfigs).filter(routeHasHref);
