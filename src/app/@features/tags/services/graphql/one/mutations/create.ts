// Define mutation
import { gql, useMutation } from "@apollo/client";

export const gqlNode_TAG_CREATE = gql`
  mutation CreateTag($tag: CreateTagInput, $user: UserReferenceInput!) {
    createTag(tag: $tag, user: $user) {
      id
      title
      domain
      description
    }
  }
`;
export function useCreateTagMutation() {
  const [send, response] = useMutation(gqlNode_TAG_CREATE);
  return { send, response };
}
