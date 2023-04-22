import { routeHasHref, routes } from "./routes";

export const adminNavigation = Object.values(routes.admin).filter(routeHasHref);
export const mainNavigation = Object.values(routes.main).filter(routeHasHref);
