import { appGql } from "../../../../../../../__generated__";

export const gqlNode_EVENT_FETCH_ONE = appGql(`query FetchEvent($id: String!) {
  event(id: $id) {
    id
    title
    start
    startDate
    end
    endDate
    description
    eventTags {
      event {
        id
      }
      tag {
        id
        title
        domain
      }
    }
  }
}`);
