import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { graphQlNodes } from "@identities/graphql/nodes";
import { TagContext } from "@features/tags/context/context";
import { Tag, TagReferenceInput } from "@generated/graphql";

export function TagQuery({ id }: TagReferenceInput) {
  const context = useContext(TagContext) ?? ({} as any);
  const { setTag } = context;

  const { data: query } = useQuery(graphQlNodes.tag.fetch, {
    variables: { tag: { id } },
  });
  const { tag } = query ?? {};

  useEffect(() => {
    if (tag && setTag) {
      setTag(tag as Tag);
    }
  }, [tag, setTag]);

  return <></>;
}
