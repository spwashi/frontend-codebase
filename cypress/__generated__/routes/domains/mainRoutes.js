"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
const rootRoute = {
    id: "home",
    href: "/",
    title: "Home",
    path: "/*",
};
const homeRoute = {
    id: "home",
    href: "/",
    title: "Home",
    path: "/",
};
const aboutRoute = {
    id: "about",
    href: "/about",
    title: "About",
    path: "about",
};
exports.mainRoutes = {
    root: rootRoute,
    home: homeRoute,
    about: aboutRoute,
};
