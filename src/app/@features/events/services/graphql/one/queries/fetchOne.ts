import { gql } from "@apollo/client";

export const gqlNode_EVENT_FETCH_ONE = gql`
  query OneEvent($id: Int!) {
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
  }
`;