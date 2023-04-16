// Define mutation
import {gql, useMutation} from '@apollo/client';

export const TAG_EVENT_MUTATION = gql`
    mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {
        tagEvent(event: $event, user: $user, tags: $tags) {
            __typename
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(TAG_EVENT_MUTATION);
  return {send, response};
}