export type IForumPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
};
export type IForumComment = {
  id: number;
  title: string;
  user_id: string;
  post_id: number;
  body: string;
  parent_comment_id: number;
};
