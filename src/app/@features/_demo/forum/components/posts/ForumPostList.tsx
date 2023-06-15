import { IForumPost } from "@features/_demo/forum/types/IForumPost";
import { forumClassNames } from "@features/_demo/forum/classNames";
import { Link } from "react-router-dom";
import { forumRoutes } from "@identities/routes";
import React from "react";

interface ForumPostListParams {
  posts: IForumPost[];
}

export function ForumPostList({ posts }: ForumPostListParams) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className={forumClassNames.forumPost.listItem}>
          <section
            className={forumClassNames.forumPost.base}
            data-post-id={post.id}
            data-post-slug={post.slug}
          >
            <span className={forumClassNames.forumPost.title}>
              <Link
                to={
                  forumRoutes.specificPost.buildPath
                    ? forumRoutes.specificPost.buildPath(true, post.slug)
                    : ""
                }
              >
                {post.title}
              </Link>
            </span>
            <span className={forumClassNames.forumPost.description}>
              {post.description}
            </span>
          </section>
        </li>
      ))}
    </ul>
  );
}
