// Define mutation
import {gql, useMutation} from '@apollo/client';

export const TAG_CONCEPT_MUTATION = gql`
    mutation TagConcept($concept: ConceptReferenceInput, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        tagConcept(concept: $concept, user: $user, tags: $tags) {
            id
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(TAG_CONCEPT_MUTATION);
  return {send, response};
}