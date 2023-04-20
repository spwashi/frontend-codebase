import { appGql } from "../../../../../../../__generated__";

export const gqlNode_TAG_FETCH_LIST = appGql(`query FetchTagList {
  tagList {
    id
    title
    domain
  }
}`);
