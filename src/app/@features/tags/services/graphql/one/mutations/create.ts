// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_CREATE_TAG = gql`
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
  const [send, response] = useMutation(gqlMutationNode_CREATE_TAG);
  return {send, response};
}