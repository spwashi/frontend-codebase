import { IForumComment } from "@features/_demo/forum/types/IForumPost";
import React from "react";
import { Link } from "react-router-dom";
import { forumRoutes, getRelativeRouterPath } from "@identities/routes";

interface ForumCommentListParams {
  comments: IForumComment[];
}

export function ForumCommentList({ comments }: ForumCommentListParams) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Link
            to={getRelativeRouterPath(forumRoutes.specificComment, comment.id)}
          >
            [permalink comment]
          </Link>
          {comment.body}
        </li>
      ))}
    </ul>
  );
}
