// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_TAG_EVENT = gql`
    mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {
        tagEvent(event: $event, user: $user, tags: $tags) {
            __typename
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(gqlMutationNode_TAG_EVENT);
  return {send, response};
}