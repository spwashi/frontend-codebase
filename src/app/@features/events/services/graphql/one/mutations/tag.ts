// Define mutation
import { gql, useMutation } from "@apollo/client";

export const gqlNode_EVENT_TAG = gql`
  mutation TagEvent(
    $event: EventReferenceInput!
    $user: UserReferenceInput!
    $tags: [TagReferenceInput]
  ) {
    tagEvent(event: $event, user: $user, tags: $tags) {
      __typename
    }
  }
`;
export function useTagMutation() {
  const [send, response] = useMutation(gqlNode_EVENT_TAG);
  return { send, response };
}
