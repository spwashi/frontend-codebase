import { IForumPost } from "@features/_demo/forum/types/IForumPost";
import { useParams } from "react-router";
import { ForumPost } from "@features/_demo/forum/components/posts/ForumPost";
import React from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function ForumPostPage({ posts }: { posts: IForumPost[] }) {
  const { slug, username } = useParams();
  const post = posts.find((post) => post.slug === [slug, username].join("/"));
  return (
    <Feature name={featureIds.forum.postPage}>
      {post ? <ForumPost post={post} /> : null}
    </Feature>
  );
}
