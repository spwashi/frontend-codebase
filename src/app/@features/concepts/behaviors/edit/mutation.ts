// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_EDIT_CONCEPT = gql`
    mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {
        editConcept(concept: $concept, user: $user) {
            id
            title
            src
            contentType
            published
        }
    }
`;
export function useEditConceptMutation() {
  const [send, response] = useMutation(gqlMutationNode_EDIT_CONCEPT);
  return {send, response};
}