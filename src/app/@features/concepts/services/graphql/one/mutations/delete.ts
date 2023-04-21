import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_DELETE =
  appGql(`mutation DeleteConcept($concept: DeleteConceptInput!) {
  deleteConcept(concept: $concept) {
    id
  }
}`);
