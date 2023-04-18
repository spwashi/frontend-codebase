// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_TAG_CONCEPT = gql`
    mutation TagConcept($concept: ConceptReferenceInput, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        tagConcept(concept: $concept, user: $user, tags: $tags) {
            id
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(gqlMutationNode_TAG_CONCEPT);
  return {send, response};
}