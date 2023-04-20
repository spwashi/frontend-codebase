import { appGql } from "../../../../../../../__generated__";

export const gqlNode_TAG_FETCH_ONE =
  appGql(`query FetchTag($tag: TagReferenceInput!) {
  tag(tag: $tag) {
    id
    domain
    title
    description
  }
}`);
