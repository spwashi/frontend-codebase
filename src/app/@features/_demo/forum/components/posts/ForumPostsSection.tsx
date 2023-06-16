import React, { useEffect, useState } from "react";
import {
  forumRoutes,
  getRelativeRouterPath,
  getRouterPath,
} from "@identities/routes";
import { Route, Routes } from "react-router";
import { IForumPost } from "@features/_demo/forum/types/IForumPost";
import { ForumPostList } from "@features/_demo/forum/components/posts/ForumPostList";
import { ForumPostPage } from "@features/_demo/forum/components/posts/ForumPostPage";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function ForumPostsSection() {
  const [posts, setPosts] = useState<IForumPost[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/posts").then(async (e) => {
      const fetchedPosts = await e.json();
      setPosts(fetchedPosts);
    });
  }, []);

  return (
    <Feature name={featureIds.forum.posts}>
      <ForumPostList posts={posts} />
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.post_directLink)}
          element={<ForumPostPage posts={posts} />}
        />
        <Route path="/" element={"Forum Posts Homepage"} />
      </Routes>
    </Feature>
  );
}
