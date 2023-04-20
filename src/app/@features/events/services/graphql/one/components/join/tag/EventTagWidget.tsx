import React from "react";
import { ITag } from "@junction/models/tag/models";
import { IEvent } from "@junction/models/event/models";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../../../@/graphQlNodes";

type IEventTagWidgetParams = { tag: ITag; event: IEvent };

export function EventTagWidget({ event, tag }: IEventTagWidgetParams) {
  const { title, domain } = tag;
  const [deleteTag] = useMutation(graphQlNodes.event.untag);
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
        {title} {domain}
      </span>
    </div>
  );
}
