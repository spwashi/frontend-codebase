import { appGql } from "../../../../../../../__generated__";

export const gqlNode_CONCEPT_TAG =
  appGql(`mutation TagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
  tagConcept(concept: $concept, user: $user, tags: $tags) {
    id
  }
}`);
