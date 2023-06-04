"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const adminRootRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/`,
    id: "admin-root",
    title: "Root",
    path: "admin/*",
};
const adminAllRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/all/`,
    id: "admin-all",
    title: "All",
    path: "all/*",
};
const adminAssetsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/assets/`,
    id: "admin-assets",
    title: "Assets",
    path: "assets/*",
    sub: {
        root: {
            id: "admin-assets-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/assets/`,
            title: "Asset Administration",
            path: "/",
            adminRelativePath: "../assets",
        },
        all: {
            id: "admin-assets-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/assets/all/`,
            title: "Asset List of All",
            path: "all",
            adminRelativePath: "../assets/all",
        },
    },
};
const adminConceptsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/concepts/`,
    id: "admin-concepts",
    title: "Concepts",
    path: "concepts/*",
    sub: {
        root: {
            id: "admin-concepts-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/concepts/`,
            title: "Concept Administration",
            path: "/",
            adminRelativePath: "../concepts",
        },
        all: {
            id: "admin-concepts-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/concepts/all/`,
            title: "Concept List of All",
            path: "all",
            adminRelativePath: "../concepts/all",
        },
    },
};
const adminEventsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/events/`,
    id: "admin-events",
    title: "Events",
    path: "events/*",
    sub: {
        root: {
            id: "admin-events-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/events/`,
            title: "Event Administration",
            path: "/",
            adminRelativePath: "../events",
        },
        all: {
            id: "admin-events-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/events/all/`,
            title: "Event List of All",
            path: "all",
            adminRelativePath: "../events/all",
        },
    },
};
const adminProjectsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/projects/`,
    id: "admin-projects",
    title: "Projects",
    path: "projects/*",
    sub: {
        root: {
            id: "admin-projects-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/projects/`,
            title: "Project Administration",
            path: "/",
            adminRelativePath: "../projects",
        },
        all: {
            id: "admin-projects-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/projects/all/`,
            title: "Project List of All",
            path: "all",
            adminRelativePath: "../projects/all",
        },
    },
};
const adminScenesRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/scenes/`,
    id: "admin-scenes",
    title: "Scenes",
    path: "scenes/*",
    sub: {
        root: {
            id: "admin-scenes-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/scenes/`,
            title: "Scene Administration",
            path: "/",
            adminRelativePath: "../scenes",
        },
        all: {
            id: "admin-scenes-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/scenes/all/`,
            title: "Scene List of All",
            path: "all",
            adminRelativePath: "../scenes/all",
        },
    },
};
const adminTagsRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/tags/`,
    id: "admin-tags",
    title: "Tags",
    path: "tags/*",
    sub: {
        root: {
            id: "admin-tags-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/tags/`,
            title: "Tag Administration",
            path: "/",
            adminRelativePath: "../tags",
        },
        all: {
            id: "admin-tags-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/tags/all/`,
            title: "Tag List of All",
            path: "all",
            adminRelativePath: "../tags/all",
        },
    },
};
const adminUsersRoute = {
    href: `${routerCategories_1.routerCategories.admin.prefix}/users/`,
    id: "admin-users",
    title: "Users",
    path: "users/*",
    sub: {
        root: {
            id: "admin-users-root",
            href: `${routerCategories_1.routerCategories.admin.prefix}/users/`,
            title: "User Administration",
            path: "/",
            adminRelativePath: "../users",
        },
        all: {
            id: "admin-users-all",
            href: `${routerCategories_1.routerCategories.admin.prefix}/users/all/`,
            title: "User List of All",
            path: "all",
            adminRelativePath: "../users/all",
        },
    },
};
exports.adminRoutes = {
    all: adminAllRoute,
    root: adminRootRoute,
    assets: adminAssetsRoute,
    concepts: adminConceptsRoute,
    events: adminEventsRoute,
    projects: adminProjectsRoute,
    scenes: adminScenesRoute,
    tags: adminTagsRoute,
    users: adminUsersRoute,
};
