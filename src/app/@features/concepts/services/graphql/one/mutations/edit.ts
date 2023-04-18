// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlNode_CONCEPT_EDIT = gql`
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
  const [send, response] = useMutation(gqlNode_CONCEPT_EDIT);
  return {send, response};
}