// Define mutation
import { appGql } from "../../../../../../../__generated__";

export const gqlNode_EVENT_TAG =
  appGql(`mutation TagEvent($event: EventReferenceInput!, $user: UserReferenceInput!, $tags: [TagReferenceInput]) {
  tagEvent(event: $event, user: $user, tags: $tags) {
    __typename
  }
}`);
