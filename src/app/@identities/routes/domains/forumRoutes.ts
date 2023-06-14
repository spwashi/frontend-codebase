import { routerCategories } from "../helpers/routerCategories";

const forumRootRoute = <const>{
  href: `${routerCategories.forum.prefix}/`,
  id: "forum-root",
  title: "Root",
  path: "forum/*",
};
const forumPostsRoute = <const>{
  href: `${routerCategories.forum.prefix}/posts/`,
  id: "forum-posts",
  title: "Posts",
  path: "posts/*",
};
const forumUsersRoute = <const>{
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
};

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  users: forumUsersRoute,
};
