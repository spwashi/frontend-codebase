import { gql, useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export const gqlNode_EVENT_DELETE = gql`
  mutation DeleteEvent($id: Int) {
    deleteEvent(event: { id: $id }) {
      id
    }
  }
`;
export function useDeleteEventMutation() {
  return useMutation(graphQlNodes.event.delete);
}
