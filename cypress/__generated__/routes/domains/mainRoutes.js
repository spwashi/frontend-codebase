"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
const mainRootRoute = {
    id: "root",
    href: "/",
    title: "Home",
    path: "/*",
};
const mainHomeRoute = {
    id: "home",
    href: "/",
    title: "Home",
    path: "/",
};
const mainAboutRoute = {
    id: "about",
    href: "/about",
    title: "About",
    path: "about",
};
exports.mainRoutes = {
    root: mainRootRoute,
    home: mainHomeRoute,
    about: mainAboutRoute,
};
