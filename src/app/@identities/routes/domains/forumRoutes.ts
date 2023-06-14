import { routerCategories } from "../helpers/routerCategories";
import { IRouteConfig } from "@identities/routes/types/linkConfig";

const forumRootRoute = (<const>{
  href: `${routerCategories.forum.prefix}/`,
  id: "forum-root",
  title: "Root",
  path: "forum/*",
}) as IRouteConfig;
const forumPostsRoute = (<const>{
  href: `${routerCategories.forum.prefix}/posts/`,
  id: "forum-posts",
  title: "Posts",
  path: "posts/*",
}) as IRouteConfig;
const forumUsersRoute = (<const>{
  href: `${routerCategories.forum.prefix}/users/`,
  id: "forum-users",
  title: "Users",
  path: "users/*",
  sub: {
    root: {
      id: "forum-users-root",
      href: `${routerCategories.forum.prefix}/users/`,
      title: "User forumistration",
      path: "/",
      forumRelativePath: "../users",
    },
    all: {
      id: "forum-users-all",
      href: `${routerCategories.forum.prefix}/users/all/`,
      title: "User List of All",
      path: "all",
      forumRelativePath: "../users/all",
    },
  },
}) as IRouteConfig;

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  users: forumUsersRoute,
};
