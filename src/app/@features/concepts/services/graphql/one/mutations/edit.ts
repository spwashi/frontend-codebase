// Define mutation

import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_EDIT = appGql(
  `mutation EditConcept($concept: EditConceptInput, $user: UserReferenceInput) {
  editConcept(concept: $concept, user: $user) {
    id
    title
    src
    contentType
    published
  }
}`
);
