// Define mutation
import {gql, useMutation} from '@apollo/client';

const TAG_CONCEPT = gql`
    mutation TagConcept($concept: ConceptReferenceInput, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        tagConcept(concept: $concept, user: $user, tags: $tags) {
            id
            title
            src
        }
    }
`;
export function useTagMutation() {
  const [send, response] = useMutation(TAG_CONCEPT);
  return {send, response};
}