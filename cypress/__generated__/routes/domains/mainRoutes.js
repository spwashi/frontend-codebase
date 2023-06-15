"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
const mainRootRoute = {
    id: "root",
    href: "/",
    absolutePath: "/*",
};
const mainHomeRoute = {
    id: "home",
    href: "/",
    title: "Home",
    absolutePath: "/",
};
const mainAboutRoute = {
    id: "about",
    href: "/about",
    title: "About",
    absolutePath: "about",
};
exports.mainRoutes = {
    root: mainRootRoute,
    home: mainHomeRoute,
    about: mainAboutRoute,
};
