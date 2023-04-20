// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_SCENE_CREATE = gql`
  mutation CreateScene($title: String!, $name: String!, $description: String) {
    createScene(
      scene: { title: $title, name: $name, description: $description }
    ) {
      id
      name
      title
      description
    }
  }
`;
