// Define mutation
import {gql, useMutation} from '@apollo/client';

export const CREATE_CONCEPT_MUTATION = gql`
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
  const [send, response] = useMutation(CREATE_CONCEPT_MUTATION);
  return {send, response};
}