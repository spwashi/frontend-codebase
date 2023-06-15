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
const forumCommentsRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/comments/`,
  id: "forum-comments",
  title: "Comments",
  absolutePath: `/${forumPrefix}/comments/*`,
  relativePath: `comments/*`,
};
const forumSpecificCommentRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/comments/{id}`,
  id: "forum-specific_comment",
  absolutePath: `/${forumPrefix}/comments/:id`,
  relativePath: ":id",
  buildPath(relative, id: string) {
    if (!id) return `${relative ? this.relativePath : this.absolutePath}`;
    return (relative ? "" : "/") + `/${forumPrefix}/comments/${id}`;
  },
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
  relativePath: `users/*`,
};

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  comments: forumCommentsRoute,
  specificComment: forumSpecificCommentRoute,
  specificPost: forumSpecificPostRoute,
  users: forumUsersRoute,
};
