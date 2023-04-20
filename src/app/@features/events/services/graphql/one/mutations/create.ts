// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_EVENT_CREATE = gql`
  mutation CreateEvent($event: CreateEventInput, $user: UserReferenceInput) {
    createEvent(event: $event, user: $user) {
      id
      title
      description
      published
    }
  }
`;
