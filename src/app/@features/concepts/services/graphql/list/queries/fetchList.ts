import { appGql } from '@generated/gql';

export const gqlNode_CONCEPT_FETCH_LIST = appGql(`query FetchConceptList {
  conceptList {
    id
    title
    contentType
    src
    published
  }
}`);
