import { gql } from "@apollo/client";

export const gqlNode_SCENE_FETCH_LIST = gql`
  query AllScenes {
    sceneList {
      id
      name
      title
      description
    }
  }
`;
