import { gql, useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export const gqlNode_CONCEPT_UNTAG = gql`
  mutation DeleteConceptTag(
    $concept: ConceptReferenceInput!
    $user: UserReferenceInput
    $tags: [TagReferenceInput]
  ) {
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
  const [deleteTag] = useMutation(graphQlNodes.concept.untag);
  return deleteTag;
}
