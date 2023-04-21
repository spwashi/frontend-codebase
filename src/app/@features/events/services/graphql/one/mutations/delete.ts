import { appGql } from "../../../../../../../__generated__";

export const gqlNode_EVENT_DELETE =
  appGql(`mutation DeleteEvent($event: DeleteEventInput!) {
  deleteEvent(event: $event) {
    id
  }
}`);
