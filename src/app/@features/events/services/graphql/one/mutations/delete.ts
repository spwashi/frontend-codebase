import {gql, useMutation} from '@apollo/client';

export const gqlNode_EVENT_DELETE = gql`
    mutation DeleteEvent($id: Int) {
        deleteEvent (event: {id: $id}) {
            id
        }
    }
`;
export function useDeleteEventMutation() {
  return useMutation(gqlNode_EVENT_DELETE);
}
