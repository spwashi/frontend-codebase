import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_DELETE_CONCEPT = gql`
    mutation DeleteConcept($id: String!) {
        deleteConcept (concept: {id: $id}) {
            id
        }
    }
`
export function useDeleteConceptMutation() {
  return useMutation(gqlMutationNode_DELETE_CONCEPT);
}