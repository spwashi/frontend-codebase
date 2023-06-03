"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const adminAllRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/all`,
    id: "admin-all",
    title: "All",
    path: "all/*",
};
const adminAssetsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/assets`,
    id: "admin-assets",
    title: "Assets",
    path: "assets/*",
    sub: {
        root: {
            id: "admin-assets-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/assets/admin`,
            title: "Asset Administration",
            path: "/",
        },
        all: {
            id: "admin-assets-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/assets/`,
            title: "Asset List of All",
            path: "all",
        },
    },
};
const adminConceptsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/concepts`,
    id: "admin-concepts",
    title: "Concepts",
    path: "concepts/*",
    sub: {
        root: {
            id: "admin-concepts-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/concepts/admin`,
            title: "Concept Administration",
            path: "/",
        },
        all: {
            id: "admin-concepts-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/concepts/`,
            title: "Concept List of All",
            path: "all",
        },
    },
};
const adminEventsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/events`,
    id: "admin-events",
    title: "Events",
    path: "events/*",
    sub: {
        root: {
            id: "admin-events-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/events/admin`,
            title: "Event Administration",
            path: "/",
        },
        all: {
            id: "admin-events-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/events/`,
            title: "Event List of All",
            path: "all",
        },
    },
};
const adminProjectsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/projects`,
    id: "admin-projects",
    title: "Projects",
    path: "projects/*",
};
const adminScenesRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/scenes`,
    id: "admin-scenes",
    title: "Scenes",
    path: "scenes/*",
    sub: {
        root: {
            id: "admin-scenes-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/scenes/admin`,
            title: "Scene Administration",
            path: "/",
        },
        all: {
            id: "admin-scenes-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/scenes/`,
            title: "Scene List of All",
            path: "all",
        },
    },
};
const adminTagsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/tags`,
    id: "admin-tags",
    title: "Tags",
    path: "tags/*",
    sub: {
        root: {
            id: "admin-tags-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/tags/admin`,
            title: "Tag Administration",
            path: "/",
        },
        all: {
            id: "admin-tags-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/tags/`,
            title: "Tag List of All",
            path: "all",
        },
    },
};
const adminUsersRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/users`,
    id: "admin-users",
    title: "Users",
    path: "users/*",
    sub: {
        root: {
            id: "admin-users-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/users/admin`,
            title: "User Administration",
            path: "/",
        },
    },
};
exports.adminRoutes = {
    all: adminAllRoute,
    assets: adminAssetsRoute,
    concepts: adminConceptsRoute,
    events: adminEventsRoute,
    projects: adminProjectsRoute,
    scenes: adminScenesRoute,
    tags: adminTagsRoute,
    users: adminUsersRoute,
};
