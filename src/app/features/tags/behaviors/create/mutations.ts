// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_TAG = gql`
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
  const [send, response] = useMutation(CREATE_TAG);
  return {send, response};
}