import { IForumComment } from "@features/_demo/forum/types/IForumPost";
import React from "react";

interface ForumCommentListParams {
  comments: IForumComment[];
}

export function ForumCommentList({ comments }: ForumCommentListParams) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
}
