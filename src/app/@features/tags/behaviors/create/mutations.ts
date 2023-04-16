// Define mutation
import {gql, useMutation} from '@apollo/client';

export const CREATE_TAG_MUTATION = gql`
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
  const [send, response] = useMutation(CREATE_TAG_MUTATION);
  return {send, response};
}