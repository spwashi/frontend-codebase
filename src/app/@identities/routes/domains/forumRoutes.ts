import { routerCategories } from "../helpers/routerCategories";
import { IRouteConfig } from "@identities/routes/types/linkConfig";
import {
  IForumComment,
  IForumPost,
} from "@features/_demo/forum/types/IForumPost";

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
const forumDirectCommentRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/comments/{id}`,
  id: "forum-direct_comment",
  absolutePath: `/${forumPrefix}/comments/:id`,
  relativePath: ":id",
  buildPath(relative, id: string) {
    if (!id) return `${relative ? this.relativePath : this.absolutePath}`;
    return (relative ? "" : "/") + `/${forumPrefix}/comments/${id}`;
  },
};
const forumPostCommentRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/posts/{slug}/comments/{id}`,
  id: "forum-post_comment",
  absolutePath: `/${forumPrefix}/posts/:slug/:username/comments/:id`,
  relativePath: "comments/:id",
  buildPath(relative, post: IForumPost, comment: IForumComment) {
    if (!post || !comment) {
      return `${relative ? this.relativePath : this.absolutePath}`;
    }

    return (
      (relative ? "" : "/") +
      `${forumPrefix}/posts/${post.slug}/comments/${comment.id}`
    );
  },
};
const forumDirectPostRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/posts/{slug}`,
  id: "forum-direct_post",
  absolutePath: `/${forumPrefix}/posts/:slug/:username/*`,
  relativePath: ":slug/:username/*",
  buildPath(relative, slug: string) {
    if (!slug) return `${relative ? this.relativePath : this.absolutePath}`;
    return (relative ? "" : "/") + `${forumPrefix}/posts/${slug}`;
  },
};
const forumUsersRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/users/`,
  id: "forum-users",
  title: "Users",
  absolutePath: `/${forumPrefix}/users/*`,
  relativePath: `users/*`,
};
const forumUserProfileRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/users/{username}`,
  id: "forum-user-profile",
  absolutePath: `/${forumPrefix}/users/:username`,
  relativePath: `:username`,
  buildPath(relative, username: string) {
    if (!username) return `${relative ? this.relativePath : this.absolutePath}`;
    return (relative ? "" : "/") + `${forumPrefix}/users/${username}`;
  },
};
const forumLoginRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/login/`,
  id: "forum-login",
  title: "Log In",
  absolutePath: `/${forumPrefix}/login/*`,
  relativePath: `login/*`,
};
const forumLogoutRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/logout/`,
  id: "forum-logout",
  title: "Log Out",
  absolutePath: `/${forumPrefix}/logout/*`,
  relativePath: `logout/*`,
};
const forumSessionStatusRoute: IRouteConfig = <const>{
  href: `/${forumPrefix}/status/`,
  id: "forum-session-status",
  title: "Status",
  absolutePath: `/${forumPrefix}/status/*`,
  relativePath: `status/*`,
};

export const forumRoutes = <const>{
  root: forumRootRoute,
  posts: forumPostsRoute,
  postComment: forumPostCommentRoute,
  comments: forumCommentsRoute,
  comment_directLink: forumDirectCommentRoute,
  post_directLink: forumDirectPostRoute,
  users: forumUsersRoute,
  userProfile: forumUserProfileRoute,
  login: forumLoginRoute,
  logout: forumLogoutRoute,
  sessionStatus: forumSessionStatusRoute,
};
