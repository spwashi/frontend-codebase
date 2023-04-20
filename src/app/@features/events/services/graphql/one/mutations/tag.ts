// Define mutation
import { gql } from "@apollo/client";

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
