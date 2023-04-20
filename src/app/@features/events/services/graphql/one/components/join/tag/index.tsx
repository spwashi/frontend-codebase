import React from "react";
import { ITag } from "@junction/models/tag/models";
import { IEvent } from "@junction/models/event/models";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../../../@/graphQlNodes";

export function EventTag({ event, tag }: { tag: ITag; event: IEvent }) {
  const { title, domain } = tag;
  const [deleteTag] = useMutation(graphQlNodes.event.untag);

  return (
    <div>
      <button
        onClick={() =>
          deleteTag({
            variables: {
              event: { id: event.id },
              tags: [{ id: tag.id }],
            },
          })
        }
      >
        Remove Tag
      </button>
      <span>
        {title} {domain}
      </span>
    </div>
  );
}
