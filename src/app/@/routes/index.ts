import { IRouteConfigMap } from "@/routes/types/routeConfig";

export const routes = {
  admin: {
    prefix: "/admin",
    path: "/admin/*",
  },
  main: {
    prefix: "/admin",
    path: "/*",
  },
};
