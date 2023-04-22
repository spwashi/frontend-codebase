import React from "react";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "@/graphql/nodes";
import { ConceptReferenceInput, Tag } from "@generated/graphql";

type IConceptTagWidgetParams = {
  tag: Tag;
  concept: ConceptReferenceInput;
};
export function ConceptTagWidget({ concept, tag }: IConceptTagWidgetParams) {
  const [deleteTag] = useMutation(graphQlNodes.concept.untag);
  const { title, domain } = tag;
  return (
    <div>
      <button
        onClick={() =>
          deleteTag({
            variables: {
              concept: concept,
              tags: [tag],
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
