import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_DELETE_SCENE = gql`
    mutation DeleteScene($id: Int) {
        deleteScene (scene: {id: $id}) {
            id
        }
    }
`
export function useDeleteSceneMutation() {
  return useMutation(gqlMutationNode_DELETE_SCENE);
}