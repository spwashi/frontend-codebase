import { appGql } from "../../../../../../../__generated__";

export const gqlNode_TAG_DELETE =
  appGql(`mutation DeleteTag($user: UserReferenceInput!, $tag: DeleteTagInput!) {
  deleteTag(tag: $tag, user: $user) {
    title
    domain
  }
}`);
