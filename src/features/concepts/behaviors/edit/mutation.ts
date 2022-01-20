// Define mutation
import {gql, useMutation} from '@apollo/client';

const EDIT_CONCEPT = gql`
    mutation EditConcept($title: String!, $src:String!, $user: UserInput!, $mimeType: String) {
        editConcept(concept: {author: $user, title: $title, src: $src, mimeType: $mimeType}) {
            title
            src
        }
    }
`;
export function useEditConceptMutation() {
    const [send, response] = useMutation(EDIT_CONCEPT);
    return {send, response};
}