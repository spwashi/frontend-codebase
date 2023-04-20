// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_CONCEPT_TAG = gql`
  mutation TagConcept(
    $concept: ConceptReferenceInput
    $user: UserReferenceInput
    $tags: [TagReferenceInput]
  ) {
    tagConcept(concept: $concept, user: $user, tags: $tags) {
      id
    }
  }
`;
