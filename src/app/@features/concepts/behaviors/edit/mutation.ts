// Define mutation
import {gql, useMutation} from '@apollo/client';

export const EDIT_CONCEPT_MUTATION = gql`
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
  const [send, response] = useMutation(EDIT_CONCEPT_MUTATION);
  return {send, response};
}