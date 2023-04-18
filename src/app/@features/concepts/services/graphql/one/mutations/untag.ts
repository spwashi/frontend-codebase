import {gql, useMutation} from '@apollo/client';

export const gqlNode_CONCEPT_UNTAG = gql`
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
    const [deleteTag] = useMutation(gqlNode_CONCEPT_UNTAG)
    return deleteTag;
}