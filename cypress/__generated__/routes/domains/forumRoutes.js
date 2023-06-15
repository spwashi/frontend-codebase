"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forumRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const forumPrefix = routerCategories_1.routerCategories.forum.prefix;
const forumRootRoute = {
    href: `/${forumPrefix}/`,
    id: "forum-root",
    absolutePath: `/${forumPrefix}/*`,
};
const forumPostsRoute = {
    href: `/${forumPrefix}/posts/`,
    id: "forum-posts",
    title: "Posts",
    absolutePath: `/${forumPrefix}/posts/*`,
    relativePath: `posts/*`,
};
const forumCommentsRoute = {
    href: `/${forumPrefix}/comments/`,
    id: "forum-comments",
    title: "Comments",
    absolutePath: `/${forumPrefix}/comments/*`,
    relativePath: `comments/*`,
};
const forumSpecificPostRoute = {
    href: `/${forumPrefix}/posts/{slug}`,
    id: "forum-specific_post",
    absolutePath: `/${forumPrefix}/posts/:slug/:user`,
    relativePath: ":slug/:username",
    buildPath(relative, slug) {
        if (!slug)
            return `${relative ? this.relativePath : this.absolutePath}`;
        return (relative ? "" : "/") + `/${forumPrefix}/posts/${slug}`;
    },
};
const forumUsersRoute = {
    href: `/${forumPrefix}/users/`,
    id: "forum-users",
    title: "Users",
    absolutePath: `/${forumPrefix}/users/*`,
    relativePath: `users/*`,
};
exports.forumRoutes = {
    root: forumRootRoute,
    posts: forumPostsRoute,
    comments: forumCommentsRoute,
    specificPost: forumSpecificPostRoute,
    users: forumUsersRoute,
};
