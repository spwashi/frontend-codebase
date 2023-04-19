import { ITag } from "@junction/models/tag/models";
import { IConcept } from "@junction/models/concept/models";
import React from "react";
import { useDeleteConceptTagMutation } from "@features/concepts/services/graphql/one";

export function ConceptTag({ concept, tag }: { tag: ITag; concept: IConcept }) {
  const { title, domain } = tag;
  const deleteTag = useDeleteConceptTagMutation();

  return (
    <div>
      <button
        onClick={() =>
          deleteTag({
            variables: {
              concept: { id: +concept.id },
              tags: [{ title, domain }],
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
