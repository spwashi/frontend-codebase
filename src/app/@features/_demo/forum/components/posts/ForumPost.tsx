import {
  IForumComment,
  IForumPost,
} from "@features/_demo/forum/types/IForumPost";
import React, { useEffect, useState } from "react";
import { forumClassNames } from "@features/_demo/forum/classNames";
import { Route, Routes, useParams } from "react-router";
import {
  forumRoutes,
  getRelativeRouterPath,
  getRouterPath,
} from "@identities/routes";
import { Link } from "react-router-dom";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

function PermalinkedComment({ comments }: { comments: IForumComment[] }) {
  const params = useParams();
  const comment = comments.find(
    (comment) => `${comment.id}` === `${params.id}`
  );
  if (!comment) return null;
  return (
    <Feature name={featureIds.forum.permalinkedComment}>
      <article>{comment.body}</article>
    </Feature>
  );
}
export function ForumPost({ post }: { post: IForumPost }) {
  const [comments, setComments] = useState<IForumComment[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/comments").then(async (response) =>
      setComments(await response.json())
    );
  }, []);

  return (
    <article data-post-id={post.id} data-post-slug={post.slug}>
      <div className={forumClassNames.forumPost.title}>{post.title}</div>
      <div className={forumClassNames.forumPost.description}>
        {post.description}
      </div>
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.postComment)}
          element={<PermalinkedComment comments={comments} />}
        ></Route>
      </Routes>
      <section>
        <ul>
          {comments
            .filter((comment) => comment.post_id === post.id)
            .map((comment) => (
              <li
                key={comment.id}
                className={forumClassNames.forumComment.listItem}
              >
                <article className={forumClassNames.forumComment.base}>
                  <Link
                    to={getRouterPath(forumRoutes.postComment, post, comment)}
                  >
                    [permalink comment]
                  </Link>
                  <div className={forumClassNames.forumComment.body}>
                    {comment.body}
                  </div>
                </article>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
}
