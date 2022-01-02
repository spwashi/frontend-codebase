// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_CONCEPT = gql`
    mutation CreateConcept($title: String!, $src:String!, $user: UserInput!, $mimeType: String) {
        createConcept(concept: {author: $user, title: $title, src: $src, mimeType: $mimeType}) {
            title
            src
        }
    }
`;
export function useCreateConceptMutation() {
    const [send, response] = useMutation(CREATE_CONCEPT);
    return {send, response};
}