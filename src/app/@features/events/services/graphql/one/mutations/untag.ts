import { appGql } from "../../../../../../../__generated__";

export const gqlNode_EVENT_UNTAG = appGql(
  `mutation UntagEvent($event: EventReferenceInput!, $user: UserReferenceInput, $tags: [TagReferenceInput]) {
  untagEvent(event: $event, user: $user, tags: $tags) {
    tag {
      id
    }
    event {
      id
    }
  }
}`
);
