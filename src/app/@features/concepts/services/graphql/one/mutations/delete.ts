import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_DELETE =
  appGql(`mutation DeleteConcept($id: String!) {
  deleteConcept(concept: {id: $id}) {
    id
  }
}`);
