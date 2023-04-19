import { gql } from "@apollo/client";

export const gqlNode_TAG_FETCH_LIST = gql`
  query TagList {
    tagList {
      id
      title
      domain
    }
  }
`;
