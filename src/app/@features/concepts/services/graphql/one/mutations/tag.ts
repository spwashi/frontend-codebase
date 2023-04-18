// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlNode_CONCEPT_TAG = gql`
    mutation TagConcept($concept: ConceptReferenceInput, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        tagConcept(concept: $concept, user: $user, tags: $tags) {
            id
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(gqlNode_CONCEPT_TAG);
  return {send, response};
}