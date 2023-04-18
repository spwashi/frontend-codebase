import {gql, useMutation} from '@apollo/client';

export const gqlNode_EVENT_UNTAG = gql`
    mutation DeleteEventTag($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        untagEvent(event: $event, user: $user, tags: $tags) {
            tag {
                id
            }
            event {
                id
            }
        }
    }
`;
export function useDeleteEventTagMutation() {
  const [deleteTag] = useMutation(gqlNode_EVENT_UNTAG)
  return deleteTag;
}