// Define mutation

import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_EDIT = appGql(
  `mutation EditConcept($concept: EditConceptInput!, $user: UserReferenceInput) {
  editConcept(concept: $concept, user: $user) {
    id
    title
    src
    contentType
    published
  }
}`
);
