// Define mutation
import {gql, useMutation} from '@apollo/client';

const EDIT_CONCEPT = gql`
    mutation EditConcept($id: Int!, $title: String!, $src:String!, $mimeType: String) {
        editConcept(concept: {id: $id, title: $title, src: $src, mimeType: $mimeType}) {
            title
            src
        }
    }
`;
export function useEditConceptMutation() {
    const [send, response] = useMutation(EDIT_CONCEPT);
    return {send, response};
}