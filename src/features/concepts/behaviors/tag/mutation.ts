// Define mutation
import {gql, useMutation} from '@apollo/client';

const TAG_CONCEPT = gql`
    mutation CreateConcept($title: String!, $user: CreateUserInput!, $tags: [TagReferenceInput]) {
        tagConcept(concept: {user: $user, title: $title}, tags: $tags) {
            title
            src
        }
    }
`;
export function useTagMutation() {
    const [send, response] = useMutation(TAG_CONCEPT);
    return {send, response};
}