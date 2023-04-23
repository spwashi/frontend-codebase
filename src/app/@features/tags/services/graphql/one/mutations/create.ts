// Define mutation
import { appGql } from '@generated/gql';

export const gqlNode_TAG_CREATE =
  appGql(`mutation CreateTag($tag: CreateTagInput!, $user: UserReferenceInput!) {
  createTag(tag: $tag, user: $user) {
    id
    title
    domain
    description
  }
}`);
