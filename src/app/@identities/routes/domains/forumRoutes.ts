import { routerCategories } from "../helpers/routerCategories";
import { IRouteConfig } from "@identities/routes/types/linkConfig";

const forumPrefix = routerCategories.forum.prefix;
const forumRootRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/`,
  id: "forum-root",
  absolutePath: `/${forumPrefix}/*`,
};
const forumPostsRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/posts/`,
  id: "forum-posts",
  title: "Posts",
  absolutePath: `/${forumPrefix}/posts/*`,
  relativePath: `posts/*`,
};
const forumSpecificPostRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/posts/{slug}`,
  id: "forum-specific_post",
  absolutePath: `/${forumPrefix}/posts/:slug/:user`,
  relativePath: ":slug/:username",
  buildPath(relative, slug: string) {
    if (!slug) return `${relative ? this.relativePath : this.absolutePath}`;
    return (relative ? "" : "/") + `/${forumPrefix}/posts/${slug}`;
  },
};
const forumUsersRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/users/`,
  id: "forum-users",
  title: "Users",
  absolutePath: `/${forumPrefix}/users/*`,
};

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  specificPost: forumSpecificPostRoute,
  users: forumUsersRoute,
};
