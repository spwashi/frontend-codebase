// Define mutation
import { gql } from "@apollo/client";

export const gqlNode_TAG_CREATE = gql`
  mutation CreateTag($tag: CreateTagInput, $user: UserReferenceInput!) {
    createTag(tag: $tag, user: $user) {
      id
      title
      domain
      description
    }
  }
`;
