import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_FETCH_ONE =
  appGql(`query FetchConcept($concept: ConceptReferenceInput!) {
  concept(concept: $concept) {
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
