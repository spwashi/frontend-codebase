import { gql } from "@apollo/client";

export const gqlNode_PROJECT_FETCH_ONE = gql`
  query Project($id: Int!) {
    project(id: $id) {
      id
      title
      domain
      description
    }
  }
`;
