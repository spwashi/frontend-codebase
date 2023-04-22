import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_UNTAG =
  appGql(`mutation UntagConcept($concept: ConceptReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
  untagConcept(concept: $concept, user: $user, tags: $tags) {
    id
    concept {
      id
    }
    tag {
      id
    }
  }
}`);
