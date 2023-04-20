import { gql, useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export const gqlNode_SCENE_DELETE = gql`
  mutation DeleteScene($id: Int) {
    deleteScene(scene: { id: $id }) {
      id
    }
  }
`;
export function useDeleteSceneMutation() {
  return useMutation(graphQlNodes.scene.delete);
}
