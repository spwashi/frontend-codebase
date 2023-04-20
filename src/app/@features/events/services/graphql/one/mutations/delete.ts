import { appGql } from "../../../../../../../__generated__";

export const gqlNode_EVENT_DELETE = appGql(`mutation DeleteEvent($id: String!) {
  deleteEvent(event: {id: $id}) {
    id
  }
}`);
