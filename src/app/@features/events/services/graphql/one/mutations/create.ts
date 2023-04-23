// Define mutation
import { appGql } from '@generated/gql';

export const gqlNode_EVENT_CREATE =
  appGql(`mutation CreateEvent($event: CreateEventInput!, $user: UserReferenceInput) {
  createEvent(event: $event, user: $user) {
    id
    title
    description
    published
  }
}`);
