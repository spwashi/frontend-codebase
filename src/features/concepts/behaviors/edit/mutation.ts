// Define mutation
import {gql, useMutation} from '@apollo/client';

const EDIT_CONCEPT = gql`
    mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {
        editConcept(concept: $concept, user: $user) {
            id
            title
            src
        }
    }
`;
export function useEditConceptMutation() {
    const [send, response] = useMutation(EDIT_CONCEPT);
    return {send, response};
}