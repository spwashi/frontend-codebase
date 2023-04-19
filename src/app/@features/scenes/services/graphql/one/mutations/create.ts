// Define mutation
import { gql, useMutation } from "@apollo/client";

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
export function useCreateSceneMutation() {
  const [send, response] = useMutation(gqlNode_SCENE_CREATE);
  return { send, response };
}
