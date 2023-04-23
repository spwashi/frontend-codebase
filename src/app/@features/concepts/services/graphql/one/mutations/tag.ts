import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_TAG =
  appGql(`mutation TagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
  tagConcept(concept: $concept, user: $user, tags: $tags) {
    id
  }
}`);
