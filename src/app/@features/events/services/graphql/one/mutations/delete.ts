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
