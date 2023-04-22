import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { graphQlNodes } from "@/graphQlNodes";
import { TagContext } from "@features/tags/context/context";
import {
  Tag,
  TagReferenceInput,
} from "../../../../../../../__generated__/graphql";

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
