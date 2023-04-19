import { gql } from "@apollo/client";

export const gqlNode_SCENE_FETCH_ONE = gql`
  query Scene($id: String!) {
    scene(id: $id) {
      id
      name
      title
      description
    }
  }
`;
