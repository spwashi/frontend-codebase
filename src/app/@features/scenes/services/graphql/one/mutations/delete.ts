import { gql, useMutation } from "@apollo/client";

export const gqlNode_SCENE_DELETE = gql`
  mutation DeleteScene($id: Int) {
    deleteScene(scene: { id: $id }) {
      id
    }
  }
`;
export function useDeleteSceneMutation() {
  return useMutation(gqlNode_SCENE_DELETE);
}
