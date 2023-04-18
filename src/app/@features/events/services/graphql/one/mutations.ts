import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_DELETE_EVENT = gql`
    mutation DeleteEvent($id: Int) {
        deleteEvent (event: {id: $id}) {
            id
        }
    }
`;
export function useDeleteEventMutation() {
  return useMutation(gqlMutationNode_DELETE_EVENT);
}
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