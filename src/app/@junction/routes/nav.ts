import { adminRoutes, standardRoutes } from "./routes";

export const mainNavigation = [standardRoutes.home, standardRoutes.about];

export const adminNavigation = Object.values(adminRoutes.admin).filter(
  (route) => route.href
);
