// Define mutation
import {gql, useMutation} from '@apollo/client';

const TAG_EVENT = gql`
    mutation TagEvent($event: EventReferenceInput!, $tags: [TagReferenceInput]) {
        tagEvent(event: $event, tags: $tags) {
            __typename
        }
    }
`;
export function useTagMutation() {
    const [send, response] = useMutation(TAG_EVENT);
    return {send, response};
}