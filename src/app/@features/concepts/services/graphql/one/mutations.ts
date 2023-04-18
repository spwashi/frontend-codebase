import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_DELETE_CONCEPT = gql`
    mutation DeleteConcept($id: String!) {
        deleteConcept (concept: {id: $id}) {
            id
        }
    }
`
export function useDeleteConceptMutation() {
  return useMutation(gqlMutationNode_DELETE_CONCEPT);
}
export const gqlMutationNode_UNTAG_CONCEPT = gql`
    mutation DeleteConceptTag($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
        untagConcept(concept: $concept, user: $user, tags: $tags) {
            id
            concept {
                id
            }
            tag {
                id
            }
        }
    }
`;
export function useDeleteConceptTagMutation() {
    const [deleteTag] = useMutation(gqlMutationNode_UNTAG_CONCEPT)
    return deleteTag;
}