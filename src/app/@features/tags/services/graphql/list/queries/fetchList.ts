import { appGql } from '@generated/gql';

export const gqlNode_TAG_FETCH_LIST = appGql(`query FetchTagList {
  tagList {
    id
    title
    domain
  }
}`);
