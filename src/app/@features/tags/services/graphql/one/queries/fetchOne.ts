import { gql } from "@apollo/client";

export const gqlNode_TAG_FETCH_ONE = gql`
  query OneTag($id: Int!) {
    tag(id: $id) {
      id
      domain
      title
      description
    }
  }
`;
