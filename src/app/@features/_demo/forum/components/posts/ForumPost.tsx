import {
  IForumComment,
  IForumPost,
} from "@features/_demo/forum/types/IForumPost";
import React, { useEffect, useState } from "react";
import { forumClassNames } from "@features/_demo/forum/classNames";

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
