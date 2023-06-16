import React, { useEffect, useState } from "react";
import { IForumComment } from "@features/_demo/forum/types/IForumPost";
import { ForumCommentList } from "@features/_demo/forum/components/comments/ForumCommentList";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import { Route, Routes } from "react-router";
import { forumRoutes, getRelativeRouterPath } from "@identities/routes";
import { ForumCommentPage } from "@features/_demo/forum/components/comments/ForumCommentPage";

export function ForumCommentsSection() {
  const [comments, setComments] = useState<IForumComment[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/comments").then(async (response) =>
      setComments(await response.json())
    );
  }, []);

  return (
    <Feature name={featureIds.forum.comments}>
      <ForumCommentList comments={comments} />
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.comment_directLink)}
          element={<ForumCommentPage comments={comments} />}
        ></Route>
      </Routes>
    </Feature>
  );
}
