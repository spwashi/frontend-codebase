import { gql } from "@apollo/client";

export const gqlNode_CONCEPT_FETCH_LIST = gql`
  query AllConcepts {
    conceptList {
      id
      title
      contentType
      src
      published
    }
  }
`;
