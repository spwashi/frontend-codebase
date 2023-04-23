import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_DELETE =
  appGql(`mutation DeleteConcept($concept: DeleteConceptInput!) {
  deleteConcept(concept: $concept) {
    id
  }
}`);
