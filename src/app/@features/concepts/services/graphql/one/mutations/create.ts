// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_CONCEPT_CREATE = gql`
  mutation CreateConcept(
    $concept: CreateConceptInput
    $user: UserReferenceInput
  ) {
    createConcept(concept: $concept, user: $user) {
      id
      title
      src
      published
      contentType
    }
  }
`;
