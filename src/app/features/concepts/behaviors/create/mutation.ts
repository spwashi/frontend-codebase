// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_CONCEPT = gql`
    mutation CreateConcept($concept: CreateConceptInput, $user: UserReferenceInput) {
        createConcept(concept: $concept, user: $user) {
            id
            title
            src
            published
            contentType
        }
    }
`;

export function useCreateConceptMutation() {
    const [send, response] = useMutation(CREATE_CONCEPT);
    return {send, response};
}