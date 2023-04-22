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

export { default as adminNavLinks } from "./links/adminLinks";
export { default as mainNavLinks } from "./links/mainLinks";
