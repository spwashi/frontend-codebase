import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_FETCH_ONE =
  appGql(`query FetchConcept($id: String!) {
  concept(id: $id) {
    id
    title
    src
    contentType
    conceptTags {
      tag {
        title
        domain
      }
    }
  }
}`);
