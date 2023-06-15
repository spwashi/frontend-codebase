import React, { useEffect, useState } from "react";
import { IForumComment } from "@features/_demo/forum/types/IForumPost";
import { ForumCommentList } from "@features/_demo/forum/components/comments/ForumCommentList";

export function ForumCommentsSection() {
  const [comments, setComments] = useState<IForumComment[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/comments").then(async (response) =>
      setComments(await response.json())
    );
  }, []);

  return (
    <section>
      <ForumCommentList comments={comments} />
    </section>
  );
}
