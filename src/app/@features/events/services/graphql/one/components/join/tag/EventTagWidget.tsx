import React from "react";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../../../@/graphQlNodes";
import { Tag } from "../../../../../../../../../__generated__/graphql";
import { IEventContext } from "@features/events/context/context";

type IEventTagWidgetParams = { tag: Tag; event: IEventContext["event"] };

export function EventTagWidget({ event, tag }: IEventTagWidgetParams) {
  const [deleteTag] = useMutation(graphQlNodes.event.untag);
  if (!tag || !event) return null;
  const variables = {
    event: { id: event.id },
    tags: [{ id: tag.id }],
  };
  return (
    <div>
      <button onClick={() => deleteTag({ variables: variables })}>
        Remove Tag
      </button>
      <span>
        {tag.title} {tag.domain}
      </span>
    </div>
  );
}
