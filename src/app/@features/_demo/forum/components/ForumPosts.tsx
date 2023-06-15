import React, { useEffect, useState } from "react";
import { forumClassNames } from "@features/_demo/forum/classNames";
import { Link } from "react-router-dom";
import {
  forumRoutes,
  getRelativeRouterPath,
  getRouterPath,
} from "@identities/routes";
import { Route, Routes, useParams } from "react-router";

type IForumPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
};

interface PostsListParams {
  posts: IForumPost[];
}

function ForumPostList({ posts }: PostsListParams) {
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

function ForumPost({ post }: { post: IForumPost }) {
  return (
    <article data-post-id={post.id} data-post-slug={post.slug}>
      <div className={forumClassNames.forumPost.title}>{post.title}</div>
      <div className={forumClassNames.forumPost.description}>
        {post.description}
      </div>
    </article>
  );
}
export function ForumPosts() {
  const [posts, setPosts] = useState<IForumPost[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/posts").then(async (e) => {
      const fetchedPosts = await e.json();
      setPosts(fetchedPosts);
    });
  }, []);

  return (
    <article>
      <ForumPostList posts={posts} />
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.specificPost)}
          Component={() => {
            const { slug, username } = useParams();
            const post = posts.find(
              (post) => post.slug === [slug, username].join("/")
            );
            return post ? <ForumPost post={post} /> : null;
          }}
        />
        <Route path="/" element={"home"} />
      </Routes>
    </article>
  );
}
