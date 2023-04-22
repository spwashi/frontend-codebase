import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { ITag, ITagIdentifyingPartial } from "@junction/models/tag/models";
import { graphQlNodes } from '@/graphQlNodes';
import { TagContext } from "../context/context";

export function TagQuery({ id }: ITagIdentifyingPartial) {
  const context = useContext(TagContext) ?? ({} as any);
  const { setTag } = context;

  const { data: query } = useQuery(graphQlNodes.tag.fetch, {
    variables: { tag: { id } },
  });
  const { tag } = query ?? {};

  useEffect(() => {
    if (tag && setTag) {
      setTag(tag as ITag);
    }
  }, [tag, setTag]);

  return <></>;
}
