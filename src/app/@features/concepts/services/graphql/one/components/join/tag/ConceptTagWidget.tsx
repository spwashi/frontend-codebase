import React from "react";
import { ITag } from "@junction/models/tag/models";
import { IConcept } from "@junction/models/concept/models";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../../../@/graphQlNodes";

export function ConceptTagWidget({
  concept,
  tag,
}: {
  tag: ITag;
  concept: IConcept;
}) {
  const { title, domain } = tag;
  const [deleteTag] = useMutation(graphQlNodes.concept.untag);

  return (
    <div>
      <button
        onClick={() =>
          deleteTag({
            variables: {
              concept: { id: concept.id },
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
