import { IForumComment } from "@features/_demo/forum/types/IForumPost";
import { useParams } from "react-router";
import React, { useMemo } from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function ForumCommentPage({ comments }: { comments: IForumComment[] }) {
  const { id } = useParams();
  const comment = useMemo(
    () => comments.find((comment) => `${comment.id}` === id),
    [comments, id]
  );
  if (!comment) return null;
  return (
    <Feature name={featureIds.forum.commentRoute}>
      <article>{comment.body}</article>
    </Feature>
  );
}
