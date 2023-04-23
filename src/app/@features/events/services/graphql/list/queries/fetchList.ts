import { appGql } from '@generated/gql';

export const gqlNode_EVENT_FETCH_LIST = appGql(`query FetchEventList {
  eventList {
    id
    title
    start
    startDate
    end
    endDate
    description
    published
  }
}`);
