// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_SCENE_EDIT = gql`
  mutation EditScene($scene: EditSceneInput, $user: UserReferenceInput) {
    editScene(scene: $scene, user: $user) {
      id
      name
      title
      description
    }
  }
`;
