// Define mutation

import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_CREATE = appGql(
  `mutation CreateConcept($concept: CreateConceptInput!, $user: UserReferenceInput!) {
  createConcept(user: $user, concept: $concept) {
    __typename
    id
    title
    src
    published
    contentType
  }
}`
);
