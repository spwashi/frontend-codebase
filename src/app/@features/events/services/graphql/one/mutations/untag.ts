import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_UNTAG_EVENT = gql`
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
  const [deleteTag] = useMutation(gqlMutationNode_UNTAG_EVENT)
  return deleteTag;
}