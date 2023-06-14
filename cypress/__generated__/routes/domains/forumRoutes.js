"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forumRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const forumRootRoute = {
    href: `${routerCategories_1.routerCategories.forum.prefix}/`,
    id: "forum-root",
    title: "Root",
    path: "forum/*",
};
const forumPostsRoute = {
    href: `${routerCategories_1.routerCategories.forum.prefix}/posts/`,
    id: "forum-posts",
    title: "Posts",
    path: "posts/*",
};
const forumUsersRoute = {
    href: `${routerCategories_1.routerCategories.forum.prefix}/users/`,
    id: "forum-users",
    title: "Users",
    path: "users/*",
    sub: {
        root: {
            id: "forum-users-root",
            href: `${routerCategories_1.routerCategories.forum.prefix}/users/`,
            title: "User forumistration",
            path: "/",
            forumRelativePath: "../users",
        },
        all: {
            id: "forum-users-all",
            href: `${routerCategories_1.routerCategories.forum.prefix}/users/all/`,
            title: "User List of All",
            path: "all",
            forumRelativePath: "../users/all",
        },
    },
};
exports.forumRoutes = {
    root: forumRootRoute,
    posts: forumPostsRoute,
    users: forumUsersRoute,
};
