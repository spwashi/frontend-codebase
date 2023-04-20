// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_CONCEPT_EDIT = gql`
  mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {
    editConcept(concept: $concept, user: $user) {
      id
      title
      src
      contentType
      published
    }
  }
`;
