import { routerCategories } from "../helpers/routerCategories";
import { IRouteConfig } from "@identities/routes/types/linkConfig";

const forumRootRoute: IRouteConfig = <const>{
  href: `${routerCategories.forum.prefix}/`,
  id: "forum-root",
  title: "Root",
  path: "forum/*",
};
const forumPostsRoute: IRouteConfig = <const>{
  href: `${routerCategories.forum.prefix}/posts/`,
  id: "forum-posts",
  title: "Posts",
  path: "posts/*",
};
const forumUsersRoute: IRouteConfig = <const>{
  href: `${routerCategories.forum.prefix}/users/`,
  id: "forum-users",
  title: "Users",
  path: "users/*",
};

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  users: forumUsersRoute,
};
